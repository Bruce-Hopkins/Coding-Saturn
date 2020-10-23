import React from "react"
import './Card.css'
import {FaCodeBranch, FaBook, FaUsers} from 'react-icons/fa';



class Card1 extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div className="Card">
                <FaCodeBranch/>
                <h3> {this.props.header}</h3>
                <p> {this.props.text} </p>
            </div>

        );
    }
}

class Card2 extends React.Component {
    render() {
        return (
            <div className="Card">
                <FaBook/>
                <h3> {this.props.header}</h3>
                <p> {this.props.text} </p>
            </div>

        );
    }
}
class Card3 extends React.Component {
    render() {
        return (
            <div className="Card" id={this.props.thisId}>
                <FaUsers/>
                <h3> {this.props.header}</h3>
                <p> {this.props.text} </p>
            </div>

        );
    }
}
export{
    Card1,
    Card2,
    Card3
} 