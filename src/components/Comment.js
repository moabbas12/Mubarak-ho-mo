import React from "react";
import { useState } from "react";
function Comment() {
  const [message, setMessage] = useState("");

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };
  // let React.createElement = onclick

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message)
    ;
  };

  // const [comment,setComment]= useState("p");

  // const = React.createElement
  // {paragraph.innerText = input.value;
  // divtask.appendChild(paragraph);
  // paragraph.classList.add("p");}

  return (
    <div className="container">
      <div className="divtask">
        <h4 className="reveiws-head"> Reveiw</h4>
        <p className="reveiw-sub">Comments (7)</p>
        <div>
          <input
            className="input-comment"
            type="text"
            id="message"
            name="message"
            onChange={handleChange}
            value={message}
          />

          {/* <h2>M: {message}</h2> */}
          <div className="d-flex justify-content-end ">
            <img className="img-input" src="Group442.png" alt="smile" />
            <button type="submit" className="input-btn" onClick={handleClick}>
              Comment
            </button>
          </div>

          <p className="reveiw-sub my-5"> New Comments (4)</p>
          <div className="d-flex comment-box">
            <img src="Ellipse4.png" alt="akhter" />
            <div>
              <p className="akhter my-0 mx-3">AkhterAli Dep7i</p>
              <p className=" comment-text my-0 mx-3"> {updated}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
