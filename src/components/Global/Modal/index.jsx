import React, { useEffect, useRef } from 'react';
import Portal from '../../Portal/Portal';
import './index.scss';

function Modal({ isOpen, onClose, children }) {
  const background = useRef(null);

  useEffect(() => {
    const { current } = background;

    const keyHandler = e => e.keyCode === 27 && onClose();
    const clickHandler = e => e.target === current && onClose();

    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    return () => {
      document.body.style.overflowY = '';

      if (current) {
        current.removeEventListener('click', clickHandler);
      }

      window.removeEventListener('keyup', keyHandler);
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <Portal elementId="modal">
          <div className={`modal__container ${isOpen && 'open'}`} ref={background}>
            <div className="modal__content">{children}</div>
          </div>
        </Portal>
      )}
    </>
  );
}

export default Modal;
