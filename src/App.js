import { useState, useEffect } from "react";
import axios from "axios";

import "./Css/layout.css";
import "./Css/Comp.css";

import Profiles from "./Components/Profiles";

function App() {
  const [userProf, setUserProf] = useState();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get(`https://api.hatchways.io/assessment/students`).then((res) => {
      const responseProf = res.data;
      setUserProf(responseProf);
    });
  }, []);

  console.log(userProf);
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
          {userProf.students.map((prof) => (
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
