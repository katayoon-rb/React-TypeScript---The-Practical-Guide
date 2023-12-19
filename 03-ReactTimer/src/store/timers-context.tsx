import { ReactNode, createContext, useContext, useReducer } from "react"


export type Timer = {
    name: string
    duration: number
}
type TimersState = {
    isRunning: boolean
    timers: Timer[]
}
type TimersContextValue = TimersState & {
    addTimer: (timerData: Timer) => void,
    startTimer: () => void,
    stopTimer: () => void
}


const TimersContext = createContext<TimersContextValue | null>(null)


export function UseTimersContext() {
    const timerCtx = useContext(TimersContext)

    if (timerCtx === null) throw new Error("It's null!!")
    return timerCtx
}





type TimersContextProviderProps = {
    children: ReactNode
}
type AddTimerAction = {
    type: 'ADD_TIMER'
    payload: Timer
}
type StartTimerAction = {
    type: 'START_TIMERS'
}
type StopTimerAction = {
    type: 'STOP_TIMERS'
}
type Action = AddTimerAction | StartTimerAction | StopTimerAction


const initialState: TimersState = {
    isRunning: true,
    timers: []
}


function timersReducer( state: TimersState, action: Action ): TimersState {
    if (action.type === 'START_TIMERS') {
        return {
            ...state,
            isRunning: true
        }
    }
    if (action.type === 'STOP_TIMERS') {
        return {
            ...state,
            isRunning: false
        }
    }
    if (action.type === 'ADD_TIMER') {
        return {
            ...state,
            timers: [
                ...state.timers,
                { name: action.payload.name,
                  duration: action.payload.duration }
            ]
        }
    }

    return state
}

function TimersContextProvider
    ({ children }: TimersContextProviderProps)
{
    const [ timersState, dispatch ] = useReducer( timersReducer, initialState )
    const ctx: TimersContextValue = {
        timers: timersState.timers,
        isRunning: timersState.isRunning,
        addTimer(timerData) {
            dispatch({type: 'ADD_TIMER', payload: timerData})
        },
        startTimer() {
            dispatch({type: 'START_TIMERS'})
        },
        stopTimer() {
            dispatch({type: 'STOP_TIMERS'})
        }
    }

    return (
        <TimersContext.Provider value={ctx}>
            {children}
        </TimersContext.Provider>
    )
}


export default TimersContextProvider