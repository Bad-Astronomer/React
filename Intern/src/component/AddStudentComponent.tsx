import ButtonComponent from './ButtonComponent'
import './css/AddStudentComponent.css'

const AddStudentComponent = () => {

  const uploadFunction = () => {
    console.log("Call Upload Function");
  }

  const downloadFunction = () => {
    console.log("Call Download Function");
  }

  return (
    <div className='component-container'>
      <div className="add-student-container">
        <form className='add-student-inner-container'>
            <p className="primary-text">Add/Edit Students</p>
            <div className="input-container">
                <input type="text" />
                <ButtonComponent text="Upload" onClickFunction={() => {uploadFunction()}}></ButtonComponent>
            </div>
            <p className="secondary-text">Upload .csv file</p>
        </form>
      </div>
      <div className="download-template-container">
        <p className="primary-text">Download Template</p>
        <ButtonComponent text="Download" onClickFunction={() => {downloadFunction()}}></ButtonComponent>
      </div>
    </div>
  )
}

export default AddStudentComponent
