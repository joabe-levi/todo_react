import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './styles.css';

function Input({ OnNewTodo }) {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const erase = () => {
        setValue('');
    };

    const submit = () => {
        if (OnNewTodo) {
            OnNewTodo(value);
            erase();
        }
    };

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) submit();
        else if (event.which === ESCAPE_KEY) erase();
    };

    return (
        <input
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
}

Input.propTypes = {
    OnNewTodo: PropTypes.func.isRequired,
};

export default Input;
