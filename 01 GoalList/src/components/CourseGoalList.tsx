import CourseGoal from "./CourseGoal.tsx"
import { type courseGoal } from "../App.tsx"


type CourseGoalListProps = {
    goals: courseGoal[]
    onDeleteGoal: (id: number) => void
}

export default function CourseGoalList({goals, onDeleteGoal}: CourseGoalListProps) {
    return (
        <ul>
            {goals.map(goal => (
                <li key={goal.id}>
                    <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
                        <p>{goal.desc}</p>
                    </CourseGoal>
                </li>
            ))}
        </ul>
    )
}