import React, { useState } from 'react';

import List from './List';
import Form from './Form';

const Wrapper = props => {
    const [ wrapperState, setWrapperState ] = useState ({
        tasks: []
    })

    const taskCreated = task => {
        setWrapperState({
            tasks: [...wrapperState.tasks,task]
        });
    }

    const taskRemoved = index => {
        let taskToRemove = wrapperState.tasks[index];
        let newTasks = wrapperState.tasks;

        newTasks = wrapperState.tasks.filter(current => current.task !== taskToRemove.task);
        
        setWrapperState({
            tasks: newTasks
        });
    }

    const taskCompleted = index => {
        let newTasks = wrapperState.tasks;

        if(!newTasks[index].completed)
            newTasks[index].completed = true;
        else
            newTasks[index].completed = false;
        
        setWrapperState({
            tasks: newTasks
        });
        console.log(newTasks);
        console.log(wrapperState.tasks);

    }

    return (
        <> 
            <h1 className="display-4">To-Do List</h1>
            <Form addTask={taskCreated}/>
            <List 
                tasks={wrapperState.tasks}
                removeTask={taskRemoved}
                completeTask={taskCompleted}
            />
        </>
    )
}

export default Wrapper;