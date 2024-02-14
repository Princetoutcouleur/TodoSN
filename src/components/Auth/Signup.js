import React from "react";
import Header from "../header";

const Signup = () => {
  return (
    <div id="Signup" className="container">
      <div className="pt-5">
        <Header />
        <div className="row pt-5">
          <div className="col-lg-6 col-sm-6">
            <h1 className="text-sm-start text-center pb-3 Titre">
              Inscrivez-vous
            </h1>
            <p className="text-sm-start text-center pb-3 Texte">
              Gagnez en concentration,
              <br /> en organisation <br /> et en sérénité avec TodoSN.
            </p>
          </div>
          <div className="col-lg-6 col-sm-6">
            <div class="card mb-3 py-3 px-2">
              <div class="card-body">
                <form>
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label">
                      Nom Complet
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Mot de passe
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button type="submit" class="btn btn-danger">
                      <a
                        className="text-decoration-none text-white"
                        href="/home"
                      >
                        Inscription
                      </a>
                    </button>
                  </div>
                </form>
              </div>
              <p className="text-center">
                Déjà inscrit ?
                <a className="text-danger ms-2" href="/">
                  connectez-vous
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
