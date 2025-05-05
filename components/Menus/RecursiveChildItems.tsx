"use client";

import { Box, Typography } from "@mui/material";

import { Child } from "./types";
import React from "react";

const activeRed = "#F45050";
const grayBorder = "#DEDEDE";

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
          <Box
            key={child.id}
            sx={{
              mr: 7,
              py: 0,
              position: "relative",
              borderRight: `2px solid ${grayBorder}`,
            }}
          >
            <Typography
              onClick={() => onChildClick(child.id)}
              sx={{
                my: 0,
                py: 1.5,
                pr: 2,
                cursor: "pointer",
                position: "relative",
                "&::after":
                  isActive && !hasNested
                    ? {
                        content: '""',
                        position: "absolute",
                        right: "-2px",
                        top: 0,
                        bottom: 0,
                        width: "2px",
                        backgroundColor: activeRed,
                      }
                    : {},
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
