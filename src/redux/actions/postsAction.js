import { notification } from "antd";
import { attachToken, privateAPI } from "../../config/constants";
import {
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  GET_LIVE_POSTS_REQUEST,
  GET_LIVE_POSTS,
  GET_POST,
  GET_POST_REQUEST,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_SUCCESS,
  DELET_COMMENT_FAIL,
  DELET_COMMENT_SUCCESS,
  DELET_COMMENT_REQUEST,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from "../types/generalTypes";

import { sendNotifications } from "./notificationAction";

export const createPost = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({ type: CREATE_POST_REQUEST });
      attachToken();
      const res = await privateAPI.post("/post/create", payload.data);
      if (res) {
        dispatch(sendNotifications(payload.socket, payload.receiverId));
        payload.navigate("/home");
      }
      dispatch({ type: CREATE_POST_SUCCESS });
    } catch (err) {
      dispatch({ type: CREATE_POST_FAIL });
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const deletePost = (payload) => {
  return async (dispatch) => {
    try {
      const res = await privateAPI.post("/post/delete-post", { post: payload });
      if (res) {
        dispatch(getAllPosts());
      }
    } catch (err) {}
  };
};

export const getPosts = (payload, loadState = true) => {
  return async (dispatch) => {
    try {
      const {
        sortFilter,
        searchFilter,
        countryFilter,
        tagsFilter,
        rangeFilter,
        freeFilter,
        categoryFilter,
        commissionState,
        typeState,
        purchaseFirstYes,
        purchaseFirstNo,
        page,
      } = payload;

      if (loadState) {
        dispatch({ type: GET_LIVE_POSTS_REQUEST });
      }
      attachToken();
      const res = await privateAPI.post(`/post/fetch/all/${sortFilter}`, {
        search: searchFilter !== null ? searchFilter : "",
        tags: tagsFilter,
        country: countryFilter !== null ? countryFilter : "",
        priceRange: rangeFilter,
        freeFilter,
        category: categoryFilter?.length > 0 ? categoryFilter[0] : "",
        comission: commissionState,
        type: typeState,
        purchaseFirst: purchaseFirstYes ? true : purchaseFirstNo ? false : "",
        page: page,
        limit: 8,
      });
      if (res) {
        dispatch({
          type: GET_LIVE_POSTS,
          payload: {
            data: res?.data?.data?.livePosts,
            // spread: page > 1 ? true : false,
            total: res?.data?.data?.total,
          },
        });
        // setPosts(res?.data?.data?.livePosts)
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const postReact = (payload) => {
  return async (dispatch) => {
    try {
      attachToken();
      const { data } = await privateAPI.post("/post/react-post", {
        post: payload.post,
        react: payload.react,
      });
      const post = data?.data?.post;

      if (data) {
        if (payload?.tab === "fav") {
          dispatch(getAllPosts());
        } else if (payload?.tab === "singlePost") {
          let posts = payload?.posts;

          let index = posts.findIndex((obj) => obj._id === post._id);

          if (index !== -1) {
            posts.splice(index, 1, post);
          }
          dispatch({
            type: GET_LIVE_POSTS,
            payload: {
              data: posts,
            },
          });
          dispatch({ type: GET_POST, payload: post });
        } else {
          let posts = payload?.posts;

          let index = posts.findIndex((obj) => obj._id === post._id);

          if (index !== -1) {
            posts.splice(index, 1, post);
          }
          dispatch({
            type: GET_LIVE_POSTS,
            payload: {
              data: posts,
            },
          });
        }
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const getAllPosts = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_POSTS_REQUEST });
      attachToken();
      const res = await privateAPI.get("/post/user/fetch");

      if (res) {
        dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: res.data.data });
        // setAllPosts(res.data.data)
      }
    } catch (err) {
      dispatch({ type: GET_ALL_POSTS_FAIL });
      console.log(err);
    }
  };
};

export const reportPost = (payload, setIsModalOpen) => {
  return async (dispatch) => {
    try {
      attachToken();
      const res = await privateAPI.post("/post/report", payload);
      if (res?.data) {
        setIsModalOpen?.(false);
        // dispatch(
        //   getPosts(
        //     {
        //       page: 1,
        //     },
        //     false
        //   )
        // );
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message,
        duration: 3,
      });
      console.log(err);
    }
  };
};

export const rePostFn = (payload) => {
  return async (dispatch) => {
    try {
      attachToken();
      const res = await privateAPI.post("/post/repost", payload);
      if (res) {
        notification.success({
          message: res?.data?.data,
          duration: 2,
        });
        dispatch(getAllPosts());
        // navigate('/home')
        console.log(res);
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
      console.log(err);
    }
  };
};

export const addComment = (payload, socket, receiverId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: ADD_COMMENT_REQUEST,
      });
      const res = await privateAPI.post("/post/add-comment", payload);

      if (res) {
        if (res?.data?.data?.comment?.user !== receiverId) {
          dispatch(sendNotifications(socket, receiverId));
        }
        dispatch({ type: GET_POST, payload: res?.data?.data?.post });

        dispatch({
          type: ADD_COMMENT_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({
        type: ADD_COMMENT_FAIL,
      });
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};

export const deleteComment = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: DELET_COMMENT_REQUEST,
      });
      const res = await privateAPI.post("/post/delete-comment", {
        commentId: payload.comment,
        postId: payload.post,
      });
      if (res) {
        dispatch({ type: GET_POST, payload: res?.data?.data?.post });

        dispatch({
          type: DELET_COMMENT_SUCCESS,
        });
      }
    } catch (err) {
      dispatch({
        type: DELET_COMMENT_FAIL,
      });
    }
  };
};

export const fetchSinglePost = (payload, loader = true) => {
  return async (dispatch) => {
    try {
      if (loader) {
        dispatch({ type: GET_POST_REQUEST });
      }
      const res = await privateAPI.get(`/post/fetch/${payload}`);
      if (res) {
        dispatch({ type: GET_POST, payload: res.data.data.post });
      }
    } catch (err) {
      notification.error({
        message: err?.response?.data?.message || "Server Error",
        duration: 3,
      });
    }
  };
};
