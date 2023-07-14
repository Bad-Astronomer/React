import './App.css'
import NavbarComponent from './component/NavbarComponent';
import FooterComponent from './component/FooterComponent';
import AddStudentComponent from './component/AddStudentComponent';

function App() {

  return (
    <>
      <NavbarComponent username='ADMIN'></NavbarComponent>
      <FooterComponent></FooterComponent>
      <AddStudentComponent></AddStudentComponent>
    </>
  )
}

export default App
