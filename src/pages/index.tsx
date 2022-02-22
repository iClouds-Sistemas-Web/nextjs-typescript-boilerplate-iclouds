import { Meta } from 'components';

import * as S from 'styles/pages/index.styles';

const meta = {
  title: 'LOCALHOST',
  description: 'Teste',
};

export default function Home() {
  return (
    <S.Container>
      <Meta meta={meta} />

      <S.Wrapper>
        <h1>Olá Mundo!</h1>
      </S.Wrapper>
    </S.Container>
  );
}
