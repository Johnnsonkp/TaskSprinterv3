import { Button, Form, Input, Radio } from "antd";
import { Col, InputNumber, Row } from "antd";
import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";

import { PlusCircleFilled } from "@ant-design/icons";
import { postData } from "../Services/NotionAPI/useFetchData";
import { reformatDate } from "../Helper/DateFormat";

export default function TaskForm(formTitle) {
  const { RangePicker } = DatePicker;
  const [formInputs, setFormInputs] = useState({
    name: "",
    subtasks: "",
    completed: false,
    date_created: {},
  });
  const [form] = Form.useForm();
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
  function onSubmit(e) {
    e.preventDefault();
    console.log("formInputs", formInputs);
    form.resetFields();
    submitFormToNotion();
    window.location.reload();
  }
  async function submitFormToNotion() {
    // const sendPost = await postData(
    //   "http://localhost:5000/submitFormToNotion",
    //   "post",
    //   {
    //     name: formInputs.name,
    //     completed: false,
    //     subtasks: formInputs.subtasks,
    //     date_created: formInputs.date_created,
    //   }
    // );
    // sendPost();

    try {
      const response = await fetch("http://localhost:5000/submitFormToNotion", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          mode: "no-cors",
        },
        body: JSON.stringify({
          name: formInputs.name,
          completed: formInputs.completed,
          subtasks: formInputs.subtasks,
          date_created: formInputs.date_created,
        }),
      });
      const data = await response.json();
      console.log("Success", response);
      return data;
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Form
        style={{ paddingBottom: "15px" }}
        form={form}
        // onFinish={onFinish}
        layout="horizontal"
        className="task-form hideForm"
      >
        <h1>{formTitle.formTitle ? formTitle.formTitle : "form"}</h1>
        <Row gutter={20}>
          <Col xs={24} s={24} md={17} lg={19} xl={20}>
            <Form.Item
              name={"name"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input
                onChange={(e) => handleChangeFunc(e)}
                name={"name"}
                placeholder="What needs to be done?"
              />
            </Form.Item>
            <Form.Item name={"subtasks"}>
              <Input.TextArea
                onChange={(e) => handleChangeFunc(e)}
                name={"subtasks"}
                placeholder="Task Description"
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
                // defaultValue={null}
                style={{ width: "100%", float: "left" }}
                keyboard={false}
                bordered={true}
                controls={true}
                size={"medium"}
                // value={order}
                // onChange={setOrder}
              />
            </Form.Item>
          </Col>
        </Row>
        <div style={{ display: "flex" }}>
          <Col
            style={{ paddingLeft: "0px", textAlign: "left" }}
            xs={24}
            s={24}
            md={7}
            lg={5}
            xl={4}
          >
            <Button
              type="primary"
              htmlType="submit"
              block
              onClick={(e) => onSubmit(e)}
            >
              <PlusCircleFilled />
              Add Task
            </Button>
          </Col>
        </div>
      </Form>
    </>
  );
}
