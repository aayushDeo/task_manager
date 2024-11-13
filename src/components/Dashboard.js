import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import { getTasks, saveTasks } from '../utils/local_storage_utils';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState(() => getTasks());
  const [filter, setFilter] = useState('all');  // Filter state for priority and status
  const [searchQuery, setSearchQuery] = useState('');  // For search functionality

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (newTask) => setTasks([...tasks, newTask]);
  const updateTask = (updatedTask) => setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  const deleteTask = (taskId) => setTasks(tasks.filter((task) => task.id !== taskId));

  // Task categories based on due date and completion
  const upcomingTasks = tasks.filter(task => new Date(task.dueDate) > new Date() && !task.completed);
  const overdueTasks = tasks.filter(task => new Date(task.dueDate) <= new Date() && !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  // Filter tasks based on selected priority, completion status, or search query
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === 'all' || task.priority === filter || (filter === 'completed' && task.completed);
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) || task.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="dashboard">
      <h1>Task Dashboard</h1>

      <div className="search-filter-container">
        {/* Search */}
        <input
            type="text"
            className="search-input"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Filter Dropdown */}
        <div className="filter-dropdown">
            <select onChange={(e) => setFilter(e.target.value)} value={filter}>
            <option value="all">All Tasks</option>
            <option value="High">High Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="Low">Low Priority</option>
            <option value="completed">Completed Tasks</option>
            </select>
        </div>
        </div>

        <br />


      {/* Add Task Button */}
      {/* <button className="add-task-btn" onClick={() => setFilter('all')}>Add Task</button> */}
      <TaskForm addTask={addTask} />

      {/* Task Sections */}
      <div className="task-section-container">
        <TaskList
          title="Upcoming Tasks"
          tasks={upcomingTasks.filter((task) => filteredTasks.includes(task))}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <TaskList
          title="Overdue Tasks"
          tasks={overdueTasks.filter((task) => filteredTasks.includes(task))}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        <TaskList
          title="Completed Tasks"
          tasks={completedTasks.filter((task) => filteredTasks.includes(task))}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
};

export default Dashboard;
