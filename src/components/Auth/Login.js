import React from "react";
import Header from "../header";

const Login = () => {
  return (
    <div id="Login" className="container">
      <div className="pt-5">
        <Header />
        <div className="pt-5">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              <h1 className="text-sm-start text-center pb-3 Titre">
                Organisez enfin votre vie
                <br /> et votre travail.
              </h1>
              <p className="text-sm-start text-center pb-3 Texte">
                Gagnez en concentration, en organisation et en sérénité avec
                TodoSN.
                <br />
                La 1ère application de gestion de todo list au Sénégal.
              </p>
            </div>
            <div className="col-lg-6 col-sm-6 d-flex justify-content-center">
              <div class="card mb-3 py-3 px-2">
                <div class="card-body">
                  <form>
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
                          Connexion
                        </a>
                      </button>
                    </div>
                  </form>
                </div>
                <p className="text-center">
                  Inscrivez-vous si vous avezpas un compte.{" "}
                  <a className="text-danger" href="/signup">
                    Inscription
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
