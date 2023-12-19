import { ReactNode } from "react"


type HintBoxProps = {
    mode: 'hint'
    children: ReactNode
}
type WarningBoxProps = {
    mode: 'warning'
    sev: 'low' | 'medium' | 'high'
    children: ReactNode
}
type InfoBoxProps = HintBoxProps | WarningBoxProps

export default function InfoBox(props: InfoBoxProps) {
    const {mode, children} = props
    if (mode === 'hint') {
        return (
            <aside className="infoBox infoBox-hint">
                <p>{children}</p>
            </aside>
        )
    }

    const {sev} = props
    return (
        <aside className={`infoBox infoBox-warning warning--${sev}`}>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}
