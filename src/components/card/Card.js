import React from 'react';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';


const My_Card = ({dat}) =>{
    const {title,img_path,description,first_episode} = dat;
    return(
        <Card style={{ width: '50rem', margin: "auto", backgroundColor : "#444", color:"white" }}>
            <Card.Img variant="top" src={img_path} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Cras justo odio</ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href={first_episode}>Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}
export default My_Card;