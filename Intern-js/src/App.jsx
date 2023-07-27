import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddStudentScreen from "./pages/AddStudentPage";
import CreateTimeTableScreen from "./pages/CreateTimeTablePage";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<AddStudentScreen/>}/>
          <Route path="/create" element={<CreateTimeTableScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
