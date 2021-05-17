## To-Do-Consumer

React app developed as a consumer of a micro-frontend architecture.

- Run npm start and navigate to localhost:8080

```bash
npm start
```

- It has the shared components like Header, progressSpinner, Snackbar etc.
- ModuleFederationPlugin used for the architecture.
- Communication between apps provided with CustomEvents.
- No redux configuration added for this module.
- There is no communication with backend.

## User Manual

- User needs to enter/pick a username to use to-do lists.
- User can only update the tasks that belongs to him.
- Only name is required for a task.
- There are 3 different colors for the deadlines.
  - red: -&#9854; to 1 day
  - orange: 1-3 days
  - blue: 3 to &#9854;
- Tasks can be drag and drop to update status.
- The letter in the right section of a task represents the first letter of a user name.
  - Green circle around the letter indicates that the task belongs to the current user and can be modified.
- Tasks can be modified by clicking on them.
- New tasks and statuses can be added infinitely.
