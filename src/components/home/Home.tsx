import HeroImage from '../../assets/hero-image.jpg';

export function Home(){
    return (
        <>
            <div className='hidden md:flex h-[80%] items-center justify-center'>
                <div className='flex flex-row mx-[10%] justify-center'>
                    <div className='flex flex-col justify-around'>
                        <div className='text-3xl text-primary font-title'>CREATE MEMORIES</div>
                        <div className='text-lg font-light text-secondary font-display leading-[250%]'>
                            Customized photobooks and calendars are fantastic ways to preserve and celebrate memories. 
                            They allow you to curate your favorite moments, organizing them into a meaningful narrative that can be revisited anytime. 
                            Each page becomes a special reminder of significant times, making them deeply personal gifts. 
                        </div>
                        <div className='font-display ml-[7%]'>
                            <button className='text-md text-primary bg-accent rounded-sm font-medium py-[2%] px-[8%]'>PRINT MEMORIES</button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center py-[2%]'>
                        <img className='rounded-lg w-4/6 h-auto' src={HeroImage} alt='Hero'/>
                    </div>
                </div>
            </div>
            <div className='md:hidden flex flex-col items-center overscroll-auto'>
                <img className='my-8 rounded-lg w-4/6 h-auto' src={HeroImage} alt='Hero'/>
                <div className='mt-2 text-3xl text-primary font-title'>CREATE MEMORIES</div>
                <div className='mt-5 text-center text-lg font-light text-secondary font-display leading-[230%]'>
                    Customized photobooks and calendars are fantastic ways to preserve and celebrate memories. 
                    They allow you to curate your favorite moments, organizing them into a meaningful narrative that can be revisited anytime. 
                    Each page becomes a special reminder of significant times, making them deeply personal gifts. 
                </div>
                <button className='mt-5 font-display text-lg text-primary bg-accent rounded-sm font-medium py-3 px-10 w-5/6'>PRINT MEMORIES</button>                
            </div>
        </>
    );
}