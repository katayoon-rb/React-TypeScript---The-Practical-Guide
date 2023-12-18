import { useRef, type FormEvent } from 'react'


export default function NewGoal({onAddGoal}: {
    onAddGoal: (goal: string, summary: string) => void
}) {
    const goal = useRef<HTMLInputElement>(null)
    const summary = useRef<HTMLInputElement>(null)

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        onAddGoal(goal.current!.value, summary.current!.value)
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={submitHandler}>
            <p>
                <label htmlFor="goal">Your goal</label>
                <input id="goal" type="text" ref={goal} />
            </p>
            <p>
                <label htmlFor="summary">Short summary</label>
                <input id="summary" type="text" ref={summary} />
            </p>
            <p>
                <button>Add Goal</button>
            </p>
        </form>
    )
}