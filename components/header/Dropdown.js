import { useState } from "react";
const Dropdown = () => {
    const [show, setShow] = useState(false);

    return (
        <div className='relative'>
            <div
                className='cursor-pointer text-gray-500'
                onClick={() => setShow(!show)}>
                {show ? (
                    <svg
                        id='upIcon1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 icon icon-tabler icon-tabler-chevron-up'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <polyline points='6 15 12 9 18 15' />
                    </svg>
                ) : (
                    <svg
                        id='downIcon1'
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6 icon icon-tabler icon-tabler-chevron-down'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        fill='none'
                        strokeLinecap='round'
                        strokeLinejoin='round'>
                        <path stroke='none' d='M0 0h24v24H0z' />
                        <polyline points='6 9 12 15 18 9' />
                    </svg>
                )}
            </div>
            {show && (
                <ul className='visible transition duration-300 opacity-100 bg-white dark:bg-gray-800 shadow rounded py-1 w-48 absolute'>
                    <li className='cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal'>
                        Procesos
                    </li>
                    <li className='cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal'>
                        Ofertas
                    </li>
                    <li className='cursor-pointer text-gray-600 dark:text-gray-400 dark:hover:bg-gray-700 text-sm leading-3 tracking-normal py-3 hover:bg-gray-100 px-3 font-normal'>
                        Contratos
                    </li>
                </ul>
            )}
        </div>
    );
};
export default Dropdown;
