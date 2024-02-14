import React from "react";

const headerHome = () => {
  return (
    <div id="headerHome" className="fixed-top mb-5 py-3 px-2">
      <div>
        <h1 className="brandName fw-bold text-danger text-center">TodoSN</h1>
      </div>
      <div>
        <div class="dropdown">
          <button
            class="btn btn-light dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            User Name
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Déconnexion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default headerHome;
