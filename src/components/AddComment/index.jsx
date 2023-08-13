import React from "react";

import styles from "./AddComment.module.scss";

import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";

export const Index = () => {
  return (
    <>
      <div className={styles.root}>
        <Avatar
          classes={{ root: styles.avatar }}
          src="https://d1466nnw0ex81e.cloudfront.net/n_iv/600/2870417.jpg"
        />
        <div className={styles.form}>
          <TextField
            className={styles.form_text}
            sx={{
              "& .MuiFormLabel-root": {
                color: "label.main",
              },
              "& .MuiFormLabel-root.Mui-focused": {
                color: "primary.main",
              },
            }}
            inputProps={{ style: { color: "#fff" } }}
            label="Write comment"
            variant="outlined"
            maxRows={10}
            multiline
            fullWidth
          />
          <button className={styles.first_btn}>Send</button>
        </div>
      </div>
    </>
  );
};
