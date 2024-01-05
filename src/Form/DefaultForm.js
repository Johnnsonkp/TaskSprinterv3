import { Button, Form, Input } from "antd";
import { Col, InputNumber, Row } from "antd";
import React, { useState } from "react";

import { DatePicker } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import { reformatDate } from "../Helper/DateFormat";

export default function DefaultForm({ formTitle, task, UpdateTask }) {
  const [form] = Form.useForm();
  const { RangePicker } = DatePicker;
  const [formInputs, setFormInputs] = useState({
    name: task.name,
    subtasks: task.subtasks,
    completed: task.completed,
    page_id: task.page_id,
    date_created: task.date_created,
  });
  const handleDateChangeFunc = (e) => {
    setFormInputs({
      ...formInputs,
      date_created: {
        start: reformatDate(e[0].$d, "yyyy-MM-dd'T'HH:mm:ss.SSS+11:00"),
        end: reformatDate(e[1].$d, "yyyy-MM-dd'T'HH:mm:ss.SSS+11:00"),
      },
    });
  };
  const handleChangeFunc = (e) => {
    setFormInputs({
      ...formInputs,
      [e.target.name]: e.target.value,
    });
  };
  async function HandleTaskUpdate() {
    const taskItem = formInputs;
    UpdateTask(taskItem);
  }
  function refreshAfter2Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
  }
  function onSubmit(e) {
    e.preventDefault();
    form.resetFields();
    HandleTaskUpdate();
    refreshAfter2Seconds();
  }

  return (
    <>
      <Form
        style={{ paddingBottom: "15px" }}
        form={form}
        layout="horizontal"
        className="task-form hideForm"
      >
        <h1>{formTitle}</h1>
        <Row gutter={20}>
          <Col xs={24} s={24} md={17} lg={19} xl={20}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                onChange={(e) => handleChangeFunc(e)}
                name={"name"}
                defaultValue={task.name && task.name}
              />
            </Form.Item>
            <Form.Item name={"subtasks"}>
              <Input.TextArea
                onChange={(e) => handleChangeFunc(e)}
                name={"subtasks"}
                defaultValue={task.subtasks && task.subtasks}
              />
            </Form.Item>
          </Col>
          <Col xs={24} s={24} md={17} lg={19} xl={20}>
            <Form.Item name={"date_created"}>
              <RangePicker
                name={"date_created"}
                showTime
                showNow
                showToday
                onChange={(e) => handleDateChangeFunc(e)}
              />
            </Form.Item>
          </Col>
          <Col xs={24} s={24} md={17} lg={19} xl={7}>
            <Form.Item name={"reward"}>
              <Input placeholder="Reward on task completion" />
            </Form.Item>
          </Col>
          <Col xs={24} s={24} md={17} lg={19} xl={3}>
            <Form.Item name={"order"}>
              <InputNumber
                min={1}
                max={10}
                style={{ width: "100%", float: "left" }}
                keyboard={false}
                bordered={true}
                controls={true}
                size={"medium"}
              />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ display: "flex" }}>
          <Col
            style={{
              paddingLeft: "0px",
              textAlign: "left",
            }}
            xs={24}
            s={24}
            md={16}
            lg={19}
            xl={20}
          >
            <Button
              type="primary"
              htmlType="submit"
              block
              onClick={(e) => onSubmit(e)}
            >
              <PlusCircleFilled />
              Update Task
            </Button>
          </Col>
        </div>
      </Form>
    </>
  );
}
