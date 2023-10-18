import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className='border-solid border-[#41AEFD] border-x-[0.9px] border-y-[0.9px] flex justify-between items-center h-[8vh] bg-[#1E1E1E] bg-opacity-50 backdrop-filter'>
            <Image src="/bay.svg" width={144} height={66} alt='balysis-logo' />
            <div className='flex flex-row my-auto'>
                <a className='p-4 font-bold text-white text-base'>Home</a>
                <a className='p-4 font-bold text-white text-base'>Custom Code</a>
                <a className='p-4 font-bold text-white text-base'>Marketplace</a>
                <a className='p-4 font-bold text-white text-base'>Learn</a>
                <a className='p-4 font-bold text-white text-base'>Pricing</a>
                <a className='p-4 font-bold text-white text-base'>How to use</a>
            </div>
            <div>
                <a className='p-4 font-bold text-white text-base'>Username</a>
            </div>
        </nav>
    )
}
