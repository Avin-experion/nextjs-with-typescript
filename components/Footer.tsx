import Image from 'next/image'
import { footerLinks } from '@/constants'
import Link from 'next/link'
import logo from '../public/logo.svg';


const Footer = () => {
  return (
    <footer className='flex flex-col text-black-100 mt-5
    border-t border-gray-100'>
        <div className='flex max-md:flex-col flex-wrap
        justify-between gap-5 sm:px-16 px-6 py-10'>
            <div className='flex flex-col justify-start items-start gap-6'>
                <Image src={logo} alt='car logo' 
                width={118} height={18} className='object-contain'
                />
                <p className='text-base text-gray-700'>Carhub 2023 <br/>
                All rights reserved &copy;
                </p>
            </div>
            <div className='footer__links'>
                {footerLinks.map((links) =>(
                    <div className='footer__link' key={links.title}>
                        <h3 className='font-bold'>{links.title}</h3>
                        {links.links.map((item) =>(
                            <Link key={item.title} href={item.url} className='text-gray-500'>
                                {item.title}
                            </Link>
                        ))}
                    </div>

                ))}
            </div>
        </div>

        <div className='flex justify-between items-center py-10 
        px-6 sm:px-16 flex-wrap border-t border-gray-100'>
            <p>@carhub All rights reserved</p>
            <div className='footer__copyright-link'>
                <Link href="/" className='text-gray-500'>
                    Privacy policy
                </Link>
                <Link href="/" className='text-gray-500'>
                    Terms of use
                </Link>
            </div>
        </div>
        
      
    </footer>
  )
}

export default Footer
Footer