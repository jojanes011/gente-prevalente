import Link from "next/link";

export default function Breadcrumbs({ className }) {
    return (
        <nav
            className={`${className} bg-grey-light p-3 rounded font-sans w-full`}>
            <ol className='list-reset flex text-grey-dark'>
                <li>
                    <Link href='/'>
                        <a className='text-blue-400'>Administración</a>
                    </Link>
                </li>
                <li>
                    <span className='mx-2'>/</span>
                </li>
                <li>
                    <Link href='#'>
                        <a className='text-blue font-bold'>
                            Aprobación de empresas
                        </a>
                    </Link>
                </li>
            </ol>
        </nav>
    );
}
