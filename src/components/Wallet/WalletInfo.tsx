"use client";

import React, { useEffect, useRef, memo } from "react";

function WalletInfo() {
  const container = useRef<any>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
    {
        "symbols": [
          {
            "proName": "FOREXCOM:SPXUSD",
            "title": "S&P 500"
          },
          {
            "proName": "FOREXCOM:NSXUSD",
            "title": "US 100"
          },
          {
            "proName": "FX_IDC:EURUSD",
            "title": "EUR/USD"
          },
          {
            "proName": "BITSTAMP:BTCUSD",
            "title": "Биткоин"
          },
          {
            "proName": "BITSTAMP:ETHUSD",
            "title": "Эфириум"
          }
        ],
        "showSymbolLogo": true,
        "isTransparent": false,
        "displayMode": "adaptive",
        "colorTheme": "light",
        "locale": "ru"
    }`;
  }, []);

  return (
    <div
      className="tradingview-widget-container my-16 -z-0"
      ref={container}
      style={{ height: "50%", width: "100%" }}
    >
      <div className="tradingview-widget-container__widget"></div>
    </div>
  );
}

export default memo(WalletInfo);
