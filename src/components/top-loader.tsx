// TopLoader.tsx
import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

const TopLoader = () => {
  return (
    <Box
      sx={{ width: "100%", position: "fixed", top: 0, left: 0, zIndex: 1200 }}
    >
      <LinearProgress sx={{ height: '10px' }}/>
    </Box>
  );
};

export default TopLoader;
