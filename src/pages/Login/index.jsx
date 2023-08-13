import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { fetchUserData, selectIsAuth } from "../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { postVariantFooter } from "../../utils/motion";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";

export const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const onSubmit = (values) => {
    dispatch(fetchUserData(values));
  };
  console.log(isAuth);
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={postVariantFooter}
    >
      <Paper
        classes={{ root: styles.root }}
        sx={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      >
        <Typography
          classes={{ root: styles.title }}
          variant="h5"
          color="primary"
        >
          Log in
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            className={styles.field}
            label="E-Mail"
            type="email"
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register("email", { required: "Укажите почту" })}
            fullWidth
          />
          <TextField
            className={styles.field}
            label="Password"
            helperText={errors.password?.message}
            error={Boolean(errors.password?.message)}
            fullWidth
            {...register("password", { required: "Укажите пароль" })}
          />
          <button type="submit" className={styles.first_btn}>
            Come in
          </button>
        </form>
      </Paper>
    </motion.div>
  );
};
