import React, { useEffect, useState } from "react";
import { Button, Spin, Skeleton, Pagination, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostNew from "../components/PageComponents/PostNew";
import Layout from "../layout/Layout";

import { getPosts } from "../redux/actions/postsAction";
import { countryDetailFn } from "../redux/actions/countryAction";
import FilterComp from "../components/PageComponents/FilterComp";
import FilterDrawer from "../components/PageComponents/FilterDrawer";
import MetaData from "../components/other/MetaData";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userReducer.user);

  const { livePosts, loading, totalLivePosts } = useSelector(
    (state) => state.postReducer
  );

  const [page, setPage] = useState(1);
  const [liked, setLiked] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [sortFilter, setSortFilter] = useState("Relevance");
  const [searchFilter, setSearchFilter] = useState(null);
  const [countryFilter, setCountryFilter] = useState(null);
  const [tagsFilter, setTagsFilter] = useState("");
  const [rangeFilter, setRangeFilter] = useState([]);
  const [freeFilter, setFreeFilter] = useState("");
  const [commissionState, setCommissionState] = useState({
    cash: false,
    reward: false,
  });
  const [typeState, setTypeState] = useState("");
  const [purchaseFirstYes, setPurchaseFirstYes] = useState(false);
  const [purchaseFirstNo, setPurchaseFirstNo] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState([]);
  let count = 0;

  useEffect(() => {
    (async () => {
      await countryDetailFn(setCountryList);
    })();
  }, []);

  useEffect(() => {
    dispatch(
      getPosts({
        sortFilter,
        searchFilter,
        categoryFilter,
        rangeFilter,
        freeFilter,
        countryFilter,
        commissionState,
        typeState,
        page,
      })
    );
  }, [
    dispatch,
    sortFilter,
    searchFilter,
    countryFilter,
    rangeFilter,
    freeFilter,
    categoryFilter,
    commissionState,
    typeState,
    page,
  ]);

  return (
    <Layout>
      <MetaData title={"Affiliated Refer"} />
      <div className="home-container">
        <div className="page-header">
          <div className="w-[25%] px-5 "></div>
          <div className="flex items-center justify-between w-full ">
            <div className="w-[180px] mobile:w-[120px] ">
              <Select
                className="w-full mobile:!px-[1px] mobile:text-xs mobile:placeholder:text-xs"
                placeholder={`Sort By: ${sortFilter}`}
                showSearch
                value={`Sort By: ${sortFilter}`}
                onChange={(e) => setSortFilter(e)}
                options={[
                  {
                    value: "Relevance",
                    label: "Relevance",
                  },
                  {
                    value: "Latest",
                    label: "Latest",
                  },
                  {
                    value: "Oldest",
                    label: "Oldest",
                  },
                ]}
              />
            </div>
            <Button
              className="create-post-btn mobile:!px-3"
              onClick={() => navigate("/create-post")}
            >
              Enlist Program
            </Button>
          </div>
        </div>
        <div className="content-container">
          <div className="drawer-container">
            <FilterDrawer
              countryList={countryList}
              setSearchFilter={setSearchFilter}
              setCountryFilter={setCountryFilter}
              setTagsFilter={setTagsFilter}
              setRangeFilter={setRangeFilter}
              rangeFilter={rangeFilter}
              freeFilter={freeFilter}
              setFreeFilter={setFreeFilter}
              commissionState={commissionState}
              setCommissionState={setCommissionState}
              typeState={typeState}
              setTypeState={setTypeState}
              purchaseFirstYes={purchaseFirstYes}
              setPurchaseFirstYes={setPurchaseFirstYes}
              purchaseFirstNo={purchaseFirstNo}
              setPurchaseFirstNo={setPurchaseFirstNo}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
          </div>
          <div className="left-column">
            <FilterComp
              countryList={countryList}
              setSearchFilter={setSearchFilter}
              setCountryFilter={setCountryFilter}
              setTagsFilter={setTagsFilter}
              setRangeFilter={setRangeFilter}
              rangeFilter={rangeFilter}
              freeFilter={freeFilter}
              setFreeFilter={setFreeFilter}
              commissionState={commissionState}
              setCommissionState={setCommissionState}
              typeState={typeState}
              setTypeState={setTypeState}
              purchaseFirstYes={purchaseFirstYes}
              setPurchaseFirstYes={setPurchaseFirstYes}
              purchaseFirstNo={purchaseFirstNo}
              setPurchaseFirstNo={setPurchaseFirstNo}
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
            />
          </div>
          <div className="right-column">
            {!loading ? (
              // <div className='post-list-container'>
              //   {livePosts?.map((data, index) => {
              //     return index == 2 || index == 5 || index == 8 || index == 11 ? (
              //       <>
              //         <div className='banner-container'>
              //           <Skeleton.Image active={false} />
              //           {/* <img src={ads[Math.floor(Math.random() * ads.length)]} /> */}
              //         </div>
              //         <PostNew key={index} data={data} liked={liked} setLiked={setLiked} />
              //       </>
              //     ) : (
              //       <PostNew key={index} data={data} liked={liked} setLiked={setLiked} />
              //     )
              //   })}
              // </div>
              <div className="post-list-container">
                {userDetails?.blockAds
                  ? livePosts?.map((data, index) => {
                      if (count % 2 !== 0) {
                        count = count + 1;
                        return (
                          <>
                            <PostNew
                              key={index}
                              data={data}
                              liked={liked}
                              setLiked={setLiked}
                            />
                            <div className="banner-container">
                              <Skeleton.Image active={false} />
                              {/* <img src={ads[Math.floor(Math.random() * ads.length)]} /> */}
                            </div>
                          </>
                        );
                      } else {
                        count = count + 1;
                        return (
                          <PostNew
                            key={index}
                            data={data}
                            liked={liked}
                            setLiked={setLiked}
                          />
                        );
                      }
                    })
                  : livePosts?.map((data, index) => {
                      return (
                        <PostNew
                          key={index}
                          data={data}
                          liked={liked}
                          setLiked={setLiked}
                        />
                      );
                    })}
                <div className="view-more-container">
                  {/* <Button type='primary' className='view-more-btn' onClick={() => setPage(page + 1)}>
                    View More
                  </Button> */}
                  <Pagination
                    defaultCurrent={page}
                    total={totalLivePosts}
                    onChange={(e) => setPage(e)}
                  />
                </div>
              </div>
            ) : (
              <Spin size="large" />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
