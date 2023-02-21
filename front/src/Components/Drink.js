import React, { useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newDrink() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteDrink(drink_id) {
    fetch(`http://localhost:8080/drink/${drink_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }

function Drink() {
    //setting state for drink data
    const [drinkData, setDrinkData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/drink')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setDrinkData(data)
                })
    }

        , [])
    console.log(drinkData);
    let drinkList = drinkData.map((drink, index) => {
        return (
            <Card className='drink-card' key={index} style={{ width: '18rem'}}>
            
                <Card.Body>
                    <Card.Title>{drink.name}</Card.Title>
                
                    <Card.Text>
                        Amount In Stock: {drink.amount_in_stock}
                    </Card.Text>
                    <Card.Text>
                        Cost To Buy: {drink.cost_to_buy}
                    </Card.Text>
                    <Card.Text>
                    Sell Price: {drink.sell_price}
                    </Card.Text>

                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteDrink(drink._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Drink List</h1>
            <div className="dropdown">
                <Button onClick={newDrink} className='new-button dropdown-basic-button' variant="outline-secondary">New Drink</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:8080/drink'>
                        <div className='form-group'>
                            <label htmlFor="name">
                                Name:
                                <input className='form-control' id='name' type="text" name='name' required />
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
                {drinkList}
            </div>

        </main>
    )
}

export default Drink