import React from 'react';
import MaskedInput from 'react-text-mask';

class PhoneInput extends React.Component {
    render() {
        return (
            <MaskedInput
                mask={[
                    '8',
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
                ]}
            />
        );
    }
}

export default PhoneInput;
