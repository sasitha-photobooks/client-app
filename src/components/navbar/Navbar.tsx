import logo from '../../assets/sasitha-logo.svg';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Shop', href: '#', current: false },
  { name: 'Gallery', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Contact', href: '#', current: false }
]

export default function Navbar() {
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
                <img className='w-4/12 h-auto' src={logo} alt='brand'/>
                <button type="button">
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>
    </>
  )
}
