import React from 'react';
import {Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';


const My_Card = ({dat}) =>{
    const {title,sub_title,img_path,description,first_episode_url} = dat;
    return(
        <Card style={{ width: '95%', margin: "auto",marginBottom: "20px", backgroundColor : "#444", color:"white" }}>
            <Card.Img variant="top" src={img_path} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {sub_title}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem style={{textAlign:"left"}}>{description}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link> <a href={first_episode_url} target="_blank"><Button
                    onClick={() => console.log('Hami!')}
                    variant="outline-primary"
                    size="lg"
                    block>Megnézem</Button>
                </a>
                </Card.Link>
            </Card.Body>
        </Card>
    );
}
export default My_Card;