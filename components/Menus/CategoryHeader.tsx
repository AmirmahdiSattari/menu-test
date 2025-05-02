import IconRenderer from "./IconRenderer";
import React from "react";
import { Typography } from "@mui/material";

const CategoryHeader = ({ iconName, name }: { iconName?: string; name: string }) => (
  <Typography display="flex" alignItems="center" fontWeight="bold" mb={1} mr={2}>
    <IconRenderer iconName={iconName} />
    {name}
  </Typography>
);

export default CategoryHeader;
