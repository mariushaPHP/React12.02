import React from "react";
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";


class Joke extends React.Component{

    constructor(){
        super();
        this.state = {
            counter:0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.setState(prevState => {
            return{
                counter:prevState.counter+1
            }
        })
    }
     
    render(){
        return(
            <Card style={{ width: '18rem' }}>
            
                <Card.Body>
                    <Card.Title>{this.props.id}</Card.Title>
                        <Card.Text>
                            {this.props.joke}
                        </Card.Text>
                    <Button  variant="primary" onClick={this.handleClick}>Like: {this.state.counter}</Button>
                    
                </Card.Body>
            </Card>
        )
    }
}

export default Joke