import "./defaultContainer.css";
export const DefaultContainer = (props) => {
  return (
    <div
      className="defaultContainer"
      style={
        props.style
          ? props.style
          : {
              width: "95%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "20px",
              marginBottom: "20px",
            }
      }
    >
      {props.content}
    </div>
  );
};
