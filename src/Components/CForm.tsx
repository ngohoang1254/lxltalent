import React, { useRef } from "react";
import { Button, Form, Input, InputNumber } from 'antd';
import emailjs from '@emailjs/browser';
import { FormInstance } from "antd/es/form/Form";
import "./form.css";
export default function FormInputField() {
    // const [form] = Form.useForm();
    const form = useRef<any>();
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };
    const onFinish = (values: any) => {
        values.preventDefault();
        emailjs.sendForm('service_lonv5ce', 'template_op3ghss', form?.current, '2EfXaFjES9gTckh1p')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div style={{
            background: "white",
            marginTop: 20,
        }}>
            <h1
                style={{
                    textAlign: "center",
                    margin: "20px 0px",
                }}
            >COMPLETE THIS FORM</h1>
            <form ref={form} onSubmit={onFinish}>
                {/* <Form {...layout} name="nest-messages" > */}
                <Form.Item name={"name"} label="Name" rules={[{ required: true }]}>
                    <Input
                        placeholder="Name"
                    />
                </Form.Item>
                <Form.Item name={"email"} label="Email" rules={[{ type: 'email' }, { required: true }]}>
                    <Input
                        placeholder="Email"

                    />
                </Form.Item>
                <Form.Item name={"contact"} label="Contact Number" >
                    <Input
                        placeholder="Phone"

                    />
                </Form.Item>
                <Form.Item name={"website"} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={"message"} label="message">
                    <Input.TextArea
                        style={{
                            height: 100,
                        }}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit"
                        style={{
                            width: 229,
                            height: 66,
                            backgroundColor: "#000",
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: 25,
                            borderRadius: 50,
                            cursor: "pointer",
                        }}
                    >
                        Submit
                    </Button>
                </Form.Item>
                {/* </Form> */}

            </form>
        </div >
    )
}