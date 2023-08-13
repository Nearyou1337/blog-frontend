import Container from "@mui/material/Container";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";

function App(props) {
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
