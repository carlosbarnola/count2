import React, { useState } from "react"
import { Button } from 'react-bootstrap'



function NewRow (props) {
  const plate = props.plate.value
  const [isActive, setActive] = useState(false);
  const [buttonText, setButtonText] = useState("Inspected / Undo");
  const [isDelete, setDelete] = useState(false);

  const toggleClass = (text) => {
    setActive(!isActive);

    // setButtonText("Undo Inspection")
  };

  const deleteEl = () => {
    setDelete(!isDelete);
  }

  return(
      <tr id={plate} className={isActive ? "bg-success bg-gradient bg-opacity-50": null + isDelete ? "d-none": null}>
        <td>{plate}</td>
        <td>
        <select name="user" id="user">
            <option value="none" selected disabled>Select an User</option>
            <option value="carlos_rojas">Carlos Rojas</option>
            <option value="andres_barnola">Andres Barnola</option>
        </select>
      </td>
      <td><Button onClick={toggleClass} variant="primary">{buttonText}</Button>{' '}<Button onClick={deleteEl} variant="danger">Delete</Button></td>
    </tr>
  )
}

export default NewRow