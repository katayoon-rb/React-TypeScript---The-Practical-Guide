import CourseGoal from "./CourseGoal.tsx"
import InfoBox from "./InfoBox.tsx"
import { type courseGoal } from "../App.tsx"
import { type ReactNode } from "react"


type CourseGoalListProps = {
    goals: courseGoal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">You have no goals yet</InfoBox>
    }

    let warningBox: ReactNode 
    if (goals.length >= 4) {
        warningBox = <InfoBox mode="warning">Don't put so much pressure on yourself.</InfoBox>
    }

    return (
        <>
            {warningBox}
            <ul>
                {goals.map(goal => (
                    <li key={goal.id}>
                        <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                            <p>{goal.desc}</p>
                        </CourseGoal>
                    </li>
                ))}
            </ul>
        </>
    )
}
