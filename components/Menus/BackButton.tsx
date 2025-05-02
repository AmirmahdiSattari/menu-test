import { Box, Typography } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const BackButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <Box sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer" }} onClick={onClick}>
    <ArrowBackIcon fontSize="small" sx={{ ml: 1 }} />
    <Typography fontWeight="bold">{label}</Typography>
  </Box>
);

export default BackButton;
