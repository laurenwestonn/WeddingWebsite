import React from "react";
import { Location } from "./index";
import Header from "../Header";
import { Route } from "react-router-dom";

function FullWidthContentPage() {
  return (
    <>
      <Header />
      <div className="full">
        <div className="content">
          <Route path="*/location" component={Location} />
        </div>
      </div>
    </>
  );
}

export default FullWidthContentPage;
