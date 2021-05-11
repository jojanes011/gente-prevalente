export default function Pagination({
    className,
    onNextCompany,
    onBeforeCompany,
    idCompany,
    totalCompanies,
}) {
    return (
        <div
            className={`${className} flex flex-row items-center space-x-2 place-content-center mt-4 mb-4`}>
            <button onClick={onBeforeCompany}>
                <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M20 39.375C9.29688 39.375 0.625 30.7031 0.625 20C0.625 9.29688 9.29688 0.625 20 0.625C30.7031 0.625 39.375 9.29688 39.375 20C39.375 30.7031 30.7031 39.375 20 39.375ZM11.1016 21.3281L21.6875 31.9141C22.4219 32.6484 23.6094 32.6484 24.3359 31.9141L25.6641 30.5859C26.3984 29.8516 26.3984 28.6641 25.6641 27.9375L17.7266 20L25.6641 12.0625C26.3984 11.3281 26.3984 10.1406 25.6641 9.41406L24.3359 8.08594C23.6016 7.35156 22.4141 7.35156 21.6875 8.08594L11.1016 18.6719C10.3672 19.4062 10.3672 20.5938 11.1016 21.3281Z'
                        fill='#9F9F9F'
                    />
                </svg>
            </button>
            <div>
                <span>{`Empresa ${idCompany} de ${totalCompanies} pendientes por aprobación`}</span>
            </div>
            <button onClick={onNextCompany}>
                <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                        d='M20 0.625C30.7031 0.625 39.375 9.29688 39.375 20C39.375 30.7031 30.7031 39.375 20 39.375C9.29688 39.375 0.625 30.7031 0.625 20C0.625 9.29688 9.29688 0.625 20 0.625ZM28.8984 18.6719L18.3125 8.08594C17.5781 7.35156 16.3906 7.35156 15.6641 8.08594L14.3359 9.41406C13.6016 10.1484 13.6016 11.3359 14.3359 12.0625L22.2734 20L14.3359 27.9375C13.6016 28.6719 13.6016 29.8594 14.3359 30.5859L15.6641 31.9141C16.3984 32.6484 17.5859 32.6484 18.3125 31.9141L28.8984 21.3281C29.6328 20.5938 29.6328 19.4062 28.8984 18.6719Z'
                        fill='black'
                    />
                </svg>
            </button>
        </div>
    );
}
