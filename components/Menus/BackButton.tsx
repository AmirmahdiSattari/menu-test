import { Box, Typography } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

const BackButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => (
  <Box
    sx={{ display: "flex", alignItems: "center", mb: 2, cursor: "pointer"  , color: "#555555",}}
    onClick={onClick}
  >
    <ArrowBackIcon fontSize="small" sx={{ mr: 2,transform: "rotate(180deg)" }} />
    <Typography fontWeight="bold" px={2}>
      {label}
    </Typography>
  </Box>
);

export default BackButton;
