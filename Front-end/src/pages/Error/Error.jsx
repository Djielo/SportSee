import React from "react";

const Error = () => {
  return (
    <div className="error">
      <h1 className="error_title">404</h1>
      <p className="error_text">Cette page n'existe pas !</p>
      <a href="/user/12" className="error_link">Retour à la page d'accueil</a>
    </div>
  );
};

export default Error;
