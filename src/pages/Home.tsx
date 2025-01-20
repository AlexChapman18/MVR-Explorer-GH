import MVRContainer from "../components/MVRContainer.tsx";

function Home() {
  return (
    <>
      <input type="file" id="fileInput" accept=".mvr" />
      <MVRContainer />
    </>
  );
}

export default Home;
