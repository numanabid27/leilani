import BlogCard from "./BlogCard";
import style from "./Blog.module.scss";
import dateConverter from "@/components/utils/date-convertor/date-convertor";

const Blog = ({ allBlogs }: any) => {
  return (
    <>
      <div className={style.container}>
        {allBlogs?.data?.blogs &&
          allBlogs?.data.blogs.map(
            ({ title, blog_image, createdAt, _id }: any) => {
              return (
                <BlogCard
                  key={_id}
                  id={_id}
                  title={title}
                  blog_image={blog_image}
                  createdAt={dateConverter(createdAt)}
                />
              );
            }
          )}
      </div>
    </>
  );
};

export default Blog;
