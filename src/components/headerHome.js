import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderHome = ({ fullName }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/", { replace: true });
  };

  return (
    <div id="headerHome" className="fixed-top mb-5 py-3 px-2">
      <div>
        <h1 className="brandName fw-bold text-danger text-center">TodoSN</h1>
      </div>
      <div>
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle text-capitalize"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {fullName}
          </button>
          <ul className="dropdown-menu">
            <li>
              <button className="dropdown-item btn btn-danger" onClick={logout}>
                Déconnexion
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderHome;
