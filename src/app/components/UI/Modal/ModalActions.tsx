import React from "react";
import { Button } from "../Button/Button";
import styles from "./ModalActions.module.css";

interface ModalActionsProps {
  onSave: () => void;
  onCancel: () => void;
  selectedElements: string[];
  handleElementRemove: (element: string) => void;
  saveLabel?: string;
  cancelLabel?: string;
}

export const ModalActions: React.FC<ModalActionsProps> = ({
  onSave,
  onCancel,
  selectedElements,
  handleElementRemove,
  saveLabel = "Save",
  cancelLabel = "Cancel",
}) => {
  return (
    <>
      {selectedElements.length > 0 && (
        <div className={styles.modalHeader}>
          <h3 className={styles.modalFooterHeading}>Current Selected Items:</h3>
          <div className={styles.itemContainer}>
            {selectedElements.map((element) => (
              <div key={element} className={styles.selectedItem}>
                {element}
                <Button
                  variant="danger"
                  onClick={() => handleElementRemove(element)}
                  className={styles.removeButton}
                >
                  ×
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.modalActions}>
        <Button variant="primary" onClick={onSave}>
          {saveLabel}
        </Button>
        <Button variant="secondary" onClick={onCancel}>
          {cancelLabel}
        </Button>
      </div>
    </>
  );
};
