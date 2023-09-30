import React from 'react';
import SubmitButton from './button-submit';

function Form( {formTitle, inputDict, rowData, onInputChange, onSubmitClick, onCancelClick, formSubmitAction} ) {

    function generateFormInput(inputDict, rowData) {

        // Development: Write handling method for these special input value types
        // const inputDict = {
        //     'hidden': 'hidden',
        //     'readonly': 'readonly',
        //     'select': 'select',
        //     'number': 'number',
        //     'text': 'text'
        // };

        const inputs = Object.keys(inputDict).map(key => {

            if (inputDict[key] === 'hidden') {
                return (
                    <React.Fragment key={key}>
                        <input id={key} name={key} className="input" type="text" placeholder="placeholder" value={rowData[key]} onChange={onInputChange} required readOnly />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'readonly') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input id={key} name={key} className="input" type="text" placeholder="placeholder" value={rowData[key]} onChange={onInputChange} required readOnly />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'select') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <select id={key} name={key} className="input" onChange={onInputChange}  required>
                            <option value={rowData[key]}>{rowData[key]}</option>
                        </select>
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'number') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input id={key} name={key} className="input" type="number" step="any" onChange={onInputChange} required />
                    </React.Fragment>
                );
            }

            else {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input id={key} name={key} className="input" type={inputDict[key]} onChange={onInputChange} required />
                    </React.Fragment>
                );
            }
        });

        return (
            <>{inputs}</>
        );
    };

    return (
        <div className="form-popout">
            <form className="form-container" action={formSubmitAction}>
                <h3>{formTitle}</h3>
                {generateFormInput(inputDict, rowData)}
                <SubmitButton buttonClass="button-submit" buttonTitle="submit" onButtonClick={onSubmitClick} />
                <button className="button-cancel" onClick={onCancelClick}>cancel</button>
            </form>
        </div>
    );
};

export default Form;