import React from "react";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";

class Joke extends React.Component{
    constructor() {
        super();
        this.state = {
            likes: 0
        }

        this.handleLike = this.handleLike.bind(this);
    }

    handleLike() {
        this.setState(prevState => {
            return {
                likes: prevState.likes + 1
            }
        })
    }

    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title>{this.props.id}</Card.Title>
                    <Card.Text>
                        {this.props.joke}
                    </Card.Text>
                    <Button variant="primary" onClick={this.handleLike}>Like</Button>
                    <p>{this.state.likes}</p>
                </Card.Body>
            </Card>
        )
    }
}

export default Joke;