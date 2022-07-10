import React, { useEffect, useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { ITodo } from '../interfaces';

declare var confirm: (question: string) => boolean;

const TodosPage: React.FC = () => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[];
	const [todos, setTodos] = useState<ITodo[]>(saved);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addHandler = (title: string): void => {
		const newTodo: ITodo = {
			title: title,
			id: Date.now(),
			completed: false
		}
		setTodos(prev => [newTodo, ...prev]);
	}

	const toggleHandler = (id: number): void => {
        setTodos(prev => prev.map(todo => {
			if (todo.id === id) {
				return {
					...todo,
					completed: !todo.completed
				}
			};
			return todo;
		}));
    }

	const removeHandler = (id: number): void => {
		const userAnswer = confirm('Are you sure about removing this task?');
        if (userAnswer) setTodos(prev => prev.filter(todo => todo.id !== id));
    }

    return (
        <div>
            <TodoForm onAdd={addHandler} />

            <TodoList
                todos={todos} 
                onToggle={toggleHandler} 
                onRemove={removeHandler} 
            />
        </div>
    );
};

export default TodosPage;