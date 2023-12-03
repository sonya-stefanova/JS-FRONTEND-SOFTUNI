function sprintReviewCalculation(input) {
    const n = Number(input.shift());
    const tickets = input.slice(0, n);
    const commands = input.slice(n);
  
    //transform the array into an obj {assignee: tasks};
    const boardObj = tickets.reduce((acc, curr) => {
      const [assignee, taskId, title, status, points] = curr.split(":");
      if (!acc.hasOwnProperty(assignee)) {
        acc[assignee] = [];
      }
      acc[assignee].push({ taskId, title, status, points: Number(points) });
      return acc;
    }, {});
  

    const commandMapper = {
      "Add New": addNewTask,
      "Change Status": changeTaskStatus,
      "Remove Task": removeTask,
    };

  
    commands.forEach((command) => {
      const [commandName, ...rest] = command.split(":");
      commandMapper[commandName](...rest); //executor
    });
  
    const todoPoints = calculateTotalDependingOnStatus("ToDo");
    const inProgressPoints = calculateTotalDependingOnStatus("In Progress");
    const donePoints = calculateTotalDependingOnStatus("Done");
    const reviewPoints = calculateTotalDependingOnStatus("Code Review");
  
    //result printing:
    console.log(`ToDo: ${todoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${reviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
  
    if (donePoints >= todoPoints + inProgressPoints + reviewPoints) {
      console.log(`Sprint was successful!`);
    } else {
      console.log(`Sprint was unsuccessful...`);
    }
  
    //tasks execution:
    function addNewTask(assignee, taskId, title, status, points) {
      if (!boardObj.hasOwnProperty(assignee)) {
        console.log(`Assignee ${assignee} does not exist on the boardObj!`);
        return;
      }
  
      boardObj[assignee].push({ taskId, title, status, points: Number(points) });
    }
  
    function changeTaskStatus(assignee, taskId, status) {
    
  
      const task = boardObj[assignee].find((t) => t.taskId === taskId);
  
      if (!task) {
        console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        return;
      }
  
      task.status = status;
    }
  
    function removeTask(assignee, index) {
      if (!boardObj.hasOwnProperty(assignee)) {
        console.log(`Assignee ${assignee} does not exist on the boardObj!`);
        return;
      }
  
      if (index < 0 || index >= boardObj[assignee].length) {
        console.log(`Index is out of range!`);
        return;
      }
  
      boardObj[assignee].splice(index, 1);
    }

  
    function calculateTotalDependingOnStatus(status) {
      return Object.values(boardObj).reduce((acc, curr) => {
        const boardObjTotal = curr
          .filter((t) => t.status === status)
          .reduce((tasksTotal, task) => tasksTotal + task.points, 0);
        return acc + boardObjTotal;
      }, 0);
    }

    //flattened board object
    // function calculateTotalDependingOnStatus(status) {
    //     return Object.values(boardObj)
                // .flat()
    //         .filter((t) => t.status === status)
    //         .reduce((acc, curr) => acc + curr.points, 0)
    //     }, 0);
    //   }
  }

sprintReviewCalculation
    ([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]);