import IconRenderer from "./IconRenderer";
import React from "react";
import { Typography } from "@mui/material";

const activeRed = "#F45050";
const CategoryHeader = ({
  iconName,
  name,
  icon,
}: {
  iconName?: string;
  name: string;
  icon: boolean;
}) => {
  console.log(name);
  return (
    <Typography
      display="flex"
      alignItems="center"
      fontWeight="bold"
      mb={1}
      mr={icon ? 4 : 6}
      my={2}
      color={icon ? activeRed : "#828282"}
    >
      {icon && <IconRenderer iconName={iconName} />}
      {name}    
    </Typography>
  );
};

export default CategoryHeader;
