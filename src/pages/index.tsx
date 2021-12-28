import { SEO } from 'components';
import * as S from 'styles/pages/index.styles';

export default function Home() {
  return (
    <S.Container>
      <SEO title="Teste" description="Teste de SEO!" />

      <S.Wrapper>
        <h1>Olá Mundo!</h1>
      </S.Wrapper>
    </S.Container>
  );
}
