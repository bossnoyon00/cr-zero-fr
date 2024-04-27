import { useEffect, useRef, useState } from "react";
import { Avatar, Modal, Spin, Empty } from "antd";
import { AiOutlineClose } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment/moment";
import earth from "../../assets/earth.svg";
import { BsHeart, BsFillHeartFill, BsFlag } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import {
  postReact,
  addComment,
  deleteComment,
} from "../../redux/actions/postsAction";
import "../../styles/components/postViewModal.css";
import imgPlaceHolder from "../../assets/postImgPlaceholder.png";
import Reward from "../../assets/RewardBox.svg";
import { Link } from "react-router-dom";
import ReportModel from "./ReportModel";
import DOMPurify from "dompurify";
import { attachToken, privateAPI } from "../../config/constants";

const SinglePostView = ({ data, isModalOpen2, setIsModalOpen2 }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { socket } = useSelector((state) => state.socketReducer);

  const { ModalOpen2 } = useSelector((state) => state.notificationReducer);
  const [currentCommentId, setCurrentCommentId] = useState("");
  const [totalLikes, setTotalLikes] = useState("");
  const [liked, setLiked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const {
    singlePost,
    getPostLoading,
    addCommentLoading,
    deleteCommentLoading,
    livePosts,
  } = useSelector((state) => state.postReducer);

  const currentDate = moment();
  const expirationDate = moment(singlePost?.plan);
  const daysUntilExpiration = expirationDate.diff(currentDate, "days");
  let expirationMessage;
  if (daysUntilExpiration > 0) {
    expirationMessage = `will expire in ${daysUntilExpiration} days`;
  } else if (daysUntilExpiration === 0) {
    expirationMessage = "will expire today";
  } else {
    expirationMessage = "expired";
  }
  const [inputState, setInputState] = useState("");

  const handleOk = () => {
    setIsModalOpen2(false);
    dispatch({ type: "CLOSE_MODEL_TWO" });
  };

  const handleCancel = () => {
    setIsModalOpen2(false);
    dispatch({ type: "CLOSE_MODEL_TWO" });
  };

  const commentHandler = (e) => {
    if (inputState !== "") {
      dispatch(
        addComment(
          { post: data?._id, text: inputState },
          socket,
          singlePost?.user?._id
        )
      );
      setInputState("");
    }
  };

  const commentsRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
    setTotalLikes(singlePost?.likes?.length);

    const { _id } = user;
    setLiked(singlePost?.likes?.some((item) => item === _id));
  }, [singlePost, user]);

  const scrollToBottom = () => {
    if (commentsRef.current) {
      commentsRef.current.scrollTop = commentsRef.current.scrollHeight;
    }
  };

  const urlConstructor = (url) => {
    const httpURL = url?.slice(0, 7);
    const httpsURL = url?.slice(0, 8);
    if (httpURL === "http://" || httpsURL === "https://") {
      return url;
    } else {
      return `http://${url}`;
    }
  };

  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const showReportModal = (data) => {
    setIsReportModalOpen(data);
  };

  const handleVisitSiteCliks = async () => {
    try {
      const id = singlePost?._id;
      attachToken();
      await privateAPI.post(`/post/visitSiteClicksCount/${id}`);
    } catch (error) {}
  };

  return (
    <>
      <ReportModel
        open={isReportModalOpen}
        handler={showReportModal}
        title={singlePost?.title}
        postId={singlePost?._id}
      />

      <Modal
        width={"100%"}
        style={{ height: "90vh !important" }}
        open={ModalOpen2 || isModalOpen2}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        closable={false}
        closeIcon={<AiOutlineClose style={{ fill: "#222" }} />}
      >
        <FaTimes
          className="absolute right-2 top-2 cursor-pointer text-xl font-normal text-gray-700 mobile:text-sm mobile:right-1 mobile:top-1 "
          onClick={handleCancel}
        />
        {getPostLoading ? (
          <div
            style={{
              height: "85vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Spin size="large" />
          </div>
        ) : (
          <div className="grid grid-cols-[3fr_1fr] h-[85vh] gap-5 mobile:grid-cols-1 mobile:h-max ">
            <div className="border border-[#d5e0d5] grid grid-rows-[70px_calc(85vh_-_120px)_50px] mobile:flex mobile:flex-col rounded-[12px] !h-full gap-0 ">
              <h1 className="text-base leading-[14px] hidden font-bold text-gray-700 mobile:block text-center p-[2px] w-full ">
                {singlePost?.title}
              </h1>
              <div className="flex items-end justify-between w-full border-b border-[#d5e0d5] py-1 pr-2 mobile:items-start ">
                <div className="flex relative flex-col h-full mobile:justify-between">
                  <div className=" w-32 h-32 mt-2 ml-3 rounded-full absolute tablet:w-[90px] tablet:h-[90px] mobile:w-14 mobile:h-14 mobile:mt-0 mobile:ml-1 mobile:top-0 ">
                    <img
                      src={singlePost?.postImage?.url || imgPlaceHolder}
                      alt="Post DP"
                      className="w-full h-full rounded-full"
                    />
                  </div>
                  <div className="ml-36 tablet:ml-[100px] mobile:ml-14 ">
                    <h1 className="text-[22px] font-bold text-gray-700 mobile:text-xl mobile:hidden ">
                      {singlePost?.title}
                    </h1>
                    <p className="ml-3 mobile:ml-2 mobile:text-sm">
                      by{" "}
                      <span className="font-bold text-sm">
                        {singlePost?.user?.name}
                      </span>
                    </p>
                  </div>
                  <div className="hidden ml-16 mobile:flex gap-[2px] ">
                    <p className="capitalize text-slate-600 mobile:text-[10px] ">
                      Posted {moment(data?.createdAt).fromNow()}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between h-full ">
                  <span
                    className=" flex items-center cursor-pointer "
                    onClick={() => showReportModal(true)}
                  >
                    <span className="text-[#ff9c6e] font-noraml text-lg mobile:text-sm ">
                      REPORT
                    </span>
                    <BsFlag className="text-[#ff9c6e] text-lg cursor-pointer mobile:text-sm" />
                  </span>
                  <div className="flex gap-[2px] mobile:gap-0 mobile:flex-col">
                    <p className="capitalize text-slate-600 mobile:hidden  ">
                      Posted {moment(data?.createdAt).fromNow()}
                    </p>
                    <p className="text-slate-600 mobile:text-[10px]">
                      ({expirationMessage})
                    </p>
                  </div>
                </div>
              </div>
              <div className=" grid grid-cols-[200px_1fr] w-full h-full mobile:grid-cols-1 ">
                <div className="flex flex-col items-start p-4 pt-20 mobile:border-b mobile:border-[#d5e0d5] mobile:p-2 mobile:pt-4 ">
                  <div className="flex flex-wrap w-full">
                    {singlePost?.category?.map((item, index) => (
                      <div
                        className="flex flex-nowrap justify-center py-[2px] px-1 bg-[#2d93e8] text-[#fff] mr-1 my-1 cursor-pointer rounded-[6px] "
                        key={index}
                      >
                        <p className="text-[14px] mobile:text-xs ">{item}</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <span className="text-base mobile:text-xs">Price:</span>
                    <p className="text-base mobile:text-xs font-medium">
                      {" "}
                      ${singlePost?.price || 0}
                    </p>
                  </div>
                  <div className={`w-full flex items-center justify-between`}>
                    <span className="text-base mobile:text-xs">Commision:</span>
                    <p className="para-2 mobile:!text-xs">
                      {singlePost.comission?.length === 2 && (
                        <div className="flex items-center gap-1">
                          <span className="mobile:!text-xs">{`$${singlePost?.comissionValue}`}</span>{" "}
                          <span>&#47;</span>
                          <img
                            src={Reward}
                            alt="reward"
                            className="ml-[2px] h-5 w-5 mobile:w-[15px] "
                          />
                        </div>
                      )}
                      {singlePost.comission?.length < 2 &&
                        singlePost.comission?.[0] === "cash" &&
                        singlePost.comissionValue &&
                        `$${singlePost?.comissionValue}`}
                      {singlePost.comission?.length < 2 &&
                        singlePost.comission?.[0] === "reward" && (
                          <img
                            src={Reward}
                            alt="reward"
                            className="w-[20px] mobile:w-[15px]"
                          />
                        )}
                    </p>
                  </div>

                  <div className="w-full flex items-center">
                    <span className="text-base mobile:text-xs w-full flex items-center justify-between">
                      Self-Purchase:{" "}
                      {singlePost?.purchaseFirst ? (
                        <span style={{ color: "#1abd46" }}>Optional</span>
                      ) : (
                        <span style={{ color: "darkred" }}>Required</span>
                      )}
                    </span>
                  </div>
                  <div className="w-full flex items-center">
                    <p className="text-base mobile:text-xs capitalize ">
                      {singlePost?.type} item
                    </p>
                  </div>

                  <div className="w-full flex items-center justify-start my-2 gap-[2px] ">
                    <img
                      alt="flag"
                      loading="lazy"
                      src={
                        data?.countryCode
                          ? `https://flagcdn.com/w40/${data?.countryCode?.toLowerCase()}.png`
                          : earth
                      }
                      style={{
                        width: data?.countryCode === undefined && "22px",
                        height: data?.countryCode === undefined && "22px",
                      }}
                    />
                    <p className="time">{data?.country || "Global"}</p>
                  </div>
                </div>

                <div className="border-l border-[#d5e0d5] h-full grid grid-rows-[calc(85vh_-_170px)_100px] mobile:grid-rows-[300px_50px] ">
                  <div className="postDesc overflow-y-auto  p-2 ">
                    <p
                      className="text-base text-[rgb(63 63 70)] text-justify mobile:text-[13px] "
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(singlePost?.description),
                      }}
                    ></p>
                  </div>

                  <div className=" w-full flex items-center justify-end gap-2 py-[5px] h-11 pr-2 ">
                    <p className="text-2xl font-medium">
                      {totalLikes > 0 ? totalLikes : ""}
                    </p>
                    <div
                      className="flex items-center justify-center mt-1 "
                      onClick={
                        disabled
                          ? () => {}
                          : async () => {
                              setLiked(!liked);
                              setTotalLikes(
                                liked ? totalLikes - 1 : totalLikes + 1
                              );
                              setDisabled(true);
                              await dispatch(
                                postReact({
                                  tab: "singlePost",
                                  post: data?._id,
                                  react:
                                    singlePost?.likes?.filter(
                                      (item) => item === user?._id
                                    ).length > 0
                                      ? false
                                      : true,
                                  posts: livePosts,
                                })
                              );
                              setDisabled(false);
                            }
                      }
                    >
                      {liked ? (
                        <BsFillHeartFill
                          className="cursor-pointer text-[22px] text-[#ff3339] transition-all duration-300 hover:text-[#ff3] "
                          style={{ fill: "red" }}
                        />
                      ) : (
                        <BsHeart className="cursor-pointer text-[22px] text-[#ff3339] transition-all duration-300 hover:text-[#ff333ad8]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full flex items-center justify-between bg-gray-300 px-2 py-2 rounded-[0px_0px_12px_12px] mobile:flex-col mobile:py-1 mobile:gap-1">
                <Link
                  to={urlConstructor(singlePost?.link)}
                  target="_blank"
                  className="text-blue-950 text-base hover:text-blue-700 mobile:text-xs"
                  onClick={handleVisitSiteCliks}
                >
                  <p>
                    Program: &nbsp;{" "}
                    <span>
                      {`${singlePost?.link?.slice(0, 40)}`}
                      <span>...</span>
                    </span>
                  </p>
                </Link>
                <Link
                  to={urlConstructor(singlePost?.link)}
                  target="_blank"
                  className="bg-white border border-blue-900 px-3 py-[2px] text-[15px] text-blue-900 hover:bg-blue-900 hover:text-white rounded-[50px] transition-all duration-300 ease-in-out mobile:text-xs"
                  onClick={handleVisitSiteCliks}
                >
                  Visit Site
                </Link>
              </div>
            </div>
            <div className="grid grid-rows-[calc(85vh_-54px)_38px] mobile:grid-rows-[300px_38px] gap-4 ">
              <div className="grid grid-rows-[40px_calc(85vh_-94px)] mobile:grid-rows-[35px_265px] ">
                <h1 className="text-xl mobile:text-sm font-medium">Comments</h1>

                <div
                  className=" max-h-[calc(85vh_-94px)] overflow-y-auto flex flex-col items-start w-full gap-3 pr-1 mobile:min-h-[0px] mobile:max-h-64 "
                  ref={commentsRef}
                >
                  {singlePost?.comments?.length > 0 ? (
                    singlePost?.comments?.map((comment, index) => {
                      return (
                        <div
                          key={index}
                          className={
                            comment?.user?._id === user?._id
                              ? "w-full flex flex-row-reverse items-start justify-start gap-2"
                              : "w-full flex items-start gap-1"
                          }
                        >
                          <div className="comment-left">
                            <Avatar src={comment?.user?.avatar?.url} />
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="bg-[#91d5ff] rounded-[10px_3px_10px_10px] p-[10px] ">
                              <p className="name text-sm mobile:text-xs font-bold">
                                {comment?.user?.name}
                              </p>
                              <p className="comment mobile:text-xs">
                                {comment?.text}
                              </p>
                            </div>
                            {comment?.user?._id === user?._id && (
                              <>
                                {deleteCommentLoading &&
                                currentCommentId === comment._id ? (
                                  <div className="flex justify-end">
                                    <Spin size="small" />
                                  </div>
                                ) : (
                                  <></>

                                  // Comment delete button is commented for now
                                  // <div
                                  //   className="flex justify-end"
                                  //   onClick={() => {
                                  //     setCurrentCommentId(comment._id);
                                  //     dispatch(
                                  //       deleteComment({
                                  //         comment: comment._id,
                                  //         post: singlePost._id,
                                  //       })
                                  //     );
                                  //   }}
                                  // >
                                  //   <FaRegTrashAlt className="text-red-500 cursor-pointer " />
                                  // </div>
                                )}
                              </>
                            )}
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="w-full">
                      <Empty />
                    </div>
                  )}
                </div>
              </div>
              {addCommentLoading ? (
                <Spin size="normal" />
              ) : (
                <div className="relative grid grid-cols-[1fr_30px] place-items-center">
                  <input
                    className="w-full outline-none border py-2 px-1 rounded-[3px] mobile:text-xs "
                    type="text"
                    placeholder="Add Comment..."
                    value={inputState}
                    onChange={(e) => setInputState(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        commentHandler();
                      }
                    }}
                  />

                  <i
                    class="fa-solid fa-arrow-right text-gray-600 text-xl cursor-pointer absolute right-0"
                    onClick={commentHandler}
                  ></i>
                </div>
              )}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default SinglePostView;
