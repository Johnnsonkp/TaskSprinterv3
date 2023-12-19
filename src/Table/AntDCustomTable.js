export default function CustomTable(data) {
  console.log("data", data.data);
  {
    return data.data.map((key, value) => {
      return (
        <tbody class="ant-table-tbody">
          <td class="ant-table-cell">{key.name}</td>
          <td class="ant-table-cell">{key.subtasks}</td>
          <td class="ant-table-cell">{key.date}</td>
          <td class="ant-table-cell">{key.completed}</td>
        </tbody>
      );
    });
  }
}
