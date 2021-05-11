import Card from "../../components/companyApproved/Card";
import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Modal from "../../components/companyApproved/Modal";
import { useState } from "react";
import Pagination from "../../components/companyApproved/Pagination";
import Buttons from "../../components/companyApproved/Buttons";
import PendingCompanyService from "../../services/pendingCompanyService";

export default function CompanyApproved(companies) {
    const [openModal, setOpenModal] = useState(false);
    const [idCompany, setIdCompany] = useState(0);
    const [documents, setDocuments] = useState([]);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModal = (documents) => {
        setDocuments(documents);
        setOpenModal(true);
    };

    const handleNextCompany = () => {
        if (idCompany + 1 !== companies.data.length) {
            setIdCompany(idCompany + 1);
            return;
        }
        return;
    };

    const handleBeforeCompany = () => {
        if (idCompany !== 0 && idCompany <= companies.data.length) {
            setIdCompany(idCompany - 1);
            return;
        }
        return;
    };

    return (
        <Layout className='p-0 md:p-2'>
            <Breadcrumbs className='order-1' />
            <div className='flex flex-col px-5 md:px-28'>
                <Card
                    company={companies.data[idCompany]}
                    className='order-3 md:order-2'
                    onOpenModal={handleOpenModal}
                />
                <Pagination
                    totalCompanies={companies.data.length}
                    idCompany={idCompany + 1}
                    onNextCompany={handleNextCompany}
                    onBeforeCompany={handleBeforeCompany}
                    className='order-2 md:order-last'
                />
                <Buttons className='block md:hidden order-last' />
            </div>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                documents={documents}
            />
        </Layout>
    );
}

CompanyApproved.getInitialProps = async (ctx) => {
    const res = await PendingCompanyService.getPendingCompanies();
    return { data: res };
};
