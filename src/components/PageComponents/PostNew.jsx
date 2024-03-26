import React, { useEffect, useState } from "react";
import { Avatar, Button, Typography, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  BsHeart,
  BsFillHeartFill,
  BsFlag,
  BsFillFlagFill,
} from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import { VscComment } from "react-icons/vsc";

import SinglePostView from "./SinglePostView";
import earth from "../../assets/earth.svg";
import Reward from "../../assets/RewardBox.svg";

import {
  fetchSinglePost,
  postReact,
  deletePost,
  rePostFn,
} from "../../redux/actions/postsAction";
import Confirm from "../other/Confirm";
import ReportModel from "./ReportModel";
import DOMPurify from "dompurify";

const PostNew = ({ data, tabName }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const { livePosts } = useSelector((state) => state.postReducer);
  const navigate = useNavigate();

  const { Title, Paragraph } = Typography;

  const [reducedDesc, setReducedDesc] = useState("");
  const [isModalOpen2, setIsModalOpen2] = useState(false);

  useEffect(() => {
    const tempArr = data?.description?.slice(0, 300) + "...";
    setReducedDesc(tempArr);
  }, [data.description]);

  const showModal2 = () => {
    setIsModalOpen2(true);
    dispatch(fetchSinglePost(data?._id));
  };

  const [openConfirm, setOpenConfirm] = useState(false);
  const [postId, setPostId] = useState("");

  const deleteHandler = (id) => {
    setOpenConfirm(true);
    setPostId(id);
  };

  const handleDeletePost = (confirmation) => {
    if (confirmation) {
      dispatch(deletePost(postId));
      setOpenConfirm(false);
    } else {
      setOpenConfirm(false);
    }
  };

  const [reportedPost, setReportedPost] = useState({
    title: "",
    postId: "",
  });
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const showReportModal = (data) => {
    setIsReportModalOpen(data);
  };

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const { _id } = user;
    setLiked(data?.likes?.some((item) => item === _id));
  }, [data, user]);

  return (
    <>
      <Confirm
        handler={handleDeletePost}
        open={openConfirm}
        message={"Are you sure you want to delete this post permanently?"}
      />

      <SinglePostView
        data={data}
        isModalOpen2={isModalOpen2}
        setIsModalOpen2={setIsModalOpen2}
      />

      <ReportModel
        open={isReportModalOpen}
        handler={showReportModal}
        title={reportedPost.title}
        postId={reportedPost.postId}
      />

      <div className="flex items-start mobile:flex-col">
        {tabName !== "expired" && (
          <div className="left-react-container mobile:hidden">
            {tabName !== "reported" && (
              <div
                className="border border-black border-r-transparent border-b-[rgba(0,0,0,0.5)] rounded-l-md p-[10px] flex items-center justify-center bg-white"
                onClick={() => {
                  setLiked(!liked);
                  dispatch(
                    postReact({
                      tab: tabName,
                      post: data?._id,
                      react:
                        data?.likes?.filter((item) => item === user?._id)
                          .length > 0
                          ? false
                          : true,
                      posts: livePosts,
                    })
                  );
                }}
              >
                {liked ? (
                  <BsFillHeartFill className="text-[#ff3339] w-[30px] h-[30px] transition-all duration-300 hover:text-[#ff333ad8] cursor-pointer" />
                ) : (
                  <BsHeart className="text-[#ff3339] w-[30px] h-[30px] transition-all duration-300 hover:text-[#ff333ad8] cursor-pointer" />
                )}
                {user?.premium && (
                  <Paragraph className="count">{data.likes.length}</Paragraph>
                )}
              </div>
            )}
            <div
              className="border border-black border-r-transparent border-t-[rgba(0,0,0,0.3)] border-collapse rounded-l-md p-[10px] flex flex-col items-center justify-center gap-2 bg-white cursor-pointer"
              onClick={showModal2}
            >
              <VscComment className="w-5 h-5" />
              <Paragraph className="count">{data?.comments.length}</Paragraph>
            </div>
          </div>
        )}

        <div className="bg-white border border-black rounded-tr-md mobile:rounded-t-md rounded-bl-md shadow-[0_4px_38px_0_rgba(0,0,0,0.1)] w-[100%] cursor-pointer min-h-[200px] grid grid-cols-[1fr_150px] mobile:grid-cols-1 grid-rows-1" onClick={showModal2}>
          <div className="middle-left flex mobile:flex-col gap-4 p-[10px] border-r mobile:border-r-transparent mobile:border-b border-black">
            <div className="left flex flex-col gap-4 mobile:flex-row mobile:items-center mobile:gap-4">
              <div className="top">
                <Avatar src={data?.postImage?.url} className="w-[60px] h-[60px] " />
              </div>
              <div className="flex items-center justify-center ">
                <img
                  title={data?.country || "Global"}
                  alt="flag"
                  loading="lazy"
                  src={
                    data?.countryCode
                      ? `https://flagcdn.com/w40/${data?.countryCode?.toLowerCase()}.png`
                      : earth
                  }
                  style={{
                    width: data?.countryCode === undefined && "30px",
                    height: data?.countryCode === undefined && "30px",
                  }}
                />
              </div>
            </div>
            <div className="right-desc flex flex-col gap-2">
              <Title className="!text-2xl mobile:!text-lg">{data?.title}</Title>
              <p
                className="para text-lg line-clamp-5 text-justify mobile:text-sm"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(reducedDesc),
                }}
              ></p>
              <div className="category-container flex items-center gap-2">
                {data?.category.map((item, index) => (
                  <button key={index} className="bg-[#2d93e8] text-white rounded-[4px] px-2 flex items-center justify-center">
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="middle-right grid grid-cols-1 mobile:grid-cols-3 grid-rows-3 mobile:grid-rows-1">
            <div
              className="flex justify-start items-center px-3 py-5 gap-6 border-black border-b mobile:border-b-transparent mobile:border-r mobile:px-2 mobile:justify-between mobile:gap-0 "
            >
              <p className="text-base mobile:text-xs font-medium">PRICE:</p>
              <p className="text-base mobile:text-xs font-medium">
                {!data?.price ? "Free" : `$${data?.price}`}
              </p>
            </div>
            <div
              className={`flex items-center px-3 border-b mobile:border-b-transparent mobile:border-r border-black mobile:justify-between mobile:gap-0 mobile:px-2 ${
                data.comission?.length === 2 ? "flex-col justify-center" : 'justify-start gap-5'
              }`}
              
            >
              <p className="text-base mobile:text-xs font-medium !mb-0 text-center">
                {data.comission?.length === 2 ? "Commission" : "COMM:"}
              </p>
              <p className="para-2 mobile:!text-xs">
                {data.comission?.length === 2 && (
                  <div className="flex gap-1">
                    <span className="mobile:!text-xs">{`$${data?.comissionValue}`}</span> <span>&#47;</span>
                    <img
                      src={Reward}
                      alt="reward"
                      className="ml-[2px] w-[25px] mobile:w-[20px] "
                    />
                  </div>
                )}
                {data.comission?.length < 2 &&
                  data.comission?.[0] === "cash" &&
                  data.comissionValue &&
                  `$${data?.comissionValue}`}
                {data.comission?.length < 2 &&
                  data.comission?.[0] === "reward" && (
                    <img src={Reward} alt="reward" className="w-[25px] mobile:w-[20px]" />
                  )}
              </p>
            </div>
            <div className="section flex !items-center !justify-center">
              <p className=" !text-base mobile:!text-xs font-medium">
                {data?.type.toUpperCase()}
              </p>
            </div>
          </div>
        </div>
        <div className="hidden mobile:flex self-end">
          {tabName !== "expired" && (
            <div className="flex">
              {tabName !== "reported" && (
                <div
                  className="border border-black border-t-transparent border-b-[rgba(0,0,0,0.5)] rounded-bl-md  p-[10px] flex items-center justify-center bg-white"
                  onClick={() => {
                    setLiked(!liked);
                    dispatch(
                      postReact({
                        tab: tabName,
                        post: data?._id,
                        react:
                          data?.likes?.filter((item) => item === user?._id)
                            .length > 0
                            ? false
                            : true,
                      })
                    );
                  }}
                >
                  {liked ? (
                    <BsFillHeartFill className="text-[#ff3339] w-[20px] h-[20px] transition-all duration-300 hover:text-[#ff333ad8] cursor-pointer" />
                  ) : (
                    <BsHeart className="text-[#ff3339] w-[20px] h-[20px] transition-all duration-300 hover:text-[#ff333ad8] cursor-pointer" />
                  )}
                  {user?.premium && (
                    <Paragraph className="count">{data.likes.length}</Paragraph>
                  )}
                </div>
              )}
              <div
                className={`border-b border-black p-[10px] flex items-center justify-center gap-2 bg-white cursor-pointer ${tabName === "reported" && 'border-l rounded-bl-md'}`}
                onClick={showModal2}
                style={{ cursor: "pointer" }}
              >
                <VscComment className="w-5 h-5" />
                <Paragraph className="count !mb-0">{data?.comments.length}</Paragraph>
              </div>
            </div>
          )}
          <div className="flex">
            <div
              className={`report-post flex items-center justify-center p-[10px] bg-white border border-black border-t-transparent rounded-br-md ${tabName === "my" && 'rounded-br-none'} ${ tabName === "expired" && 'rounded-br-none rounded-bl-md'} `}
              onClick={() => {
                showReportModal(true);
                setReportedPost({
                  title: data?.title,
                  postId: data?._id,
                });
              }}
            >
              {tabName === "reported" ? (
                <Badge
                  count={data?.reports?.length}
                  style={{
                    fontSize: "10px",
                  }}
                >
                  <BsFillFlagFill
                    className="fill-[#ff9c6e] cursor-pointer w-[20px] h-[20px]"
                  />
                </Badge>
              ) : (
                <BsFlag className="fill-[#ff9c6e] cursor-pointer w-[20px] h-[20px]" />
              )}
            </div>
            {tabName === "my" && (
              <Button className="flex items-center justify-center h-[60px] bg-white hover:bg-[#ff0000] border border-black border-t-[rgba(0,0,0,0.5)] border-l-transparent rounded-r-none rounded-br-md rounded-l-none [&>*]:text-[#ff0000] [&>*]:hover:text-white transition-all duration-300 ease-in-out " onClick={() => deleteHandler(data?._id)}>
              <FaRegTrashAlt className=" w-[26px] h-[26px] " />
            </Button>
            )}
            {tabName === "expired" && (
              <Button
                className="flex items-center justify-center h-[60px] bg-white border border-black border-t-[rgba(0,0,0,0.5)] border-l-transparent rounded-r-none rounded-br-md rounded-l-none font-bold"
                onClick={() => {
                  dispatch(rePostFn({ post: data?._id }, navigate));
                }}
              >
                Repost
              </Button>
            )}
          </div>
        </div>
        <div className="right mobile:hidden self-end shadow-[8px_0_15px_-3px_rgba(0,0,0,0.1)]">
          <div
            className="report-post flex items-center justify-center p-[10px] bg-white border border-black border-l-transparent rounded-r-md"
            onClick={() => {
              showReportModal(true);
              setReportedPost({
                title: data?.title,
                postId: data?._id,
              });
            }}
          >
            {tabName === "reported" ? (
              <Badge
                count={data?.reports?.length}
                style={{
                  fontSize: "10px",
                }}
              >
                <BsFillFlagFill
                  
                  className="fill-[#ff9c6e] cursor-pointer w-[30px] h-[30px]"
                />
              </Badge>
            ) : (
              <BsFlag className="fill-[#ff9c6e] cursor-pointer w-[30px] h-[30px] " />
            )}
          </div>
          {tabName === "my" && (
            <Button className="flex items-center justify-center h-[60px] bg-white hover:bg-[#ff0000] border border-black border-t-[rgba(0,0,0,0.5)] border-l-transparent rounded-r-md rounded-l-none [&>*]:text-[#ff0000] [&>*]:hover:text-white transition-all duration-300 ease-in-out " onClick={() => deleteHandler(data?._id)}>
              <FaRegTrashAlt className=" w-[26px] h-[26px] " />
            </Button>
            
          )}
          {tabName === "expired" && (
            <Button
              className="flex items-center justify-center h-[60px] bg-white border border-black border-t-[rgba(0,0,0,0.5)] border-l-transparent rounded-r-md rounded-l-none font-bold "
              onClick={() => {
                dispatch(rePostFn({ post: data?._id }, navigate));
              }}
            >
              RePost
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default PostNew;
