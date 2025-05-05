import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import IconRenderer from "./IconRenderer";

interface Category {
  id: number;
  name: string;
  icon?: string;
}

interface Subcategory {
  id: number;
  name: string;
  parentId: number;
  icon?: string;
}

interface Props {
  categories: Category[];
  subcategoryGroups: Record<number, Subcategory[]>;
  onSubcategorySelect: (id: number) => void;
}

const activeRed = "#F45050";

const CategoryAccordion = ({
  categories,
  subcategoryGroups,
  onSubcategorySelect,
}: Props) => (
  <>
    {categories.map((category) => {
      const subcats = subcategoryGroups[category.id] || [];

      return subcats.length > 0 ? (
        <Accordion
          key={category.id}
          disableGutters
          sx={{ boxShadow: "none", border: "none" }}
        >
          <AccordionSummary>
            <Typography display="flex" alignItems="center">
              <IconRenderer iconName={category.icon} />
              {category.name}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ ml: 2 }}>
            {subcats.map((subcategory) => (
              <Box
                key={subcategory.id}
                onClick={() => onSubcategorySelect(subcategory.id)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  color: "inherit",
                  "&:hover": { color: activeRed },
                }}
              >
                <IconRenderer iconName={subcategory.icon} />
                <Typography sx={{ my: 1 }}>{subcategory.name}</Typography>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ) : (
        <Typography key={category.id} sx={{ ml: 2, my: 1 }}>
          <IconRenderer iconName={category.icon} />
          {category.name}
        </Typography>
      );
    })}
  </>
);

export default CategoryAccordion;
