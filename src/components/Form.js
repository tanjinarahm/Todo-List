import React, { useState } from 'react';

const Form = props => {
    const [ formState, setFormState ] = useState ({
        task: "",
        completed: false
    });

    const submitHandler = e => {
        e.preventDefault();e
        props.addTask(formState);

        setFormState({
            task: "",
            completed: false
        });
    }

    const changeHandler = e => {
        setFormState({
            ...formState,
            [e.target.name]:[e.target.value]
        });
    }

    return (
        <>
        {/* <p>{formState.task}</p> */}
            <form onSubmit={submitHandler}>
                <div className="form-group row container">
                    <input 
                        type="text"
                        name="task"
                        placeholder="What do we need to get done today...."
                        className="form-control col-sm-6"
                        onChange={changeHandler}
                        value={formState.task}
                    />
                <button className="btn btn-outline btn-outline-primary col-sm-2 ml-2">Add Task</button>
                </div>
            </form>
        </>
    )


}

export default Form;