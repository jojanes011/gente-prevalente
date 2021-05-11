export default function SearchBar() {
    return (
        <div className='relative'>
            <div className='absolute text-white flex items-center pl-4 h-full cursor-pointer'>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                    />
                </svg>
            </div>
            <input
                id='search'
                className='bg-gray-800 text-white border-gray-800 focus:border-white hover:border-gray-300 font-normal w-full h-10 flex items-center pl-12 text-sm rounded'
                placeholder='Buscar...'
            />
        </div>
    );
}
