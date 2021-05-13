import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTag } from "../Redux/ducks/tag";
const Profiles = ({ fName, lName, Email, Company, Skill, Img, Score }) => {
  const [toggleState, setToggleState] = useState(false);
  const [tag, setTag] = useState([]);
  const [newTag, setNewTag] = useState("");
  const dispatch = useDispatch();

  const onAddTag = () => {
    if (newTag === "") {
      alert("please enter a Tag");
      return;
    }
    setTag([...tag, newTag]);
    setNewTag("");
    dispatch(addTag([newTag]));
  };

  const computeAvg = () => {
    let average = 0;
    let Total = 0;

    Score.forEach((grade) => {
      Total = Total + parseInt(grade);
    });

    average = Total / Score.length;
    return average;
  };

  const onToggle = () => {
    setToggleState(!toggleState);
  };
  return (
    <div className="Profiles">
      <div className="Profile__PicTextCon">
        <img src={`${Img}`} alt="Profile Pic" className="Profiles__Img" />
        <div className="Profiles__TextCon">
          <p className="Profiles__Title">
            {fName} {lName}
          </p>
          <p className="Profiles__Email subText">Email: {Email}</p>
          <p className="Profiles__Company subText">Company: {Company}</p>
          <p className="Profiles__Company subText">Skill: {Skill}</p>
          <p className="Profiles__Average subText">Average: {computeAvg()}%</p>
          <div className={`testScoreCon ${toggleState && "showCon"}`}>
            {Score.map((grade, index) => (
              <p key={index} className="testScore">
                Test {index + 1}: {grade}%
              </p>
            ))}
          </div>
          <div className="Profiles__TagCon">
            {tag.map((indiviTag) => (
              <p
                key={Math.floor(Math.random() * 10000)}
                className="Profiles__Tag"
              >
                {indiviTag}
              </p>
            ))}
          </div>

          <div className="Profiles__TagAddCon">
            <input
              type="text"
              className="Profiles__TagInput"
              value={newTag}
              onChange={(e) => setNewTag(e.target.value)}
              placeholder="Add a Tag"
            />
            <button className="Profiles__TagBtn" onClick={onAddTag}>
              Add new Tag
            </button>
          </div>
        </div>
      </div>

      <button className="Profiles__Btn" onClick={() => onToggle()}>
        {!toggleState ? "+" : "-"}
      </button>
    </div>
  );
};

export default Profiles;

Profiles.defaultProps = {
  fName: "John",
  lName: "Doe",
  Email: "Sample@sample.com",
  Company: "Sample Company",
};
