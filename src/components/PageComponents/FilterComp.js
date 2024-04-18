import React, { useState } from "react";
import { Select, Input, Checkbox, Button } from "antd";
import { useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";

// import Img from "../../assets/kitkat.jpg";
import AdsComponent from "../other/AdComponent";
import AdsCom from "../other/AdsCom";

const FilterComp = ({
  countryList,
  setSearchFilter,
  setCountryFilter,
  setTagsFilter,
  setRangeFilter,
  rangeFilter,
  freeFilter,
  setFreeFilter,
  commissionState,
  setCommissionState,
  typeState,
  setTypeState,
  purchaseFirstYes,
  setPurchaseFirstYes,
  purchaseFirstNo,
  setPurchaseFirstNo,
  categoryFilter,
  setCategoryFilter,
}) => {
  const userProfileDetails = useSelector((state) => state?.userReducer.user);
  // const [searchType, setSearchType] = useState('title')

  const [filtersState, setFiltersState] = useState({
    search: null,
    country: null,
    category: [],
    tags: [],
    range: [],
    comission: commissionState,
    type: typeState,
    // purchase: purchaseFirst,
  });

  const clearFilter = () => {
    setSearchFilter(null);
    setCountryFilter(null);
    setTagsFilter([]);
    setRangeFilter([]);
    setFreeFilter(false);
    setCommissionState("");
    setTypeState("");
    setPurchaseFirstYes(false);
    setPurchaseFirstNo(false);
    setCategoryFilter([]);
    // setPurchaseFirst(false)

    setFiltersState({
      search: null,
      country: null,
      category: [],
      tags: [],
      range: [],
      comission: "",
      type: "",
      purchase: false,
    });
  };

  // const selectAfter = (
  //   <Select defaultValue={searchType} onChange={(e) => setSearchType(e)}>
  //     <Select.Option value='title'>Title</Select.Option>
  //     <Select.Option value='value'>Tag</Select.Option>
  //   </Select>
  // )

  return (
    <div className="filter-container">
      <div className="filter-label-container">
        <label>Search Item</label>
        <Input
          value={filtersState.search}
          placeholder="Search"
          className="home-input custom-filter-input"
          onChange={(e) => {
            setFiltersState({ ...filtersState, search: e.target.value });
            setSearchFilter(e.target.value);
            // if (searchType == 'title') {
            //   setFiltersState({ ...filtersState, search: e.target.value })
            //   setSearchFilter(e.target.value)
            // } else {
            //   // setFiltersState({ ...filtersState, tags: e })
            //   setFiltersState({ ...filtersState, search: e.target.value })
            //   if (e.target.value.length == 0) {
            //     setTagsFilter('')
            //   } else {
            //     setTagsFilter(e.target.value)
            //   }
            // }
          }}
          addonBefore={
            <>
              <BsSearch />
            </>
          }
          // addonAfter={selectAfter}
        />
      </div>
      {/* <div className='filter-label-container'>
        <label>Filter by Title</label>
        <Input
          value={filtersState.search}
          placeholder='Search Post ...'
          className='home-input'
          onChange={(e) => {
            setFiltersState({ ...filtersState, search: e.target.value })
            setSearchFilter(e.target.value)
          }}
        />
      </div>
      <div className='filter-label-container'>
        <label>Filter by Tags</label>
        <Select
          className='home-select'
          mode='tags'
          value={filtersState.tags}
          allowClear
          style={{
            width: '100%',
          }}
          placeholder='Type key points for you post '
          onChange={(e) => {
            setFiltersState({ ...filtersState, tags: e })
            setTagsFilter(e)
          }}
          options={[]}
        ></Select>
      </div> */}
      <div className="filter-label-container">
        <label>Filter by Category</label>
        <Select
          value={filtersState.category}
          mode="multiple"
          allowClear
          style={{
            width: "100%",
          }}
          placeholder="Select Category"
          onChange={(e) => {
            setCategoryFilter(e);
            setFiltersState({ ...filtersState, category: e });
          }}
          options={[
            {
              value: "Adult",
              label: "Adult",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "AI",
              label: "AI",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Automotive",
              label: "Automotive",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Beverages",
              label: "Beverages",
              disabled: categoryFilter.length > 0 ? true : false,
            },
            {
              value: "Books",
              label: "Books",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Course",
              label: "Course",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Electronics",
              label: "Electronics",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Entertainment",
              label: "Entertainment",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Fashion & Beauty",
              label: "Fashion & Beauty",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Financial",
              label: "Financial",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Food",
              label: "Food",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Health",
              label: "Health",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Insurance",
              label: "Insurance",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Kids",
              label: "Kids",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Medicine",
              label: "Medicine",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: `Men's`,
              label: `Men's`,
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Miscellaneous",
              label: "Miscellaneous",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Productivity",
              label: "Productivity",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Security",
              label: "Security",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Software",
              label: "Software",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Sports",
              label: "Sports",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Tools & Accessories",
              label: "Tools & Accessories",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Travel",
              label: "Travel",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: "Video Games",
              label: "Video Games",
              disabled: categoryFilter?.length > 0 ? true : false,
            },
            {
              value: `Women's`,
              label: `Women's`,
              disabled: categoryFilter?.length > 0 ? true : false,
            },
          ]}
        ></Select>
      </div>

      <div className="filter-label-container check-label-container">
        <label>Price type</label>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
        >
          <Checkbox
            value={"free"}
            checked={freeFilter == "free" ? true : false}
            onChange={() => {
              if (freeFilter !== "free") {
                setFreeFilter("free");
              } else {
                setFreeFilter("");
              }
            }}
          >
            Free
          </Checkbox>
          <Checkbox
            value={"price"}
            checked={freeFilter == "price" ? true : false}
            onChange={() => {
              if (freeFilter !== "price") {
                setFreeFilter("price");
              } else {
                setFreeFilter("");
              }
            }}
          >
            Price
          </Checkbox>
        </div>
      </div>

      <div className="filter-label-container">
        <label>Price Range</label>
        <div className="two-input-filter-container">
          <Input
            disabled={freeFilter == "free" ? true : false}
            className="home-input"
            placeholder="min range"
            value={filtersState.range[0]}
            style={{
              width: "100%",
            }}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => {
              setFiltersState({
                ...filtersState,
                range: [
                  Number(e.target.value),
                  filtersState.range[1] == undefined
                    ? 0
                    : filtersState.range[1],
                ],
              });
              setRangeFilter([
                Number(e.target.value),
                rangeFilter[1] == undefined ? 0 : rangeFilter[1],
              ]);
            }}
            // options={options}
          />
          <Input
            disabled={freeFilter == "free" ? true : false}
            searchValue="number"
            className="home-input"
            placeholder="max range"
            value={filtersState.range[1]}
            style={{
              width: "100%",
            }}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => {
              setFiltersState({
                ...filtersState,
                range: [
                  filtersState.range[0] == undefined
                    ? 0
                    : filtersState.range[0],
                  Number(e.target.value),
                ],
              });
              setRangeFilter([
                rangeFilter[0] == undefined ? 0 : rangeFilter[0],
                Number(e.target.value),
              ]);
            }}
          />
        </div>
      </div>

      <div className="filter-label-container check-label-container">
        <label>Commission Type</label>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
        >
          <Checkbox
            value={commissionState.cash}
            checked={commissionState.cash}
            onChange={() => {
              setCommissionState({
                ...commissionState,
                cash: !commissionState.cash,
              });
            }}
          >
            Cash
          </Checkbox>
          <Checkbox
            value={commissionState.reward}
            checked={commissionState.reward}
            onChange={() => {
              setCommissionState({
                ...commissionState,
                reward: !commissionState.reward,
              });
            }}
          >
            Reward
          </Checkbox>
        </div>
      </div>

      <div className="filter-label-container check-label-container">
        <label>Item Type</label>
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "1rem" }}
        >
          <Checkbox
            value={"digital"}
            checked={typeState == "digital" ? true : false}
            onChange={() => {
              if (typeState !== "digital") {
                setTypeState("digital");
              } else {
                setTypeState("");
              }
            }}
          >
            Digital
          </Checkbox>
          <Checkbox
            value={"physical"}
            checked={typeState == "physical" ? true : false}
            onChange={() => {
              if (typeState !== "physical") {
                setTypeState("physical");
              } else {
                setTypeState("");
              }
            }}
          >
            Physical
          </Checkbox>
        </div>
      </div>

      <div className="filter-label-container">
        <label>Filter by Country</label>
        <Select
          className="home-select"
          placeholder="Country"
          value={filtersState.country}
          allowClear
          style={{
            width: "100%",
          }}
          onChange={(e) => {
            setFiltersState({ ...filtersState, country: e });
            setCountryFilter(e);
          }}
        >
          {countryList?.map((country) => (
            <Select.Option key={country?.id} value={country?.name}>
              {country?.name}
            </Select.Option>
          ))}
        </Select>
      </div>

      {userProfileDetails?.premium && (
        <div className="filter-label-container check-label-container">
          <label>Filter by Purchase First</label>
          <div>
            <Checkbox
              value={"digital"}
              checked={purchaseFirstYes}
              onChange={(e) => {
                if (purchaseFirstNo) {
                  setPurchaseFirstNo(!purchaseFirstNo);
                  setPurchaseFirstYes(e.target.checked);
                } else {
                  setPurchaseFirstYes(e.target.checked);
                }
              }}
            >
              Yes
            </Checkbox>
            <Checkbox
              value={"digital"}
              checked={purchaseFirstNo}
              onChange={(e) => {
                if (purchaseFirstYes) {
                  setPurchaseFirstYes(!purchaseFirstYes);
                  setPurchaseFirstNo(e.target.checked);
                } else {
                  setPurchaseFirstNo(e.target.checked);
                }
              }}
            >
              No
            </Checkbox>
          </div>
        </div>
      )}
      <div className="filter-label-container">
        <Button className="clear-filter-btn" onClick={clearFilter}>
          Clear
        </Button>
      </div>
      {
        <div className="filter-label-container">
          {/* <Skeleton.Image className="filter-ad" active={false} /> */}
          {/* <img style={{ width: "100%" }} src={Img} /> */}
          {/* <AdsComponent /> */}
          <AdsCom />
        </div>
      }
    </div>
  );
};

export default FilterComp;
