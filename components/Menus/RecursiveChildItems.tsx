"use client";

import { Box, Typography } from "@mui/material";

import { Child } from "./types";
import React from "react";

const activeRed = "#e53935";

const RecursiveChildItems = ({
  parentId,
  childrenGroups,
  activeChildId,
  onChildClick,
}: {
  parentId: number;
  childrenGroups: Record<number, Child[]>;
  activeChildId?: number;
  onChildClick: (id: number) => void;
}) => {
  const children = childrenGroups[parentId] || [];
  if (!children.length) return null;

  return (
    <>
      {children.map((child) => {
        const hasNested = (childrenGroups[child.id] || []).length > 0;
        const isActive = child.id === activeChildId;

        return (
          <Box key={child.id} sx={{ mr: 4, mt: 2 }}>
            <Typography
              onClick={() => onChildClick(child.id)}
              sx={{
                fontWeight: hasNested ? "bold" : "normal",
                my: 1,
                mr: 2,
                pr: 1,
                cursor: "pointer",
                borderRight: isActive && !hasNested ? `3px solid ${activeRed}` : "none",
                color: "#555555",
                "&:hover": {
                  color: "#000000",
                },
              }}
            >
              {child.name}
            </Typography>
            {isActive && hasNested && (
              <RecursiveChildItems
                parentId={child.id}
                childrenGroups={childrenGroups}
                activeChildId={activeChildId}
                onChildClick={onChildClick}
              />
            )}
          </Box>
        );
      })}
    </>
  );
};

export default RecursiveChildItems;
