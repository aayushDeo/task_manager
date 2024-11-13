import React from "react";
import "../styles/TaskTable.css";

const TaskTable = ({ tasks, updateTask, deleteTask, openEditDialog }) => (
    <table className="task-table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {tasks.map((task) => (
                <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.dueDate}</td>
                    <td>{task.priority}</td>
                    <td>
                        <button
                            onClick={() =>
                                updateTask({
                                    ...task,
                                    completed: !task.completed,
                                })
                            }
                        >
                            {task.completed ? "Unmark" : "Complete"}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                        <button
                            onClick={() => openEditDialog(task)}
                            disabled={task.completed} // Disable the edit button for completed task
                        >
                            Edit
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TaskTable;
