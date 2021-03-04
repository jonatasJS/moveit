import Head from 'next/head';
import { useRouter } from 'next/router';

import Sidebar from '../../components/Sidebar';

import { Container } from './styles';

export default function HomeTemplate(req, res) {
  const router = useRouter();
  const { asPath } = router;
  console.log(req);

  return (
  <Container className="container">
    <Head>
      <title>Erro | Move.it</title>
    </Head>

    <Sidebar />
    <section>
      {<h1>404</h1>}
      {asPath ? <p>Rota <strong>'{ asPath }'</strong> não foi encontrada!</p> : <p>Página não encontrada!</p>}
      <p>Clique no icone da página para voltar a <strong>Home</strong></p>
    </section>
  </Container>
)}
