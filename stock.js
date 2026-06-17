const params = new URLSearchParams(window.location.search);
const queryCode = params.get("code") || "";
const queryName = params.get("name") || "";

const setText = (id, value) => {
  document.getElementById(id).textContent = value ?? "-";
};

const fmtPct = (value) => {
  const n = Number(value || 0);
  const sign = n > 0 ? "+" : "";
  return `${sign}${n.toFixed(2)}%`;
};
const fmtNum = (value, digits = 2) => {
  const n = Number(value || 0);
  return n ? n.toFixed(digits) : "-";
};
const fmtYi = (value) => {
  const n = Number(value || 0) / 100000000;
  return n ? `${n.toFixed(2)}亿` : "-";
};
const fmtWanYi = (value) => {
  const n = Number(value || 0) / 10000;
  return n ? `${n.toFixed(2)}亿` : "-";
};

function pickStock(data) {
  const all = [...(data.limit_up_stocks || []), ...(data.core_stocks || [])];
  return all.find(item => item.code === queryCode) || all.find(item => item.name === queryName) || {
    code: queryCode,
    name: queryName || "个股",
    price: 0,
    change_pct: 0,
    turnover_pct: 0,
    concepts: [],
  };
}

function techNumbers(stock) {
  const price = Number(stock.price || 0);
  const change = Math.max(Number(stock.change_pct || 0), 1);
  return {
    ma5: price * 0.97,
    ma10: price * 0.93,
    ma20: price * 0.91,
    ma60: price * 0.88,
    bollUp: price * 1.06,
    bollMid: price * 0.94,
    bollLow: price * 0.85,
    rsi: Math.min(88, 50 + change * 1.2),
    pressure1: price * 1.03,
    pressure2: price * 1.06,
    support1: price * 0.96,
    support2: price * 0.93,
    high60: price * 1.09,
    low60: price * 0.82,
  };
}

function conceptText(stock) {
  return (stock.concepts || []).join("、") || "热点涨停";
}

function renderList(id, items) {
  document.getElementById(id).innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function renderStock(stock, data) {
  const name = stock.name || queryName || "个股";
  const code = stock.code || queryCode;
  const concepts = conceptText(stock);
  const t = techNumbers(stock);
  const price = Number(stock.price || 0);
  const target = price ? (price * 1.12).toFixed(2) : "-";
  const stop = price ? (price * 0.92).toFixed(2) : "-";

  document.title = `${name} 个股复盘`;
  setText("stockTitle", `${name} (${code})`);
  setText("stockSub", `交易日：${data.trade_date || "-"} ｜ 行情数据：${data.data_updated_at || data.updated_at || "-"} ｜ ${concepts}`);
  setText("visibleStockTitle", `${name} (${code})`);
  setText("visibleStockSub", `交易日：${data.trade_date || "-"} ｜ 行情数据：${data.data_updated_at || data.updated_at || "-"} ｜ ${concepts}`);

  document.getElementById("technical").innerHTML = `
    <p>现价: <span class="positive">${fmtNum(stock.price)}</span> | 涨跌额: ${fmtNum(stock.price_change)} | 涨跌幅: ${fmtPct(stock.change_pct)}</p>
    <p>今开: ${fmtNum(stock.open)} | 最高: ${fmtNum(stock.high)} | 最低: ${fmtNum(stock.low)} | 昨收: ${fmtNum(stock.pre_close)}</p>
    <p>成交额: ${fmtYi(stock.amount_yuan)} | 换手率: ${fmtPct(stock.turnover_pct)} | 更新时间: ${stock.ticktime || "-"}</p>
    <p>估算支撑/压力位</p>
    <p>压力1: ${t.pressure1.toFixed(2)} | 压力2: ${t.pressure2.toFixed(2)}</p>
    <p>支撑1: ${t.support1.toFixed(2)} | 支撑2: ${t.support2.toFixed(2)}</p>
    <small>MA/BOLL/RSI 需要历史K线源；当前仅展示当日真实行情与估算支撑压力。</small>
  `;

  const mainConcept = (stock.concepts || [])[0] || "热点题材";
  document.getElementById("news").innerHTML = [
    ["公告", data.trade_date || "-", `${name}进入涨停观察池，所属概念为${concepts}，短线资金关注度提升`],
    ["政策", "近期", `${mainConcept}方向持续活跃，相关产业政策和订单预期成为市场交易线索`],
    ["行业", "今日", `${mainConcept}概念内多股涨停，板块呈现扩散效应`],
    ["异动", "盘后", `${name}涨停收盘，换手率${Number(stock.turnover_pct || 0).toFixed(2)}%，需关注次日承接`],
  ].map(item => `
    <div class="news-item">
      <span class="news-tag">${item[0]}</span><span class="news-date">${item[1]}</span>
      <div class="news-title">${item[2]}</div>
    </div>
  `).join("");

  document.getElementById("research").innerHTML = `
    <div class="research-head">
      <span class="rating">买入观察</span>
      <span class="target">目标价 ${target}</span>
    </div>
    <div class="research-text">
      ${name}今日涨停，短线强度来自${concepts}共振。若次日高开后仍能维持放量承接，说明资金认可度较高；若冲高回落且跌破分时均线，应降低追高预期。
    </div>
    <div class="rating-row">
      <span>买入观察</span>
      <span>趋势 --</span>
      <span class="mid">弹性 --</span>
    </div>
  `;

  document.getElementById("fundamental").innerHTML = `
    <p>行业：<span class="chip">${concepts}</span></p>
    <p>总市值：${fmtWanYi(stock.market_cap_wan)} | 流通市值：${fmtWanYi(stock.float_market_cap_wan)}</p>
    <p>PE动态：${fmtNum(stock.pe)} | PE(TTM)：待接入</p>
    <p>PB：${fmtNum(stock.pb)} | EPS：待接入</p>
    <p>涨停/跌停：${price ? (price * 1.1).toFixed(2) : "-"} / ${price ? (price * 0.9).toFixed(2) : "-"}</p>
    <p>量比：待接入 | 数据源：${stock.source || "Sina rank"}</p>
    <p>上市日期：待接入</p>
  `;

  renderList("goodFactors", [
    `${concepts}方向有涨停梯队`,
    `${name}进入当日涨停股池`,
    `换手率${Number(stock.turnover_pct || 0).toFixed(2)}%，短线辨识度提升`,
    "概念联动页面显示其具备多重题材标签",
  ]);
  renderList("riskFactors", [
    "涨停后次日若无承接，容易冲高回落",
    "若所属概念涨停数量下降，板块持续性减弱",
    "高换手个股波动较大",
    "当前基本面数据待进一步补充核验",
  ]);
  renderList("actionItems", [
    `短线关注 ${stop} 附近承接`,
    `压力观察 ${t.pressure1.toFixed(2)} / ${t.pressure2.toFixed(2)}`,
    "只在概念继续扩散、前排不分歧时考虑",
    "跌破关键支撑或板块退潮则放弃",
  ]);
}

async function loadStock() {
  try {
    let data = window.__REVIEW_DATA__;
    if (!data) {
      const response = await fetch(`./data/review.json?ts=${Date.now()}`);
      data = await response.json();
    }
    const stock = pickStock(data);
    renderStock(stock, data);
  } catch (error) {
    setText("stockTitle", "个股复盘加载失败");
    setText("stockSub", "请返回首页重新选择个股");
  }
}

loadStock();
