import React from 'react';
// @material Icons Buttons Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
// Form
import { FormUser } from '../FormUser';
// Hooks
import { useUser } from '../core/UserProvider/useUser';
// Styles
import {
  PapperContainer, Container

} from './styles';

export const ModalImovel = ({ handleClose, open }) => {
  const { user: { id } } = useUser();

  return (
    <Container>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>

          <PapperContainer>

            <IconButton
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                marginBottom: '90%',
                maxHeight: '15px',
                maxWidth: '15px',
                color: '#eb987f',
              }}
              type="button"
              onClick={() => handleClose()}
            >
              <CloseIcon />
            </IconButton>

            <FormUser />

          </PapperContainer>
        </Fade>
      </Modal>
    </Container>
  );
};
