import React from "react";

import { useParams } from "react-router-dom";
import { Post } from "../components/Post";
import { Index } from "../components/AddComment";
import { CommentsBlock } from "../components/CommentsBlock";
import { motion } from "framer-motion";
import { postVariantPosts } from "../utils/motion";
import axios from "../axios";

export const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const { id } = useParams();

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log("djsb");
      })
      .catch((error) => {
        console.warn(error);
        alert("Не получил статью");
      });
  }, []);

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost />;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={postVariantPosts}
    >
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={0}
        tags={data.tags}
        isFullPost
      >
        <p>{data.text}</p>
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
    </motion.div>
  );
};
