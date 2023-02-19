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
             This is basic placeholder text about our awesome tavern management app.
           </Card.Text>
         </Card.ImgOverlay>
       </Card>
    )
}

export default Home