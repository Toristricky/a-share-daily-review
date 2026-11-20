window.__REVIEW_DATA__ = {
  "updated_at": "2026-11-20 19:05:04",
  "data_updated_at": "2026-11-20 19:05:04",
  "last_checked_at": "2026-11-20 19:05:04",
  "trade_date": "2026-11-20",
  "status": "ok",
  "source": "Tencent index quote + Sina A-share rank fallback; Eastmoney when available",
  "source_status": {
    "mode": "fast_fallback",
    "indices": "Tencent qt.gtimg.cn",
    "stocks": "Sina A-share rank top 180 by changepercent",
    "concepts": "Local concept rules from涨停股名称匹配",
    "full_market_breadth": "unavailable_in_fast_fallback",
    "fund_flow": "unavailable_in_fast_fallback",
    "detail_fundamentals": "partial_from_sina_rank",
    "freshness": "fresh_fetch",
    "notes": [],
    "updated_at": "2026-11-20 19:05:04"
  },
  "indices": [
    {
      "code": "000001",
      "name": "上证指数",
      "price": 3533.79,
      "change_pct": -1.23,
      "change": -43.83,
      "amount_yuan": 702573850000.0,
      "quote_time": "20261120161427",
      "source": "Tencent qt.gtimg.cn"
    },
    {
      "code": "399001",
      "name": "深证成指",
      "price": 10256.39,
      "change_pct": -3.09,
      "change": -326.81,
      "amount_yuan": 719626570000.0,
      "quote_time": "20261120161412",
      "source": "Tencent qt.gtimg.cn"
    },
    {
      "code": "399006",
      "name": "创业板指",
      "price": 2212.13,
      "change_pct": -3.54,
      "change": -81.21,
      "amount_yuan": 334978240000.0,
      "quote_time": "20261120161427",
      "source": "Tencent qt.gtimg.cn"
    }
  ],
  "market": {
    "turnover_yi": 14222.0,
    "main_net_yi": 0.0,
    "up_count": null,
    "down_count": null,
    "flat_count": null,
    "limit_up": 28,
    "limit_down": 0,
    "state": "震荡偏弱",
    "emotion_score": 5.0,
    "suggested_position": "1-2成",
    "conclusion": "市场震荡偏弱，指数分化但创业板较强，两市成交额约14222.0亿元，个股宽度使用排行样本估算，强势样本中涨停/20cm个股活跃。当前强势方向：PCB。"
  },
  "themes": [
    {
      "code": "",
      "name": "PCB",
      "change_pct": 10.0,
      "main_net_yuan": 0,
      "leader": "中京电子",
      "limit_up_count": 2
    },
    {
      "code": "",
      "name": "其他涨停",
      "change_pct": 11.16,
      "main_net_yuan": 0,
      "leader": "凡拓数创",
      "limit_up_count": 26
    }
  ],
  "concept_boards": [
    {
      "concept": "PCB",
      "limit_up_count": 2,
      "leader": "中京电子",
      "avg_change_pct": 10.0,
      "stocks": [
        {
          "code": "002579",
          "name": "中京电子",
          "price": 13.39,
          "change_pct": 10.025,
          "price_change": 1.22,
          "pre_close": 12.17,
          "open": 12.48,
          "high": 13.39,
          "low": 12.48,
          "volume": 75656288.0,
          "amount_yuan": 990093649.0,
          "turnover_pct": 12.97,
          "pe": 334.75,
          "pb": 2.986,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:30",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "PCB"
          ],
          "limit_reason": "AI服务器与高速连接需求改善，PCB/铜连接方向走强",
          "new_concepts": []
        },
        {
          "code": "000823",
          "name": "超声电子",
          "price": 18.51,
          "change_pct": 9.982,
          "price_change": 1.68,
          "pre_close": 16.83,
          "open": 16.29,
          "high": 18.51,
          "low": 16.29,
          "volume": 118698497.0,
          "amount_yuan": 2135377922.0,
          "turnover_pct": 19.95,
          "pe": 44.678,
          "pb": 1.89,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:50:00",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "PCB"
          ],
          "limit_reason": "AI服务器与高速连接需求改善，PCB/铜连接方向走强",
          "new_concepts": [
            "PCB"
          ]
        }
      ],
      "reason": "AI服务器与高速连接需求改善，PCB/铜连接方向走强"
    },
    {
      "concept": "其他涨停",
      "limit_up_count": 26,
      "leader": "凡拓数创",
      "avg_change_pct": 11.16,
      "reason": "单股事件、低位补涨或暂未归入主线概念",
      "stocks": [
        {
          "code": "301313",
          "name": "凡拓数创",
          "price": 59.16,
          "change_pct": 20.0,
          "price_change": 9.86,
          "pre_close": 49.3,
          "open": 48.26,
          "high": 59.16,
          "low": 47.51,
          "volume": 27470758.0,
          "amount_yuan": 1490124358.0,
          "turnover_pct": 34.92,
          "pe": -45.86,
          "pb": 10.947,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:30",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "300812",
          "name": "易天股份",
          "price": 18.0,
          "change_pct": 20.0,
          "price_change": 3.0,
          "pre_close": 15.0,
          "open": 15.0,
          "high": 18.0,
          "low": 14.61,
          "volume": 28913232.0,
          "amount_yuan": 503484141.0,
          "turnover_pct": 16.25,
          "pe": 138.462,
          "pb": 4.494,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:15",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "301132",
          "name": "满坤科技",
          "price": 51.07,
          "change_pct": 19.995,
          "price_change": 8.51,
          "pre_close": 42.56,
          "open": 41.37,
          "high": 51.07,
          "low": 41.16,
          "volume": 17795105.0,
          "amount_yuan": 851726103.0,
          "turnover_pct": 18.78,
          "pe": 63.049,
          "pb": 3.974,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:45",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "603386",
          "name": "骏亚科技",
          "price": 14.59,
          "change_pct": 10.03,
          "price_change": 1.33,
          "pre_close": 13.26,
          "open": 12.88,
          "high": 14.59,
          "low": 12.74,
          "volume": 28065481.0,
          "amount_yuan": 392535963.0,
          "turnover_pct": 8.6,
          "pe": -729.5,
          "pb": 3.386,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002741",
          "name": "光华科技",
          "price": 18.76,
          "change_pct": 10.029,
          "price_change": 1.71,
          "pre_close": 17.05,
          "open": 17.36,
          "high": 18.76,
          "low": 17.36,
          "volume": 40542691.0,
          "amount_yuan": 751890932.0,
          "turnover_pct": 9.43,
          "pe": 85.273,
          "pb": 4.331,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:15",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "新材料/化工"
          ],
          "limit_reason": "高端制造材料、化工材料和涨价线索驱动",
          "new_concepts": [
            "新材料/化工"
          ]
        },
        {
          "code": "000607",
          "name": "华媒控股",
          "price": 3.73,
          "change_pct": 10.029,
          "price_change": 0.34,
          "pre_close": 3.39,
          "open": 3.33,
          "high": 3.73,
          "low": 3.16,
          "volume": 47748775.0,
          "amount_yuan": 162782357.0,
          "turnover_pct": 5.39,
          "pe": -10.657,
          "pb": 3.203,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:50:00",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "000530",
          "name": "冰山冷热",
          "price": 12.29,
          "change_pct": 10.027,
          "price_change": 1.12,
          "pre_close": 11.17,
          "open": 10.71,
          "high": 12.29,
          "low": 10.71,
          "volume": 255905686.0,
          "amount_yuan": 3062277163.0,
          "turnover_pct": 42.64,
          "pe": 175.571,
          "pb": 3.265,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:15",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "603004",
          "name": "鼎龙科技",
          "price": 18.22,
          "change_pct": 10.024,
          "price_change": 1.66,
          "pre_close": 16.56,
          "open": 16.23,
          "high": 18.22,
          "low": 15.9,
          "volume": 7800582.0,
          "amount_yuan": 136585809.0,
          "turnover_pct": 13.25,
          "pe": 28.921,
          "pb": 2.022,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:00:00",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "600327",
          "name": "大东方",
          "price": 4.83,
          "change_pct": 10.023,
          "price_change": 0.44,
          "pre_close": 4.39,
          "open": 4.39,
          "high": 4.83,
          "low": 4.3,
          "volume": 245728583.0,
          "amount_yuan": 1143613208.0,
          "turnover_pct": 27.77,
          "pe": -17.25,
          "pb": 1.553,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002771",
          "name": "真视通",
          "price": 15.82,
          "change_pct": 10.014,
          "price_change": 1.44,
          "pre_close": 14.38,
          "open": 14.53,
          "high": 15.82,
          "low": 14.53,
          "volume": 31775426.0,
          "amount_yuan": 489263123.0,
          "turnover_pct": 17.6,
          "pe": -52.733,
          "pb": 5.83,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:15",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": []
        },
        {
          "code": "600360",
          "name": "华微电子",
          "price": 9.01,
          "change_pct": 10.012,
          "price_change": 0.82,
          "pre_close": 8.19,
          "open": 8.04,
          "high": 9.01,
          "low": 8.04,
          "volume": 137670058.0,
          "amount_yuan": 1229042006.0,
          "turnover_pct": 14.34,
          "pe": 50.056,
          "pb": 2.432,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002199",
          "name": "东晶电子",
          "price": 9.45,
          "change_pct": 10.012,
          "price_change": 0.86,
          "pre_close": 8.59,
          "open": 8.3,
          "high": 9.45,
          "low": 8.17,
          "volume": 4114900.0,
          "amount_yuan": 37774360.0,
          "turnover_pct": 1.78,
          "pe": -45.0,
          "pb": 14.434,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:15",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "603948",
          "name": "建业股份",
          "price": 19.56,
          "change_pct": 10.011,
          "price_change": 1.78,
          "pre_close": 17.78,
          "open": 17.51,
          "high": 19.56,
          "low": 17.23,
          "volume": 9564910.0,
          "amount_yuan": 184850343.0,
          "turnover_pct": 5.89,
          "pe": 13.775,
          "pb": 1.526,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "603324",
          "name": "盛剑科技",
          "price": 27.71,
          "change_pct": 10.004,
          "price_change": 2.52,
          "pre_close": 25.19,
          "open": 27.71,
          "high": 27.71,
          "low": 24.28,
          "volume": 25008438.0,
          "amount_yuan": 673088900.0,
          "turnover_pct": 17.14,
          "pe": -230.917,
          "pb": 2.709,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "半导体设备/先进封装"
          ],
          "limit_reason": "半导体设备、洁净室和先进制造环节受资金追捧",
          "new_concepts": []
        },
        {
          "code": "603466",
          "name": "风语筑",
          "price": 14.3,
          "change_pct": 10.0,
          "price_change": 1.3,
          "pre_close": 13.0,
          "open": 12.58,
          "high": 14.3,
          "low": 12.21,
          "volume": 89539596.0,
          "amount_yuan": 1206474248.0,
          "turnover_pct": 15.05,
          "pe": -476.667,
          "pb": 4.062,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "600467",
          "name": "好当家",
          "price": 2.86,
          "change_pct": 10.0,
          "price_change": 0.26,
          "pre_close": 2.6,
          "open": 2.55,
          "high": 2.86,
          "low": 2.35,
          "volume": 329242941.0,
          "amount_yuan": 872819626.0,
          "turnover_pct": 22.54,
          "pe": 143.0,
          "pb": 1.214,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": []
        },
        {
          "code": "002749",
          "name": "国光股份",
          "price": 8.69,
          "change_pct": 10.0,
          "price_change": 0.79,
          "pre_close": 7.9,
          "open": 7.95,
          "high": 8.69,
          "low": 7.9,
          "volume": 19075138.0,
          "amount_yuan": 162618393.0,
          "turnover_pct": 3.5,
          "pe": 12.779,
          "pb": 2.714,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:50:00",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002642",
          "name": "荣联科技",
          "price": 7.26,
          "change_pct": 10.0,
          "price_change": 0.66,
          "pre_close": 6.6,
          "open": 6.69,
          "high": 7.26,
          "low": 6.66,
          "volume": 21527848.0,
          "amount_yuan": 154136083.0,
          "turnover_pct": 3.25,
          "pe": 239.604,
          "pb": 4.034,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:50:00",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "603960",
          "name": "克来机电",
          "price": 13.97,
          "change_pct": 10.0,
          "price_change": 1.27,
          "pre_close": 12.7,
          "open": 12.58,
          "high": 13.97,
          "low": 12.03,
          "volume": 7180247.0,
          "amount_yuan": 95014040.0,
          "turnover_pct": 2.74,
          "pe": 127.0,
          "pb": 3.285,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "605058",
          "name": "澳弘电子",
          "price": 42.92,
          "change_pct": 9.995,
          "price_change": 3.9,
          "pre_close": 39.02,
          "open": 38.0,
          "high": 42.92,
          "low": 37.28,
          "volume": 12388189.0,
          "amount_yuan": 510670425.0,
          "turnover_pct": 8.67,
          "pe": 40.112,
          "pb": 3.34,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "000593",
          "name": "德龙汇能",
          "price": 17.51,
          "change_pct": 9.987,
          "price_change": 1.59,
          "pre_close": 15.92,
          "open": 15.61,
          "high": 17.51,
          "low": 15.39,
          "volume": 10537581.0,
          "amount_yuan": 172667665.0,
          "turnover_pct": 2.94,
          "pe": 307.193,
          "pb": 7.057,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:30",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "605577",
          "name": "龙版传媒",
          "price": 16.19,
          "change_pct": 9.986,
          "price_change": 1.47,
          "pre_close": 14.72,
          "open": 14.67,
          "high": 16.19,
          "low": 14.38,
          "volume": 32947099.0,
          "amount_yuan": 515991409.0,
          "turnover_pct": 7.41,
          "pe": 32.11,
          "pb": 1.755,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "600371",
          "name": "万向德农",
          "price": 10.69,
          "change_pct": 9.979,
          "price_change": 0.97,
          "pre_close": 9.72,
          "open": 9.43,
          "high": 10.69,
          "low": 9.2,
          "volume": 29433780.0,
          "amount_yuan": 299364156.0,
          "turnover_pct": 10.06,
          "pe": 534.5,
          "pb": 6.061,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002086",
          "name": "东方海洋",
          "price": 3.75,
          "change_pct": 9.971,
          "price_change": 0.34,
          "pre_close": 3.41,
          "open": 3.56,
          "high": 3.75,
          "low": 3.46,
          "volume": 376755730.0,
          "amount_yuan": 1371317541.0,
          "turnover_pct": 23.83,
          "pe": -46.875,
          "pb": 6.009,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:30",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "605018",
          "name": "长华集团",
          "price": 10.26,
          "change_pct": 9.968,
          "price_change": 0.93,
          "pre_close": 9.33,
          "open": 9.15,
          "high": 10.26,
          "low": 8.5,
          "volume": 11601200.0,
          "amount_yuan": 114199205.0,
          "turnover_pct": 2.47,
          "pe": 51.3,
          "pb": 1.755,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:34:58",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": [
            "其他涨停"
          ]
        },
        {
          "code": "002548",
          "name": "金新农",
          "price": 3.76,
          "change_pct": 9.942,
          "price_change": 0.34,
          "pre_close": 3.42,
          "open": 3.34,
          "high": 3.76,
          "low": 3.23,
          "volume": 68720195.0,
          "amount_yuan": 241998608.0,
          "turnover_pct": 8.54,
          "pe": -10.444,
          "pb": 4.463,
          "market_cap_wan": null,
          "float_market_cap_wan": null,
          "ticktime": "15:49:45",
          "source": "Sina Market_Center.getHQNodeData",
          "concepts": [
            "其他涨停"
          ],
          "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
          "new_concepts": []
        }
      ]
    }
  ],
  "limit_up_stocks": [
    {
      "code": "301313",
      "name": "凡拓数创",
      "price": 59.16,
      "change_pct": 20.0,
      "price_change": 9.86,
      "pre_close": 49.3,
      "open": 48.26,
      "high": 59.16,
      "low": 47.51,
      "volume": 27470758.0,
      "amount_yuan": 1490124358.0,
      "turnover_pct": 34.92,
      "main_net_yuan": 0,
      "pb": 10.947,
      "pe": -45.86,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "300812",
      "name": "易天股份",
      "price": 18.0,
      "change_pct": 20.0,
      "price_change": 3.0,
      "pre_close": 15.0,
      "open": 15.0,
      "high": 18.0,
      "low": 14.61,
      "volume": 28913232.0,
      "amount_yuan": 503484141.0,
      "turnover_pct": 16.25,
      "main_net_yuan": 0,
      "pb": 4.494,
      "pe": 138.462,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "301132",
      "name": "满坤科技",
      "price": 51.07,
      "change_pct": 19.995,
      "price_change": 8.51,
      "pre_close": 42.56,
      "open": 41.37,
      "high": 51.07,
      "low": 41.16,
      "volume": 17795105.0,
      "amount_yuan": 851726103.0,
      "turnover_pct": 18.78,
      "main_net_yuan": 0,
      "pb": 3.974,
      "pe": 63.049,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "603386",
      "name": "骏亚科技",
      "price": 14.59,
      "change_pct": 10.03,
      "price_change": 1.33,
      "pre_close": 13.26,
      "open": 12.88,
      "high": 14.59,
      "low": 12.74,
      "volume": 28065481.0,
      "amount_yuan": 392535963.0,
      "turnover_pct": 8.6,
      "main_net_yuan": 0,
      "pb": 3.386,
      "pe": -729.5,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002741",
      "name": "光华科技",
      "price": 18.76,
      "change_pct": 10.029,
      "price_change": 1.71,
      "pre_close": 17.05,
      "open": 17.36,
      "high": 18.76,
      "low": 17.36,
      "volume": 40542691.0,
      "amount_yuan": 751890932.0,
      "turnover_pct": 9.43,
      "main_net_yuan": 0,
      "pb": 4.331,
      "pe": 85.273,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "新材料/化工"
      ],
      "limit_reason": "高端制造材料、化工材料和涨价线索驱动",
      "new_concepts": [
        "新材料/化工"
      ]
    },
    {
      "code": "000607",
      "name": "华媒控股",
      "price": 3.73,
      "change_pct": 10.029,
      "price_change": 0.34,
      "pre_close": 3.39,
      "open": 3.33,
      "high": 3.73,
      "low": 3.16,
      "volume": 47748775.0,
      "amount_yuan": 162782357.0,
      "turnover_pct": 5.39,
      "main_net_yuan": 0,
      "pb": 3.203,
      "pe": -10.657,
      "industry": "",
      "ticktime": "15:50:00",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "000530",
      "name": "冰山冷热",
      "price": 12.29,
      "change_pct": 10.027,
      "price_change": 1.12,
      "pre_close": 11.17,
      "open": 10.71,
      "high": 12.29,
      "low": 10.71,
      "volume": 255905686.0,
      "amount_yuan": 3062277163.0,
      "turnover_pct": 42.64,
      "main_net_yuan": 0,
      "pb": 3.265,
      "pe": 175.571,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002579",
      "name": "中京电子",
      "price": 13.39,
      "change_pct": 10.025,
      "price_change": 1.22,
      "pre_close": 12.17,
      "open": 12.48,
      "high": 13.39,
      "low": 12.48,
      "volume": 75656288.0,
      "amount_yuan": 990093649.0,
      "turnover_pct": 12.97,
      "main_net_yuan": 0,
      "pb": 2.986,
      "pe": 334.75,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "PCB"
      ],
      "limit_reason": "AI服务器与高速连接需求改善，PCB/铜连接方向走强",
      "new_concepts": []
    },
    {
      "code": "603004",
      "name": "鼎龙科技",
      "price": 18.22,
      "change_pct": 10.024,
      "price_change": 1.66,
      "pre_close": 16.56,
      "open": 16.23,
      "high": 18.22,
      "low": 15.9,
      "volume": 7800582.0,
      "amount_yuan": 136585809.0,
      "turnover_pct": 13.25,
      "main_net_yuan": 0,
      "pb": 2.022,
      "pe": 28.921,
      "industry": "",
      "ticktime": "15:00:00",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "600327",
      "name": "大东方",
      "price": 4.83,
      "change_pct": 10.023,
      "price_change": 0.44,
      "pre_close": 4.39,
      "open": 4.39,
      "high": 4.83,
      "low": 4.3,
      "volume": 245728583.0,
      "amount_yuan": 1143613208.0,
      "turnover_pct": 27.77,
      "main_net_yuan": 0,
      "pb": 1.553,
      "pe": -17.25,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002771",
      "name": "真视通",
      "price": 15.82,
      "change_pct": 10.014,
      "price_change": 1.44,
      "pre_close": 14.38,
      "open": 14.53,
      "high": 15.82,
      "low": 14.53,
      "volume": 31775426.0,
      "amount_yuan": 489263123.0,
      "turnover_pct": 17.6,
      "main_net_yuan": 0,
      "pb": 5.83,
      "pe": -52.733,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": []
    },
    {
      "code": "600360",
      "name": "华微电子",
      "price": 9.01,
      "change_pct": 10.012,
      "price_change": 0.82,
      "pre_close": 8.19,
      "open": 8.04,
      "high": 9.01,
      "low": 8.04,
      "volume": 137670058.0,
      "amount_yuan": 1229042006.0,
      "turnover_pct": 14.34,
      "main_net_yuan": 0,
      "pb": 2.432,
      "pe": 50.056,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002199",
      "name": "东晶电子",
      "price": 9.45,
      "change_pct": 10.012,
      "price_change": 0.86,
      "pre_close": 8.59,
      "open": 8.3,
      "high": 9.45,
      "low": 8.17,
      "volume": 4114900.0,
      "amount_yuan": 37774360.0,
      "turnover_pct": 1.78,
      "main_net_yuan": 0,
      "pb": 14.434,
      "pe": -45.0,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "603948",
      "name": "建业股份",
      "price": 19.56,
      "change_pct": 10.011,
      "price_change": 1.78,
      "pre_close": 17.78,
      "open": 17.51,
      "high": 19.56,
      "low": 17.23,
      "volume": 9564910.0,
      "amount_yuan": 184850343.0,
      "turnover_pct": 5.89,
      "main_net_yuan": 0,
      "pb": 1.526,
      "pe": 13.775,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "603324",
      "name": "盛剑科技",
      "price": 27.71,
      "change_pct": 10.004,
      "price_change": 2.52,
      "pre_close": 25.19,
      "open": 27.71,
      "high": 27.71,
      "low": 24.28,
      "volume": 25008438.0,
      "amount_yuan": 673088900.0,
      "turnover_pct": 17.14,
      "main_net_yuan": 0,
      "pb": 2.709,
      "pe": -230.917,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "半导体设备/先进封装"
      ],
      "limit_reason": "半导体设备、洁净室和先进制造环节受资金追捧",
      "new_concepts": []
    },
    {
      "code": "603466",
      "name": "风语筑",
      "price": 14.3,
      "change_pct": 10.0,
      "price_change": 1.3,
      "pre_close": 13.0,
      "open": 12.58,
      "high": 14.3,
      "low": 12.21,
      "volume": 89539596.0,
      "amount_yuan": 1206474248.0,
      "turnover_pct": 15.05,
      "main_net_yuan": 0,
      "pb": 4.062,
      "pe": -476.667,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "600467",
      "name": "好当家",
      "price": 2.86,
      "change_pct": 10.0,
      "price_change": 0.26,
      "pre_close": 2.6,
      "open": 2.55,
      "high": 2.86,
      "low": 2.35,
      "volume": 329242941.0,
      "amount_yuan": 872819626.0,
      "turnover_pct": 22.54,
      "main_net_yuan": 0,
      "pb": 1.214,
      "pe": 143.0,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": []
    },
    {
      "code": "002749",
      "name": "国光股份",
      "price": 8.69,
      "change_pct": 10.0,
      "price_change": 0.79,
      "pre_close": 7.9,
      "open": 7.95,
      "high": 8.69,
      "low": 7.9,
      "volume": 19075138.0,
      "amount_yuan": 162618393.0,
      "turnover_pct": 3.5,
      "main_net_yuan": 0,
      "pb": 2.714,
      "pe": 12.779,
      "industry": "",
      "ticktime": "15:50:00",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002642",
      "name": "荣联科技",
      "price": 7.26,
      "change_pct": 10.0,
      "price_change": 0.66,
      "pre_close": 6.6,
      "open": 6.69,
      "high": 7.26,
      "low": 6.66,
      "volume": 21527848.0,
      "amount_yuan": 154136083.0,
      "turnover_pct": 3.25,
      "main_net_yuan": 0,
      "pb": 4.034,
      "pe": 239.604,
      "industry": "",
      "ticktime": "15:50:00",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "603960",
      "name": "克来机电",
      "price": 13.97,
      "change_pct": 10.0,
      "price_change": 1.27,
      "pre_close": 12.7,
      "open": 12.58,
      "high": 13.97,
      "low": 12.03,
      "volume": 7180247.0,
      "amount_yuan": 95014040.0,
      "turnover_pct": 2.74,
      "main_net_yuan": 0,
      "pb": 3.285,
      "pe": 127.0,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "605058",
      "name": "澳弘电子",
      "price": 42.92,
      "change_pct": 9.995,
      "price_change": 3.9,
      "pre_close": 39.02,
      "open": 38.0,
      "high": 42.92,
      "low": 37.28,
      "volume": 12388189.0,
      "amount_yuan": 510670425.0,
      "turnover_pct": 8.67,
      "main_net_yuan": 0,
      "pb": 3.34,
      "pe": 40.112,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "000593",
      "name": "德龙汇能",
      "price": 17.51,
      "change_pct": 9.987,
      "price_change": 1.59,
      "pre_close": 15.92,
      "open": 15.61,
      "high": 17.51,
      "low": 15.39,
      "volume": 10537581.0,
      "amount_yuan": 172667665.0,
      "turnover_pct": 2.94,
      "main_net_yuan": 0,
      "pb": 7.057,
      "pe": 307.193,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "605577",
      "name": "龙版传媒",
      "price": 16.19,
      "change_pct": 9.986,
      "price_change": 1.47,
      "pre_close": 14.72,
      "open": 14.67,
      "high": 16.19,
      "low": 14.38,
      "volume": 32947099.0,
      "amount_yuan": 515991409.0,
      "turnover_pct": 7.41,
      "main_net_yuan": 0,
      "pb": 1.755,
      "pe": 32.11,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "000823",
      "name": "超声电子",
      "price": 18.51,
      "change_pct": 9.982,
      "price_change": 1.68,
      "pre_close": 16.83,
      "open": 16.29,
      "high": 18.51,
      "low": 16.29,
      "volume": 118698497.0,
      "amount_yuan": 2135377922.0,
      "turnover_pct": 19.95,
      "main_net_yuan": 0,
      "pb": 1.89,
      "pe": 44.678,
      "industry": "",
      "ticktime": "15:50:00",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "PCB"
      ],
      "limit_reason": "AI服务器与高速连接需求改善，PCB/铜连接方向走强",
      "new_concepts": [
        "PCB"
      ]
    },
    {
      "code": "600371",
      "name": "万向德农",
      "price": 10.69,
      "change_pct": 9.979,
      "price_change": 0.97,
      "pre_close": 9.72,
      "open": 9.43,
      "high": 10.69,
      "low": 9.2,
      "volume": 29433780.0,
      "amount_yuan": 299364156.0,
      "turnover_pct": 10.06,
      "main_net_yuan": 0,
      "pb": 6.061,
      "pe": 534.5,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002086",
      "name": "东方海洋",
      "price": 3.75,
      "change_pct": 9.971,
      "price_change": 0.34,
      "pre_close": 3.41,
      "open": 3.56,
      "high": 3.75,
      "low": 3.46,
      "volume": 376755730.0,
      "amount_yuan": 1371317541.0,
      "turnover_pct": 23.83,
      "main_net_yuan": 0,
      "pb": 6.009,
      "pe": -46.875,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "605018",
      "name": "长华集团",
      "price": 10.26,
      "change_pct": 9.968,
      "price_change": 0.93,
      "pre_close": 9.33,
      "open": 9.15,
      "high": 10.26,
      "low": 8.5,
      "volume": 11601200.0,
      "amount_yuan": 114199205.0,
      "turnover_pct": 2.47,
      "main_net_yuan": 0,
      "pb": 1.755,
      "pe": 51.3,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": [
        "其他涨停"
      ]
    },
    {
      "code": "002548",
      "name": "金新农",
      "price": 3.76,
      "change_pct": 9.942,
      "price_change": 0.34,
      "pre_close": 3.42,
      "open": 3.34,
      "high": 3.76,
      "low": 3.23,
      "volume": 68720195.0,
      "amount_yuan": 241998608.0,
      "turnover_pct": 8.54,
      "main_net_yuan": 0,
      "pb": 4.463,
      "pe": -10.444,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData",
      "concepts": [
        "其他涨停"
      ],
      "limit_reason": "单股事件、低位补涨或暂未归入主线概念",
      "new_concepts": []
    }
  ],
  "hot_board_tracking": [
    {
      "concept": "其他涨停",
      "active_days": 3,
      "latest_count": 26,
      "trend": "连续活跃",
      "highlight": true,
      "history": [
        {
          "date": "2026-11-18",
          "count": 38,
          "leader": "广脉科技",
          "stocks": [
            "广脉科技",
            "卡莱特",
            "宏景科技",
            "旋极信息",
            "胜科纳米",
            "青云科技",
            "创益通",
            "京蓝科技",
            "中嘉博创",
            "证通电子",
            "四川长虹",
            "华升股份",
            "莲花控股",
            "武汉凡谷",
            "澳柯玛",
            "香江控股",
            "泰嘉股份",
            "双环科技",
            "沈阳机床",
            "真视通",
            "春光科技",
            "华胜天成",
            "恒润股份",
            "润建股份",
            "利通电子",
            "常山北明",
            "中贝通信",
            "华孚时尚",
            "鸿合科技",
            "华东重机",
            "动力源",
            "美利云",
            "盛剑科技",
            "北纬科技",
            "爱仕达",
            "川润股份",
            "城地香江",
            "众泰汽车"
          ]
        },
        {
          "date": "2026-11-19",
          "count": 23,
          "leader": "蓝箭电子",
          "stocks": [
            "蓝箭电子",
            "卡莱特",
            "康盛股份",
            "京蓝科技",
            "兴业股份",
            "中京电子",
            "三佳科技",
            "真视通",
            "兴欣新材",
            "华升股份",
            "九阳股份",
            "海立股份",
            "盛剑科技",
            "格林达",
            "广电电气",
            "时空科技",
            "江化微",
            "大港股份",
            "原尚股份",
            "襄阳轴承",
            "红 宝 丽",
            "毅昌科技",
            "全筑股份"
          ]
        },
        {
          "date": "2026-11-20",
          "count": 26,
          "leader": "凡拓数创",
          "stocks": [
            "凡拓数创",
            "易天股份",
            "满坤科技",
            "骏亚科技",
            "光华科技",
            "华媒控股",
            "冰山冷热",
            "鼎龙科技",
            "大东方",
            "真视通",
            "华微电子",
            "东晶电子",
            "建业股份",
            "盛剑科技",
            "风语筑",
            "好当家",
            "国光股份",
            "荣联科技",
            "克来机电",
            "澳弘电子",
            "德龙汇能",
            "龙版传媒",
            "万向德农",
            "东方海洋",
            "长华集团",
            "金新农"
          ]
        }
      ]
    },
    {
      "concept": "PCB",
      "active_days": 2,
      "latest_count": 2,
      "trend": "连续活跃",
      "highlight": true,
      "history": [
        {
          "date": "2026-11-18",
          "count": 2,
          "leader": "沪电股份",
          "stocks": [
            "沪电股份",
            "深南电路"
          ]
        },
        {
          "date": "2026-11-20",
          "count": 2,
          "leader": "中京电子",
          "stocks": [
            "中京电子",
            "超声电子"
          ]
        }
      ]
    }
  ],
  "hot_stock_tracking": [
    {
      "code": "301313",
      "name": "凡拓数创",
      "concept": "其他涨停",
      "price": 59.16,
      "change_pct": 20.0,
      "divergence_day": "2026-11-20",
      "features": [
        "板块龙头",
        "20cm涨停",
        "放量分歧",
        "新增概念"
      ],
      "consensus_day": "2026-11-20 + 首板",
      "tomorrow_view": "分歧放量，重点看开盘承接和回封力度",
      "highlight": true
    },
    {
      "code": "300812",
      "name": "易天股份",
      "concept": "其他涨停",
      "price": 18.0,
      "change_pct": 20.0,
      "divergence_day": "2026-11-20",
      "features": [
        "前排领涨",
        "20cm涨停",
        "放量分歧",
        "新增概念"
      ],
      "consensus_day": "2026-11-20 + 首板",
      "tomorrow_view": "分歧放量，重点看开盘承接和回封力度",
      "highlight": true
    },
    {
      "code": "301132",
      "name": "满坤科技",
      "concept": "其他涨停",
      "price": 51.07,
      "change_pct": 19.995,
      "divergence_day": "2026-11-20",
      "features": [
        "前排领涨",
        "20cm涨停",
        "放量分歧",
        "新增概念"
      ],
      "consensus_day": "2026-11-20 + 首板",
      "tomorrow_view": "分歧放量，重点看开盘承接和回封力度",
      "highlight": true
    },
    {
      "code": "603386",
      "name": "骏亚科技",
      "concept": "其他涨停",
      "price": 14.59,
      "change_pct": 10.03,
      "divergence_day": "2026-11-20",
      "features": [
        "涨停确认",
        "新增概念",
        "板块连续"
      ],
      "consensus_day": "2026-11-20 + 首板",
      "tomorrow_view": "新增概念发酵，观察同概念是否继续扩散",
      "highlight": true
    },
    {
      "code": "002579",
      "name": "中京电子",
      "concept": "PCB",
      "price": 13.39,
      "change_pct": 10.025,
      "divergence_day": "2026-11-20",
      "features": [
        "板块龙头",
        "涨停确认",
        "板块连续"
      ],
      "consensus_day": "2026-11-19 + 延续",
      "tomorrow_view": "板块龙头，弱转强或继续封板则主线延续",
      "highlight": true
    },
    {
      "code": "000823",
      "name": "超声电子",
      "concept": "PCB",
      "price": 18.51,
      "change_pct": 9.982,
      "divergence_day": "2026-11-20",
      "features": [
        "前排领涨",
        "涨停确认",
        "放量分歧",
        "新增概念"
      ],
      "consensus_day": "2026-11-20 + 首板",
      "tomorrow_view": "分歧放量，重点看开盘承接和回封力度",
      "highlight": true
    }
  ],
  "fund_inflow_themes": [],
  "core_stocks": [
    {
      "code": "301313",
      "name": "凡拓数创",
      "price": 59.16,
      "change_pct": 20.0,
      "price_change": 9.86,
      "pre_close": 49.3,
      "open": 48.26,
      "high": 59.16,
      "low": 47.51,
      "volume": 27470758.0,
      "amount_yuan": 1490124358.0,
      "turnover_pct": 34.92,
      "main_net_yuan": 0,
      "pb": 10.947,
      "pe": -45.86,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "300812",
      "name": "易天股份",
      "price": 18.0,
      "change_pct": 20.0,
      "price_change": 3.0,
      "pre_close": 15.0,
      "open": 15.0,
      "high": 18.0,
      "low": 14.61,
      "volume": 28913232.0,
      "amount_yuan": 503484141.0,
      "turnover_pct": 16.25,
      "main_net_yuan": 0,
      "pb": 4.494,
      "pe": 138.462,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "301132",
      "name": "满坤科技",
      "price": 51.07,
      "change_pct": 19.995,
      "price_change": 8.51,
      "pre_close": 42.56,
      "open": 41.37,
      "high": 51.07,
      "low": 41.16,
      "volume": 17795105.0,
      "amount_yuan": 851726103.0,
      "turnover_pct": 18.78,
      "main_net_yuan": 0,
      "pb": 3.974,
      "pe": 63.049,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "301030",
      "name": "*ST仕净",
      "price": 3.29,
      "change_pct": 14.236,
      "price_change": 0.41,
      "pre_close": 2.88,
      "open": 3.06,
      "high": 3.42,
      "low": 3.02,
      "volume": 39821539.0,
      "amount_yuan": 127040365.0,
      "turnover_pct": 19.7,
      "main_net_yuan": 0,
      "pb": -0.53,
      "pe": -0.493,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "920405",
      "name": "海希通讯",
      "price": 13.4,
      "change_pct": 12.228,
      "price_change": 1.46,
      "pre_close": 11.94,
      "open": 11.73,
      "high": 13.6,
      "low": 11.52,
      "volume": 2158244.0,
      "amount_yuan": 27729203.0,
      "turnover_pct": 2.03,
      "main_net_yuan": 0,
      "pb": 2.125,
      "pe": 23.929,
      "industry": "",
      "ticktime": "15:30:02",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "301052",
      "name": "果麦文化",
      "price": 36.8,
      "change_pct": 11.922,
      "price_change": 3.92,
      "pre_close": 32.88,
      "open": 33.09,
      "high": 38.99,
      "low": 31.69,
      "volume": 34221385.0,
      "amount_yuan": 1201760401.0,
      "turnover_pct": 42.67,
      "main_net_yuan": 0,
      "pb": 5.647,
      "pe": -1752.381,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "600340",
      "name": "*ST华幸",
      "price": 0.85,
      "change_pct": 10.39,
      "price_change": 0.08,
      "pre_close": 0.77,
      "open": 0.72,
      "high": 0.85,
      "low": 0.72,
      "volume": 163605229.0,
      "amount_yuan": 131127504.0,
      "turnover_pct": 4.2,
      "main_net_yuan": 0,
      "pb": -0.135,
      "pe": -0.145,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "301288",
      "name": "清研环境",
      "price": 21.28,
      "change_pct": 10.031,
      "price_change": 1.94,
      "pre_close": 19.34,
      "open": 19.31,
      "high": 21.54,
      "low": 18.3,
      "volume": 13323320.0,
      "amount_yuan": 269885371.0,
      "turnover_pct": 17.06,
      "main_net_yuan": 0,
      "pb": 3.006,
      "pe": -101.333,
      "industry": "",
      "ticktime": "15:49:45",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "603386",
      "name": "骏亚科技",
      "price": 14.59,
      "change_pct": 10.03,
      "price_change": 1.33,
      "pre_close": 13.26,
      "open": 12.88,
      "high": 14.59,
      "low": 12.74,
      "volume": 28065481.0,
      "amount_yuan": 392535963.0,
      "turnover_pct": 8.6,
      "main_net_yuan": 0,
      "pb": 3.386,
      "pe": -729.5,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "002741",
      "name": "光华科技",
      "price": 18.76,
      "change_pct": 10.029,
      "price_change": 1.71,
      "pre_close": 17.05,
      "open": 17.36,
      "high": 18.76,
      "low": 17.36,
      "volume": 40542691.0,
      "amount_yuan": 751890932.0,
      "turnover_pct": 9.43,
      "main_net_yuan": 0,
      "pb": 4.331,
      "pe": 85.273,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "000607",
      "name": "华媒控股",
      "price": 3.73,
      "change_pct": 10.029,
      "price_change": 0.34,
      "pre_close": 3.39,
      "open": 3.33,
      "high": 3.73,
      "low": 3.16,
      "volume": 47748775.0,
      "amount_yuan": 162782357.0,
      "turnover_pct": 5.39,
      "main_net_yuan": 0,
      "pb": 3.203,
      "pe": -10.657,
      "industry": "",
      "ticktime": "15:50:00",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "000530",
      "name": "冰山冷热",
      "price": 12.29,
      "change_pct": 10.027,
      "price_change": 1.12,
      "pre_close": 11.17,
      "open": 10.71,
      "high": 12.29,
      "low": 10.71,
      "volume": 255905686.0,
      "amount_yuan": 3062277163.0,
      "turnover_pct": 42.64,
      "main_net_yuan": 0,
      "pb": 3.265,
      "pe": 175.571,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "002579",
      "name": "中京电子",
      "price": 13.39,
      "change_pct": 10.025,
      "price_change": 1.22,
      "pre_close": 12.17,
      "open": 12.48,
      "high": 13.39,
      "low": 12.48,
      "volume": 75656288.0,
      "amount_yuan": 990093649.0,
      "turnover_pct": 12.97,
      "main_net_yuan": 0,
      "pb": 2.986,
      "pe": 334.75,
      "industry": "",
      "ticktime": "15:49:30",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "603004",
      "name": "鼎龙科技",
      "price": 18.22,
      "change_pct": 10.024,
      "price_change": 1.66,
      "pre_close": 16.56,
      "open": 16.23,
      "high": 18.22,
      "low": 15.9,
      "volume": 7800582.0,
      "amount_yuan": 136585809.0,
      "turnover_pct": 13.25,
      "main_net_yuan": 0,
      "pb": 2.022,
      "pe": 28.921,
      "industry": "",
      "ticktime": "15:00:00",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "600327",
      "name": "大东方",
      "price": 4.83,
      "change_pct": 10.023,
      "price_change": 0.44,
      "pre_close": 4.39,
      "open": 4.39,
      "high": 4.83,
      "low": 4.3,
      "volume": 245728583.0,
      "amount_yuan": 1143613208.0,
      "turnover_pct": 27.77,
      "main_net_yuan": 0,
      "pb": 1.553,
      "pe": -17.25,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "002771",
      "name": "真视通",
      "price": 15.82,
      "change_pct": 10.014,
      "price_change": 1.44,
      "pre_close": 14.38,
      "open": 14.53,
      "high": 15.82,
      "low": 14.53,
      "volume": 31775426.0,
      "amount_yuan": 489263123.0,
      "turnover_pct": 17.6,
      "main_net_yuan": 0,
      "pb": 5.83,
      "pe": -52.733,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "600360",
      "name": "华微电子",
      "price": 9.01,
      "change_pct": 10.012,
      "price_change": 0.82,
      "pre_close": 8.19,
      "open": 8.04,
      "high": 9.01,
      "low": 8.04,
      "volume": 137670058.0,
      "amount_yuan": 1229042006.0,
      "turnover_pct": 14.34,
      "main_net_yuan": 0,
      "pb": 2.432,
      "pe": 50.056,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "002199",
      "name": "东晶电子",
      "price": 9.45,
      "change_pct": 10.012,
      "price_change": 0.86,
      "pre_close": 8.59,
      "open": 8.3,
      "high": 9.45,
      "low": 8.17,
      "volume": 4114900.0,
      "amount_yuan": 37774360.0,
      "turnover_pct": 1.78,
      "main_net_yuan": 0,
      "pb": 14.434,
      "pe": -45.0,
      "industry": "",
      "ticktime": "15:49:15",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "603948",
      "name": "建业股份",
      "price": 19.56,
      "change_pct": 10.011,
      "price_change": 1.78,
      "pre_close": 17.78,
      "open": 17.51,
      "high": 19.56,
      "low": 17.23,
      "volume": 9564910.0,
      "amount_yuan": 184850343.0,
      "turnover_pct": 5.89,
      "main_net_yuan": 0,
      "pb": 1.526,
      "pe": 13.775,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    },
    {
      "code": "603324",
      "name": "盛剑科技",
      "price": 27.71,
      "change_pct": 10.004,
      "price_change": 2.52,
      "pre_close": 25.19,
      "open": 27.71,
      "high": 27.71,
      "low": 24.28,
      "volume": 25008438.0,
      "amount_yuan": 673088900.0,
      "turnover_pct": 17.14,
      "main_net_yuan": 0,
      "pb": 2.709,
      "pe": -230.917,
      "industry": "",
      "ticktime": "15:34:58",
      "source": "Sina Market_Center.getHQNodeData"
    }
  ],
  "plan": {
    "watch_themes": [
      "PCB",
      "其他涨停"
    ],
    "trigger": "先等指数止跌、跌停数下降、高位股负反馈缓和。",
    "invalid": "成交额明显萎缩、热点前排冲高回落、跌停或大面个股增加。",
    "risk": "自动生成仅用于复盘观察，不构成投资建议；交易前需要结合个人仓位和风险承受能力。",
    "position": "1-2成"
  }
};