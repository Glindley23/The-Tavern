import React, { useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newQuest() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteQuest(quest_id) {
    fetch(`http://localhost:8080/quest/${quest_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }

function Quest() {
    //setting state for drink data
    const [questData, setQuestData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/quest')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setQuestData(data)
                })
    }

        , [])
    
    let questList = questData.map((quest, index) => {
        return (
            <Card className='quest-card' key={index} style={{ width: '18rem'}}>
            
                <Card.Body>
                    <Card.Title>{quest.name}</Card.Title>
                
                    <Card.Text>
                        Description: {quest.description}
                    </Card.Text>
                    <Card.Text>
                        Pay: {quest.pay}
                    </Card.Text>
                    <Card.Text>
                    Status: {quest.status}
                    </Card.Text>

                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteQuest(quest._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Quest Board</h1>
            <div className="dropdown">
                <Button onClick={newQuest} className='new-button dropdown-basic-button' variant="outline-secondary">New Quest</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:3001/quest'>
                        <div className='form-group'>
                            <label htmlFor="name">
                                Name:
                                <input className='form-control' id='name' type="text" name='name' required />
                            </label>
                        </div>
                        
                        <div className='form-group'>
                            <label htmlFor='description'>
                                Description:
                                <input className='form-control' id='description' type="text" name='description' />
                            </label>
                        </div>

                        <div className='form-group'>
                            <label htmlFor='pay'>
                                Pay:
                                <input className='form-control' id='pay' type="num" name='pay' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='status'>
                                Status
                                <input className='form-control' id='status' type="text" name='status' required />
                            </label>
                        </div>

                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className='row'>
                {questList}
            </div>

        </main>
    )
}

export default Quest