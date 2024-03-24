import TaskItem from "./TaskItem";
import { useTasks } from "../context/useTasks";

function TaskList() {
  const { tasks} = useTasks()

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
