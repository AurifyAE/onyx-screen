import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

const GoldChart = () => {
  const containerRef = useRef();

  useEffect(() => {
    // Clear any existing chart before re-mounting
    if (containerRef.current) {
      containerRef.current.innerHTML = '';
    }

    const script = document.createElement("script");

    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;

    // You can deeply customize these properties to match your layout
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "OANDA:XAUUSD", // The trading symbol
      interval: "1", // timeframe in minutes, 'D' for daily
      timezone: "Asia/Dubai",
      theme: "dark", // "light" | "dark"
      style: "1", // 1 = Candles, 2 = Line, 3 = Area
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: true,
      hide_legend: false,
      save_image: false,
      backgroundColor: "rgba(0,0,0,0)", // Transparent to respect your custom background
      gridColor: "rgba(255,255,255,0.05)", // Faint white grid
      // Additional options you can enable:
      // "hide_side_toolbar": false,
      // "allow_symbol_change": true,
      // "studies": ["Volume@tv-basicstudies"],
    });

    if (containerRef.current) {
        containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        borderRadius: "1.04vw",
        overflow: "hidden",
        // Updated shadow to blend beautifully with the #812d2f theme instead of the old blueish shadow
        boxShadow: '0 0.52vw 2.08vw rgba(0,0,0,0.3), inset 0 0 0 0.05vw rgba(255,255,255,0.1)',
      }}
    >
      <div
        className="tradingview-widget-container"
        style={{ height: "100%", width: "100%" }}
        ref={containerRef}
      />
    </Box>
  );
};

export default GoldChart;
