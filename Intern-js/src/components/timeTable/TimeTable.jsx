import React from 'react';
import Button from '../button/Button';
import "./timeTable.css";

const TimeTable = () => {

    const createTimeTable = () => {
        console.log("Create time table");
    }

    return (
    <div className="box">
        <h1>Create New Timetable</h1>
        <div className='elements'>
        <div className="input-group1">
            <label htmlFor="yearInput">Year / Session :</label>
            <input type="text" id="yearInput" />
        </div>
        <div className="input-group2">
            <label htmlFor="semSelect">Select Session:</label>
            <select id="semSelect">
            <option value="odd">Odd</option>
            <option value="even">Even</option>
            </select>
        </div>
        <div className="create-button">
            <Button text="Create" onClickFunction={() => {createTimeTable()}}></Button>
        </div>
        </div>
    </div>
    )
}

export default TimeTable;
