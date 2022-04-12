// import { render } from "@testing-library/react";
// import React, {useState} from "react";
// import { Modal, Button, Form } from 'react-bootstrap'
// import * as ReactDOM from 'react-dom';

// function MyVerticallyCenteredModal(props) {
//   // const root= ReactDOM.createPortal(
//   //   document.querySelector('#tbody')
//   // )
//   // const plateList = []
//   const [plates, setPlates] = useState([])
 
//   function handleSubmit (event) {
//     event.preventDefault();
    

//     const bodyEl = document.getElementById("test1")
//     // console.log(event.target.plate.value)
//     const plateInput = event.target.plate.value

//     setPlates([... plates, {
//       id: plates.length,
//       value: plateInput
//     }])

//     // const addPlate = () => {
//     //   setPlates([... plates, {
//     //     id: plates.length,
//     //     value: plateInput
//     //   }])
//     // }
    
//     return (
//       <div>
//         <ul>
//           {
//             plates.map(plate => <li key={plate.id}>{plate.value}</li>)
//           }
//         </ul>
//       </div>
//     )
    
  
//     // addPlate()
    
//     // const trArray = []
//     // const elArr = []
//     // const [rows, setRows] = useState(trArray);

//     // const tableEL = document.getElementById("tableEl")
   

//     // const trEl = React.createElement('tr', null, "")
//     // function creatEl () {
      
     
      
//     //   return (
//     //     <div>
//     //       <h2>{plate}</h2>
//     //     </div>
        
        
//     //     // <tr>
//     //     //   <td>{plate}</td>
//     //     //   <td>
//     //     //     <select name="user" id="user">
//     //     //         <option value="none" selected disabled>Select an User</option>
//     //     //         <option value="carlos_rojas">Carlos Rojas</option>
//     //     //         <option value="andres_barnola">Andres Barnola</option>
//     //     //     </select>
//     //     //   </td>
//     //     //   <td><Button variant="primary">Inspected</Button>{' '}<Button variant="danger">Delete</Button></td>
//     //     // </tr>
//     //   )
//     //   // elArr.push(elm)
//     //   // ReactDOM.render(elArr, tbodyEl)
     
//     // }
//     // // console.log(elArr)
//     // creatEl()

//     // const trEl = document.createElement('tr')
    
    
//     // const tdEl1= document.createElement('td')
//     // tdEl1.innerText = plate
    
//     // const tdEl2 = document.createElement('td')
    
//     // const selectEl = document.createElement('select')
    
//     // const optEl1 = document.createElement('option')
//     // optEl1.setAttribute("value", "none")
//     // // optEl1.setAttribute("selected disable", "")
//     // optEl1.innerText = "Select an User"

//     // const optEl2 = document.createElement('option')
//     // optEl2.setAttribute("value", "carlos_rojas")
//     // optEl2.innerText = "Carlos Rojas"

//     // const optEl3 = document.createElement('option')
//     // optEl3.setAttribute("value", "andres_barnola")
//     // optEl3.innerText = "Andres Barnola"

    
//     // selectEl.appendChild(optEl1)
//     // selectEl.appendChild(optEl2)
//     // selectEl.appendChild(optEl3)
//     // tdEl2.appendChild(selectEl)

//     // const tdEl3 = document.createElement('td')
    
//     // const inspctBtn = document.createElement('button')
//     // inspctBtn.innerText = "Inspected"
//     // tdEl3.appendChild(inspctBtn)

//     // tbodyEl.appendChild(trEl)
//     // tbodyEl.appendChild(tdEl1)
//     // tbodyEl.appendChild(tdEl2)
//     // tbodyEl.appendChild(tdEl3)



//     // const test = (
//     //   <tr>
//     //     <td>1</td>
//     //     <td>
//     //       <select name="user" id="user">
//     //           <option value="none" selected disabled>Select an User</option>
//     //           <option value="carlos_rojas">Carlos Rojas</option>
//     //           <option value="andres_barnola">Andres Barnola</option>
//     //           <option value="Joyceruba_mercado">Joyceruba Mercado</option>
//     //       </select>
//     //     </td>
//     //     <td><Button variant="primary">Inspected</Button>{' '}<Button variant="danger">Delete</Button></td>
//     //   </tr>
//     // )
//     // root.render(test)
//   }

//   return (
//     <Modal
//       {...props}
//       size="lg"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Add a New Car
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label htmlFor="disabledTextInput">Vehicle Plate</Form.Label>
//               <Form.Control id="plate" placeholder="Plate" />
//             </Form.Group>
//             {/* <Form.Group className="mb-3">
//               <Form.Label htmlFor="disabledSelect">Select an User</Form.Label>
//               <Form.Select id="disabledSelect">
//                 <option selected disabled>Select an option</option>
//                 <option>Andres Barnola</option>
//                 <option>Carlos Rojas</option>
//               </Form.Select>
//             </Form.Group> */}
//             <Button variant="success" type="submit">Add</Button>
//         </Form>
//       </Modal.Body>
//       {/* <Modal.Footer>
//         <Button variant="danger" onClick={props.onHide}>Close</Button>
//       </Modal.Footer> */}
//     </Modal>
//   );
// }

// export default MyVerticallyCenteredModal;