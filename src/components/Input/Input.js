import React from 'react';
import PropTypes from 'prop-types';

import './Input.css';

const Input = ({id, type, value, autoFocus}) => {
    return(
        <div className='input-container'>
            <input
                className='input-element'
                autoFocus={autoFocus}
                id={id}
                type={type}
                value={value}
            />
        </div>
    );
}

Input.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.any,
    autoFocus: PropTypes.bool
}

Input.defaultProps = {
    type: 'text',
    value: '',
    autoFocus: true
}

export default Input;