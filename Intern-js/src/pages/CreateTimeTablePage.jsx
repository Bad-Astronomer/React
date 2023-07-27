import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TimeTable from '../components/timeTable/TimeTable';

const CreateTimeTableScreen = () => {
  return (
    <div>
      <Navbar username="ADMIN"></Navbar>
      <TimeTable></TimeTable>
      <Footer></Footer>
    </div>
  );
};

export default CreateTimeTableScreen;
