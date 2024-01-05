import { Divider } from "antd";

export default function CustomDivider() {
  return (
    <div style={{ marginLeft: "5px", marginRight: "5px" }}>
      <Divider
        dashed
        type="vertical"
        style={{
          border: "1px solid #e6e6e6",
        }}
      />
    </div>
  );
}
