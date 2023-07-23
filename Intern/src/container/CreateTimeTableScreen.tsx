import NavbarComponent from "../component/NavbarComponent";
import FooterComponent from "../component/FooterComponent";
import TimeTableComponent from "../component/TimeTableComponent";

const CreateTimeTableScreen = () => {
  return (
    <div>
      <NavbarComponent username="ADMIN"></NavbarComponent>
      <FooterComponent></FooterComponent>
      <TimeTableComponent></TimeTableComponent>
    </div>
  );
};

export default CreateTimeTableScreen;
