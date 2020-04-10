import React from 'react';
import './List.css';

const List = ({tasks, removeTask, completeTask}) => {

    function display(task){
        let text;
        if(task.completed)
            text = <p className="inline"><del>{task.task}</del></p>
        else
            text = <p className="inline">{task.task}</p>

        return text;
    }

    const completed = (e, i) => {
        completeTask(i);
    }
    
    const remove = (e, i) => {
        // console.log(i);
        removeTask(i);
    }

    return (
        <>
            {
                tasks.map((task, i) => 
                    <div key={i} className="card p-3 mb-3">
                        <li>
                            <div className="row">
                                <div className="col-sm-4">
                                    {display(task)}
                                </div>
                                
                                <div className="col-sm-2">
                                    <input
                                        type="checkbox"
                                        onChange={e => completed(e, i)}
                                        checked={task.completed}
                                        className="checkbox"
                                    />
                                    &nbsp;
                                    <input 
                                        type="button"
                                        value="Remove"
                                        className="btn btn-outline btn-outline-danger"
                                        onClick={(e) => remove(e, i)}
                                    /> 
                                </div>
                            </div>
                        </li>
                    </div>
                )
            }
        </>
    )
}

export default List;