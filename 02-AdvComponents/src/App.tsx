import { useRef } from "react"
import Input from "./components/Input.tsx"
import Button from "./components/Button.tsx"
import Container from "./components/Container.tsx"
import Form, { type FormHandler } from "./components/Form.tsx"


function App() {
  const input = useRef(null)
  const customForm = useRef<FormHandler>(null)

  function saveHandler(data: unknown) {
    const extractedData = data as { name: string, age: string } 
    console.log(extractedData)
    customForm.current?.clear()
  }

  return (
    <main>
      <h4>Input Component</h4>
      <Input id="name" label="your name" type="text" />
      <Input id="age" label="your age" type="number" />
      <Input id="test" label="test" ref={input} />

      <h4>Button Component</h4>
      <p>
        <Button>Button</Button>
      </p>
      <p>
        <Button href="https://google.com">Link</Button>
      </p>

      <h4>Container Component</h4>
      <Container as={Button} onClick={() => {}}>
        Click Me
      </Container>

      <h4>Form Component</h4>
      <Form onSave={saveHandler} ref={customForm}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  )
}

export default App
