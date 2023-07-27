import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import AddStudent from '../components/addStudent/AddStudent';
import Records from '../components/records/Records';

const AddStudentScreen = () => {
  return (
    <>
      <Navbar></Navbar>
      <AddStudent></AddStudent>
      <Records tableName="Students"></Records>
      <Footer></Footer>
    </>
  );
};

export default AddStudentScreen;
