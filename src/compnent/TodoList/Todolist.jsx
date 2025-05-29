import React, { useState, useEffect } from 'react';
import logo from '../../logo.svg';
import styles from './header.module.css';
export default function TodoList({ activeSection, ...props }) {


    const [todoList, setTodoList] = useState([])

    function addItem() {
        const currentItem = document.getElementById("newItem").value
        setTodoList([...todoList, currentItem])
    }
    return (
        <div className='container'>

            <input type="text" name="" id="newItem" />
            <button
                onClick={addItem}
            >
                add item
            </button>
            {todoList.map((list) => (

                <div>
                    {list}
                </div>
            ))}
        </div>
    )
}