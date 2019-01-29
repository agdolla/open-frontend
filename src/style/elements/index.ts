import styled from 'react-emotion';
import { below } from 'style/mixins/breakpoints';
import { tablet } from 'style/variables/breakpoints';

export const PageContainer = styled.div`
  margin: 0 auto;
  padding-top: 64px;
  padding-bottom: 128px;

  ${below(tablet)} {
    padding-top: 32px;
  }
`;
