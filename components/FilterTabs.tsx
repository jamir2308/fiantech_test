"use client";

import { FilterTabsProps, TabButtonProps } from "@/types/componetsProps";
import React from "react";
import styled from "styled-components";

const TabsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  border-bottom: 2px solid #e5e7eb;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  gap: 1rem;

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TabButton = styled.button<TabButtonProps>`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ $isActive }) => ($isActive ? "#2563eb" : "#4b5563")};
  border-bottom: 2px solid;
  border-color: ${({ $isActive }) => ($isActive ? "#2563eb" : "transparent")};
  margin-bottom: -2px;
  white-space: nowrap;
  transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #1d4ed8;
  }

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
  }
`;

const FilterTabs: React.FC<FilterTabsProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <TabsContainer role="tablist" aria-label="Filtrar productos por categoría">
      <TabButton
        role="tab"
        aria-selected={selectedCategory === "Todos"}
        $isActive={selectedCategory === "Todos"}
        onClick={() => onSelectCategory("Todos")}
      >
        Todos
      </TabButton>
      {categories.map((category) => (
        <TabButton
          key={category}
          role="tab"
          aria-selected={selectedCategory === category}
          $isActive={selectedCategory === category}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </TabButton>
      ))}
    </TabsContainer>
  );
};

export default FilterTabs;