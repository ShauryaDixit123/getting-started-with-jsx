import React from "react";

const CommentDetails = (props) => {
  const bg = { backgroundColor: "lightblue" };
  console.log(props);
  return (
    <div className="comment" style={bg}>
      <a href="/" className="avatar">
        <img alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date"> Today {props.time}</span>
        </div>
        <div className="text">{props.comment}</div>
      </div>
    </div>
  );
};
export default CommentDetails;
