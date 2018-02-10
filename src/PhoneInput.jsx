import React from 'react';
import MaskedInput from 'react-text-mask';

const PhoneInput = () => {
    return (
        <MaskedInput
            mask={[
                '+7',
                ' ',
                '(',
                /[1-9]/,
                /\d/,
                /\d/,
                ')',
                ' ',
                /\d/,
                /\d/,
                /\d/,
                '-',
                /\d/,
                /\d/,
                /\d/,
                /\d/
            ]
        pattern="\d*"}
        />
    );
}

export default PhoneInput;
