import React from "react";
import CommentDetails from "./CommentDetail";

const WrapCard = (props) => {
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
    <div class="wrapper" style={border}>
      <CommentDetails
        author={props.author}
        time={props.time}
        comment={props.comment}
      />
      <button class="accept" style={bg("lightgreen")}>
        Accept
      </button>
      <button class="decline" style={bg("red")}>
        Decline
      </button>
    </div>
  );
};

export default WrapCard;
