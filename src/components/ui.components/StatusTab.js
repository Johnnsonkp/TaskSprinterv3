import { Button, Collapse, Select, Space } from "antd";

export default function StatusTab() {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <Select
      size={"small"}
      defaultValue="Status"
      removeIcon={true}
      optionFontSize={10}
      style={{
        width: 90,
        fontSize: "12px",
        backgroundColor: "transparent !important",
      }}
      onChange={handleChange}
      options={[
        { value: "In Progress", label: "In Progress" },
        { value: "Completed", label: "Completed" },
      ]}
    />
  );
}
