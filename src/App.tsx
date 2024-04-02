import { Button, message } from 'antd'

function App() {

  const [messageApi, contextHolder] = message.useMessage()

  function sayHello() {
    messageApi.success('hello world')
  }

  return (
    <>
      { contextHolder }
      <Button type="primary" onClick={ sayHello }>Hello</Button>

    </>
  )
}

export default App
