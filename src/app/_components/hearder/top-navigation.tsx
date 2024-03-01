'use client'
import { NavigationMenuItem } from "@/types"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menuItems:NavigationMenuItem[]=[
  
    {
        title:"دوره های ری اکت و نکست",
        href:"/courses"
    },
    {
        title:"مطالب و مقالات",
        href:"/blog"
    },
    {
        title:"صحفه اصلی",
        href:"/"
    },
]
const TopNavigation = () => {
    const pathname=usePathname()
  return (
  <ul className="flex gap-x-8 mr-12">
    {menuItems.map((item)=>{
        const isActive=pathname===item.href
        return (
        <li key={`navigation-${item.href}`}>
            <Link href={item.href} className={`dark:hover:text-primary transition-colors pb-2 ${isActive &&  'border-b-2 dark:text-primary dark:border-primary/30'}`} >
            {item.title}

            </Link>
        </li>
        )
})}
  </ul>
  )
}

export default TopNavigation