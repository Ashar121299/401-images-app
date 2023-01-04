import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';

function Images(props) {

    let [numOfLikes, setNumOfLikes] = useState(0);


    const takingLike = () => {
        
        setNumOfLikes(numOfLikes+1)
        
        props.increment();
    }

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imgPath} onClick={takingLike}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>Likes: {numOfLikes}</p>
                        
                    </Card.Text>
                    
                </Card.Body>
            </Card>
        </>
    )
}

export default Images;