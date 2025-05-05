"use client";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { Category, Child, Subcategory } from "./types";
import React, { useEffect, useMemo, useState } from "react";

import BackButton from "./BackButton";
import CategoryHeader from "./CategoryHeader";
import CategoryList from "./CategoryList";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterSection from "../FilterSection";
import RecursiveChildItems from "./RecursiveChildItems";
import axios from "axios";

const SideMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [children, setChildren] = useState<Child[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );
  const [selectedSubcategoryId, setSelectedSubcategoryId] = useState<
    number | null
  >(null);
  const [activeChildId, setActiveChildId] = useState<number | undefined>(
    undefined
  );
  const [focusedChildId, setFocusedChildId] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catRes, subcatRes, childRes] = await Promise.all([
          axios.get("http://localhost:3001/categories"),
          axios.get("http://localhost:3001/subcategories"),
          axios.get("http://localhost:3001/children"),
        ]);
        setCategories(catRes.data);
        setSubcategories(subcatRes.data);
        setChildren(childRes.data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    fetchData();
  }, []);

  const subcategoryGroups = useMemo(() => {
    const groups: Record<number, Subcategory[]> = {};
    subcategories.forEach((s) => {
      if (!groups[s.parentId]) groups[s.parentId] = [];
      groups[s.parentId].push(s);
    });
    return groups;
  }, [subcategories]);

  const childrenGroups = useMemo(() => {
    const groups: Record<number, Child[]> = {};
    children.forEach((c) => {
      if (!groups[c.parentId]) groups[c.parentId] = [];
      groups[c.parentId].push(c);
    });
    return groups;
  }, [children]);

  const resetMenu = () => {
    setSelectedCategoryId(null);
    setSelectedSubcategoryId(null);
    setFocusedChildId(null);
    setActiveChildId(undefined);
  };

  const handleSubcategoryClick = (subId: number, catId: number) => {
    setSelectedCategoryId(catId);
    setSelectedSubcategoryId(subId);
    setFocusedChildId(null);
    setActiveChildId(undefined);
  };

  const renderMenu = () => {
    if (focusedChildId !== null) {
      const parent = children.find((c) => c.id === focusedChildId);

      const cat = categories.find((c) => c.id === selectedCategoryId);
      if (!parent || !cat) return null;


      return (
        <>
          <BackButton onClick={() => setFocusedChildId(null)} label="بازگشت" />
          <CategoryHeader iconName={cat.icon} name={cat.name} icon={true}/>
          <CategoryHeader name={parent.name} icon={false} />
          <RecursiveChildItems
            parentId={parent.id}
            childrenGroups={childrenGroups}
            activeChildId={activeChildId}
            onChildClick={(id) => {
              const hasNested = (childrenGroups[id] || []).length > 0;
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              hasNested ? setFocusedChildId(id) : setActiveChildId(id);
            }}
          />
        </>
      );
    }

    if (selectedSubcategoryId !== null && selectedCategoryId !== null) {
      const sub = subcategories.find((s) => s.id === selectedSubcategoryId);
      const cat = categories.find((c) => c.id === selectedCategoryId);
      if (!sub || !cat) return null;

      return (
        <>
          <BackButton onClick={resetMenu} label="همه آگهی ها" />
          <CategoryHeader iconName={cat.icon} name={cat.name} icon={true}/>
          <CategoryHeader iconName={sub.icon} name={sub.name} icon={false}/>
          <RecursiveChildItems
            parentId={sub.id}
            childrenGroups={childrenGroups}
            activeChildId={activeChildId}
            onChildClick={(id) => {
              const hasNested = (childrenGroups[id] || []).length > 0;
              // eslint-disable-next-line @typescript-eslint/no-unused-expressions
              hasNested ? setFocusedChildId(id) : setActiveChildId(id);
            }}
          />
        </>
      );
    }

    return (
      <CategoryList
        categories={categories}
        subcategoryGroups={subcategoryGroups}
        onSubcategoryClick={handleSubcategoryClick}
      />
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Accordion
        defaultExpanded
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
            pt: 4,
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
          <Typography fontWeight="bold" color="#555555">
            دسته‌بندی
          </Typography>
        </AccordionSummary>

        <AccordionDetails sx={{  p: 0,  marginBottom:6 }}>
          {renderMenu()}
        </AccordionDetails>
      </Accordion>

      <FilterSection />
    </Box>
  );
};

export default SideMenu;
