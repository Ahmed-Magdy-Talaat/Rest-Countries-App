import React, { useContext } from "react";
import { modeContext } from "../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { mode, toggleMode } = useContext(modeContext);
  const navigate = useNavigate();
  return (
    <div>
      <nav id={mode}>
        <div className="divider">
          <div
            className="mainTitle"
            onClick={() => {
              navigate("/");
            }}
          >
            Where in the world?
          </div>
          <div>
            <div className="icon-dark" onClick={toggleMode}>
              <FontAwesomeIcon icon={faMoon} className="icon" />
              <div className="word">
                {mode === "dark" ? "Light Mode" : "Dark Mode"}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
