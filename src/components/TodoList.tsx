import React from 'react';
import { ITodo } from '../interfaces';

type TTodoListProps = {
    todos: ITodo[];
    onToggle(id: number): void;
    onRemove: (id: number) => void;
}

const TodoList: React.FC<TTodoListProps> = ({ todos, onToggle, onRemove }) => {
    if (todos.length === 0) {
        return <h4 className='center'>Where are no tasks yet!</h4>  
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault();
        onRemove(id);
    }

    return (
        <ul>
            {todos.map((todo) => {
                const classes = ['todo'];
                if (todo.completed) {
                    classes.push('completed');
                }
                
                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed} 
                                onChange={onToggle.bind(null, todo.id)} 
                            />
                            <span>{todo.title}</span>
                            <i 
                                onClick={event => removeHandler(event, todo.id)} 
                                className='material-icons red-text'
                            >delete</i>
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default TodoList;