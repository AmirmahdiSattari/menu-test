import * as MuiIcons from "@mui/icons-material";

import React from "react";

const IconRenderer = ({ iconName, color = "inherit" }: { iconName?: string; color?: string }) => {
  if (!iconName || !(iconName in MuiIcons)) return null;
  const IconComponent = MuiIcons[iconName as keyof typeof MuiIcons];
  return <IconComponent fontSize="small" sx={{ ml: 1, color }} />;
};

export default IconRenderer;
