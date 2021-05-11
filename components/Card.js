import { useRouter } from "next/router";

export default function Card({ title, message, icon, link, query }) {
    const router = useRouter();
    return (
        <button
            className='w-full'
            onClick={() => {
                router.push({
                    pathname: link,
                });
            }}>
            <div className='flex items-center absolute rounded h-24 w-24 bg-blue-400 ml-10'>
                {icon}
            </div>
            <div className='flex w-full h-64 mt-10'>
                <div className='flex flex-col w-full items-center rounded-2xl bg-white shadow'>
                    <div className='flex flex-wrap w-full h-full p-4 mt-14 items-center text-left'>
                        <span className='text-3xl'>{title}</span>
                    </div>
                    <div className='flex flex-row items-center w-full border-t-2 h-20 p-4  text-gray-400'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5 mr-1'
                            viewBox='0 0 20 20'
                            fill='currentColor'>
                            <path
                                fillRule='evenodd'
                                d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                                clipRule='evenodd'
                            />
                        </svg>
                        {message}
                    </div>
                </div>
            </div>
        </button>
    );
}
