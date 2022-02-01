import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetail";
import WrapCard from "./Card";
import ApprovalCard from "./ApprovalCard";
function App() {
  return (
    <div className="ui container comments">
      <WrapCard
        author="Shaurya"
        time="6pm"
        comment="Thats one hell of a post"
      />
      <WrapCard author="Shubhi" time="1pm" comment="WOW! I am  pam btw!" />

      <WrapCard author="Tanya" time="4pm" comment="I am monica!" />

      <WrapCard comment="Will you be my friend" />

      <ApprovalCard>
        <div>Will u be my friennnnnnddddd?</div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetails author="Vishnu" comment="fuck yes!" time="2pm" />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
