import { useState, useEffect, useRef } from "react";
import { Btn, BtnR } from "../template/btn"
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { FiAlertTriangle } from 'react-icons/fi'
import Modal from 'react-modal';
import { InputTextForms } from "../template/input";
import axios from "axios";
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
    const [searchValue, setSearchValue] = useState('')
    const [inputsToggler, setInputsToggler] = useState(
        {
            commom: true,
            health: false,
            psicology: false
        }
    )

    const modalRef = useRef<HTMLDivElement>(null);

    const searchClient = async () => {

        try {
            const response = await axios.get(`http://localhost:3333/clients/${searchValue}?page=${1}&perPage=${10}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                }
            })
                .then(function (response) {
                    setBeneficiarys(response.data);
                })
                .catch(function (error) {
                    console.log(error);
                })
                .finally(function () {
                    // always executed
                });
        } catch (error) {
            console.error(error);
        }
    }

    const toggleModalBeneficiarys = () => {
        setModalIsOpen(!modalIsOpen)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        //console.log('Tecla pressionada:', event.key);
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setModalIsOpen(false)
            }
        };
    }, []);

    useEffect(() => {
        console.log('searchValue')
        console.log(searchValue)
    }, [searchValue])

    return (
        <div onKeyDown={handleKeyDown} >
            <div className="flex flex-col items-center justify-items-center bg-gray-100 content-center p-4 gap-3 overflow-y-scroll mb-3">
                {
                    beneficiarys.length > 0 ?
                        <ul id={'beneficiarys'} className="flex flex-col p-4">
                            {
                                beneficiarys.map((a, b) => (
                                    <li key={'key-bottom-' + b} className="flex flex-row text-4xl">
                                        <span className='flex rounded mr-3 h-10 w-10 bg-gray-700 mt-1' />
                                        <div className="">
                                            <p className='text-2xl'>{'a.nome'}</p>
                                            <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                                        </div>
                                        <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                                            {/* <AiOutlineUsergroupAdd style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 4, color: 'white' }} /> */}
                                        </button>
                                    </li>
                                ))
                            }
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
                <div className="flex flex-col" ref={modalRef}>
                    <h1 className='text-3xl pb-4 pt-2'>Adicionar familiares</h1>
                    <hr className='mb-2 mt-4' />
                    <div className="flex flex-row">
                        <span className="inline-block w-10/12 pt-4 pr-2" >
                            <InputTextForms label={"Pesquisar Beneficiado"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                        </span>
                        <span className="inline-block w-2/12 pt-4" >
                            <Btn onClick={() => searchClient()}>
                                <AiOutlineSearch style={{ margin: '0 auto' }} />
                            </Btn>
                        </span>
                    </div>
                    <span className="absolute" style={{ right: 5, top: 10 }}>
                        <BtnR onClick={() => setModalIsOpen(!modalIsOpen)}>
                            <AiOutlineCloseCircle style={{ fontSize: '24px', marginTop: '8px' }} />
                        </BtnR>
                    </span>
                    {
                        beneficiarys.length > 0 ?
                            <ul className="flex flex-col p-6 gap-3 rounded max-h-100 mb-4">

                                {
                                    beneficiarys.map((a, b) => (
                                        <li key={'key-bottom-' + b} className="flex flex-row text-4xl">
                                            <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                                                {/* <AiOutlineUsergroupAdd style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: 4, color: 'white' }} /> */}
                                            </button>
                                            <span className='flex rounded mr-3 h-10 w-10 bg-gray-700 mt-1' />
                                            <div className="">
                                                <p className='text-2xl'>{'a.nome'}</p>
                                                <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                                            </div>
                                        </li>
                                    ))
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