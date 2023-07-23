import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import AddStudentComponent from "../component/AddStudentComponent";

const AddStudentScreen = () => {
  return (
    <div>
      <NavbarComponent username="ADMIN"></NavbarComponent>
      <FooterComponent></FooterComponent>
      <AddStudentComponent></AddStudentComponent>
    </div>
  );
};

export default AddStudentScreen;
