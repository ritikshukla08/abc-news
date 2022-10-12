import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import NewsPosts from "./components/NewsPost/NewsPosts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/business" element={<NewsPosts category="business" />} />
        <Route
          path="/entertainment"
          element={<NewsPosts category="entertainment" />}
        />
        <Route path="/general" element={<NewsPosts category="general" />} />
        <Route path="/home" element={<NewsPosts category="general" />} />
        <Route path="/health" element={<NewsPosts category="health" />} />
        <Route path="/science" element={<NewsPosts category="science" />} />
        <Route path="/sports" element={<NewsPosts category="sports" />} />
        <Route
          path="/technology"
          element={<NewsPosts category="technology" />}
        />
      </Routes>
    </>
  );
}

export default App;
