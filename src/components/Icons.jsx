function Icon({size=24,children,fill='none',strokeWidth=1.8,...props}){return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" {...props}>{children}</svg>}
export function ArrowRight(p){return <Icon {...p}><path d="M5 12h14M13 6l6 6-6 6"/></Icon>}
export function ChevronDown(p){return <Icon {...p}><path d="m6 9 6 6 6-6"/></Icon>}
export function Menu(p){return <Icon {...p}><path d="M4 7h16M4 12h16M4 17h16"/></Icon>}
export function X(p){return <Icon {...p}><path d="M6 6l12 12M18 6 6 18"/></Icon>}
export function MapPin(p){return <Icon {...p}><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>}
export function Coffee(p){return <Icon {...p}><path d="M4 8h13v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2M7 4c0 1 1 1.5 1 2.5M11 4c0 1 1 1.5 1 2.5"/></Icon>}
export function ShieldCheck(p){return <Icon {...p}><path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></Icon>}
export function FileCheck2(p){return <Icon {...p}><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M8.5 14l2 2 4-4"/></Icon>}
export function PackageCheck(p){return <Icon {...p}><path d="m4 7 8-4 8 4-8 4Z"/><path d="M4 7v10l8 4 8-4V7M12 11v10M15 15l1.5 1.5L20 13"/></Icon>}
export function Globe2(p){return <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></Icon>}
export function Ship(p){return <Icon {...p}><path d="M4 15 6 8h12l2 7M8 8V4h8v4M3 18c2 2 4 2 6 0 2 2 4 2 6 0 2 2 4 2 6 0"/></Icon>}
export function Truck(p){return <Icon {...p}><path d="M3 6h11v10H3ZM14 10h4l3 3v3h-7Z"/><circle cx="7" cy="18" r="2"/><circle cx="18" cy="18" r="2"/></Icon>}
export function Sprout(p){return <Icon {...p}><path d="M12 21V10M12 13c-4 0-7-2-7-6 4 0 7 2 7 6ZM12 10c0-4 3-6 7-6 0 4-3 6-7 6Z"/></Icon>}
export function Building2(p){return <Icon {...p}><path d="M4 21V4h10v17M14 9h6v12M7 8h2M11 8h1M7 12h2M11 12h1M7 16h2M17 13h1M17 17h1M2 21h20"/></Icon>}
export function Users(p){return <Icon {...p}><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2.5-7 6-7s6 3 6 7M15 14c3 0 5 2 5 6"/></Icon>}
export function Layers3(p){return <Icon {...p}><path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></Icon>}
export function Leaf(p){return <Icon {...p}><path d="M20 4C11 4 5 8 5 15c0 3 2 5 5 5 7 0 10-7 10-16Z"/><path d="M5 20c3-5 7-8 12-11"/></Icon>}
export function Play(p){return <Icon {...p}><path d="m9 7 8 5-8 5Z" fill="currentColor" stroke="none"/></Icon>}
export function BadgeCheck(p){return <Icon {...p}><path d="m12 3 2 2.2 3-.3.8 2.9 2.7 1.4-1.4 2.7 1.4 2.7-2.7 1.4-.8 2.9-3-.3L12 21l-2-2.2-3 .3-.8-2.9-2.7-1.4 1.4-2.7-1.4-2.7 2.7-1.4L7 4.9l3 .3Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></Icon>}
export function CheckCircle2(p){return <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></Icon>}
export function Download(p){return <Icon {...p}><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></Icon>}
export function FileText(p){return <Icon {...p}><path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></Icon>}
export function Send(p){return <Icon {...p}><path d="m3 11 18-8-8 18-2-7Z"/><path d="m11 14 4-4"/></Icon>}
export function Clock3(p){return <Icon {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>}
export function Mail(p){return <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></Icon>}
export function Phone(p){return <Icon {...p}><path d="M7 3 4 5c0 8 7 15 15 15l2-3-5-3-2 2c-3-1-5-3-6-6l2-2Z"/></Icon>}
