import './AddStudentComponent.css'

const AddStudentComponent = () => {
  return (
    <div className='component-container'>
      <div className="add-student-container">
        <form className='add-student-inner-container'>
            <p className="primary-text">Add/Edit Students</p>
            <div className="input-container">
                <input type="text" />
                <button className='primary-button'>Upload</button>
            </div>
            <p className="secondary-text">Upload .csv file</p>
        </form>
      </div>
      <div className="download-template-container">
        <p className="primary-text">Download Template</p>
        <button className='primary-button'>Download</button>
      </div>
    </div>
  )
}

export default AddStudentComponent
