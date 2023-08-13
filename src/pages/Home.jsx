import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import axios from "../axios";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { postVariantTabs } from "../utils/motion";
import { postVariantPosts } from "../utils/motion";
import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";
import "./../pages/Home.scss";
import { fetchPosts, fetchTags } from "../redux/slices/posts";

export const Home = () => {
  const { posts, tags } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const isPostLoading = posts.status === "loading";
  const isTagsLoading = tags.status === "loading";
  React.useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
  }, []);
  console.log(posts);
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={postVariantTabs}
      >
        <Tabs
          style={{ marginBottom: 15 }}
          value={0}
          aria-label="tabs"
          sx={{
            "& button": { textColor: "#fff" },
            "& .MuiButtonBase-root-MuiTab-root": {
              color: "white",
            },
            "& button.Mui-unselected": { textColor: "fff" },
          }}
        >
          <Tab label="Новые" value={0} />
          <Tab label="Популярные" className="second_tab" />
        </Tabs>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={postVariantPosts}
      >
        <Grid container spacing={4}>
          <Grid item className="grid_post">
            {(isPostLoading ? [...Array(5)] : posts.items).map((obj, index) =>
              isPostLoading ? (
                <Post key={index} isLoading={true} />
              ) : (
                <Post
                  id={obj._id}
                  title={obj.title}
                  imageUrl={obj.imageUrl}
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={0}
                  tags={obj.tags}
                  isEditable
                />
              )
            )}
          </Grid>
          <Grid xs={4} item className="grid_side">
            <TagsBlock items={tags.items} isLoading={isTagsLoading} />
            <CommentsBlock
              items={[
                {
                  user: {
                    fullName: "Вася Пупкин",
                    avatarUrl: "https://mui.com/static/images/avatar/1.jpg",
                  },
                  text: "Это тестовый комментарий",
                },
                {
                  user: {
                    fullName: "Иван Иванов",
                    avatarUrl: "https://mui.com/static/images/avatar/2.jpg",
                  },
                  text: "When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top",
                },
              ]}
              isLoading={false}
            />
          </Grid>
        </Grid>
      </motion.div>
    </>
  );
};
