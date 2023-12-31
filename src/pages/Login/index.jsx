import React from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import { fetchUserData } from "../../redux/slices/auth.js";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { postVariantFooter } from "../../utils/motion";
import { useForm } from "react-hook-form";
import styles from "./Login.module.scss";

export const Login = () => {
  const isAuth = useSelector((state) => state.auth.isLogedIn);

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
  const onSubmit = async (values) => {
    const data = await dispatch(fetchUserData(values));
    if (!data.payload) {
      return alert("Invalid token");
    }
    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
    console.log(data);
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
          <button
            disabled={!isValid}
            type="submit"
            className={styles.first_btn}
          >
            Come in
          </button>
        </form>
      </Paper>
    </motion.div>
  );
};
