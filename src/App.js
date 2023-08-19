import Container from "@mui/material/Container";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getAuthMe } from "./redux/slices/auth";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isLogedIn);
  React.useEffect(() => {
    dispatch(getAuthMe());
  }, []);
  return (
    <>
      <Container maxWidth="lg">
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/add-post" element={<AddPost />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
