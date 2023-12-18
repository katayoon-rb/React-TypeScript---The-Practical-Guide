import { type FC, type PropsWithChildren } from "react";


type CourseGoalProps = PropsWithChildren<{
    id: number;
    title: string;
    onDelete: (id: number) => void;
  }>

const CourseGoal: FC<CourseGoalProps> = (
        { id, title, children, onDelete }
    ) => {
    return (
        <article>
        <div>
            <h2>{title}</h2>
            {children}
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
        </article>
    )
}


export default CourseGoal