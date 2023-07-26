import React from "react";

import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";

export const FullPost = () => {
  return (
    <>
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
        isFullPost
      >
        <p>
          Hey there! You may ask why all the bald men in movies and books are so
          masculine and strong. and I will answer you: what is on your head
          speaks directly about who you are. A bald head is dangerous, brutal
          and stylish
        </p>
      </Post>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: "Evgen Trubnikov",
              avatarUrl:
                "https://w.forfun.com/fetch/ba/ba99ec5040cc649c2f697d61818087f0.jpeg",
            },
            text: "Ah sheet, you are right",
          },
          {
            user: {
              fullName: "Ivan Semenov",
              avatarUrl:
                "https://kalix.club/uploads/posts/2022-12/1671575261_kalix-club-p-boitsovskii-klub-oboi-na-telefon-pinterest-40.jpg",
            },
            text: "im not bald",
          },
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  );
};
