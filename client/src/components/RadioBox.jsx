import React from 'react';

export default function RadioBox({name,text, isChecked}) {

    return (
        <label className="radio_box">
            <div className='radio'>
                <input type="radio" name={name} value="m" checked={isChecked} />
            <div>
            </div></div>
            {text}
        </label>
    );
}

