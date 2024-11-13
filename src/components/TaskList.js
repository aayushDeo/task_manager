import React, { useState } from "react";
import TaskTable from "./TaskTable";

const TaskList = ({ title, tasks, updateTask, deleteTask }) => {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [taskToEdit, setTaskToEditState] = useState(null);

    const openEditDialog = (task) => {
        setTaskToEditState(task);
        setIsEditDialogOpen(true);
    };

    const closeEditDialog = () => {
        setIsEditDialogOpen(false);
        setTaskToEditState(null);
    };

    const handleSaveEdit = (updatedTask) => {
        updateTask(updatedTask);
        closeEditDialog();
    };

    return (
        <div className="task-list">
            <h3>{title}</h3>
            {tasks.length === 0 ? (
                <p>No tasks available</p>
            ) : (
                <TaskTable
                    tasks={tasks}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    openEditDialog={openEditDialog}
                />
            )}

            {/* Edit Task Dialog */}
            {isEditDialogOpen && taskToEdit && (
                <div className="edit-dialog">
                    <div className="edit-dialog-content">
                        <h2>Edit Task</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSaveEdit(taskToEdit);
                            }}
                        >
                            <div className="form-group">
                                <label>Title:</label>
                                <input
                                    type="text"
                                    value={taskToEdit.title}
                                    onChange={(e) =>
                                        setTaskToEditState({
                                            ...taskToEdit,
                                            title: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Description:</label>
                                <textarea
                                    value={taskToEdit.description}
                                    onChange={(e) =>
                                        setTaskToEditState({
                                            ...taskToEdit,
                                            description: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Due Date:</label>
                                <input
                                    type="date"
                                    value={taskToEdit.dueDate}
                                    onChange={(e) =>
                                        setTaskToEditState({
                                            ...taskToEdit,
                                            dueDate: e.target.value,
                                        })
                                    }
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Priority:</label>
                                <select
                                    value={taskToEdit.priority}
                                    onChange={(e) =>
                                        setTaskToEditState({
                                            ...taskToEdit,
                                            priority: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <button type="submit">Save</button>
                                <button type="button" onClick={closeEditDialog}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskList;
