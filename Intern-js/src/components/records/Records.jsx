import React from 'react'
import './Records.css'
import './eye.css'

const Records = ({tableName}) => {
  return (
    <div className='main'>
        <h2>Existing {tableName} Table</h2>
        <p>Row 1 to 50 &lt;&lt; &gt;&gt; </p>
    <div className="Records">
	<table>
		<tr>
			<th>Name</th>
			<th>Roll No.</th>
			<th>Branch</th>
            <th>Proctor</th>
            <th>Student Email Id</th>
            <th>View</th>
		</tr>
		<tr>
			<td>XYZ</td>
			<td>11111111</td>
			<td>ABC</td>
            <td>Xyz</td>
            <td>xyz@somaiya.edu</td>
            <td><label className="dropdown">

              <div className="dd-button">
               
               </div>

               <input type="checkbox" className="dd-input" id="test"></input>

                <ul className="dd-menu">
                <li>View</li>
                <li>Delete</li>
  
                 </ul>
                 </label></td>
		</tr>
		<tr>
            <td>XYZ</td>
			<td>11111111</td>
			<td>ABC</td>
            <td>Xyz</td>
            <td>xyz@somaiya.edu</td>
            <td><label className="dropdown">

                 <div className="dd-button">
 
                </div>

                <input type="checkbox" className="dd-input" id="test"></input>

                 <ul className="dd-menu">
                <li>View</li>
                <li>Delete</li>

                </ul>
                </label></td>
		</tr>
		<tr>
            <td>XYZ</td>
			<td>11111111</td>
			<td>ABC</td>
            <td>Xyz</td>
            <td>xyz@somaiya.edu</td>
            <td><label className="dropdown">

<div className="dd-button">

</div>

<input type="checkbox" className="dd-input" id="test"></input>

<ul className="dd-menu">
<li>View</li>
<li>Delete</li>

</ul>
</label></td>
            
		</tr>
        <tr>
            <td>XYZ</td>
			<td>11111111</td>
			<td>ABC</td>
            <td>Xyz</td>
            <td>xyz@somaiya.edu</td>
            <td><label className="dropdown">

<div className="dd-button">

</div>

<input type="checkbox" className="dd-input" id="test"></input>

<ul className="dd-menu">
<li>View</li>
<li>Delete</li>

</ul>
</label></td>
    
            
        </tr>
        <tr>
            <td>XYZ</td>
			<td>11111111</td>
			<td>ABC</td>
            <td>Xyz</td>
            <td>xyz@somaiya.edu</td>
            <td>
            <label className="dropdown">

            <div className="dd-button">

            </div>

            <input type="checkbox" className="dd-input" id="test"></input>

            <ul className="dd-menu">
            <li>View</li>
            <li>Delete</li>

            </ul></label>
            </td>
        </tr>
	</table>
</div>
</div>
  )
}

export default Records
