function sprintReviewCalculation(input) {
    const lines = Number(input.shift());
    const input = input.slice(0, lines);
    const commands = input.slice(lines);
    
    const board = input
        .reduce((board, line) => {
            const [assignee, taskId, title, status, points] = line.split(':');
            if (!board.hasOwnProperty(assignee)) {
                board[assignee] = [];
            }

            board[assignee].push({ taskId, title, status, points: Number(points) });
            return board;
        }, {});

    const commandMapper = {
        'Add New': addNewTask,
        'Change Status': changeStatus,
        'Remove Task': removeTask,
    }

    commands
        .forEach((line) => {
            const commandDetails = line.split(':');
            commandMapper[commandDetails[0]](...commandDetails.slice(1));
        });

    const toDoPoints = getTotalPointsForStatus('ToDo');
    const inProgresPoints = getTotalPointsForStatus('In Progress');
    const codeReviewPoints = getTotalPointsForStatus('Code Review');
    const donePoints = getTotalPointsForStatus('Done');
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgresPoints}pts`);
    console.log(`Code Review: ${codeReviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);
    const total = toDoPoints + inProgresPoints + codeReviewPoints;

    if (donePoints >= total) {
        console.log('Sprint was successful!');
    } else {
        console.log('Sprint was unsuccessful…')
    }

    function addNewTask(assignee, taskId, title, status, points) {
        if (checkExistingAssignee(assignee)) {
            board[assignee].push({ taskId, title, status, points: Number(points) })
        }
    }

    function changeStatus(assignee, taskId, newStatus) {
        if (checkExistingAssignee(assignee) && checkIfTaskIdExists(assignee, taskId)) {
            const task = board[assignee].find((t) => t.taskId === taskId);
            task.status = newStatus;
        }
    }

    function removeTask(assignee, index) {
        index = Number(index);
        if (checkExistingAssignee(assignee) && checkForValidIdx(board[assignee], index)) {
            board[assignee].splice(index, 1);
        }
    }

    function checkExistingAssignee(assignee) {
        const isExisting = board.hasOwnProperty(assignee);
        if (!isExisting) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        }

        return isExisting;
    }

    function checkIfTaskIdExists(assignee, taskId) {
        const assigneeTasks = board[assignee];
        const isExisting = assigneeTasks.some((task) => task.taskId === taskId);

        if (!isExisting) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        }

        return isExisting;
    }

    function checkForValidIdx(tasks, index) {
        const isValid = index >= 0 && index < tasks.length;
        if (!isValid) {
            console.log('Index is out of range!');
        }

        return isValid;
    }

    function getTotalPointsForStatus(status) {
        return Object.values(board)
            .reduce((totalPointsSum, tasks) => {
                return totalPointsSum + tasks
                    .filter((t) => t.status === status)
                    .map((t) => t.points)
                    .reduce((a, b) => a + b, 0);
            }, 0);
    }
}