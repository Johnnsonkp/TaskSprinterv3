import TaskListComp from "./TaskListComp";

export default function TaskListIndex({ task, handleDelete, UpdateTask }) {
  return (
    <div>
      <TaskListComp
        task={task}
        handleDelete={handleDelete}
        UpdateTask={UpdateTask}
      />
    </div>
  );
}
