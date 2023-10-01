import React, { use } from 'react';
import { useRef } from 'react';
import SubmitButton from './button-submit';

function Form( {formClassName, formTitle, inputDict, rowData, onInputChange, onSubmitClick, onCancelClick, formSubmitAction} ) {

    // declare formRef, we can perform form-related action based on this later
    const formRef = useRef(null);

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
                        <input name={key} className="input" type="text" placeholder="placeholder" value={rowData?.[key]} onChange={onInputChange} required readOnly hidden />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'readonly') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input name={key} className="input" type="text" placeholder="placeholder" value={rowData?.[key]} onChange={onInputChange} required readOnly />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'select') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <select name={key} className="input" onChange={onInputChange}  required>
                            <option value={rowData?.[key]}>{rowData?.[key]}</option>
                        </select>
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'number') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input name={key} className="input" type="number" step="any" onChange={onInputChange} required />
                    </React.Fragment>
                );
            }

            else {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={key}>{key}: </label>
                        <input name={key} className="input" type={inputDict[key]} onChange={onInputChange} required />
                    </React.Fragment>
                );
            }
        });

        return (
            <>{inputs}</>
        );
    };

    return (
        <div className={formClassName}>
            <form ref={formRef} className="form-container" action={ async (formData) => {
                    await formSubmitAction(formData);
                    formRef.current?.reset();
                }
            }>
                <h3>{formTitle}</h3>
                {generateFormInput(inputDict, rowData)}
                <SubmitButton buttonClass="button-submit" buttonTitle="submit" onButtonClick={onSubmitClick} />
                <button className="button-cancel" onClick={onCancelClick}>cancel</button>
            </form>
        </div>
    );
};

export default Form;