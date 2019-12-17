import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.css'

import Input from '../Input';
import { StringUtil } from '../../util';

const TextInput = (props) => {
    const {
        showLabel,
        labelText,
        ...other
    } = props;

    return(
        <div className='text-input__container'>
            {showLabel && StringUtil.isNotBlank(labelText) && <label className={'text-input__label '}>
                {labelText}
            </label>}
            <Input 
                className='text-input-textfield'
                type='text'
                {...other}
            />
        </div>
    );
}

TextInput.propTypes = {
    showLabel: PropTypes.bool,
    labelText: PropTypes.string
}

TextInput.defaultProps = {
    showLabel: true,
    labelText: ''
}

export default TextInput;