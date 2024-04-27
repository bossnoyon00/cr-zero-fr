import React, { useEffect, useState } from "react";
import { Avatar, Button, Modal, Typography, Checkbox, Badge } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  BsHeart,
  BsFillHeartFill,
  BsFlag,
  BsFillFlagFill,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import moment from "moment/moment";

import PostDescriptionModal from "./PostDescriptionModal";
// import earth from '../../assets/earth.png'
import earth from "../../assets/earth2.png";

import {
  postReact,
  reportPost,
  rePostFn,
} from "../../redux/actions/postsAction";

const Post = ({ data, tabName }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { Title, Paragraph } = Typography;

  const [reducedDesc, setReducedDesc] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportCheck, setReportCheck] = useState("");
  const [disabled, setDisabled] = useState(false);
  useEffect(() => {
    const tempArr = data?.description?.slice(0, 300) + "...";
    setReducedDesc(tempArr);
  }, [data.description]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="post-main-container">
      <>
        <Modal
          title={`Report ${data?.title}`}
          footer={false}
          centered
          open={isModalOpen}
          onOk={() => setIsModalOpen(false)}
          onCancel={() => setIsModalOpen(false)}
        >
          <div className="report-modal">
            <div className="report-sec">
              <Checkbox
                checked={reportCheck == "identical" ? true : false}
                onChange={() => {
                  if (reportCheck !== "identical") {
                    setReportCheck("identical");
                  } else if (reportCheck == "identical") {
                    setReportCheck("");
                  }
                }}
              >
                Identical
              </Checkbox>
              <Checkbox
                checked={reportCheck == "scam" ? true : false}
                onChange={() => {
                  if (reportCheck !== "scam") {
                    setReportCheck("scam");
                  } else if (reportCheck == "scam") {
                    setReportCheck("");
                  }
                }}
              >
                Scam
              </Checkbox>
              <Checkbox
                checked={reportCheck == "vague" ? true : false}
                onChange={() => {
                  if (reportCheck !== "vague") {
                    setReportCheck("vague");
                  } else if (reportCheck == "vague") {
                    setReportCheck("");
                  }
                }}
              >
                Vague
              </Checkbox>
            </div>
            <div className="bottom-container">
              <Button
                className="report-btn"
                disabled={reportCheck == "" ? true : false}
                onClick={() => {
                  dispatch(
                    reportPost(
                      { text: reportCheck, postId: data?._id },
                      setIsModalOpen
                    )
                  );
                }}
              >
                Report
              </Button>
            </div>
          </div>
        </Modal>
      </>
      {tabName !== "expired" && (
        <div className="react-column">
          {tabName !== "reported" && (
            <div
              className="react-post"
              onClick={
                disabled
                  ? () => {}
                  : async () => {
                      setDisabled(true);
                      await dispatch(
                        postReact({
                          post: data?._id,
                          react:
                            data?.likes?.filter(
                              (likedData) => likedData._id === data?.user._id
                            ).length > 0
                              ? false
                              : true,
                        })
                      );
                      setDisabled(false);
                    }
              }
            >
              {data?.likes?.filter(
                (likedData) => likedData._id === data?.user._id
              ).length > 0 ? (
                <BsFillHeartFill style={{ fill: "red", cursor: "pointer" }} />
              ) : (
                <BsHeart style={{ fill: "red", cursor: "pointer" }} />
              )}
            </div>
          )}
          <div className="report-post" onClick={showModal}>
            {tabName === "reported" ? (
              <Badge
                count={data?.reports?.length}
                style={{
                  fontSize: "10px",
                }}
              >
                <BsFillFlagFill
                  style={{ fill: "#ff9c6e", cursor: "pointer" }}
                />
              </Badge>
            ) : (
              <BsFlag style={{ fill: "#ff9c6e", cursor: "pointer" }} />
            )}
          </div>
        </div>
      )}
      <div className="desc-column">
        <div className="top">
          <div className="left">
            <Avatar src={data.user.profileImage} className="custom-avatar" />
          </div>
          <div className="right">
            <Title className="name">{data?.user?.name}</Title>
            <Paragraph className="time">
              {moment(data?.createdAt).format("DD MMM YYYY")}
            </Paragraph>
          </div>
        </div>
        <div className="middle">
          <div className="middle-top">
            <img src={data?.image} />
            <div className="middle-top-left">
              <Title style={{ fontSize: "16px", margin: "0" }}>
                {data?.title}
              </Title>
              <Paragraph className="para">{reducedDesc}</Paragraph>
            </div>
          </div>
          <div className="hash-tags">
            {data?.tags?.map((tag, index) => {
              return (
                <Paragraph key={index} className="hash-tag">
                  #{tag}
                </Paragraph>
              );
            })}
          </div>
          <div className="tags-sec">
            <div className="country">
              <img
                alt="flag"
                loading="lazy"
                src={
                  data?.countryCode
                    ? `https://flagcdn.com/w40/${data?.countryCode?.toLowerCase()}.png`
                    : earth
                }
                srcSet={`https://flagcdn.com/w40/${data?.countryCode?.toLowerCase()}.png 2x`}
                style={{
                  width: data?.countryCode == undefined && "20px",
                  height: data?.countryCode == undefined && "20px",
                }}
              />
            </div>
            <div className="tags-container">
              <Paragraph className="para">${data?.price}</Paragraph>
            </div>
            <div className="tags-container">
              <Paragraph className="para">{data?.comission}</Paragraph>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "1rem",
              }}
            >
              {data?.category.map((item, index) => (
                <div className="tags-container" key={index}>
                  <Paragraph className="para">{item}</Paragraph>
                </div>
              ))}
            </div>
            <div className="tags-container">
              <Paragraph className="para">{data?.type}</Paragraph>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="left-sec">
            <PostDescriptionModal data={data} />
            {tabName == "expired" && (
              <Button
                className="repost-btn"
                onClick={() => {
                  dispatch(rePostFn({ post: data?._id }, navigate));
                }}
              >
                RePost
              </Button>
            )}
          </div>
          <div className="right-sec">
            <div className="count-container">
              <FaRegComment className="comment-icon" />
              <Paragraph className="count">{data.comments.length}</Paragraph>
            </div>
            <div className="count-container">
              <BsHeart className="heart-icon" />
              <Paragraph className="count">{data.likes.length}</Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
