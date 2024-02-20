import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import Header from "../header";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Veuillez entrer une adresse e-mail valide.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Vérifiez votre boîte mail.");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  return (
    <div id="Login" className="container">
      <div className="pt-5">
        <Header />
        <div className="pt-5">
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div>
                <div className="col-lg-6 col-sm-6">
                  <h1 className="text-sm-start text-center pb-3 Titre">
                    Vous avez oublié votre mot de passe ?
                  </h1>
                  <p className="text-sm-start text-center pb-3 Texte">
                    Entrer votre email pour le réinitialiser.
                  </p>
                </div>
                <div className="card mb-3 py-3 px-2">
                  <div className="card-body">
                    <form onSubmit={handleSubmit}>
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
                      <div className="d-flex justify-content-center pt-3">
                        <button type="submit" className="btn btn-danger">
                          Réinitialiser
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
};

export default ForgotPassword;
