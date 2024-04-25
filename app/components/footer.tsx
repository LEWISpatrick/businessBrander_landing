import XIcon from "@mui/icons-material/X"
import { Youtube } from 'lucide-react';
import EmailIcon from "@mui/icons-material/Email"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import  InstagramIcon  from "@mui/icons-material/Instagram"
import Link from "next/link"


export const Footer =() => {
    const Links = [
        {
            href: 'https://twitter.com/BranderBusiness',
            icon: <XIcon className='h-8 w-8'/>
        },
        {
            href: 'mailto:businesbrander@gmail.com',
            icon: <EmailIcon className='h-8 w-8'/>
        },
        {
            href: 'https://www.instagram.com/businesbrander/',
            icon: <InstagramIcon className='h-10 w-10'/>
        },
    
    ]
    return (
        <div className="text-center pb-8">
            <div className="flex items-center justify-center space-x-4">
                 {Links.map((link, index) => (
                        <Link href={link.href} key={index} className='hover:opacity-45 transition duration-300'>
                            {link.icon}
                        </Link>
                    
                    ))}
            </div>
            <p className="text-sm text-slate-50">businesbrander@gmail.com</p>
            <p className="text-sm text-slate-50">© BusinessBrander. All rights reserved.</p>
        </div>
    )
}