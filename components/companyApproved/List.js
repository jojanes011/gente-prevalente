export default function List({ documents }) {
    return (
        <div className='mt-3 text-center'>
            <h3 className='text-3xl leading-6 font-medium text-gray-900'>
                Documentos cargados
            </h3>
            {documents.map((document, indexDocument) => (
                <div
                    key={indexDocument}
                    className='grid grid-cols-3 items-center text-left mt-4 pl-4 pr-4'>
                    <div className='col-span-2'>
                        <span>{document.name}</span>
                    </div>
                    <div>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            download={document.name}
                            href={document.url}
                            type='button'
                            className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white text-base font-medium text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
                            <svg
                                width='20'
                                height='30'
                                viewBox='0 0 30 40'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'>
                                <path
                                    d='M14.2109 20.0078C13.8203 18.7578 13.8281 16.3438 14.0547 16.3438C14.7109 16.3438 14.6484 19.2266 14.2109 20.0078ZM14.0781 23.6953C13.4766 25.2734 12.7266 27.0781 11.8594 28.5938C13.2891 28.0469 14.9062 27.25 16.7734 26.8828C15.7812 26.1328 14.8281 25.0547 14.0781 23.6953ZM6.72656 33.4453C6.72656 33.5078 7.75781 33.0234 9.45312 30.3047C8.92969 30.7969 7.17969 32.2188 6.72656 33.4453ZM19.375 12.5H30V38.125C30 39.1641 29.1641 40 28.125 40H1.875C0.835938 40 0 39.1641 0 38.125V1.875C0 0.835938 0.835938 0 1.875 0H17.5V10.625C17.5 11.6562 18.3438 12.5 19.375 12.5ZM18.75 25.9219C17.1875 24.9688 16.1484 23.6562 15.4141 21.7188C15.7656 20.2734 16.3203 18.0781 15.8984 16.7031C15.5312 14.4062 12.5859 14.6328 12.1641 16.1719C11.7734 17.6016 12.1328 19.6172 12.7969 22.1875C11.8906 24.3438 10.5547 27.2344 9.60938 28.8906C9.60156 28.8906 9.60156 28.8984 9.59375 28.8984C7.47656 29.9844 3.84375 32.375 5.33594 34.2109C5.77344 34.75 6.58594 34.9922 7.01562 34.9922C8.41406 34.9922 9.80469 33.5859 11.7891 30.1641C13.8047 29.5 16.0156 28.6719 17.9609 28.3516C19.6562 29.2734 21.6406 29.875 22.9609 29.875C25.2422 29.875 25.3984 27.375 24.5 26.4844C23.4141 25.4219 20.2578 25.7266 18.75 25.9219ZM29.4531 8.20312L21.7969 0.546875C21.4453 0.195312 20.9688 0 20.4688 0H20V10H30V9.52344C30 9.03125 29.8047 8.55469 29.4531 8.20312ZM23.6641 28.1484C23.9844 27.9375 23.4688 27.2187 20.3203 27.4453C23.2188 28.6797 23.6641 28.1484 23.6641 28.1484Z'
                                    fill='#E60000'
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
}
