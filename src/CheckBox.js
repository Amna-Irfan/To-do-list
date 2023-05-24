import React from 'react';

const CheckBox = React.memo((props) => {

    const handleChange = (e) => {

        if(e.target.checked)
        {
            props.setChecked(!props.checked);
        }
        else
        {
            props.setChecked(!props.checked);
        }
    };

    return (
        <input type="checkbox" onChange={handleChange} />
)});

export default CheckBox;