import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Slider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterSection = () => {
  const [priceRange, setPriceRange] = useState<number[]>([0, 50000000]);
  const [statusFilters, setStatusFilters] = useState({
    active: false,
    expired: false,
    sold: false,
  });

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStatusFilters({
      ...statusFilters,
      [event.target.name]: event.target.checked,
    });
  };



  return (
    <>
      {/* قیمت Section */}
      <Accordion
        disableGutters
        square
        elevation={0}
        sx={{
         
          boxShadow: "none",
          border: "none",
          borderBottom: "1px solid #ccc",
          "&::before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            flexDirection: "row-reverse",
            py: 4,
            gap: 1,
            justifyContent: "flex-end",
            "& .MuiAccordionSummary-content": {
              margin: 0,
              flexGrow: 0,
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Typography fontWeight="bold" color={"#555555"}>
            قیمت
          </Typography>
        </AccordionSummary>
        <AccordionDetails dir="rtl">
          <FormControl fullWidth>
            <FormLabel sx={{ mb: 2, fontWeight: "bold" }}>
              محدوده قیمت (تومان)
            </FormLabel>
            <Slider
              value={priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              step={500000}
             
              min={0}
              max={100000000}
              sx={{ mx: 1 ,color:"#F45050"}}
            />
            <Box display="flex" justifyContent="space-between" mt={1} px={1}>
              <Typography variant="body2">
                از: {priceRange[0].toLocaleString()} تومان
              </Typography>
              <Typography variant="body2">
                تا: {priceRange[1].toLocaleString()} تومان
              </Typography>
            </Box>
          </FormControl>
        </AccordionDetails>
      </Accordion>

      {/* وضعیت آگهی Section */}
      <Accordion
        disableGutters
        square
        elevation={0}
        sx={{
 
          boxShadow: "none",
          border: "none",
          borderBottom: "1px solid #ccc",
          "&::before": {
            display: "none",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            flexDirection: "row-reverse",
            py: 4,
            gap: 1,
            justifyContent: "flex-end",
            "& .MuiAccordionSummary-content": {
              margin: 0,
              flexGrow: 0,
              justifyContent: "flex-end",
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <Typography fontWeight="bold" color={"#555555"}>
            وضعیت آگهی
          </Typography>
        </AccordionSummary>
        <AccordionDetails dir="rtl">
          <FormControl component="fieldset" variant="standard">
            <FormLabel sx={{ mb: 1, fontWeight: "bold" }}>وضعیت</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={statusFilters.active}
                    onChange={handleStatusChange}
                    name="active"
                  />
                }
                label="فعال"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={statusFilters.expired}
                    onChange={handleStatusChange}
                    name="expired"
                  />
                }
                label="منقضی شده"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={statusFilters.sold}
                    onChange={handleStatusChange}
                    name="sold"
                  />
                }
                label="فروخته شده"
              />
            </FormGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default FilterSection;
