import React, { useState } from "react";
import { Table, Container, Row, Col, Button, InputGroup, FormControl, Form } from 'react-bootstrap'
import NewRow from "./NewRow";

function TableComp () {
  const [plates, setPlates] = useState([])
  const plateInput = document.getElementById('plate')
  
  const addCar = () => {
    const plateInput = document.getElementById('plate')

    setPlates([... plates, {
      id: plates.length,
      value: plateInput.value
    }])

    plateInput.value= ""
  }

  return(
    <div>
      <div>
        <Form>
          <Form.Group className="mb-3 d-inline-flex my-3">
            <Form.Label htmlFor="disabledTextInput"></Form.Label>
            <Form.Control className="text-center" id="plate" placeholder="Enter Vehicle Plate" />
          </Form.Group>
              <div>
              <Button variant="primary" id="button-addon2" onClick={addCar}>
                Add Vehicle
              </Button>
              </div>
          </Form>
      </div>
    
    <Container className="my-5">
      <Row>
        <Col>
          <Table striped bordered hover id="tableEl">
            <thead>
              <tr>
                <th>PLATE</th>
                <th>USER</th>
                <th></th>
              </tr>
            </thead>
            <tbody id="tbody">
              {plates.map( plate => (
                <NewRow plate={plate} plates={plates}></NewRow>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default TableComp;