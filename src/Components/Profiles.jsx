import React from "react";

const Profiles = ({ fName, lName, Email, Company, Skill, Average, Img }) => {
  return (
    <div className="Profiles">
      <img src={`${Img}`} alt="" className="Profiles__Img" />
      {/* <div className="Profiles__Img"></div> */}
      <div className="Profiles__TextCon">
        <p className="Profiles__Title">
          {fName} {lName}
        </p>
        <p className="Profiles__Email subText">Email: {Email}</p>
        <p className="Profiles__Company subText">Company: {Company}</p>
        <p className="Profiles__Company subText">Skill: {Skill}</p>
        <p className="Profiles__Average subText">Average: {Average}</p>
      </div>
    </div>
  );
};

export default Profiles;

Profiles.defaultProps = {
  fName: "John",
  lName: "Doe",
  Email: "Sample@sample.com",
  Company: "Sample Company",
  Average: "100%",
};
