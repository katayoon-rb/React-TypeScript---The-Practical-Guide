import { useState } from "react"

import Header from "./components/Header.tsx"
import goalsImg from "./assets/goals.jpg"
import NewGoal from "./components/NewGoal.tsx"
import CourseGoalList from "./components/CourseGoalList.tsx"


export type courseGoal = {
  title: string
  desc: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<courseGoal[]>([])

  function addGoalHandler(goal: string, summary: string) {
    setGoals(prevGoals => {
      const newGoal: courseGoal = {
        title: goal,
        desc: summary,
        id: Math.random()
      }
      return [...prevGoals, newGoal]
    })
  }

  function deleteGoalHandler(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt:"List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={addGoalHandler} />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  )
}