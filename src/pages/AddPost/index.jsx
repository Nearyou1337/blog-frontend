import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SimpleMDE from "react-simplemde-editor";
import { motion } from "framer-motion";
import { postVariantPosts } from "../../utils/motion";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import "easymde/dist/easymde.min.css";
import styles from "./AddPost.module.scss";
import axios from "../../axios";

export const AddPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.auth.isLogedIn);
  const [isLoading, setLoading] = React.useState(false);
  const [text, setText] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [tags, setTags] = React.useState("");
  const inputRef = React.useRef(null);
  const isEditing = Boolean(id);

  const handleChangeFile = async (event) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append("image", file);
      const { data } = await axios.post("/upload", formData);
      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
      alert("Ошибка загрузки изображения");
    }
  };

  const onClickRemoveImage = () => {
    setImageUrl("");
  };
  const onSubmit = async () => {
    try {
      setLoading(true);
      const fields = {
        title,
        imageUrl,
        tags,
        text,
      };
      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, fields)
        : await axios.post("/posts", fields);
      const _id = isEditing ? id : data._id;
      navigate(`/posts/${_id}`);
    } catch (error) {
      console.warn(error);
      alert("Error post create");
    }
  };
  const onChange = React.useCallback((value) => {
    setText(value);
  }, []);
  React.useEffect(() => {
    if (id) {
      axios
        .get(`/posts/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setText(data.text);
          setImageUrl(data.imageUrl);
          setTags(data.tags);
        })
        .catch((error) => {
          console.warn(error);
          alert("Error post edit");
        });
    }
  }, []);
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "400px",
      autofocus: true,
      placeholder: "Write text...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );
  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/" />;
  }
  // console.log({ title, tags, value });

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={postVariantPosts}
    >
      <Paper
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
        style={{ padding: 30 }}
      >
        <button
          onClick={() => inputRef.current.click()}
          className={styles.first_btn}
        >
          Upload picture
        </button>
        <input ref={inputRef} type="file" onChange={handleChangeFile} hidden />
        {imageUrl && (
          <>
            <button className={styles.del_btn} onClick={onClickRemoveImage}>
              Delete
            </button>
            <img
              className={styles.image}
              src={`http://localhost:4444${imageUrl}`}
              alt="Uploaded"
            />
          </>
        )}
        <br />
        <br />
        <TextField
          classes={{ root: styles.title }}
          variant="standard"
          placeholder="Article title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          classes={{ root: styles.tags }}
          variant="standard"
          placeholder="Tags..."
          fullWidth
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <SimpleMDE
          className={styles.editor}
          value={text}
          onChange={onChange}
          options={options}
        />
        <div className={styles.buttons}>
          <button className={styles.first_btn} onClick={onSubmit}>
            {isEditing ? "Save" : "Send"}
          </button>
          <a href="/">
            <button className={styles.second_btn}>Cancel</button>
          </a>
        </div>
      </Paper>
    </motion.div>
  );
};
