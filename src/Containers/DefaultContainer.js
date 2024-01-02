import "./defaultContainer.css";
export const DefaultContainer = ({ content }) => {
  return (
    <div
      className="defaultContainer"
      style={{
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      {content}
    </div>
  );
};
