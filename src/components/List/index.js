/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';

import { MdDelete } from 'react-icons/md';
import './styles.css';

function TodoList({ todos, onToggle, onRemove }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => (
                <li key={todo.id.toString()}>
                    <span
                        className={[
                            'todo',
                            todo.checked ? ' checked' : '',
                        ].join(' ')}
                        onClick={() => onToggle && onToggle(todo)}
                        onKeyDown={() => onToggle && onToggle(todo)}
                        role="button"
                        tabIndex={0}
                    >
                        {todo.title}
                    </span>
                    <button
                        onClick={() => onRemove && onRemove(todo)}
                        className="remove"
                        type="button"
                    >
                        <MdDelete size={28} />
                    </button>
                </li>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            checked: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

export default TodoList;
