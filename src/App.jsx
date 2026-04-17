import React from "react";
import GoldChart from "./components/GoldChart";
import { Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#812d2f] text-white flex flex-col items-center justify-between p-[1.25vw]">
      {/* Background Decorators */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[6.25vw]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-900/10 rounded-full blur-[6.25vw]"></div>
      </div>

      {/* Header with Logo */}
      <Box
        sx={{
          flex: '0 0 auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          mb: '1.67vw',
          position: 'relative',
          zIndex: 10,
        }}
        className="animate-fade-in-down"
      >
        <div className="relative group">
          <img
            src="/images/logo.svg"
            alt="Logo"
            className="relative w-[15vw]   object-contain drop-shadow-2xl "
          />
        </div>
      </Box>

      {/* Chart Container */}
      <Box
        sx={{
          flex: '1 1 auto',
          width: '100%',
          height: 'calc(100vh - 20.83vw)',
          position: 'relative',
          zIndex: 10,
        }}
        className="animate-fade-in-up"
      >
        <div className="w-full h-full rounded-[0.83vw] overflow-hidden shadow-[0_0_2.08vw_rgba(0,0,0,0.5)] border border-white/5 bg-black/40 backdrop-blur-sm p-[0.21vw]">
          <GoldChart />
        </div>
      </Box>
    </div>
  );
}

export default App;
