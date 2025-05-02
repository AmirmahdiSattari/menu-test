"use client"

import { Accordion, AccordionDetails, AccordionSummary, Button, ListItemText, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { ExpandMore } from '@mui/icons-material';
import axios from 'axios';

interface Category {
  id: number;
  name: string;
}

interface Subcategory {
  id: number;
  name: string;
  parentId: number;
}

interface Child {
  id: number;
  name: string;
  parentId: number;
}

const Page = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [children, setChildren] = useState<Child[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoryResponse = await axios.get('http://localhost:3001/categories');
        setCategories(categoryResponse.data);

        const subcategoryResponse = await axios.get('http://localhost:3001/subcategories');
        setSubcategories(subcategoryResponse.data);

        const childResponse = await axios.get('http://localhost:3001/children');
        setChildren(childResponse.data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  const getChildrenForSubcategory = (subcategoryId: number) => {
    return children.filter((child) => child.parentId === subcategoryId);
  };

  return (
    <div>
      <h3>Categories</h3>
      {categories.map((category) => (
        <Accordion key={category.id}>
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel-${category.id}-content`}
            id={`panel-${category.id}-header`}
          >
            <ListItemText primary={category.name} />
          </AccordionSummary>
          <AccordionDetails>
            {/* Render subcategories for the current category */}
            {subcategories
              .filter((sub) => sub.parentId === category.id)
              .map((subcategory) => (
                <Accordion key={subcategory.id}>
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls={`panel-${subcategory.id}-content`}
                    id={`panel-${subcategory.id}-header`}
                  >
                    <ListItemText primary={subcategory.name} />
                  </AccordionSummary>
                  <AccordionDetails>
                    {/* Render children for the current subcategory */}
                    {getChildrenForSubcategory(subcategory.id).map((child) => (
                      <MenuItem key={child.id}>{child.name}</MenuItem>
                    ))}
                  </AccordionDetails>
                </Accordion>
              ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default Page;
