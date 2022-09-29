import { ModalContainer } from './modal.styled';
import { IModalProps } from './modal.types';

export const Modal = ({ children }: IModalProps) => {
  return <ModalContainer>{children}</ModalContainer>;
};
