import React from 'react';

function Form( {formTitle, action, inputDict, rowData, onInputChange, onSubmitClick, onCancelClick, formSubmitAction} ) {

    function generateFormInput(action, inputDict, rowData) {

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
                        <input name={action+"-"+key} className="input" type="text" placeholder="placeholder" value={rowData[key]} onChange={onInputChange} required readOnly hidden />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'readonly') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={action+"-"+key}>{key}: </label>
                        <input name={action+"-"+key} className="input" type="text" placeholder="placeholder" value={rowData[key]} onChange={onInputChange} required readOnly />
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'select') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={action+"-"+key}>{key}: </label>
                        <select name={action+"-"+key} className="input" onChange={onInputChange}  required>
                            <option value={rowData[key]}>{rowData[key]}</option>
                        </select>
                    </React.Fragment>
                );
            }

            else if (inputDict[key] === 'number') {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={action+"-"+key}>{key}: </label>
                        <input name={action+"-"+key} className="input" type="number" step="any" onChange={onInputChange} required />
                    </React.Fragment>
                );
            }

            else {
                return (
                    <React.Fragment key={key}>
                        <label className="label" htmlFor={action+"-"+key}>{key}: </label>
                        <input name={action+"-"+key} className="input" type={inputDict[key]} onChange={onInputChange} required />
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
            <form className="form-container" method="post" action={formSubmitAction}>
                <h3>{formTitle}</h3>
                {generateFormInput(action, inputDict, rowData)}
                <input className="button-submit" type="submit" value="submit" onClick={onSubmitClick}/>
                <button className="button-cancel" onClick={onCancelClick}>cancel</button>
            </form>
        </div>
    );
};

export default Form;