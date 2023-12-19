export default function TaskForm(title, setterFunc1, setterFunc2, submitFunc) {
  return (
    <form
      style={{
        cursor: "pointer",
        border: "1px solid red",
        borderRadius: "15px",
        width: "55%",
        margin: "auto",
      }}
    >
      <h3>{title}</h3>
      <div className="addCard">
        <p style={{ textAlign: "left", padding: "5px 35px" }}>
          Input task name here
        </p>
        <input
          type="text"
          id="name"
          onChange={(e) => setterFunc1(e.target.value)}
          style={{ width: "90%" }}
        />
        <p style={{ textAlign: "left", padding: "5px 35px" }}>Subtasks</p>
        <input
          type="text"
          id="subtasks"
          onChange={(e) => setterFunc2(e.target.value)}
          style={{ width: "90%" }}
        />
      </div>
      <button onClick={(e) => submitFunc(e)}>Submit</button>
    </form>
  );
}
