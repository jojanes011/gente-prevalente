const getPendingCompanies = async () => {
    return [
        {
            id: 1,
            nombre_empresa: "PrevalentWare",
            avatar: "./images/company.png",
            razon_social: "PrevalentWare S.A.S",
            tipo_identificacion: "NIT",
            identificacion: "901375150-4",
            numero_empleados: "1-10",
            documentos: [
                {
                    id: 1,
                    name: "Rut PrevalentWare",
                    url: "./docs/rut.pdf",
                },
                {
                    id: 2,
                    name: "Logo PrevalentWare",
                    url: "./docs/logo.pdf",
                },
                {
                    id: 3,
                    name: "Acta de constitución PrevalentWare",
                    url: "./docs/acta.pdf",
                },
                {
                    id: 4,
                    name: "Cámara de Comercio PrevalentWare",
                    url: "./docs/camara.pdf",
                },
                {
                    id: 5,
                    name: "Otro Documento PrevalentWare",
                    url: "./docs/otro.pdf",
                },
            ],
        },
        {
            id: 2,
            nombre_empresa: "Apple",
            avatar: "./images/apple.png",
            razon_social: "Apple S.A.S",
            tipo_identificacion: "NIT",
            identificacion: "1111245522-4",
            numero_empleados: "100-200",
            documentos: [
                { id: 1, name: "Rut Apple", url: "./docs/rut.pdf" },
                { id: 2, name: "Logo Apple", url: "./docs/logo.pdf" },
                {
                    id: 3,
                    name: "Acta de constitución Apple",
                    url: "./docs/acta.pdf",
                },
                {
                    id: 4,
                    name: "Cámara de Comercio Apple",
                    url: "./docs/camara.pdf",
                },
                {
                    id: 5,
                    name: "Otro Documento Apple",
                    url: "./docs/otro.pdf",
                },
            ],
        },
    ];
};
const PendingCompanyService = {
    getPendingCompanies: getPendingCompanies,
};

export default PendingCompanyService;
