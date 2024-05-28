import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { profileDetails, updateProfile } from "../../redux/actions/userActions";
import { FiPlus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { publicAPI } from "../../config/constants";
import Loader from "../other/Loader";
import Resizer from "react-image-file-resizer";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state?.userReducer);
  const [file, setFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState("");
  const [avatarURL, setAvatarURL] = useState("");

  const [userData, setUserData] = useState({
    username: "",
    email: "",
    bio: "",
    businessLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleImageInput = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setFile(e.target.files[0]);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resizeFile = (file) =>
      new Promise((resolve) => {
        Resizer.imageFileResizer(
          file,
          512,
          512,
          "JPEG",
          100,
          0,
          (uri) => {
            resolve(uri);
          },
          "base64"
        );
      });

    const f = file ? await resizeFile(file) : file;
    dispatch(
      updateProfile({
        ...userData,
        avatar: f,
      })
    );

    setUserData({
      username: "",
      email: "",
      bio: "",
      businessLink: "",
    });
    setFile(null);
  };

  useEffect(() => {
    dispatch(profileDetails());
  }, [dispatch]);

  useEffect(() => {
    const { username, email, bio, businessLink, avatar } = user;
    setAvatarURL(avatar?.url);
    setAvatarPreview("");
    setUserData({ username, email, bio, businessLink });
  }, [user]);

  return (
    <Wrapper>
      <div className="profile-wrapper">
        {loading ? (
          <div className="min-h-[80vh] flex items-center justify-center">
            <Loader />
          </div>
        ) : (
          <>
            <h2>Profile Details</h2>
            <form onSubmit={handleSubmit}>
              {file || avatarURL ? (
                <div className="previewBox">
                  <div className="imgBox">
                    <img
                      src={avatarURL ? avatarURL : avatarPreview}
                      alt="Logo Preview"
                    />{" "}
                  </div>
                  <div class="middle">
                    {user?.avatar?.url && !avatarPreview && (
                      <NavLink to={user?.avatar?.url} target="_blank">
                        <IoEyeOutline className="icon" />
                      </NavLink>
                    )}
                    <MdDeleteOutline
                      className="icon"
                      onClick={() => {
                        setAvatarURL("");
                        setFile(null);
                      }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  <label className="uploadContainer" htmlFor="avatar">
                    <FiPlus className="icon" />
                    <span>Upload</span>
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="avatar"
                    accept="image/*"
                    onChange={handleImageInput}
                    hidden
                  />
                </>
              )}
              <div className="formItem">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="formItem">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <NavLink className="navLink" to={"/change-password"}>
                Change Password
              </NavLink>
              <div className="formItem">
                <label htmlFor="bio">Bio</label>
                <textarea
                  name="bio"
                  id="bio"
                  cols="30"
                  rows="10"
                  value={userData.bio}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="formItem">
                <label htmlFor="link">Link</label>
                <input
                  type="text"
                  name="businessLink"
                  id="link"
                  value={userData.businessLink}
                  onChange={handleChange}
                />
              </div>
              <div className="formItem">
                <label>Request for Verification</label>
                <button className="disabled" disabled>
                  Currenly Unavailable
                </button>
              </div>
              {/* <div className="formItem">
                <label>Payment-method</label>
                <div className="paymentContainer">
                  <button className="disabled" disabled>
                    Go Premium
                  </button>
                </div>
              </div> */}

              <input type="submit" value="Update" className="btn" />
            </form>
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 20px 0px;

  .profile-wrapper {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 4px 38px 0px rgba(0, 0, 0, 0.1);

    h2 {
      font-size: 26px;
    }

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;

      .previewBox {
        position: relative;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1.5px solid #cdcdcd;
        display: flex;
        align-items: center;
        justify-content: center;

        .imgBox {
          width: 90%;
          height: 90%;
          overflow: hidden;
          border-radius: 50%;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
            backface-visibility: hidden;
            transition: all 0.3s ease-in-out;
          }
        }

        .middle {
          transition: all 0.3s ease-in-out;
          opacity: 0;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.4);
          width: 90%;
          height: 90%;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          .icon {
            font-size: 23px;
            cursor: pointer;
            color: #eef5f9;
          }
        }

        &:hover .middle {
          opacity: 1;
        }
      }

      .uploadContainer {
        width: 100px;
        height: 100px;
        background-color: #fafafa;
        border: 1px dashed #cdcdcd;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &:hover {
          border-color: #1890ff;
        }

        .icon {
          font-size: 20px;
        }
      }

      .formItem {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 5px;

        label {
          font-size: 18px;
          color: #444;
        }

        input,
        textarea {
          color: #444;
          width: 100%;
          outline: none;
          border: 1px solid #cdcd;
          border-radius: 3px;
          border-radius: 3px;
          padding: 10px;
          font-size: 18px;
        }

        textarea {
          resize: none;
        }

        .paymentContainer {
          width: 100%;
          border: 1px solid #d0d0d0;
          padding: 30px;
        }
      }

      .navLink {
        text-decoration: none;
        padding: 4px 15px;
        font-size: 18px;
        border-radius: 3px;
        color: #fff;
        background-color: #1890ff;
      }

      .btn {
        padding: 4px 15px;
        font-size: 18px;
        border-radius: 3px;
        cursor: pointer;
        outline: none;
        border: none;
        color: #fff;
        background-color: #1890ff;
        border: 1px solid transparent;
        transition: all 0.3s ease-in-out;

        &:hover {
          background-color: #fff;
          color: #1890ff;
          border-color: #1890ff;
        }
      }

      .disabled {
        padding: 4px 15px;
        font-size: 18px;
        border-radius: 3px;
        outline: none;
        border: 1px solid #cdcdcd;
        cursor: not-allowed;
      }
    }
  }
`;

export default Profile;
