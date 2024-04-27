import React, { useEffect, useState } from "react";
import { Select, Checkbox, Radio, Tooltip } from "antd";
import { BsArrowLeft } from "react-icons/bs";
import { FaAsterisk } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { MdDeleteOutline } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { createPost } from "../../redux/actions/postsAction";
import { countryDetailFn } from "../../redux/actions/countryAction";
import Loader from "../other/Loader";
import Resizer from "react-image-file-resizer";

const CreatePostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const socket = useSelector((state) => state.socketReducer.socket);
  const { user } = useSelector((state) => state.userReducer);
  const { loading } = useSelector((state) => state.postReducer);

  const [postImagePreview, setPostImagePreview] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [updatedCountries, setUpdatedCountries] = useState([]);

  //Post title
  const [postImage, setPostImage] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postDesc, setPostDesc] = useState("");

  const [tagsArr, setTagsArr] = useState([]);
  const [tagsSearchValue, setTagsSearchValue] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isoState, setIsoState] = useState();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [priceInput, setPriceInput] = useState("");
  const [freeState, setFreeState] = useState(false);
  const [typeCash, setTypeCash] = useState(false);
  const [typeReward, setTypeReward] = useState(false);
  const [comissionValue, setComissionValue] = useState("");
  const [typeCheck, setTypeCheck] = useState(null);
  const [businessLink, setBusinessLink] = useState("");
  const [checked, setChecked] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState("");

  useEffect(() => {
    if (countryList.length > 0) {
      let tempCountries = [
        { id: "global", iso2: "global", name: "Global" },
        ...countryList,
      ];
      setUpdatedCountries(tempCountries);
    }
  }, [countryList]);

  useEffect(() => {
    (async () => {
      await countryDetailFn(setCountryList);
    })();
  }, []);

  const handleImageInput = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setPostImagePreview(reader.result);
        setPostImage(e.target.files[0]);
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
    const f = postImage ? await resizeFile(postImage) : postImage;
    const data = {
      title: postTitle,
      postImage: f,
      description: postDesc.replace(/\n/g, "<br />"),
      tags: JSON.stringify(tagsArr),
      category: JSON.stringify(selectedCategories),
      plan: JSON.stringify(selectedPlan),
      country: selectedCountry,
      countryCode: isoState,
      price: priceInput,
      free: freeState,
      comission:
        typeCash && !typeReward
          ? JSON.stringify(["cash"])
          : !typeCash && typeReward
          ? JSON.stringify(["reward"])
          : JSON.stringify(["cash", "reward"]),
      comissionValue,
      link: businessLink,
      purchaseFirst: checked === "yes" ? true : false,
      type: typeCheck,
    };

    dispatch(
      createPost({
        data,
        navigate,
        socket,
        receiverId: user?._id,
      })
    );
  };

  return (
    <div className="w-[75vw] min-w-[800px] bg-white p-5 ">
      {loading ? (
        <div className="min-h-[400px] flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          {/* Back to home link */}
          <div className="flex justify-start">
            <NavLink to={"/home"}>
              <BsArrowLeft className="text-2xl" />
            </NavLink>
          </div>

          {/* Header section */}
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-2xl font-medium my-[21px] ">
              Enlist a Program
            </h2>
            <p className="text-[#000000d9] w-[600px] text-center mb-3  ">
              You may enlist multiple programs if you have different types of
              offers or items within your business. But beware that
              intentionally abusing our service will lead to an IP ban. Please
              follow our terms and conditions.
            </p>
          </div>

          {/* Form container */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center"
          >
            {/* Image and title box */}
            <div className="grid grid-cols-[100px_1fr] gap-[30px] ">
              {/* Image box */}
              {postImage ? (
                <div className="relative w-[100px] h-[100px] rounded-full border-[1.5px] border-[#cdcdcd] flex items-center justify-center ">
                  {/* Preview Image */}
                  <div className="w-[90%] h-[90%] overflow-hidden rounded-full ">
                    <img
                      src={postImagePreview}
                      alt="Logo Preview"
                      className="w-full h-full object-cover object-center  "
                    />{" "}
                  </div>

                  {/* Delelte button overlay */}
                  <div class="absolute top-[50%] left-[50%] bg-[#00000089] w-[90%] h-[90%] translate-x-[-50%] translate-y-[-50%] rounded-full flex items-center justify-center transition-all duration-300 ease-in-out  opacity-0 hover:opacity-[1] ">
                    <MdDeleteOutline
                      className="cursor-pointer text-xl text-slate-100 "
                      onClick={() => {
                        setPostImage("");
                        setPostImagePreview("");
                      }}
                    />
                  </div>
                </div>
              ) : (
                // Image input
                <div className="w-full flex items-start">
                  <label
                    className="w-[100px] h-[100px] bg-[#fafafa] border border-[#cdcdcd] rounded-full border-dashed cursor-pointer flex flex-col items-center justify-center gap-1  hover:border-[#1890ff] "
                    htmlFor="fileInput"
                  >
                    <FiPlus className="text-lg" />
                    <span className="text-base">Upload</span>
                  </label>
                  <input
                    type="file"
                    name="file"
                    id="fileInput"
                    accept="image/*"
                    onChange={handleImageInput}
                    hidden
                  />
                </div>
              )}
              {/* Title box */}
              <div className="w-full flex flex-col gap-1 mb-5 ">
                <label
                  htmlFor="title"
                  className="relative flex items-center gap-1 text-lg "
                >
                  <FaAsterisk className="text-[8px] text-red-500" />
                  Title
                </label>
                <input
                  className="border border-[#d9d9d9] outline-none p-[4px_11px] text-lg rounded-[3px]  hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0] "
                  type="text"
                  id="title"
                  placeholder="Name of the product or service"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
              </div>
            </div>

            {/* Description Box */}
            <div className="w-full flex flex-col gap-1 mb-5">
              <label
                htmlFor="postDesc"
                className="relative flex items-center gap-1 text-lg"
              >
                <FaAsterisk className="text-[8px] text-red-500" />
                Description
              </label>

              <textarea
                className="border border-[#d9d9d9] outline-none p-[4px_11px] text-lg rounded-[3px]  hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0] whitespace-pre-line"
                name="postDesc"
                id="postDesc"
                placeholder="Briefly describe it first and explain how your affiliate/referral process may work."
                cols="30"
                rows="7"
                value={postDesc}
                onChange={(e) => setPostDesc(e.target.value)}
                // onKeyDown={handleDescription}
              ></textarea>
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label
                htmlFor="tags"
                className="relative flex items-center gap-1 text-lg"
              >
                Tags
              </label>

              <Select
                id="tags"
                mode="tags"
                allowClear
                placeholder="Enter up to 3 keywords"
                value={tagsArr}
                searchValue={tagsSearchValue}
                onSearch={(e) => setTagsSearchValue(e)}
                options={[]}
                onDeselect={(e) => {
                  let tempArr = tagsArr.filter((item) => item !== e);
                  setTagsArr(tempArr);
                }}
                onInputKeyDown={(e) => {
                  if (e.keyCode === 13 || e.keyCode === 32) {
                    if (tagsArr.length > 2) {
                      tagsArr.splice(2, 1, e.target.value);
                      setTagsArr([...tagsArr]);
                    } else {
                      setTagsArr([...tagsArr, e.target.value]);
                    }
                    setTagsSearchValue("");
                  }
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label
                htmlFor="category"
                className="flex items-center gap-1 text-lg"
              >
                <FaAsterisk className="text-[8px] text-red-500" />
                Category
              </label>

              <Select
                id="category"
                mode="multiple"
                allowClear
                placeholder="Select up to 2 categories"
                onChange={(e) => setSelectedCategories(e)}
                options={[
                  {
                    value: "Adult",
                    label: "Adult",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "AI",
                    label: "AI",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Automotive",
                    label: "Automotive",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Beverages",
                    label: "Beverages",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Books",
                    label: "Books",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Course",
                    label: "Course",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Electronics",
                    label: "Electronics",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Entertainment",
                    label: "Entertainment",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Fashion & Beauty",
                    label: "Fashion & Beauty",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Financial",
                    label: "Financial",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Food",
                    label: "Food",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Health",
                    label: "Health",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Insurance",
                    label: "Insurance",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Kids",
                    label: "Kids",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Medicine",
                    label: "Medicine",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: `Men's`,
                    label: `Men's`,
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Miscellaneous",
                    label: "Miscellaneous",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Productivity",
                    label: "Productivity",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Security",
                    label: "Security",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Software",
                    label: "Software",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Sports",
                    label: "Sports",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Tools & Accessories",
                    label: "Tools & Accessories",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Travel",
                    label: "Travel",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: "Video Games",
                    label: "Video Games",
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                  {
                    value: `Women's`,
                    label: `Women's`,
                    disabled: selectedCategories.length > 1 ? true : false,
                  },
                ]}
              />
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label
                htmlFor="country"
                className="flex items-center gap-1 text-lg relative"
              >
                Country{" "}
                <Tooltip
                  title="Choose a country if the consumer base is heavily targeted within
              that country. Otherwise, leave it to default."
                  color="rgba(0,0,0,0.75)"
                >
                  <GoQuestion className="text-[#868686] text-base" />
                </Tooltip>
              </label>
              <Select
                id="country"
                defaultValue={"global"}
                placeholder="Select Country "
                allowClear
                onSelect={(e, key) => {
                  setIsoState(e);
                  setSelectedCountry(key?.children);
                }}
              >
                {updatedCountries?.map((country) => (
                  <Select.Option
                    key={JSON.stringify(country)}
                    value={country?.iso2}
                  >
                    {country?.name}
                  </Select.Option>
                ))}
              </Select>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "250px 1fr",
                gap: "20px",
                alignItems: "end",
              }}
            >
              <div className="w-full flex flex-col gap-1 mb-5 relative">
                <label
                  htmlFor="price"
                  className="flex items-center gap-1 text-lg"
                >
                  <FaAsterisk className="text-[8px] text-red-500" />
                  Price
                </label>
                <input
                  style={{ width: "250px" }}
                  className={`border border-[#d9d9d9] outline-none p-[4px_11px] text-lg rounded-[3px]   remove-arrow ${
                    freeState
                      ? "cursor-not-allowed"
                      : " hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0]"
                  }`}
                  type="number"
                  name="price"
                  id="price"
                  disabled={freeState}
                  value={priceInput}
                  onChange={(e) => setPriceInput(e.target.value)}
                />
                <span className="absolute right-[5px] top-10 select-none ">
                  $
                </span>
              </div>
              <div className="flex items-center mb-5">
                <Checkbox
                  disabled={priceInput?.length > 0 ? true : false}
                  onChange={(e) => setFreeState(e.target.checked)}
                  className="!flex !items-center !text-lg select-none"
                >
                  Free
                </Checkbox>
              </div>
            </div>

            <div
              className={`w-full flex flex-col gap-1 ${!typeCash && "mb-5"}`}
            >
              <label className="flex items-center gap-1 text-lg relative">
                <FaAsterisk className="text-[8px] text-red-500" />
                Commission{" "}
                <Tooltip
                  title="Select the Reward option if the influencer doesn't get any cash
              commission. Or select both if both are included in the commission."
                  color="rgba(0,0,0,0.75)"
                >
                  <GoQuestion className="text-[#868686] text-base" />
                </Tooltip>
              </label>

              <div className="flex items-center">
                <Checkbox onChange={(e) => setTypeCash(e.target.checked)}>
                  <span className="text-lg">Cash</span>
                </Checkbox>
                <Checkbox onChange={(e) => setTypeReward(e.target.checked)}>
                  <span className="text-lg">Reward</span>
                </Checkbox>
              </div>
            </div>

            {typeCash && (
              <div className="w-[200px] flex flex-col gap-1 relative mb-5">
                <label
                  htmlFor="commisionAmount"
                  className="flex items-center gap-1 text-lg"
                >
                  <FaAsterisk className="text-[8px] text-red-500" />
                  Commission Amount
                </label>
                <input
                  className="border border-[#d9d9d9] outline-none p-[4px_11px] text-lg rounded-[3px]  hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0] remove-arrow"
                  type="number"
                  id="commisionAmount"
                  value={comissionValue}
                  onChange={(e) => setComissionValue(e.target.value)}
                />
                <span
                  style={{
                    position: "absolute",
                    right: "5px",
                    top: "40px",
                    userSelect: "none",
                  }}
                >
                  $
                </span>
              </div>
            )}

            <div className="w-full flex flex-col gap-1 mb-5">
              <label className="flex items-center gap-1 text-lg relative">
                <FaAsterisk className="text-[8px] text-red-500" />
                Type{" "}
                <Tooltip
                  title="
              Select if it's consumed virtually or physically.
              "
                  color="rgba(0,0,0,0.75)"
                >
                  <GoQuestion className="text-[#868686] text-base" />
                </Tooltip>
              </label>

              <div style={{ display: "flex", alignItems: "center" }}>
                <Checkbox
                  checked={typeCheck === "digital" ? true : false}
                  onChange={() => {
                    if (typeCheck == null || typeCheck === "physical") {
                      setTypeCheck("digital");
                    } else {
                      setTypeCheck(null);
                    }
                  }}
                >
                  <span className="text-lg">Digital</span>
                </Checkbox>
                <Checkbox
                  checked={typeCheck === "physical" ? true : false}
                  onChange={() => {
                    if (typeCheck == null || typeCheck === "digital") {
                      setTypeCheck("physical");
                    } else {
                      setTypeCheck(null);
                    }
                  }}
                >
                  <span className="text-lg">Physical</span>
                </Checkbox>
              </div>
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label className="flex items-center gap-1 text-lg relative">
                <FaAsterisk className="text-[8px] text-red-500" />
                Link{" "}
                <Tooltip
                  title="
              Enter the direct link to your affiliate/referral program. Please
              do not use any link shortener.
              "
                  color="rgba(0,0,0,0.75)"
                >
                  <GoQuestion className="text-[#868686] text-base" />
                </Tooltip>
              </label>
              <input
                className="border border-[#d9d9d9] outline-none p-[4px_11px] text-lg rounded-[3px]  hover:border-[#62acf0] focus:border-[#62acf0] focus:shadow-[0px_0px_3px_0px_#62acf0]"
                type="text"
                name="title"
                id="title"
                placeholder="Direct Link to the Program"
                value={businessLink}
                onChange={(e) => setBusinessLink(e.target.value)}
              />
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label className="flex items-center gap-1 text-lg relative">
                <FaAsterisk className="text-[8px] text-red-500" />
                Does someone need to purchase it first to refer it?
              </label>

              <div className="flex items-center">
                <Checkbox
                  checked={checked === "yes" ? true : false}
                  onChange={() => {
                    if (checked === null || checked === "no") {
                      setChecked("yes");
                    } else {
                      setChecked(null);
                    }
                  }}
                >
                  <span className="text-lg">Yes</span>
                </Checkbox>
                <Checkbox
                  checked={checked === "no" ? true : false}
                  onChange={() => {
                    if (checked === null || checked === "yes") {
                      setChecked("no");
                    } else {
                      setChecked(null);
                    }
                  }}
                >
                  <span className="text-lg">No</span>
                </Checkbox>
              </div>
            </div>

            <div className="w-full flex flex-col gap-1 mb-5">
              <label className="flex items-center gap-1 text-lg relative">
                <FaAsterisk className="text-[8px] text-red-500" />
                How long do you want this post to actively show up on our feed?{" "}
                <Tooltip
                  title="
              After the selected period, the post will expire. This means people
              won't find it here anymore, as it will be deleted from our site.
              You can always come back and enlist it again.
              "
                  color="rgba(0,0,0,0.75)"
                >
                  <GoQuestion className="text-[#868686] text-base" />
                </Tooltip>
              </label>

              <Radio.Group
                onChange={(e) => setSelectedPlan(e.target.value)}
                value={selectedPlan}
              >
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setDate(new Date().getDate() + 7)
                  ).format("MMMM DD, YYYY")}
                >
                  7 Days/Free
                </Radio>
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setMonth(new Date().getMonth() + 1)
                  ).format("MMMM DD, YYYY")}
                >
                  1 Month/Free
                </Radio>
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setMonth(new Date().getMonth() + 3)
                  ).format("MMMM DD, YYYY")}
                >
                  3 Months/$9.33
                </Radio>
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setMonth(new Date().getMonth() + 6)
                  ).format("MMMM DD, YYYY")}
                >
                  6 Months/$16.66
                </Radio>
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setMonth(new Date().getMonth() + 12)
                  ).format("MMMM DD, YYYY")}
                >
                  1 Year/$24
                </Radio>
                <Radio
                  className="border border-[#d9d9d9] !rounded-[20px] !p-1 !text-base"
                  value={moment(
                    new Date().setMonth(new Date().getMonth() + 24)
                  ).format("MMMM DD, YYYY")}
                >
                  2 Years/$38
                </Radio>
              </Radio.Group>
            </div>

            <button
              type="submit"
              style={{ width: "max-content" }}
              className={`bg-[#1890ff] outline-none text-base rounded-[3px] px-4 py-1 border ${
                postTitle.length !== 0 &&
                postDesc.length !== 0 &&
                checked !== null &&
                selectedCategories.length !== 0 &&
                (priceInput.length !== 0 || freeState !== false) &&
                businessLink.length !== 0 &&
                typeCheck !== null &&
                (typeReward ||
                  (typeCash && comissionValue.length !== 0 ? true : false)) &&
                selectedPlan !== ""
                  ? "border-transparent cursor-pointer text-white transition-all duration-300 ease-in-out hover:bg-white hover:border-[#1890ff] hover:text-[#1890ff]"
                  : "bg-[#f5f5f5] border border-[#cdcdcd] cursor-not-allowed text-gray-900"
              }`}
              disabled={
                postTitle.length !== 0 &&
                postDesc.length !== 0 &&
                checked !== null &&
                selectedCategories.length !== 0 &&
                (priceInput.length !== 0 || freeState !== false) &&
                businessLink.length !== 0 &&
                typeCheck !== null &&
                (typeReward ||
                  (typeCash && comissionValue.length !== 0 ? true : false)) &&
                selectedPlan !== ""
                  ? false
                  : true
              }
            >
              {selectedPlan !== null &&
                (moment(new Date().setDate(new Date().getDate() + 7)).format(
                  "MMMM DD, YYYY"
                ) === selectedPlan ||
                moment(new Date().setMonth(new Date().getMonth() + 1)).format(
                  "MMMM DD, YYYY"
                ) === selectedPlan
                  ? "Enlist"
                  : selectedPlan ===
                    moment(
                      new Date().setMonth(new Date().getMonth() + 3)
                    ).format("MMMM DD, YYYY")
                  ? "Enlist for $9.33"
                  : selectedPlan ===
                    moment(
                      new Date().setMonth(new Date().getMonth() + 6)
                    ).format("MMMM DD, YYYY")
                  ? "Enlist for $16.66"
                  : selectedPlan ===
                    moment(
                      new Date().setFullYear(new Date().getFullYear() + 1)
                    ).format("MMMM DD, YYYY")
                  ? "Enlist for $24"
                  : selectedPlan ===
                    moment(
                      new Date().setFullYear(new Date().getFullYear() + 2)
                    ).format("MMMM DD, YYYY")
                  ? "Enlist for $38"
                  : "Enlist")}
            </button>
          </form>
          <div className="mt-3 text-[#d48806] text-base">
            You cannot edit anything after enlisting. Please review everything
            beforehand.
          </div>
        </>
      )}
    </div>
  );
};

export default CreatePostForm;
