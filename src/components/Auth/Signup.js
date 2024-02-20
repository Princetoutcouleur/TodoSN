import React, { useState } from "react";
import Header from "../header";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        localStorage.setItem("fullName", fullName);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        toast.success("Inscription réussie !");
        setTimeout(() => {
          setRedirectToLogin(true);
        }, 2000); // Rediriger après 2 secondes
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erreur lors de l'inscription !");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (redirectToLogin) {
    return <Navigate to="/" replace />;
  }
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
                <form onSubmit={signUp}>
                  <div class="mb-3">
                    <label for="exampleInputName" class="form-label">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button type="submit" class="btn btn-danger">
                      Inscription
                    </button>
                  </div>
                  {loading && (
                    <div className="loader text-center text-secondary">
                      Inscription...
                    </div>
                  )}
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
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Signup;

