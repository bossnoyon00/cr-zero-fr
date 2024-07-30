import React, { useState } from "react";
import { Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div>
      <div className="ml-3">
        <Avatar
          className="w-[45px] h-[45px] cursor-pointer"
          src={user?.avatar?.url}
          onClick={() => setOpenDropdown(true)}
        />
        <i
          className="fa-solid fa-caret-down ml-2"
          onClick={() => setOpenDropdown(true)}
        ></i>
      </div>

      {/* Dropdown Menu */}
      {openDropdown && (
        <div
          className=" w-[100vw] h-[100vh] fixed top-0 left-0 "
          onClick={() => setOpenDropdown(false)}
        ></div>
      )}
      <div
        className={`bg-white absolute  top-[75px] z-[99999] w-max shadow-[0px_0px_10px_2px_rgba(0,0,0,0.14)] rounded-[5px] p-1 flex-col items-start transition-all duration-500 ease-in-out ${
          openDropdown ? "right-4 opacity-[1]" : "right-[-300px] opacity-0"
        } `}
      >
        <div className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-100 w-full p-2 rounded-[5px] ">
          <NavLink
            to={"/programs"}
            className="leading-[17px] text-[#1677ff] hover:text-[#1677ff] text-base"
            onClick={()=> dispatch({type: 'CHANGE_TAB_ONE'})}
          >
            Your Programs
          </NavLink>
        </div>
        <div className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-100 w-full p-2 rounded-[5px] ">
          <NavLink
            to={"/programs"}
            className="leading-[17px] text-[#1677ff] hover:text-[#1677ff] text-base"
            onClick={()=> dispatch({type: 'CHANGE_TAB_TWO'})}
          >
            Liked Programs
          </NavLink>
        </div>
        <div className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-slate-100 w-full p-2 rounded-[5px] ">
          <NavLink
            to={"/settings"}
            className="leading-[17px] text-[#1677ff] hover:text-[#1677ff] text-base"
          >
            Settings
          </NavLink>
        </div>
        <div
          className="leading-[17px] text-[#1677ff] text-base cursor-pointer  transition-all duration-300 ease-in-out hover:bg-slate-100 w-full p-2 rounded-[5px]"
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          Logout
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
