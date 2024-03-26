import React, { useEffect } from "react";
import { Empty } from "antd";
import PostNew from "./PostNew";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../other/Loader";
import { getAllPosts } from "../../redux/actions/postsAction";

const FavPosts = ({ posts }) => {
  const { loading } = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <div className="fav-posts-container">
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
              return <PostNew key={index} data={data} tabName={"fav"} />;
            })
          )}
        </div>
      )}
    </div>
  );
};

export default FavPosts;
