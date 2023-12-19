import { useRef, ComponentPropsWithoutRef, FormEvent, useImperativeHandle, forwardRef } from "react"


type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void
}
export type FormHandler = {
    clear: () => void
}

const Form = forwardRef<FormHandler, FormProps>(
    function Form
        ({onSave, children, ...otherProps}, ref)
    {
        const form = useRef<HTMLFormElement>(null)
        useImperativeHandle(ref, () => {
            return { clear() { form.current?.reset() } }
        })
        
        function submitHandler(e: FormEvent<HTMLFormElement>) {
            e.preventDefault()

            const formData = new FormData(e.currentTarget)
            const data = Object.fromEntries(formData)
            onSave(data)
        }


        return (
            <form onSubmit={submitHandler} {...otherProps} ref={form}>
                {children}
            </form>
        )
    }
)

export default Form