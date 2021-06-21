import styles from './layout.module.css'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const nameLogo = 'logo БыстроБанк'
export const siteTitle = 'Сайт визитка для предприятие "БыстроБанк"'


export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Сайт визитка на Next.js для предприятия БыстроБанк"
                />
            </Head>
            <header className={styles.header}>
                <Image
                    priority
                    src="/images/logo.png"
                    height={175}
                    width={1023}
                    alt={nameLogo}
                />
                <nav>
                    <input id="menu__toggle" type="checkbox"/>
                    <label className="menu__btn" htmlFor="menu__toggle">
                        <span></span>
                    </label>
                    <ul className="menu__box">
                        <li>
                            <Link href={'/'}>
                                <a className="menu__item">Главная</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'/services'}>
                                <a className="menu__item">Услуги</a>
                            </Link>
                        </li>
                        <li>
                            <Link href={'contacts'}>
                                <a className="menu__item">Контакты</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <hr/>
                <p>
                    &#169; 2005—2021 ПАО «БыстроБанк»
                    Лицензия Банка России №1745
                    Сделано на «13 этаже»
                </p>
           </footer>
        </div>
    )
}