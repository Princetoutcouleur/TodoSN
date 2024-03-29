import React, { useState } from "react";
import Header from "../header";
import { auth } from "../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        }, 2000);
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
            <div className="card mb-3 py-3 px-2">
              <div className="card-body">
                <form onSubmit={signUp}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputName"
                      aria-describedby="emailHelp"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3 position-relative">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Mot de passe
                    </label>
                    <div className="d-flex">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control"
                        id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn btn-link position-absolute end-0 text-danger"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center ">
                    <button type="submit" className="btn btn-danger">
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
