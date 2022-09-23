import Head from 'next/head';
import Image from 'next/image';

import styles from '../styles/Home.module.css';

import Story from '../components/story.js';

import Column from '../components/column.js';

export default function Home() {
  return (
    <div class="">
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
          crossorigin="anonymous"
        />
      </Head>
      <main class="container-fluid">
        <Story>
          <Column cols="col-6 text-start">
            <hgroup class="text-start">
              <h1 class="fs-2">Desenvolvedor FullStack</h1>
              <h1 class="fs-2">Álvaro Osvaldo</h1>
            </hgroup>
          </Column>

          <Column cols="col-6 text-center">
            <figure>
              <Image src="/bulb.svg" width="100%" height="100%" />
            </figure>
          </Column>
        </Story>

        <Story title="Visão" icon="bi-eye">
          <Column cols="col-6">Abobora</Column>

          <Column cols="col-6">Abobora</Column>
        </Story>

        <Story title="Experiência" icon="bi-clock-history"></Story>

        <Story title="Serviços" icon="bi-clipboard-check"></Story>

        <Story title="Contato"></Story>
      </main>
    </div>
  );
}
