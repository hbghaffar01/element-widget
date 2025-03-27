"use client";

import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { toggleElement, removeElement } from "@/store/elementSlice";
import { filterElements } from "@/utils/filterElements";
import { Modal } from "@/components/UI/Modal/Modal";
import { SearchFilter } from "@/components/UI/Modal/SearchFilter/SearchFilter";
import { SelectedItemsList } from "@/components/UI/Modal/List/SelectedItemsList";
import { ModalActions } from "@/components/UI/Modal/ModalActions";
import styles from "./ElementSelector.module.css";
import { Button } from "../UI/Button/Button";
import ProjectSummary from "../UI/ProjectSummary";

export const ElementSelector: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("No filter");

  const dispatch = useAppDispatch();
  const { allElements, selectedElements } = useAppSelector(
    (state) => state.elements
  );

  const filteredElements = filterElements(allElements, searchTerm, filterType);

  const updateTitle = (newLength: number) => {
    document.title = newLength
      ? `Element Selector (${newLength})`
      : "Element Selector";
  };

  const handleElementToggle = (element: string) => {
    dispatch(toggleElement(element));
    const newLength = selectedElements.includes(element)
      ? selectedElements.length - 1
      : selectedElements.length + 1;
    updateTitle(newLength);
  };

  const handleElementRemove = (element: string) => {
    dispatch(removeElement(element));
    updateTitle(selectedElements.length - 1);
  };

  const handleSave = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <ProjectSummary>
        <Button
          onClick={() => setIsModalOpen(true)}
          className={styles.changeChoiceButton}
        >
          Change my choice
        </Button>
      </ProjectSummary>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <SelectedItemsList
          selectedElements={selectedElements}
          onRemoveElement={handleElementRemove}
          heading="Select Items"
        />

        <SearchFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          filterType={filterType}
          onFilterChange={setFilterType}
        />

        <div className={styles.modalInner}>
          <div className={styles.elementList}>
            {filteredElements.map((element) => (
              <label key={element} className={styles.elementItem}>
                <input
                  type="checkbox"
                  checked={selectedElements.includes(element)}
                  onChange={() => handleElementToggle(element)}
                  disabled={
                    !selectedElements.includes(element) &&
                    selectedElements.length >= 3
                  }
                />
                {element}
              </label>
            ))}
          </div>
        </div>

        <ModalActions
          onSave={handleSave}
          selectedElements={selectedElements}
          handleElementRemove={handleElementRemove}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export const metadata = {
  title: "Element Selector",
  description: "A modern element selection interface",
};
