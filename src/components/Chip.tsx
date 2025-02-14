
interface ChipProps {
    children: React.ReactNode
}

export const Chip = ({children}: ChipProps) => (
    <label className={`rounded-md border border-slate-200 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-400`}>
        {children}
    </label>
)