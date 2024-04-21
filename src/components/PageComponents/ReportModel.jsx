import React, { useState } from "react";
import { reportPost } from "../../redux/actions/postsAction";
import { Modal, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";

const ReportModel = ({ open, postId, title, handler }) => {
  const dispatch = useDispatch();
  const [reportCheck, setReportCheck] = useState("");

  const hanldeReport = () => {
    dispatch(reportPost({ text: reportCheck, postId }));
    handler();
    setReportCheck("");
  };

  return (
    <Modal
      title={`Report ${title}`}
      footer={false}
      centered
      open={open}
      onOk={() => handler(false)}
      onCancel={() => {
        handler(false);
        setReportCheck("");
      }}
    >
      <div className="report-modal">
        <div className="report-sec">
          <Checkbox
            checked={reportCheck === "expired" ? true : false}
            onChange={() => {
              if (reportCheck !== "expired") {
                setReportCheck("expired");
              } else if (reportCheck === "expired") {
                setReportCheck("");
              }
            }}
          >
            Expired
          </Checkbox>
          <Checkbox
            checked={reportCheck === "scam" ? true : false}
            onChange={() => {
              if (reportCheck !== "scam") {
                setReportCheck("scam");
              } else if (reportCheck === "scam") {
                setReportCheck("");
              }
            }}
          >
            Scam
          </Checkbox>
          <Checkbox
            checked={reportCheck === "spam" ? true : false}
            onChange={() => {
              if (reportCheck !== "spam") {
                setReportCheck("spam");
              } else if (reportCheck === "spam") {
                setReportCheck("");
              }
            }}
          >
            Spam
          </Checkbox>
          <Checkbox
            checked={reportCheck === "inappropriate" ? true : false}
            onChange={() => {
              if (reportCheck !== "inappropriate") {
                setReportCheck("inappropriate");
              } else if (reportCheck === "inappropriate") {
                setReportCheck("");
              }
            }}
          >
            Inappropriate
          </Checkbox>
          <Checkbox
            checked={reportCheck === "infringes" ? true : false}
            onChange={() => {
              if (reportCheck !== "infringes") {
                setReportCheck("infringes");
              } else if (reportCheck === "infringes") {
                setReportCheck("");
              }
            }}
          >
            Infringes Rights
          </Checkbox>
          <Checkbox
            checked={reportCheck === "identical" ? true : false}
            onChange={() => {
              if (reportCheck !== "identical") {
                setReportCheck("identical");
              } else if (reportCheck === "identical") {
                setReportCheck("");
              }
            }}
          >
            Identical
          </Checkbox>

          <Checkbox
            checked={reportCheck === "vague" ? true : false}
            onChange={() => {
              if (reportCheck !== "vague") {
                setReportCheck("vague");
              } else if (reportCheck === "vague") {
                setReportCheck("");
              }
            }}
          >
            Vague
          </Checkbox>
          <Checkbox
            checked={reportCheck === "something" ? true : false}
            onChange={() => {
              if (reportCheck !== "something") {
                setReportCheck("something");
              } else if (reportCheck === "something") {
                setReportCheck("");
              }
            }}
          >
            Something Else
          </Checkbox>
        </div>
        <div className="bottom-container">
          <Button
            className="report-btn"
            disabled={reportCheck === "" ? true : false}
            onClick={hanldeReport}
          >
            Report
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ReportModel;
