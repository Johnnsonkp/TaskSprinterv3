import { Select } from "antd";

export default function StatusTab() {
  const handleChange = (value) => {
    console.log(`selected: ${value}`);
  };
  return (
    <Select
      size={"small"}
      defaultValue="Status"
      removeIcon={true}
      fontSize={1}
      style={{
        width: 100,
        fontSize: "1px",
        background: "transparent !important",
      }}
      onChange={handleChange}
      options={[
        { value: "In Progress", label: "In Progress" },
        { value: "Completed", label: "Completed" },
      ]}
    />
  );
}
