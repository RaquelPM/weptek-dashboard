import React, { forwardRef } from 'react';

import { AiOutlineSearch, AiOutlinePlus } from 'react-icons/ai';

import { Container } from './styles';

const NSearch = forwardRef(
  ({ className, plus, onPlus = () => null, ...rest }, ref) => (
    <Container className={className}>
      <AiOutlineSearch size={24} className="icon" />
      <input className="input" {...rest} ref={ref} />
      {plus && (
        <AiOutlinePlus size={24} className="icon_plus" onClick={onPlus} />
      )}
    </Container>
  )
);

export default NSearch;
