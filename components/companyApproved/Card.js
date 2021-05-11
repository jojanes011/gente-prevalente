import Buttons from "./Buttons";
import List from "./List";

export default function Card({ onOpenModal, className, company }) {
    return (
        <div className={`${className} p-8 w-full rounded bg-white shadow`}>
            <div className='grid grid-cols-3 gap-4 '>
                <div className='w-full h-56'></div>
                <div className='w-56 h-56 justify-self-center'>
                    <img
                        src={company.avatar}
                        className='p-10 bg-gray-300 rounded h-full w-full overflow-hidden shadow'
                        alt='company'
                    />
                </div>
                <Buttons className='hidden md:block' />
            </div>
            <div className='grid lg:grid-cols-2 gap-6 mt-10'>
                <div className='border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1'>
                    <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
                        <p>
                            <label
                                htmlFor='nombre_empresa'
                                className='bg-white text-gray-600 px-1'>
                                Nombre de la empresa
                            </label>
                        </p>
                    </div>
                    <p>
                        <input
                            id='nombre_empresa'
                            autoComplete='false'
                            readOnly={true}
                            tabIndex='0'
                            value={company.nombre_empresa}
                            type='text'
                            className='py-1 px-1 text-gray-900 outline-none block h-full w-full'
                        />
                    </p>
                </div>
                <div className='border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1'>
                    <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
                        <p>
                            <label
                                htmlFor='razon_social'
                                className='bg-white text-gray-600 px-1'>
                                Razón Social
                            </label>
                        </p>
                    </div>
                    <p>
                        <input
                            id='razon_social'
                            autoComplete='false'
                            tabIndex='0'
                            readOnly={true}
                            value={company.razon_social}
                            type='text'
                            className='py-1 px-1 outline-none block h-full w-full'
                        />
                    </p>
                </div>
                <div className='border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1'>
                    <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
                        <p>
                            <label
                                htmlFor='tipo_identificacion'
                                className='bg-white text-gray-600 px-1'>
                                Tipo de identificación
                            </label>
                        </p>
                    </div>
                    <p>
                        <input
                            id='tipo_identificacion'
                            autoComplete='false'
                            readOnly={true}
                            value={company.tipo_identificacion}
                            tabIndex='0'
                            type='text'
                            className='py-1 px-1 outline-none block h-full w-full'
                        />
                    </p>
                </div>
                <div className='border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1'>
                    <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
                        <p>
                            <label
                                htmlFor='identificacion'
                                className='bg-white text-gray-600 px-1'>
                                Identificación
                            </label>
                        </p>
                    </div>
                    <p>
                        <input
                            id='identificacion'
                            autoComplete='false'
                            readOnly={true}
                            value={company.identificacion}
                            tabIndex='0'
                            type='text'
                            className='py-1 px-1 outline-none block h-full w-full'
                        />
                    </p>
                </div>
                <div className='border focus-within:border-blue-500 focus-within:text-blue-500 transition-all duration-500 relative rounded p-1'>
                    <div className='-mt-4 absolute tracking-wider px-1 uppercase text-xs'>
                        <p>
                            <label
                                htmlFor='numero_empleados'
                                className='bg-white text-gray-600 px-1'>
                                # de empleados
                            </label>
                        </p>
                    </div>
                    <p>
                        <input
                            id='numero_empleados'
                            autoComplete='false'
                            tabIndex='0'
                            readOnly={true}
                            value={company.numero_empleados}
                            type='text'
                            className='py-1 px-1 outline-none block h-full w-full'
                        />
                    </p>
                </div>
                <div className='hidden md:flex'>
                    <button
                        onClick={() => onOpenModal(company.documentos)}
                        className='bg-white text-gray-800 font-bold rounded border-b-2 border-indigo-400 hover:border-indigo-400 hover:bg-indigo-400 hover:text-white shadow-md py-2 px-6 inline-flex items-center'>
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
                                d='M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13'
                            />
                        </svg>
                        <span className='ml-2'>Ver archivos adjuntos</span>
                    </button>
                </div>
                <div className='flex md:hidden'>
                    <List documents={company.documentos} />
                </div>
            </div>
        </div>
    );
}
