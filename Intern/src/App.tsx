import { Routes, Route } from "react-router-dom";

import "./App.css";
import AddStudentScreen from "./container/AddStudentScreen";
import CreateTimeTableScreen from "./container/CreateTimeTableScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<AddStudentScreen />} />
        <Route path="/create" element={<CreateTimeTableScreen />} />
      </Routes>
    </>
  );
}

export default App;
