import React from "react";
import styles from "./SearchFilter.module.css";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterType: string;
  onFilterChange: (value: string) => void;
}

export const SearchFilter: React.FC<SearchFilterProps> = ({
  searchTerm,
  onSearchChange,
  filterType,
  onFilterChange,
}) => {
  return (
    <div className={styles.searchFilter}>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className={styles.searchInput}
      />
      <select
        value={filterType}
        onChange={(e) => onFilterChange(e.target.value)}
        className={styles.filterSelect}
      >
        <option>Default</option>
        <option value=">10">&gt;10</option>
        <option value=">100">&gt;100</option>
        <option value=">200">&gt;200</option>
      </select>
    </div>
  );
};
