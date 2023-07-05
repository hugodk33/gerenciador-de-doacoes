import Modal from 'react-modal';

interface ModalProps {
    children: React.ReactNode
    isOpen: boolean
}

const ModaLXStyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        minWidth: 300,
        minHeight: 300,
        width: '60%'
    },
    overlay: {
        backgroundColor: 'rgb(38 110 153 / 75%)',
        zIndex: '9999'
    }
};

const ModaLSMtyle = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '9999',
        minWidth: 300,
        minHeight: 300,
        width: '40%'
    },
    overlay: {
        backgroundColor: 'rgb(38 110 153 / 75%)',
        zIndex: '9999'
    }
};

export const Modallx: React.FC<ModalProps> = ({ children, isOpen }) => {
    return (
      <Modal isOpen={isOpen} style={ModaLXStyle} ariaHideApp={false}>
        {children}
      </Modal>
    );
};
  

export const ModalSm: React.FC<ModalProps> = ({ children, isOpen }) => {
    return (
        <Modal isOpen={isOpen} style={ModaLSMtyle} ariaHideApp={false}>
            {
                children
            }
        </Modal>
    )
};
