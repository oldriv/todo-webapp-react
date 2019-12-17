import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = (props) => {
    const {
        id,
        type,
        value,
        autoFocus, 
        onChange,
        onKeyDown,
    } = props;
    return(
        <div className='input__container'>
            <input
                className='input__input'
                autoFocus={autoFocus}
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
}

Input.defaultProps = {
    type: 'text',
    value: 'Make a list.',
    autoFocus: false,
}

export default Input;