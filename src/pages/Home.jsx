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
  const userData = useSelector((state) => state.auth.data);
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
                  imageUrl={
                    obj.imageUrl ? `http://localhost:4444${obj.imageUrl}` : ""
                  }
                  user={obj.user}
                  createdAt={obj.createdAt}
                  viewsCount={obj.viewsCount}
                  commentsCount={0}
                  tags={obj.tags}
                  isEditable={userData?._id === obj.user._id}
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
                    fullName: "Evgeny",
                    avatarUrl:
                      "https://sun6-20.userapi.com/impg/3qTOdn27me2FYISaeyd_Jjd5qFfTW0GE8_v9pA/koqZgmhQ7Mo.jpg?size=720x720&quality=95&sign=48e8fb7e19d604ca569009942ff5b88d&c_uniq_tag=MfjrI2k0V9v5A5QEcU2rOQoG2xVWnYTSGmhScqZfuDs&type=album",
                  },
                  text: "My comment",
                },
                {
                  user: {
                    fullName: "Ivan Zonin",
                    avatarUrl:
                      "https://journal.litres.ru/wp-content/uploads/2020/11/baker-fightclub-2048x1366.jpg",
                  },
                  text: "My second comment",
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
