import Button from './UI/Button.tsx'
import { UseTimersContext } from '../store/timers-context.tsx'


export default function Header() {
  const timersCtx = UseTimersContext()

  return (
    <header>
      <h1>ReactTimer</h1>
      <Button onClick={ timersCtx.isRunning ? timersCtx.stopTimer : timersCtx.startTimer }>
        {timersCtx.isRunning ? 'Stop' : 'Start'} Timers
      </Button>
    </header>
  )
}
