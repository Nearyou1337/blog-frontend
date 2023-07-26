import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";

export const Login = () => {
  return (
    <Paper
      classes={{ root: styles.root }}
      sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
    >
      <Typography classes={{ root: styles.title }} variant="h5" color="primary">
        Log in
      </Typography>
      <TextField
        className={styles.field}
        label="E-Mail"
        sx={{
          "& .MuiFormLabel-root": {
            color: "label.main",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "primary.main",
          },
          "& .MuiOutlinedInput-root ": {
            color: "#fff",
          },
        }}
        error
        helperText="Неверно указана почта"
        fullWidth
      />
      <TextField
        className={styles.field}
        label="Password"
        fullWidth
        sx={{
          "& .MuiFormLabel-root": {
            color: "label.main",
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: "primary.main",
          },
          "& .MuiFormLabel-root": {
            color: "#fff",
          },
          "& .MuiOutlinedInput-root ": {
            color: "#fff",
          },
          border: "1px solid #DCDCDC",
          // borderRadius: 1,
        }}
      />
      <button className={styles.first_btn}>Come in</button>
    </Paper>
  );
};
