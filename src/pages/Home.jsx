import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";

import { Post } from "../components/Post";
import { TagsBlock } from "../components/TagsBlock";
import { CommentsBlock } from "../components/CommentsBlock";

export const Home = () => {
  return (
    <>
      <Tabs
        style={{ marginBottom: 15 }}
        value={0}
        aria-label="tabs"
        sx={{ "& button": { textColor: "#fff" } }}
      >
        <Tab label="Новые" value={0} />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Why are bald men so cool"
              imageUrl="https://fikiwiki.com/uploads/posts/2022-02/1644894977_1-fikiwiki-com-p-kartinka-boitsovskii-klub-1.jpg"
              user={{
                avatarUrl:
                  "https://w.forfun.com/fetch/ba/ba99ec5040cc649c2f697d61818087f0.jpeg",
                fullName: "Nikita Loktev",
              }}
              createdAt={"23 июkя 2023 г."}
              viewsCount={50}
              commentsCount={6}
              tags={["bald", "cool", "lokot"]}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock
            items={["react", "typescript", "заметки"]}
            isLoading={false}
          />
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
    </>
  );
};
