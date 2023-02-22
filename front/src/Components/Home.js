import Card from 'react-bootstrap/Card'
import '../App.css'
function Home () {
    return (
        //<div>
            //<h1>The Tavern</h1>
            //<img src='https://gamesartist.co.uk/wp-content/uploads/2021/03/Figure-1-2000x978.png' alt="tavern" />
       // </div>
         <Card className="bg-dark text-white">
         <Card.Img src='https://gamesartist.co.uk/wp-content/uploads/2021/03/Figure-1-2000x978.png' alt="tavern" />
         <Card.ImgOverlay>
           <Card.Title id='home-title'>Tavern Management</Card.Title>
           <Card.Text>
             <h2 class='homeText'>Manage your tavern with ease!</h2> 
             <h3 class='homeText'>Whether you're an established business brewing and feeding the city, or a hub for all things adventuring, use this application to organize your tavern's inventory.</h3>
           </Card.Text>
         </Card.ImgOverlay>
       </Card>
    )
}

export default Home