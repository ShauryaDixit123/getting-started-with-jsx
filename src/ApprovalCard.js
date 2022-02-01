import React from "react";

const ApprovalCard = function (props) {
  console.log(props.children);
  const bg = (bgcolor) => {
    return { backgroundColor: bgcolor, color: "white" };
  };
  const border = {
    border: "1px solid black",
    width: "250px",
    margin: "10px",
    borderRadius: "15px",
    padding: "10px",
    paddingLeft: "25px",
  };
  return (
    <div className="uicard" style={border}>
      <div className="content">{props.children}</div>
      <div className="extracontent">
        <div className="ui two buttons">
          <div className="ui basic green button ">Approve</div>
          <div className="ui basic red button ">Decline</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
