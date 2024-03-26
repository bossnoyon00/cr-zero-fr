import React, { useEffect } from "react";
// import Post from './Post'
import { Empty } from "antd";
import PostNew from "./PostNew";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../other/Loader";
import { getAllPosts } from "../../redux/actions/postsAction";

const ExpiredPosts = ({ posts }) => {
  const { loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="expired-post-container">
      <div className="page-header"></div>
      {loading ? (
        <Loader />
      ) : (
        <div className="post-list-container">
          {posts?.length == 0 ? (
            <div>
              <Empty description={"No Posts"} />
            </div>
          ) : (
            posts?.map((data, index) => {
              return <PostNew key={index} data={data} tabName={"expired"} />;
            })
          )}
        </div>
      )}
    </div>
  );
};

export default ExpiredPosts;
