import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost, addPost2, deletePost, getAllPosts } from "./postsSlice";
const initialStatePost = {
  title: "",
  content: "",
};
const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const dispatch = useDispatch();
  const [post, setPost] = useState(initialStatePost);

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };
  const handleCreatePost = (e) => {
    e.preventDefault();
    if (post?.content && post?.title) {
      dispatch(addPost({ ...post, id: nanoid() }));
      setPost(initialStatePost);
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleCreatePost2 = (e) => {
    e.preventDefault();
    if (post?.content && post?.title) {
      dispatch(addPost2(post?.title, post?.content));
      setPost(initialStatePost);
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleRemovingPost = (id) => {
    console.log(id);
    dispatch(deletePost(id));
  };
  return (
    <section>
      <div style={{ width: "90%" }}>
        <div className="ip_label_con">
          <label htmlFor="post_title">Title</label>
          <input
            id="post_title"
            type="text"
            name="title"
            value={post.title}
            onChange={(e) => handleInputChange(e)}
            style={{ flexGrow: 1 }}
          />
        </div>
        <div className="ip_label_con">
          <label htmlFor="post_content">Content</label>
          <input
            id="post_title"
            type="textarea"
            name="content"
            value={post.content}
            onChange={(e) => handleInputChange(e)}
            style={{ flexGrow: 1 }}
          />
        </div>
        <button className="primary_button" onClick={(e) => handleCreatePost(e)}>
          Create Post
        </button>
        <button
          className="primary_button"
          onClick={(e) => handleCreatePost2(e)}
        >
          Create Post Alternative
        </button>
      </div>
      <p> Total posts : {posts?.length}</p>
      <div style={{ width: "96%" }}>
        {posts.map((p, i) => (
          <article key={i} className="post_con">
            <h5>{`${i + 1} - ${p?.title}`} </h5>
            <p>{p?.content}</p>
            <button
              className="remove_button"
              onClick={() => handleRemovingPost(p?.id)}
            >
              X
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default PostsList;
