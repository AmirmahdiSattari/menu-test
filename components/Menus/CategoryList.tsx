import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Category, Subcategory } from "./types";

import IconRenderer from "./IconRenderer";
import React from "react";

const grayBorder = "#DEDEDE";
const CategoryList = ({
  categories,
  subcategoryGroups,
  onSubcategoryClick,
}: {
  categories: Category[];
  subcategoryGroups: Record<number, Subcategory[]>;
  onSubcategoryClick: (subId: number, catId: number) => void;
}) => {
  return (
    <>
      {categories.map((category) => {
        const subcats = subcategoryGroups[category.id] || [];

        return subcats.length > 0 ? (
          <Accordion
            key={category.id}
            disableGutters
            sx={{
              boxShadow: "none",
              border: "none",
              borderRadius: "0 !important",
              "&::before": {
                display: "none",
              },
              marginRight: 4,
              borderRight: "2px solid #ECECEC",
            }}
          >
            <AccordionSummary
              sx={{
                borderRadius: "0 !important",
                flexDirection: "row-reverse",
                py: 2,
                gap: 1,
                justifyContent: "flex-end",
                border: "none",
                boxShadow: "none",
                "& .MuiAccordionSummary-content": {
                  margin: 0,
                  flexGrow: 0,
                  justifyContent: "flex-end",
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                display="flex"
                alignItems="center"
                color={"#555555"}
                pt={1}
                fontWeight={900}
              >
                <IconRenderer iconName={category.icon} />
                {category.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: 0,
                border: "none",
                boxShadow: "none",
              }}
            >
              {subcats.map((sub) => (
                <Box
                  key={sub.id}
                  onClick={() => onSubcategoryClick(sub.id, category.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRight: `1px solid ${grayBorder}`,
                    cursor: "pointer",
                    mr: 5,
                    p:1.5,
                    color: "#555555",
                    "&:hover": {
                      color: "#000000",
                    },
                  }}
                >
                  <IconRenderer iconName={sub.icon} />
                  <Typography  fontSize={15}>
                   {sub.name}
                  </Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ) : (
          <Typography key={category.id} sx={{ ml: 3, my: 2 }}>
            <IconRenderer iconName={category.icon} />
            CategoryList 3 {category.name}
          </Typography>
        );
      })}
    </>
  );
};

export default CategoryList;
