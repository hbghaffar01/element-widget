import React, { ReactNode } from "react";
import styles from "./ProjectSummary.module.css";

interface ProjectSummaryProps {
  children?: ReactNode;
}

const ElementWidgetProjectSummary: React.FC<ProjectSummaryProps> = ({
  children,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>
          Element Selection Widget Implementation, To test the task click this
          button
        </h3>
        {children}
      </div>

      <div className={styles.summarySection}>
        <h2>Project Specifications</h2>
        <ul className={styles.featureList}>
          <li>Framework: Next.js 15</li>
          <li>React Version: React 19</li>
          <li>Styling: Pure CSS (No UI Frameworks)</li>
          <li>State Management: Implemented without external libraries</li>
        </ul>
      </div>

      <div className={styles.summarySection}>
        <h2>Key Features Implemented</h2>
        <ul className={styles.featureList}>
          <li>Limit of 3 selectable elements from a list</li>
          <li>Dynamic selection dialog with search functionality</li>
          <li>Real-time element filtering</li>
          <li>Responsive and interactive UI</li>
          <li>Save and Cancel options</li>
        </ul>
      </div>

      <div className={styles.summarySection}>
        <h2>Technical Achievements</h2>
        <ul className={styles.featureList}>
          <li>Implemented custom selection logic</li>
          <li>Created responsive modal dialog</li>
          <li>Developed custom CSS for styling</li>
          <li>Managed state without Redux or external state management</li>
          <li>Ensured maximum of 3 element selections</li>
        </ul>
      </div>

      <div className={styles.summarySection}>
        <h2>Interaction Flow</h2>
        <div className={styles.interactionFlow}>
          <div className={styles.flowStep}>
            <span>1. Open Selection Dialog</span>
          </div>
          <div className={styles.flowStep}>
            <span>2. Search and Filter Elements</span>
          </div>
          <div className={styles.flowStep}>
            <span>3. Select Up to 3 Elements</span>
          </div>
          <div className={styles.flowStep}>
            <span>4. Save or Cancel Selection</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElementWidgetProjectSummary;
