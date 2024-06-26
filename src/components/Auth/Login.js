import React, { useState } from "react";
import Header from "../header";
import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Button } from "@nextui-org/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const signIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        toast.success("Connexion réussie !");
        setTimeout(() => {
          setRedirectToHome(true);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          toast.error("Email ou mot de passe incorrect.");
        } else {
          toast.error("Erreur lors de la connexion !");
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (redirectToHome) {
    return <Navigate to="/home" replace />;
  }
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
                  <form onSubmit={signIn}>
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
                          className="btn btn-link position-absolute end-0 me-4 text-danger"
                          onClick={togglePasswordVisibility}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                      </div>
                    </div>
                    <a href="/reset" className="text-danger">
                      Mot de passe oublié ?
                    </a>
                    <div className="d-flex justify-content-center pt-3">
                    {loading ? (
                      <Button className="btn btn-danger" color="danger" isLoading>
                        Connexion...
                      </Button>
                    ) : (
                      <button type="submit" className="btn btn-danger">
                        Connexion
                      </button>
                    )}
                    </div>
                  </form>
                </div>
                <p className="text-center">
                  Inscrivez-vous si vous avez pas un compte.{" "}
                  <a className="text-danger" href="/signup">
                    Inscription
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Login;
