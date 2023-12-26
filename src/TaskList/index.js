import TaskListComp from "./TaskListComp";

export default function TaskListIndex(task) {
  return (
    <div
    // style={{
    //   border: "2px solid lightBlue",
    //   borderRadius: "15px",
    // }}
    >
      <TaskListComp task={task} />
    </div>
  );
}
