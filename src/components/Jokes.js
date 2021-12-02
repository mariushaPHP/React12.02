import React from "react";
import { Container } from "react-bootstrap";
import Joke from "./Joke";
import { Row } from "react-bootstrap";

class Jokes extends React.Component{
    constructor(){
        super();
        this.state = {
            clicked:false,
            jokes:[]    
        }
        this.clickHandler = this.clickHandler.bind(this)
       
    }

 

    componentDidMount(){
        fetch('http://api.icndb.com/jokes/random/30')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    jokes: data.value
                })
            })
    }

    clickHandler(){
            this.setState({clicked:true})
    }
    render() {
        console.log(this.state.clicked)
        console.log(this.state.jokes)
        
        return (
            
            <Container>
                <Row>
                    {this.state.jokes.map(j => <Joke key={j.id} joke={j.joke}/>)}
                </Row>
            </Container>
        )
    }
}

export default Jokes