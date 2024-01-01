import Clock from "../components/clock";

export default function Home() {
  return (
    <div
      style={{
        background: `url("/home-images/pink-back.jpg")`,
        backgroundSize: "cover",
        width: "100%",
        height: "85vh",
      }}
    >
      <Clock
        style={{
          color: "#333",
          position: "absolute",
          top: "10%",
          fontSize: "50rem",
          border: "1px solid red",
        }}
      />
    </div>
  );
}
