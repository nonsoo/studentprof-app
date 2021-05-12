import React from "react";

const Profiles = ({ Name, Email, Company, Average }) => {
  return (
    <div className="Profiles">
      {/* <img src="" alt="" className="Profiles__Img" /> */}
      <div className="Profiles__Img"></div>
      <div className="Profiles__TextCon">
        <p className="Profiles__Title">{Name}</p>
        <p className="Profiles__Email subText">Email: {Email}</p>
        <p className="Profiles__Company subText">Company: {Company}</p>
        <p className="Profiles__Average subText">Average: {Average}</p>
      </div>
    </div>
  );
};

export default Profiles;

Profiles.defaultProps = {
  Name: "John Doe",
  Email: "Sample@sample.com",
  Company: "Sample Company",
  Average: "100%",
};
