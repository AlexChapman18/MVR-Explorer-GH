import * as React from "react";
import MVRContainer from "../components/MVRContainer";

function Home() {
  return (
    <>
      <input type="file" id="fileInput" accept=".mvr" />
      <MVRContainer />
    </>
  );
}

export default Home;
