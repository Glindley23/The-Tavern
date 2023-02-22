import React, { useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newRoom() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteRoom(room_id) {
    fetch(`http://localhost:8080/room/${room_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }

function Room() {
    //setting state for drink data
    const [roomData, setRoomData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/room')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setRoomData(data)
                })
    }

        , [])
    
    let roomList = roomData.map((room, index) => {
        return (
            <Card className='room-card' key={index} style={{ width: '18rem'}}>
            
                <Card.Body>
                    <Card.Title>{room.room}</Card.Title>
                
                    <Card.Text>
                        Available: {room.available}
                    </Card.Text>
                    <Card.Text>
                        Occupancy: {room.occupancy}
                    </Card.Text>
                    <Card.Text>
                    Cost Per Night: {room.cost_per_night}
                    </Card.Text>

                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteRoom(room._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Room List</h1>
            <div className="dropdown">
                <Button onClick={newRoom} className='new-button dropdown-basic-button' variant="outline-secondary">New Room</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:3001/room'>
                        <div className='form-group'>
                            <label htmlFor="room">
                                Room:
                                <input className='form-control' id='name' type="text" name='room' required />
                            </label>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='available'>
                                Available:
                                <input className='form-control' id=' available' type="text" name='available' />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='occupancy'>
                                Occupancy:
                                <input className='form-control' id='occupancy' type="num" name='occupancy' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='cost_per_night'>
                                Cost Per Night:
                                <input className='form-control' id='cost_per_night' type="num" name='cost_per_night' required />
                            </label>
                        </div>

                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className='row'>
                {roomList}
            </div>

        </main>
    )
}

export default Room