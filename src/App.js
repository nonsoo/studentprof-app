import "./Css/layout.css";
import "./Css/Comp.css";

import Profiles from "./Components/Profiles";

function App() {
  return (
    <div className="studentProf--appC">
      <div className="ProfilesContainer">
        <input
          type="text"
          className="SearchField"
          placeholder="Search By Name"
        />
        <Profiles />
        <Profiles />
        <Profiles />
      </div>
    </div>
  );
}

export default App;
