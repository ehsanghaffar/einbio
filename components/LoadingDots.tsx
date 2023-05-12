import React from "react";
import styles from "../styles/loading-dots.module.css";

const LoadingDots = ({
  color = "#000",
  style,
}: {
  color: string;
  style?: string;
}) => {
  const loadingStyle = style === "small" ? styles.loading2 : styles.loading;

  return (
    <span className={loadingStyle}>
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
      <span style={{ backgroundColor: color }} />
    </span>
  );
};

LoadingDots.defaultProps = {
  style: "small",
};

export default LoadingDots;
