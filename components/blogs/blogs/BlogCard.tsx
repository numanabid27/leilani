import style from "./Blog.module.scss";
import { useState } from "react";
import Link from "next/link";

const BlogCard = ({ title, blog_image, createdAt, id }: any) => {
  return (
    <>
      <div className={style.card}>
        <img src={blog_image} alt="" />
        <div className={style.text}>
          <div className={style.card_border}>
            <div className={style.blog_text__inner}>
              <span>{createdAt}</span>
              <h3>{title}</h3>
            </div>
          </div>
          <div className={style.read_more}>
            <Link href={`/blogs/${id}`}>
              Read more
              <span>
                <img src="./images/Arrow_18.png" alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
