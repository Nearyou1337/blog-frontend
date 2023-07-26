import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import styles from "./Login.module.scss";

export const Registration = () => {
  return (
    <Paper
      classes={{ root: styles.root }}
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <Typography classes={{ root: styles.title }} variant="h5" color="#fff">
        Create an account
      </Typography>
      <div className={styles.avatar}>
        <Avatar sx={{ width: 100, height: 100 }} />
      </div>
      <TextField
        sx={{
          "& .MuiFormLabel-root": {
            color: "label.main",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "primary.main",
          },
          border: "1px solid #DCDCDC",
          borderRadius: 1,
        }}
        className={styles.field}
        label="Full name"
        fullWidth
        color="primary"
      />
      <TextField
        sx={{
          "& .MuiFormLabel-root": {
            color: "label.main",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "primary.main",
          },
          border: "1px solid #DCDCDC",
          borderRadius: 1,
        }}
        className={styles.field}
        label="E-Mail"
        fullWidth
        color="primary"
      />
      <TextField
        sx={{
          "& .MuiFormLabel-root": {
            color: "label.main",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "primary.main",
          },
          border: "1px solid #DCDCDC",
          borderRadius: 1,
        }}
        className={styles.field}
        label="Password"
        fullWidth
        color="primary"
      />
      <button className={styles.first_btn}>Create</button>
    </Paper>
  );
};
