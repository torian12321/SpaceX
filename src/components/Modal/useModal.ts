import { useState, useEffect } from "react";
import { useKeyPress } from "../../hooks";

/**
 * Hook returning <Modal /> controllers
 *
 */
const KEY_ESC = 27;

const useModal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const escIsPressed = useKeyPress(KEY_ESC);
  const hiddeModal = () => setIsVisible(false);
  const showModal = () => setIsVisible(true);

  useEffect(() => {
    // Remove the Modal from the screen when ESC is pressed
    if (isVisible && escIsPressed) {
      hiddeModal();
    }
  }, [isVisible, escIsPressed]);

  return {
    isVisible,
    showModal,
    hiddeModal
  };
};

export { useModal };
