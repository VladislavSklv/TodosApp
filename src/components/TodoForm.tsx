import React, { useRef, useState } from 'react';

interface ITodoFormProps {
    onAdd(title: string): void;
}

const TodoForm: React.FC<ITodoFormProps> = props => {
    const [title, setTitle] = useState<string>('');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    }

    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            props.onAdd(title);
            setTitle('');
        }
    }

    return (
        <div className='input-field'>
            <input 
                value={title} 
                onChange={changeHandler} 
                onKeyPress={keyPressHandler}
                placeholder='Type the title' 
                id='title' 
                type='text' />
            <label htmlFor='title' className='active'>Type the title of your todo</label>
        </div>
    );
};

export default TodoForm;