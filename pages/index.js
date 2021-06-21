import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Image from "next/image";

const nameImg = 'БыстроБанк в Ижевске';


export default function Home() {
  return (
      <Layout>
          <Head>
              <title>{siteTitle}</title>
          </Head>
          <section>
              <p>БыстроБанк предлагает выгодные вклады, доступные кредиты наличными на любые цели и автокредиты. Оформите заявку на кредит онлайн!</p>
              <p>
              Официальный сайт
              <a href="https://www.bystrobank.ru/" target='_blank'> БыстроБанк</a>
              </p>
              <Image
                  priority
                  src="/images/bystrobank.jpg"
                  height={534}
                  width={800}
                  alt={nameImg}
              />
              <figcaption>
                  Офис в Ижевске
              </figcaption>
          </section>
      </Layout>
  )
}