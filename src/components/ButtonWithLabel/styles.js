import styled from 'styled-components';

import { Input as InputStyle } from 'visual/styles/Input';
import { Label as LabelStyle } from 'visual/styles/Label';

export const Container = styled.div`
  display: grid;
`;

export const Input = styled(InputStyle)``;

export const Label = styled(LabelStyle)``;

export const TextArea = styled(InputStyle)`
  height: 120px;
`;
