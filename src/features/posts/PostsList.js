import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost, addPost2, deletePost, getAllPosts } from "./postsSlice";
import { getAllUsers } from "../users/usersSlice";
const initialStatePost = {
  title: "",
  content: "",
  user: "",
};
const PostsList = () => {
  const posts = useSelector(getAllPosts);
  const users = useSelector(getAllUsers);
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
      dispatch(addPost2(post?.title, post?.content, post?.user));
      setPost(initialStatePost);
    } else {
      alert("Please fill all the fields");
    }
  };
  const handleRemovingPost = (id) => {
    console.log(id);
    dispatch(deletePost(id));
  };
  const getUser = (id) => users?.find((user) => user?.id === id)?.name;
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
        <div className="ip_label_con">
          <label htmlFor="post_user">Select User</label>
          <select
            name="user"
            id="post_user"
            onChange={(e) => handleInputChange(e)}
            defaultValue=""
          >
            <option value="">Please Choose User</option>
            {users?.map((user, i) => (
              <option value={user?.id} key={i}>
                {user?.name}
              </option>
            ))}
          </select>
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
            <p> By {getUser(p?.user) || "Unknown"}</p>
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
