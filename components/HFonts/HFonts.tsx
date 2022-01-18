import styled from 'styled-components';
import { PRIMARY_FONT_COLOR, H1_FONT_SIZE, H2_FONT_SIZE, H3_FONT_SIZE } from '../stylesConfig';

const H1 = styled.h1`
  margin: 1rem 0;
  width: 100%;
  font-size: ${H1_FONT_SIZE};
  font-weight: 300;
  color: ${PRIMARY_FONT_COLOR};
`;

const H2 = styled.h2`
  font-size: ${H2_FONT_SIZE};
  color: ${PRIMARY_FONT_COLOR};
`;

const H3 = styled.h3`
  font-size: ${H3_FONT_SIZE};
  color: ${PRIMARY_FONT_COLOR};
`;

export { H1, H2, H3 };
