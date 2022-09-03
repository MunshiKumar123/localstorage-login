import React from "react";

const Main = () => {
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <div className="container mt-3">
        <p>Welcome Home Page!👌</p>
      </div>

      <div className="container mt-5">
        <button className="btn btn-primary" onClick={handleClick}>
          Logout
        </button>
      </div>
    </>
  );
};

export default Main;
