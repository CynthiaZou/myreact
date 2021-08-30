/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "请输入姓名！" };
const passworRules = { required: true, message: "请输入密码！" };

export default function BaseForm(props) {
  const [form] = Form.useForm();
  const onFinish = (val) => {
    console.log("onFinish", val); //sy-log
  };

  // 表单校验失败执行
  const onFinishFailed = (val) => {
    console.log("onFinishFailed", val); //sy-log
  };

  useEffect(() => {
    console.log("form", form); //sy-log
    form.setFieldsValue({ username: "default" });
  }, []);

  return (
    <div>
      <h3>MyRCFieldForm</h3>
      <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item name="username" rules={[nameRules]}>
          <Input placeholder="input UR Username" />
        </Form.Item>
        <Form.Item name="password" rules={[passworRules]}>
          <Input placeholder="input UR Password" />
        </Form.Item>
        <Button type="primary">Submit</Button>
      </Form>
    </div>
  );
}
