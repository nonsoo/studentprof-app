import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import axios from "axios";

import "./Css/layout.css";
import "./Css/Comp.css";

import Profiles from "./Components/Profiles";

function App() {
  const [userProf, setUserProf] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");
  // const displayTag = useSelector((state) => state.tag.tags);

  useEffect(() => {
    axios.get(`https://api.hatchways.io/assessment/students`).then((res) => {
      const responseProf = res.data;
      setUserProf(responseProf);
    });
  }, []);

  return (
    <div className="studentProf--appC">
      {userProf && (
        <div className="ProfilesContainer">
          <input
            type="text"
            className="SearchField"
            placeholder="Search By Name"
            defaultValue={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <input
            type="text"
            className="SearchField"
            placeholder="Search By Tag"
            defaultValue={searchTag}
            onChange={(e) => setSearchTag(e.target.value)}
          />
          {userProf.students
            .filter((profile) => {
              if (searchTerm === "" || searchTag === "") {
                return profile;
              } else if (
                profile.firstName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                profile.lastName
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return profile;
              }
            })
            .map((prof) => (
              <div key={prof.id}>
                <Profiles
                  fName={prof.firstName}
                  lName={prof.lastName}
                  Email={prof.email}
                  Company={prof.company}
                  Skill={prof.skill}
                  Img={prof.pic}
                  Score={prof.grades}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default App;
