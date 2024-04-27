import {
  GET_LIVE_POSTS_REQUEST,
  GET_LIVE_POSTS,
  GET_POST,
  GET_POST_REQUEST,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_ALL_POSTS_FAIL,
  DELET_COMMENT_REQUEST,
  DELET_COMMENT_SUCCESS,
  DELET_COMMENT_FAIL,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from "../types/generalTypes";

const initialState = {
  allPosts: {},
  livePosts: [],
  loading: false,
  singlePost: {},
  getPostLoading: false,
  totalLivePosts: 0,
};

const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_POST_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }
    case CREATE_POST_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }
    case GET_LIVE_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_LIVE_POSTS: {
      return {
        ...state,
        // livePosts: payload.spread ? [...state.livePosts, ...payload.data] : payload.data,
        livePosts: payload.data,
        ...(payload.total ? { totalLivePosts: payload.total } : {}),
        loading: false,
      };
    }
    case GET_POST_REQUEST: {
      return {
        ...state,
        getPostLoading: true,
      };
    }
    case GET_POST: {
      return {
        ...state,
        singlePost: payload,
        getPostLoading: false,
      };
    }
    case GET_ALL_POSTS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        allPosts: payload,
        loading: false,
      };
    }
    case GET_ALL_POSTS_FAIL: {
      return {
        ...state,
        loading: false,
      };
    }

    case ADD_COMMENT_REQUEST: {
      return {
        ...state,
        addCommentLoading: true,
      };
    }

    case ADD_COMMENT_SUCCESS: {
      return {
        ...state,
        addCommentLoading: false,
      };
    }
    case ADD_COMMENT_FAIL: {
      return {
        ...state,
        addCommentLoading: false,
      };
    }

    case DELET_COMMENT_REQUEST: {
      return {
        ...state,
        deleteCommentLoading: true,
      };
    }

    case DELET_COMMENT_SUCCESS: {
      return {
        ...state,
        deleteCommentLoading: false,
      };
    }
    case DELET_COMMENT_FAIL: {
      return {
        ...state,
        deleteCommentLoading: false,
      };
    }
    default:
      return state;
  }
};

export default postReducer;
