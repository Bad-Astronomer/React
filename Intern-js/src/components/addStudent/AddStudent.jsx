import React from 'react';
import './addStudent.css';
import Button from '../button/Button';

const AddStudent = () => {

  const uploadFunction = () => {
    console.log("Call Upload Function");
  }

  const downloadFunction = () => {
    console.log("Call Download Function");
  }

  return (
    <div className='add-student-component-container'>
      <div className="add-student-container">
        <form className='add-student-inner-container'>
            <p className="primary-text">Add/Edit Students</p>
            <div className="input-container">
                <input type="text" />
                <Button text="Upload" onClickFunction={() => {uploadFunction()}}></Button>
            </div>
            <p className="secondary-text">Upload .csv file</p>
        </form>
      </div>
      <div className="download-template-container">
        <p className="primary-text">Download Template</p>
        <Button text="Download" onClickFunction={() => {downloadFunction()}}></Button>
      </div>
    </div>
  )
}

export default AddStudent;
