import Link from "next/link";
import Layout, {siteTitle} from "../components/layout";
import Head from "next/head";

export default function Custom404() {
    return (
        <Layout>
            <Head>
                <title>{`404 - ${siteTitle}`}</title>
            </Head>
            <h1>404 - Page Not Found</h1>
            <Link href={'/'}>
                <a>Главная</a>
            </Link>
        </Layout>
    )
}