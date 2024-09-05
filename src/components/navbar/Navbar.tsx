import { useState } from 'react';
import logo from '../../assets/sasitha-logo.svg';
import {XMarkIcon, Bars3Icon} from "@heroicons/react/16/solid"


const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Shop', href: '#', current: false },
  { name: 'Gallery', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false }
]

export default function Navbar() {

    const [isOpen, setOpen] = useState(false);

    function navMenu(){
        console.log(isOpen);
        setOpen(!isOpen);
    }

  return (
    <>
        <div className='hidden md:block'>
            <div className='h-[10%]'>
                <div className='h-12'/>
                <div className="font-display flex justify-between mb-8">
                    <img className='h-4/5' src={logo} alt='brand'/>
                    <div className='grid grid-flow-col auto-cols-max gap-9'>
                        {navigation.map(item => {
                            return (
                                <div className={`${item.current? 'font-semibold' : 'font-light'} text-lg text-center`}>{item.name}</div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        <div className='md:hidden overscroll-auto'>
            <div className='h-10'/>
            <div className="font-display flex justify-between mb-5 mx-4">
                <img className='h-[3vh] w-auto' src={logo} alt='brand'/>
                <button type="button" onClick={navMenu}>
                   {!isOpen && <Bars3Icon className="size-6 text-primary"/>}
                   {isOpen && <XMarkIcon className="size-6 text-primary"/>}
                </button>
            </div>
            {isOpen && <div className='grid my-10 grid-flow-row gap-9'>
                {navigation.map(item => {
                    return (
                        <div className={`${item.current? 'font-semibold' : 'font-light'} text-lg text-center`}>{item.name}</div>
                    )
                })}
            </div>}
        </div>
    </>
  )
}
