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
    <div className='h-[10%]'>
    <div className="font-display flex justify-between pt-12 mb-8">
    <div className=''>
        <img className='h-4/5' src={logo} alt='brand'/>
    </div>
    <div className='grid grid-flow-col auto-cols-max gap-9'>
        {navigation.map(item => {
            return (
                <div className={`${item.current? 'font-semibold' : 'font-light'} text-lg text-center`}>{item.name}</div>
            )
        })}
    </div>
    </div>
    </div>
  )
}
