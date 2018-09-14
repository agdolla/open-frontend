import styled from 'react-emotion';
import { gutter, maxContentWidth } from 'style/mixins/spacing';

export const PageContainer = styled.div`
  ${gutter};
  ${maxContentWidth};
  margin: 0 auto;
  padding-top: 120px;
  padding-bottom: 300px;
`;
