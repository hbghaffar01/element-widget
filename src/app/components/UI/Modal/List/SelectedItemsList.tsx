import React from "react";
import { Button } from "../../Button/Button";
import styles from "./SelectedItemsList.module.css";

interface SelectedItemsListProps {
  selectedElements: string[];
  onRemoveElement: (element: string) => void;
  onChangeChoice?: () => void;
  maxSelections?: number;
  heading?: string;
}

export const SelectedItemsList: React.FC<SelectedItemsListProps> = ({
  selectedElements,
  onRemoveElement,
  heading = "Selected Item",
}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.modalHeading}>{heading}</h3>
      {selectedElements.length > 0 && (
        <span className={styles.itemsCounter}>
          You currently have {selectedElements.length} selected
        </span>
      )}
      {selectedElements.length > 0 && (
        <div className={styles.itemContainer}>
          {selectedElements.map((element) => (
            <div key={element} className={styles.selectedItem}>
              {element}
              <Button
                variant="danger"
                onClick={() => onRemoveElement(element)}
                className={styles.removeButton}
              >
                ×
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
