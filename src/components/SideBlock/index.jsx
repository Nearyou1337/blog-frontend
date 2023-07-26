import React from "react";
import styles from "./SideBlock.module.scss";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

export const SideBlock = ({ title, children }) => {
  return (
    <Paper
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      classes={{ root: styles.root }}
    >
      <Typography variant="h6" classes={{ root: styles.title }}>
        {title}
      </Typography>
      <Typography variant="h6" classes={{ root: styles.child }}>
        {children}
      </Typography>
    </Paper>
  );
};
