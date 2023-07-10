import './App.css';
import { Routes, Route } from 'react-router-dom';

import UseStateDemo from './component/UseStateDemo';
import HomeComponent from './component/HomeComponent';
import UseStateDemo2 from './component/UseStateDemo2';
import UseRefDemo from './component/UseRefDemo';
import UseContextDemo from './component/UseContextDemo';

function App() {
  return ( 
    <>
    <Routes>
      <Route path="usestate" element={<UseStateDemo/>}/>
      <Route path="usestate2" element={<UseStateDemo2/>}/>
      <Route path="useref" element={<UseRefDemo/>}/>
      <Route path="usecontext" element={<UseContextDemo/>}/>
      <Route path="/*" element={<HomeComponent/>}/>
    </Routes>
    </>
  )
}

export default App
