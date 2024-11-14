## Q1. How long did you spend on the coding test?

As I was familiar with web development and frontend UI development, it was quite easy for me to complete the task in deadline.
The project was divided into several steps and time taken for me to make this project are as follows:

1. Planning and Requirement Analysis: 1 hour
2. Design and Documentation: 3 hour
3. Coding and Testing: 6 hour
4. Final documentation and conclusion: 2 hour

Total time taken: 12 hour

<hr/>

## Q2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

The latest JavaScript feature from ECMAScript 2023 is the `Array.prototype.findLast()` method, which finds the last element in an array that matches a given condition.

In `Dashboard.js`, we can find the most recent overdue task like this:

```javascript
const lastOverdueTask = tasks.findLast(
    (task) => new Date(task.dueDate) <= new Date() && !task.completed
);
console.log(lastOverdueTask?.title || "No overdue tasks");
```

This method simplifies finding elements from the end of the array based on a particular condition, making the code cleaner and more efficient.

<hr/>

## Q3. How would you track down a performance issue in production? Have you ever had to do this?

To track down a performance issue in production:

1. **Analyze Logs**: Use server logs (e.g., error logs) for initial clues.
2. **Monitor Metrics**: Use tools like Google Lighthouse, New Relic, or Datadog to check for high response times or memory usage.
3. **Browser DevTools**: Profile the app using the Performance tab to identify slow components.
4. **Network Analysis**: Check for slow API requests or large asset downloads.

Yes, I’ve done this before to identify a memory leak in my React app caused by unnecessary re-renders by using lazy state initialization.

<hr/>

## Q4. If you had more time, what additional features or improvements would you consider adding to the task management application?

1. User Authentication: Enable user sign-in to sync tasks across multiple devices.
2. Real-Time Notifications: Add reminders and alerts for upcoming and overdue tasks.
3. Google Map Integration: Add venue feature to the app so that we can integrate google map and users can directly search venues inside the app itself.
4. Enhanced Filters: Implement additional filters and sorting options (e.g., by due date or priority).
5. Collaborative tasks: We can invite friends to collaborate on the tasks, and give them reminders.
 <hr/>
