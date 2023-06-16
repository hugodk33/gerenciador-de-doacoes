import { useState, useEffect } from "react";
import { Button } from "../template/button"
import { AiOutlineUsergroupAdd, AiFillSave } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import Modal from 'react-modal';
import { arrayDumb } from "../dumb/beneficiarysListDumb"

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },

};

export default function BeneficiarysList({
    benefeciarys,
}: {
    benefeciarys: []
}) {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [beneficiarys, setBeneficiarys] = useState(arrayDumb)
    const [inputsToggler, setInputsToggler] = useState(
        {
            commom: true,
            health: false,
            psicology: false
        }
    )

    const toggleBeneficiarys = (e:React.MouseEvent<HTMLButtonElement>) => {
        console.log('e.target')
        console.log(e.target)
    }

    return (
        <>
            <ul id={'beneficiarys'} className="flex flex-col p-4 gap-3 rounded bg-gray-200 max-h-60 overflow-y-scroll mb-5">
                {
                    beneficiarys.map((a, b) => (
                        b <= 2 ?
                            <li key={'key-top-' + b} className="flex flex-row text-4xl">
                                <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                                    <BsFillTrashFill style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }} />
                                </button>
                                <span className='flex rounded mr-3 h-10 w-10 bg-gray-700 mt-1' />
                                <div className="">
                                    <p className='text-2xl'>{a.nome}</p>
                                    <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                                </div>
                            </li>
                            :
                            null
                    ))
                }
            </ul>
            <Button onclick={() => setModalIsOpen(!modalIsOpen)}>
                <AiOutlineUsergroupAdd /> Pesquisar Beneficiado
            </Button>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <ul className="flex flex-col p-6 gap-3 rounded max-h-100 mb-4">
                    {
                        beneficiarys.map((a, b) => (
                            <li  key={'key-bottom-' + b} className="flex flex-row text-4xl">
                                <button onClick={(e) => toggleBeneficiarys(e)} className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                                    <AiOutlineUsergroupAdd style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 4, color: 'white' }} />
                                </button>
                                <span className='flex rounded mr-3 h-10 w-10 bg-gray-700 mt-1' />
                                <div className="">
                                    <p className='text-2xl'>{a.nome}</p>
                                    <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                                </div>
                            </li>
                        ))
                    }
                </ul>
                <Button onclick={() => setModalIsOpen(!modalIsOpen)}>
                    <AiOutlineUsergroupAdd /> Adicionar Beneficiado
                </Button>
            </Modal>
        </>
    )
}