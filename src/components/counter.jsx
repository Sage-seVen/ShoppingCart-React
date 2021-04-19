import React , { Component } from 'react';

class Counter extends Component {

    state = {
        value : this.props.value,
        tags : ['tag1','tag2','tag3'],
        imageURL : 'https://picsum.photos/200',
        address: {
            street :'Grove Street'
        }
    };

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    };


    // constructor (){
    //     super();
    //     console.log(this) // here we have access to this
    //     this.handleIncrement = this.handleIncrement.bind(this)
    // }

    //if you used constructer in class, u will have to pass props in const and super

    handleIncrement = () => {
        //depending on hoow a func is called, this can refer to diff objects
        console.log("Incremented", this.state.value)
        this.setState({value: this.state.value + 1})
    }

    render () {
        console.log("firstprops", this.props);
        return (<React.Fragment>
            <span style = {this.styles} className = {this.getBadgeClasses()}> {this.formatCount()} </span>
            <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            <button onClick = {() => this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            <ul>{this.state.tags.map( tag => <li key={tag}>{tag}</li>)}</ul>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes
    }

    formatCount() {
        const {value} = this.state
        const x = <h1>Zero</h1>
        return value === 0 ? x : value
    }

}

export default Counter;

//since this is deafault export we wont be needing curly braces around it