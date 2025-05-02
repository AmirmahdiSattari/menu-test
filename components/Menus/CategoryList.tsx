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
          <Accordion key={category.id} disableGutters sx={{ boxShadow: "none", border: "none" }}>
            <AccordionSummary  sx={{ border: "none" }}>
              <Typography display="flex" alignItems="center" color={"#555555"}>
                <IconRenderer iconName={category.icon} />
                {category.name}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {subcats.map((sub) => (
                <Box
                  key={sub.id}
                  onClick={() => onSubcategoryClick(sub.id, category.id)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    mr: 4,
                    color: "#555555",
                    "&:hover": {
                      color: "#000000",
                    },
                  }}
                >
                  <IconRenderer iconName={sub.icon} />
                  <Typography sx={{ my: 2 }}>{sub.name}</Typography>
                </Box>
              ))}
            </AccordionDetails>
          </Accordion>
        ) : (
          <Typography key={category.id} sx={{ ml: 3, my: 2 }}>
            <IconRenderer iconName={category.icon} />
            {category.name}
          </Typography>
        );
      })}
    </>
  );
};

export default CategoryList;
