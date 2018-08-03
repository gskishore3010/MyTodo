import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Task extends Component {
	render() {

		return (
             <div className="Task">
             <span style={{ textDecoration: this.props.todo.done ? 'line-through' : 'none' }}>
             {this.props.todo.value}
             </span>

             <Button bsStyle="success" onClick={() => 
             	this.props.handleClick(this.props.index)}>{this.props.todo.done ? 
             		'undo' : 'complete'}</Button>

            <Button bsStyle="danger" onClick={(index) => 
                  this.props.deleteClick(this, this.props.index)}>Remove</Button>
            </div>
			)
	}
}

export default Task;