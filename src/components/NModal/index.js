import React from 'react';

import { useOutsideClick } from '~/hooks';

import { Container } from './styles';

const NModal = ({ children, onClose = () => null, ...rest }) => {
  const modal = useOutsideClick(onClose);

  return (
    <Container {...rest}>
      <div className="body" ref={modal}>
        {children}
      </div>
    </Container>
  );
};

export default NModal;
