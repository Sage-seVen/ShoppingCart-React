import React, {Component} from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters : [ 
            {id: 1, value: 5},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    };

    handleDelete = (counterId) => {
        console.log("Event handler called", counterId)
        const newCounters = this.state.counters.filter( c => c.id !== counterId )
        this.setState({ counters : newCounters})
    }

    render (){
       return <div>
            {this.state.counters.map(index => <Counter key = {index.id} onDelete = {this.handleDelete} value = {index.value} id = {index.id} selected = {true}/>)}
       </div>
    }
}

export default Counters