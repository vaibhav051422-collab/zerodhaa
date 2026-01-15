import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-3 p-3 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            style={{ maxWidth: "140px" }}
            alt="Smallcase"
          />
          <p className="text-muted">Thematic investment platform</p>
        </div>

        <div className="col-3 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            style={{ maxWidth: "140px" }}
            alt="Sensibull"
          />
          <p className="text-muted">Options trading platform</p>
        </div>

        <div className="col-3 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            style={{ maxWidth: "140px" }}
            alt="Zerodha Fund House"
          />
          <p className="text-muted">Asset management</p>
        </div>

        <div className="col-3 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            style={{ maxWidth: "140px" }}
            alt="GoldenPi"
          />
          <p className="text-muted">Bonds trading platform</p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-4 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
