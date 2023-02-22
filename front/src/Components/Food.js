import React, { useEffect, useState, } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import '../App.css';


//When user clicks on button, toggle between hiding or showing new form
function newFood() {
    document.getElementById("dropdownForm").classList.toggle("show");
}
function deleteFood(food_id) {
    fetch(`http://localhost:8080/food/${food_id}`, {method: 'DELETE'})
            .then(
                response => {
                    return (
                        window.location.reload()
                    )
                
                })
    }

function Food() {
    //setting state for food data
    const [foodData, setFoodData] = useState([])
    //fetching data from backend
    useEffect(() => {
        fetch('http://localhost:8080/food')
            .then(
                response => {
                    return response = response.json()
                }).then(data => {
                    setFoodData(data)
                })
    }

        , [])
    
    let foodList = foodData.map((food, index) => {
        return (
            <Card className='food-card' key={index} style={{ width: '18rem'}}>
            
                <Card.Body>
                    <Card.Title>
                        Food Name: {food.name}
                        </Card.Title>
                
                    <Card.Text>
                        Amount In Stock: {food.amount_in_stock}
                    </Card.Text>
                    <Card.Text>
                        Cost To Buy: {food.cost_to_buy}
                    </Card.Text>
                    <Card.Text>
                    Sell Price: {food.sell_price}
                    </Card.Text>

                    <ButtonGroup variant='secondary'>
                        <Button variant="warning">Edit</Button>
                        <Button onClick={() => deleteFood(food._id)} variant="danger">Delete</Button> 
                    </ButtonGroup>
                </Card.Body>
            </Card>
        )
    })

    //page render
    return (
        <main>
            <h1>Food List</h1>
            <div className="dropdown">
                <Button onClick={newFood} className='new-button dropdown-basic-button' variant="outline-secondary">New Food</Button>
                <div id='dropdownForm' className="dropdown-content">
                    <form method="POST" className='form' action='http://localhost:8080/food'>
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
                            <label htmlFor='weekly_salary'>
                                Cost To Buy:
                                <input className='form-control' id='cost_to_buy' type="text" name='cost_to_buy' required />
                            </label>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='sell_price'>
                                Sell Price:
                                <input className='form-control' id='sell_price' type="text" name='sell_price' required />
                            </label>
                        </div>

                        <input type="submit" value="Add" />
                    </form>
                </div>
            </div>
            <div className='row'>
                {foodList}

                console.log({foodList})
            </div>

        </main>
    )
}

export default Food