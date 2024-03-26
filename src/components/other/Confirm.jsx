import React from "react";
import { Modal } from "antd";

const Confirm = ({ open, handler, message }) => {
  return (
    <Modal open={open} closable={false} footer={false}>
      <h2 className="text-xl font-medium text-slate-700">Confirmation</h2>
      <p className="my-4 text-blue-500 ">{message}</p>
      <div className="mt-8 flex items-center justify-end gap-2">
        <button
          className="bg-[#fff] border border-[#d9d9d9] select-none p-[4px_15px] rounded-[2px] transition-all duration-300 hover:border-[#1890ff] hover:text-[#1890ff] "
          onClick={() => handler(false)}
        >
          Cancel
        </button>
        <button
          className="bg-[#1890ff] border border-[#1890ff] transition-all duration-300 tracking-widest hover:bg-[#4096ff] text-[#fff] select-none p-[4px_15px] rounded-[2px] "
          onClick={() => handler(true)}
        >
          Yes
        </button>
      </div>
    </Modal>
  );
};

export default Confirm;
