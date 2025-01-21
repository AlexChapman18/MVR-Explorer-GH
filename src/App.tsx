import Home from "./pages/Home.tsx";
import { Route, Routes } from "react-router-dom";

// Handles routes to different pages
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
