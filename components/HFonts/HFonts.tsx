import styled from 'styled-components';
import { PRIMARY_FONT_COLOR, H1_FONT_SIZE, H2_FONT_SIZE } from '../stylesConfig';

const H1 = styled.h1`
  width: 100%;
  font-size: ${H1_FONT_SIZE};
  color: ${PRIMARY_FONT_COLOR};
`;

const H2 = styled.h2`
  font-size: ${H2_FONT_SIZE};
  color: ${PRIMARY_FONT_COLOR};
`;

export { H1, H2 };
