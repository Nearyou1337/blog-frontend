import React from "react";
import Button from "@mui/material/Button";

import styles from "./Header.module.scss";
import Container from "@mui/material/Container";

export const Header = () => {
  const isAuth = true;
  const onClickLogout = () => {};

  return (
    <Container className={styles.root}>
      <div className={styles.inner}>
        <a className={styles.logo} href="/">
          <div>BLOG LOGO</div>
        </a>
        <div className={styles.buttons}>
          {isAuth ? (
            <>
              <a href="/posts/create">
                <button className={styles.first_btn}>Write</button>
              </a>

              <button className={styles.second_btn} onClick={onClickLogout}>
                Exit
              </button>
            </>
          ) : (
            <>
              <a href="/login">
                <button className={styles.first_btn}>Log in</button>
              </a>
              <a href="/register">
                <button className={styles.second_btn}>Create</button>
              </a>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};
