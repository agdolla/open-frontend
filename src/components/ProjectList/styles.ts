import styled from 'react-emotion';
import { below } from 'style/mixins/breakpoints';
import { tablet, desktop } from 'style/variables/breakpoints';
import { maxContentWidth } from 'style/mixins/spacing';
import spacing from 'style/variables/spacing';


export const List = styled.main`
  ${maxContentWidth}
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-top: 40px;

  ${below(desktop)} {
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
    grid-template-columns: 1fr 1fr;
  }

  ${below(tablet)} {
    display: block;
    padding-left: 0;
    padding-right: 0;
  }
`;
