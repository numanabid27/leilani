import JStoHTML from "@/components/utils/js-to-html/JStoHTML";

import Head from "next/head";

const blogDetail = ({ data }: any) => {
  const blog = data.data?.blog;
  // console.log(blog)
  const content = blog.content ? blog.content : "[]";
  const parsedContent = content ? JSON.parse(content) : [];

  return (
    <>
      <Head>
        <title>{blog && blog.title}</title>
      </Head>
      <main>
        <div className="blog_detail">
          <img src={blog && blog.blog_image} alt="" />
          <h1>{blog && blog.title}</h1>
          <p>{blog && blog.excerpt}</p>
        </div>
        <div className="blog_detail_text">
          {parsedContent &&
            parsedContent.map((c: any) => <JStoHTML content={c} key={c.id} />)}
        </div>
      </main>
    </>
  );
};

export default blogDetail;

export const getStaticPaths = async () => {
  try {
    const res = await fetch("https://leilani-blogs.vercel.app/blog");
    const data = await res.json();
    if (data.data?.blogs) {
      console.log(data.data.blogs);
      const paths = data.data.blogs?.map((blog: any) => {
        return {
          params: {
            id: blog._id.toString(),
          },
        };
      });
      return {
        paths: paths,
        fallback: false,
      };
    }
    return {
      paths: [],
      fallback: false,
    };
  } catch (err) {
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async (context: any) => {
  const _id = context.params.id;
  const res = await fetch(`https://leilani-blogs.vercel.app/blog/${_id}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
