import { Skills } from './Skills';
import profile from '/profile.webp';

interface SidebarProps {
    className: string
}

export const Sidebar = ({className}: SidebarProps) => (
    <div className={`${className} flex flex-col `}>
        <img 
            className="rounded-2xl max-w-[160px] max-h-[160px] mx-auto" 
            src={profile} 
            alt="Extra large avatar" 
        />
        <Skills />
    </div>
)