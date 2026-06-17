const yuanYi = (value) => `${Number(value || 0).toFixed(2)}亿`;
const pct = (value) => {
  const n = Number(value || 0);
  const cls = n > 0 ? "up" : n < 0 ? "down" : "flat";
  const sign = n > 0 ? "+" : "";
  return `<span class="${cls}">${sign}${n.toFixed(2)}%</span>`;
};
const text = (id, value) => {
  document.getElementById(id).textContent = value ?? "-";
};
const rows = (id, html) => {
  document.getElementById(id).innerHTML = html || `<tr><td colspan="6">暂无数据</td></tr>`;
};
const chips = (items) => (items || []).map(item => `<span class="chip">${item}</span>`).join("");

let reviewData = null;

function renderLimitStocks(stocks, label = "全部涨停股") {
  text("selectedConcept", label);
  rows("limitUpStocks", (stocks || []).slice(0, 80).map(item => `
    <tr>
      <td>${item.code || "-"}</td>
      <td><a class="stock-link" href="./stock.html?code=${encodeURIComponent(item.code || "")}&name=${encodeURIComponent(item.name || "")}">${item.name || "-"}</a></td>
      <td>${pct(item.change_pct)}</td>
      <td class="reason-cell">${item.limit_reason || "-"}</td>
      <td class="concept-cell">${chips(item.new_concepts && item.new_concepts.length ? item.new_concepts : ["无新增"])}</td>
      <td class="concept-cell">${chips(item.concepts)}</td>
    </tr>
  `).join(""));
}

function selectConcept(index) {
  const boards = reviewData?.concept_boards || [];
  const board = boards[index];
  if (!board) return;

  document.querySelectorAll(".concept-card").forEach((card, cardIndex) => {
    card.classList.toggle("active", cardIndex === index);
  });
  renderLimitStocks(board.stocks || [], `${board.concept}｜${board.limit_up_count}只涨停`);
}

async function loadReview() {
  try {
    let data = null;
    if (window.location.protocol === "file:") {
      data = window.__REVIEW_DATA__;
    } else {
      const response = await fetch(`./data/review.json?ts=${Date.now()}`);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      data = await response.json();
    }
    if (!data) {
      data = window.__REVIEW_DATA__;
    }
    reviewData = data;

    if (data.status !== "ok") {
      text("updated", `刷新失败：${data.error || "暂无行情数据"}`);
      text("conclusion", "自动刷新暂未成功，请稍后查看或手动运行刷新脚本。");
      return;
    }

    const market = data.market || {};
    const source = data.source_status || {};
    text("updated", `行情数据：${data.data_updated_at || data.updated_at} ｜ 最近检查：${data.last_checked_at || data.updated_at} ｜ 交易日：${data.trade_date}`);
    text("conclusion", market.conclusion);
    text("state", market.state);
    text("turnover", yuanYi(market.turnover_yi));
    text("breadth", `${market.up_count} / ${market.down_count}`);
    text("limits", `${market.limit_up} / ${market.limit_down}`);
    text("score", market.emotion_score);
    text("position", market.suggested_position);
    text(
      "sourceStatus",
      `数据源：指数=${source.indices || "未知"}；涨停股=${source.stocks || "未知"}；概念=${source.concepts || "本地规则"}；数据状态=${source.freshness || "unknown"}；全市场涨跌家数/资金流=${source.full_market_breadth === "unavailable_in_fast_fallback" ? "当前不可用" : "可用"}。自动生成内容仅用于复盘观察，不构成投资建议。`
    );

    rows("indices", (data.indices || []).map(item => `
      <tr>
        <td>${item.name || item.code}</td>
        <td>${Number(item.price || 0).toFixed(2)}</td>
        <td>${pct(item.change_pct)}</td>
        <td>${yuanYi((item.amount_yuan || 0) / 100000000)}</td>
      </tr>
    `).join(""));

    const conceptBoards = data.concept_boards || [];
    document.getElementById("conceptBoards").innerHTML = conceptBoards.length
      ? conceptBoards.map((item, index) => `
        <button class="concept-card" type="button" data-concept-index="${index}">
          <div class="concept-rank">${index + 1}</div>
          <div class="concept-body">
            <div class="concept-title">
              <strong>${item.concept}</strong>
              <span>${item.limit_up_count}只涨停</span>
            </div>
            <div class="concept-meta">
              领涨：${item.leader || "-"}
            </div>
            <div class="stock-tags">
              ${(item.stocks || []).map(stock => `
                <span class="stock-tag">${stock.name}<em>${Number(stock.change_pct || 0).toFixed(2)}%</em></span>
              `).join("")}
            </div>
          </div>
        </button>
      `).join("")
      : `<div class="empty">暂无涨停概念数据</div>`;

    document.querySelectorAll(".concept-card").forEach(card => {
      card.addEventListener("click", () => selectConcept(Number(card.dataset.conceptIndex)));
    });
    if (conceptBoards.length) {
      selectConcept(0);
    } else {
      renderLimitStocks(data.limit_up_stocks || []);
    }

    renderHotBoardTracking(data.hot_board_tracking || []);
    renderHotStockTracking(data.hot_stock_tracking || []);

    const plan = data.plan || {};
    text("watchThemes", (plan.watch_themes || []).join("、") || "-");
    text("trigger", plan.trigger);
    text("invalid", plan.invalid);
    text("risk", plan.risk);
  } catch (error) {
    text("updated", "未找到数据文件");
    text("conclusion", "请先运行 refresh_a_share_review.py 生成 data/review.json。");
  }
}

loadReview();

function renderHotBoardTracking(items) {
  document.getElementById("hotBoardTracking").innerHTML = items.length
    ? items.map(item => `
      <article class="tracking-card ${item.highlight ? "highlight" : ""}">
        <div class="tracking-title">
          <strong>${item.concept}</strong>
          <span>${item.trend}</span>
        </div>
        <div class="tracking-meta">最新涨停 ${item.latest_count} 只 ｜ 活跃 ${item.active_days} 日</div>
        <div class="tracking-days">
          ${(item.history || []).map(day => `
            <div>
              <b>${day.date || "-"}</b>
              <em>${day.count || 0}只</em>
              <small>${(day.stocks || []).slice(0, 5).join("、") || "-"}</small>
            </div>
          `).join("")}
        </div>
      </article>
    `).join("")
    : `<div class="empty">暂无连续板块跟踪数据</div>`;
}

function renderHotStockTracking(items) {
  rows("hotStockTracking", (items || []).slice(0, 16).map(item => `
    <tr class="${item.highlight ? "hot-stock-highlight" : ""}">
      <td>
        <a class="stock-link" href="./stock.html?code=${encodeURIComponent(item.code || "")}&name=${encodeURIComponent(item.name || "")}">${item.name || "-"}</a>
        <small class="stock-code">${item.code || "-"}</small>
      </td>
      <td>${item.concept || "-"}</td>
      <td>${Number(item.price || 0).toFixed(2)}</td>
      <td>${pct(item.change_pct)}</td>
      <td>${item.divergence_day || "-"}</td>
      <td class="feature-cell">${chips(item.features || [])}</td>
      <td>${item.consensus_day || "-"}</td>
      <td class="view-cell">${item.tomorrow_view || "-"}</td>
    </tr>
  `).join(""));
}
