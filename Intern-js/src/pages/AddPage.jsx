import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Upload from '../components/uploadCSV/Upload';
import Records from '../components/records/Records';

const AddPage = ({componentFunction}) => {
  return (
    <>
      <Navbar></Navbar>
      <Upload componentFunction={componentFunction}></Upload>
      <Records tableName={componentFunction}></Records>
      <Footer></Footer>
    </>
  );
};

export default AddPage;
