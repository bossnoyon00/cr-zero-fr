import React, { useEffect } from "react";
// import Post from './Post'
import { Empty } from "antd";
import PostNew from "./PostNew";
import { getAllPosts } from "../../redux/actions/postsAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../other/Loader";

const ReportedPosts = ({ posts }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
  return (
    <div className="reported-post-container">
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
              return <PostNew key={index} data={data} tabName={"reported"} />;
            })
          )}
        </div>
      )}
    </div>
  );
};

export default ReportedPosts;
