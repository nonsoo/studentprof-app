import React, { useState } from "react";

const Profiles = ({
  fName,
  lName,
  Email,
  Company,
  Skill,
  Average,
  Img,
  Score,
}) => {
  const [toggleState, setToggleState] = useState(false);

  // const computeAvg = () => {
  //   let average = 0;
  //   let Total = 0;

  //   Score.forEach((grade) => {
  //     Total = Total + grade;
  //   });

  //   average = Total / Score.length();
  // };

  const onToggle = () => {
    setToggleState(!toggleState);
  };
  return (
    <div className="Profiles">
      <img src={`${Img}`} alt="" className="Profiles__Img" />
      <div className="Profiles__TextCon">
        <p className="Profiles__Title">
          {fName} {lName}
        </p>
        <p className="Profiles__Email subText">Email: {Email}</p>
        <p className="Profiles__Company subText">Company: {Company}</p>
        <p className="Profiles__Company subText">Skill: {Skill}</p>
        <p className="Profiles__Average subText">Average: {Average}</p>
        <div className={`testScoreCon ${toggleState && "showCon"}`}>
          {Score.map((grade, index) => (
            <p key={index} className="testScore">
              Test {index + 1}: {grade}%
            </p>
          ))}
        </div>
      </div>
      <button className="Profiles__Btn" onClick={() => onToggle()}>
        {!toggleState ? "+" : "X"}
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
