import React, { useState } from "react";
import { Button, Drawer, Typography } from "antd";
import { BsFilter } from "react-icons/bs";
import FilterComp from "./FilterComp";

const FilterDrawer = ({
  countryList,
  setSearchFilter,
  setCountryFilter,
  setTagsFilter,
  setRangeFilter,
  rangeFilter,
  setFreeFilter,
  freeFilter,
  commissionState,
  setCommissionState,
  typeState,
  setTypeState,
  purchaseFirst,
  setPurchaseFirst,
  categoryFilter,
  setCategoryFilter,
}) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="filter-drawer-container">
      <div className="filter-drawer-btn" onClick={showDrawer}>
        <Typography.Paragraph className="para">Filters</Typography.Paragraph>
        <BsFilter />
      </div>
      {/* <Button type='primary' onClick={showDrawer}>
        Filters
      </Button> */}
      <Drawer
        className="filter-drawer"
        placement={"left"}
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </>
        }
      >
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
          purchaseFirst={purchaseFirst}
          setPurchaseFirst={setPurchaseFirst}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
      </Drawer>
    </div>
  );
};

export default FilterDrawer;
