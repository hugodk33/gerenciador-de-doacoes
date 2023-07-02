import { useState, useEffect } from "react";
import { Btn, BtnS } from "../template/btn"
import { AiOutlineCloseCircle , AiOutlineSearch} from 'react-icons/ai'
import { FiAlertTriangle } from 'react-icons/fi'
import Modal from 'react-modal';
import { InputTextForms } from "../template/input";
//import { arrayDumb } from "../dumb/beneficiarysListDumb"

const customStyles = {
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
        zIndex: '9999'
    }
};

export default function BeneficiarysList({
    benefeciarys,
}: {
    benefeciarys: []
}) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [beneficiarys, setBeneficiarys] = useState([])
    const [inputsToggler, setInputsToggler] = useState(
        {
            commom: true,
            health: false,
            psicology: false
        }
    )

    const toggleBeneficiarys = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('e.target')
        //console.log(e.target)
    }

    const toggleModalBeneficiarys = () => {
        console.log('toggleModalBeneficiarys')
        console.log(modalIsOpen)
        setModalIsOpen(!modalIsOpen)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        console.log('Tecla pressionada:', event.key);
    };
    
    useEffect(() => {
        console.log('teste modal')
        console.log(modalIsOpen)
    }, [modalIsOpen])

    return (
        <div onKeyDown={handleKeyDown} >
            <div className="flex flex-col items-center justify-items-center bg-gray-100 content-center p-4 gap-3 overflow-y-scroll mb-3">
                {
                    beneficiarys.length > 0 ?
                        <ul id={'beneficiarys'} className="flex flex-col p-4">

                        </ul>
                        :
                        <span className="flex flex-col items-center justify-items-center content-center ">
                            <FiAlertTriangle className="text-2xl mb-3" />
                            <h1 className="uppercase mb-3 text-lg"> Nenhum parente selecionado </h1>
                            <Btn onClick={() => toggleModalBeneficiarys()}>selecionar parente</Btn>
                        </span>
                }
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
                <div className="flex flex-col">
                    <h1 className='text-3xl pb-4 pt-2'>Adicionar familiares</h1>
                    <hr className='mb-2 mt-4' />
                    <div className="flex flex-row">
                        <span className="inline-block w-10/12 pt-4" >
                            <InputTextForms label={"Pesquisar Beneficiado"} value={null} onChange={() => {}} />
                        </span>
                        <span className="inline-block w-2/12 pt-4" >
                            <Btn onClick={() => {}}>
                                <AiOutlineSearch />
                            </Btn>
                        </span>
                    </div>
                    <button onClick={() => setModalIsOpen(!modalIsOpen)}>
                        <AiOutlineCloseCircle />
                    </button>
                    {
                        beneficiarys.length > 0 ?
                            <ul className="flex flex-col p-6 gap-3 rounded max-h-100 mb-4">
                                {
                                    // beneficiarys.map((a, b) => (
                                    //     <li  key={'key-bottom-' + b} className="flex flex-row text-4xl">
                                    //         <button onClick={(e) => toggleBeneficiarys(e)} className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                                    //             <AiOutlineUsergroupAdd style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 4, color: 'white' }} />
                                    //         </button>
                                    //         <span className='flex rounded mr-3 h-10 w-10 bg-gray-700 mt-1' />
                                    //         <div className="">
                                    //             <p className='text-2xl'>{a.nome}</p>
                                    //             <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                                    //         </div>
                                    //     </li>
                                    // ))
                                }
                            </ul>
                            :
                            null
                    }
                </div>
            </Modal>
        </div>
    )
}