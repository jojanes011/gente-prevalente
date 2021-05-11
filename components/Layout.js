import Head from "next/head";
import Header from "./header/Header";

export const siteTitle = "Gente PreValente";

export default function Layout({ children, className }) {
    return (
        <div className={`font-sans w-full bg-gray-200`}>
            <Head>
                <meta name='og:title' content={siteTitle} key='title' />
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name='description'
                    content='Software para manejar el talento humano'
                />
                <meta name='twitter:card' content='summary_large_image' />
            </Head>
            <Header />
            <main className={`${className} w-full h-full`}>{children}</main>
        </div>
    );
}
