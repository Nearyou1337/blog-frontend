import React from "react";

import { motion } from "framer-motion";
import { navVariants } from "../../utils/motion";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";

export const Header = () => {
  const isAuth = false;
  const onClickLogout = () => {};

  return (
    <motion.div variants={navVariants} initial="hidden" whileInView="show">
      <Container className={styles.root}>
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>BLOG LOGO</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to="/posts/create">
                  <button className={styles.first_btn}>Write</button>
                </Link>

                <button className={styles.second_btn} onClick={onClickLogout}>
                  Exit
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <button className={styles.first_btn}>Log in</button>
                </Link>
                <Link to="/register">
                  <button className={styles.second_btn}>Create</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </motion.div>
  );
};
