import { useEffect, useState } from "react";

export default function TodoApp() {
    const [ todo, setTodo ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const onChange = (e) => {
        setTodo(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setTodo(preVal => preVal = '');
        if(`${todo}`== ''){
            return;
        } else {
            setTodoList(preVal => [todo, ...preVal]);
        }
    }
    useEffect(
        () => console.log(todoList), []
    )
    console.log(todoList);
    return (
        <div>
            <h1>My Todo List</h1>
            <form onSubmit={ onSubmit }>
                <input
                    type="text"
                    placeholder="Write your to do..."
                    value={todo}
                    onChange={onChange}
                />
                <button onClick={onSubmit}>Add To do</button>
            </form>
        </div>
    );
}