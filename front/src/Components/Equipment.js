import React, { useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newEquipment() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteEquipment(equipment_id) {
    fetch(`http://localhost:8080/equipment/${equipment_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }

function Equipment() {
    //setting state for equipment data
    const [equipmentData, setEquipmentData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/equipment')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setEquipmentData(data)
                })
    }

        , [])
    console.log(equipmentData);
    let equipmentList = equipmentData.map((equipment, index) => {
        return (
            <Card className='equipment-card' key={index} style={{ width: '18rem'}}>
            
                <Card.Body>
                    <Card.Title>
                        Equipment Name:{equipment.name}
                    </Card.Title>

                    <Card.Title>
                        Equipment Type:{equipment.type}
                    </Card.Title>
                
                    <Card.Text>
                        Amount In Stock: {equipment.amount_in_stock}
                    </Card.Text>
                    <Card.Text>
                        Cost To Buy: {equipment.cost_to_buy}
                    </Card.Text>
                    <Card.Text>
                    Sell Price: {equipment.sell_price}
                    </Card.Text>

                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteEquipment(equipment._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Equipment List</h1>
            <div className="dropdown">
                <Button onClick={newEquipment} className='new-button dropdown-basic-button' variant="outline-secondary">New Equipment</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:8080/equipment'>
                        <div className='form-group'>
                            <label htmlFor="name">
                                Name:
                                <input className='form-control' id='name' type="text" name='name' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='type'>
                                Type:
                                <input className='form-control' id='type' type="text" name='type' />
                            </label>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='amount_in_stock'>
                                Amount In Stock:
                                <input className='form-control' id=' amount_in_stock' type="num" name=' amount_in_stock' />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='cost_to_buy'>
                                Cost To Buy:
                                <input className='form-control' id='cost_to_buy' type="num" name='cost_to_buy' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sell_price'>
                                Sell Price:
                                <input className='form-control' id='sell_price' type="num" name='sell_price' required />
                            </label>
                        </div>

                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className='row'>
                {equipmentList}
            </div>

        </main>
    )
}

export default Equipment