import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import TimeTable from '../components/timeTable/TimeTable';
import Records from "../components/records/Records";

const CreateTimeTableScreen = () => {
  return (
    <div>
      <Navbar username="ADMIN"></Navbar>
      <TimeTable></TimeTable>
      <Records tableName="TimeTables"></Records>
      <Footer></Footer>
    </div>
  );
};

export default CreateTimeTableScreen;
