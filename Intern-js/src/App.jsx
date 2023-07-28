import { BrowserRouter,Route,Routes } from "react-router-dom";
import AddPage from "./pages/AddPage";
import CreateTimeTableScreen from "./pages/CreateTimeTablePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<AddPage componentFunction="Students"/>}/>
          <Route path="/faculty" element={<AddPage componentFunction="Faculties"/>}/>
          <Route path="/course" element={<AddPage componentFunction="Courses"/>}/>
          <Route path="/staff" element={<AddPage componentFunction="Staff"/>}/>
          <Route path="/create" element={<CreateTimeTableScreen/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
