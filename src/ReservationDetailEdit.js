import { Form, Radio, Button } from 'antd'
import React from 'react'

const ReservationDetailEdit = ({
  form: { getFieldDecorator, validateFields },
  item: { time, volume } = {},
  onSubmit
}) => {
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        onSubmit(values)
      }
    })
  }

  return (
    <Form layout="vertical" onSubmit={handleSubmit}>
      <Form.Item label="Pickup Time">
        {getFieldDecorator('time', {
          initialValue: time,
          rules: [{ required: true, message: 'Please select Pickup Time' }]
        })(
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="09:00">09:00</Radio.Button>
            <Radio.Button value="12:00">12:00</Radio.Button>
            <Radio.Button value="15:00">15:00</Radio.Button>
            <Radio.Button value="18:00">18:00</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item label="Parcel Volume">
        {getFieldDecorator('volume', {
          initialValue: volume,
          rules: [
            {
              required: true,
              message: 'Please select Approximation of the Parcel Volume'
            }
          ]
        })(
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="<3">&lt;3</Radio.Button>
            <Radio.Button value="3-10">3-10</Radio.Button>
            <Radio.Button value="11-50">11-50</Radio.Button>
            <Radio.Button value=">50">&gt;50</Radio.Button>
          </Radio.Group>
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

const _ReservationDetailEdit = Form.create()(ReservationDetailEdit)
export { _ReservationDetailEdit as ReservationDetailEdit }
