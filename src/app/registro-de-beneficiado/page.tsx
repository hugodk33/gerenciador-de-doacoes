"use client";

import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs'
import { AiFillSave, AiOutlineCloseCircle } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputCalendarForm, InputSelect, InputTextForms } from '@/components/template/input'
import { Btn, BtnR } from '@/components/template/btn'
import BeneficiarysList from '@/components/sections/beneficiarysList';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ModalSm } from '@/components/template/modal';
import { FiAlertTriangle } from 'react-icons/fi';

type data = {
  name: string | null,
  birthday: string | null,
  RG: number | null,
  CPF: number | null,
  maritial_status:  string | number | null | undefined,
  kinship: number | null,
  address: number | null,
  email: string | null,
  phone: number | null,
  CEP: number | null,
  street: string | null,
  complement: string | null,
  number: number | null,
  
}

const initialData = {
  name: null,
  birthday: null,
  RG: null,
  CPF: null,
  maritial_status: null,
  kinship: null,
  address: null,
  email: null,
  phone: null,
  CEP: null,
  street: null,
  complement: null,
  number: null,
}

const maritial_status_options = [
  { value: 'solteiro(a)', label: 'solteiro(a)' },
  { value: 'casado(a)', label: 'casado(a)' },
  { value: 'divorciado(a)', label: 'divorciado(a)' },
  { value: 'separado(a)', label: 'separado(a)' }
];

//'2023-07-01 21:37:37'

export default function ClientRegister() {

  const [dataForm, setDataForm] = useState<data>(initialData)
  const [alertModalSucess, setAlertModalSuccess] = useState(false)
  const [alertModalError, setAlertModalError] = useState(false)

  const handleForm = (value: React.ChangeEvent<HTMLInputElement>) => {
    const index = value.target.id
    let tempValue = value.target.value
    let tempData = dataForm
    tempData = { ...tempData, [index]: tempValue }
    setDataForm(tempData)
  }

  const handleFormSelect = (value: string) => {
    let prevDataForm = {...dataForm  , maritial_status: value.toString()}
    setDataForm(prevDataForm);
  };

  const handleFormCalendar = (value: Date) => {
    let prevDataForm = {...dataForm  , birthday: value.toString()}
    console.log('value')
    console.log(value)
    //setDataForm(prevDataForm);
  };

  useEffect(() => {
    console.log('dataForm')
    console.log(dataForm)
  },[dataForm])

  const sendForm = async () => {
    const now = new Date();
  
    try {
      if (isFormValid()) {
        const clientResponse = await axios.post(
          'http://localhost:3333/clients',
          {
            name: dataForm.name,
            birthday: '2023-07-01',
            RG: dataForm.RG,
            CPF: dataForm.CPF,
            maritial_status: dataForm.maritial_status,
            phone: dataForm.phone,
            email: dataForm.email,
            kinship: 1,
            address: 1
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json'
            }
          }
        );
  
        // Verificar se a requisição para /clients foi bem-sucedida
        if (clientResponse.status === 200) {
          const addressResponse = await axios.post(
            'http://localhost:3333/address',
            {
              CEP: dataForm.CEP,
              street: dataForm.street,
              number: dataForm.number,
              address: dataForm.address
            },
            {
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
              }
            }
          );
  
          // Verificar se a requisição para /address foi bem-sucedida
          if (addressResponse.status === 200) {
            setAlertModalSuccess(true);
            setDataForm(initialData);
          } else {
            setAlertModalError(true);
          }
        } else {
          setAlertModalError(true);
        }
      } else {
        setAlertModalError(true);
      }
    } catch (error) {
      console.error(error);
      setAlertModalError(true);
    }
  };
  
  const isFormValid = () => {
    if (!dataForm.name || !dataForm.RG || !dataForm.CPF || !dataForm.phone) {
      return false; // Retorna false se algum campo estiver vazio
    }
    
    return true; // Retorna true se o formulário estiver válido
  };
  

  return (
    <MainCtnHorizontal>
      <Header />
      <div className='flex pt-5 md:pl-60 md:pr-60'>
        <SideMenu />
        <Content>
          <h1 className='text-3xl pb-2 pt-2'>cadastro de beneficiado</h1>
          <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block text-blue-500" /> dados pessoais</h3>
          <hr className='mb-2 mt-4' />
          <span className="inline-block sm:w-full md:w-full pt-4" >
            <InputTextForms id={'name'} label="Nome" value={dataForm.name} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms id={'RG'} label="RG" value={dataForm.RG} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id={'CPF'} label="CPF" value={dataForm.CPF} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputSelect id={'maritial_status'} label="Estado Civil" value={dataForm.maritial_status} onChange={(e) => handleFormSelect(e)} options={maritial_status_options}/>
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputCalendarForm
              id={'birthday'}
              label="Data de Nascimento"
              onChange={(e) => console.log(e)}
            />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsTelephoneOutbound className="inline-block text-blue-500" /> Contato</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms id={'phone'} label="Telefone" value={dataForm.phone} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id={'email'} label="Email" value={dataForm.email} onChange={(e) => handleForm(e)} />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsPeople className="inline-block text-blue-500" /> Parentesco</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
            <BeneficiarysList benefeciarys={[]} />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsHouse className="inline-block text-blue-500" /> Endereço</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms id="CEP" label="CEP" value={dataForm.CEP}  onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id="street" label="Rua" value={dataForm.street}  onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id="number" label="Número"  value={dataForm.number} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id="complement" label="Complemento" value={dataForm.complement}  onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <Btn onClick={() => sendForm()}><AiFillSave className="inline-block" /> Registrar </Btn>
          </span>
        </Content>
        <ModalSm isOpen={alertModalSucess}>
          <span className="absolute" style={{ right: 5, top: 10 }}>
            <BtnR onClick={() => setAlertModalSuccess(false)}><AiOutlineCloseCircle style={{ fontSize: '24px', marginTop: '8px' }} /></BtnR>
          </span>
          <span className="flex flex-col items-center justify-items-center content-center pt-20">
            <FiAlertTriangle className="text-2xl mb-3" />
            <h1 className="uppercase mb-3 text-lg"> Beneficiado cadastrado com sucesso! </h1>
          </span>
        </ModalSm>
        <ModalSm isOpen={alertModalError}>
          <span className="absolute" style={{ right: 5, top: 10 }}>
            <BtnR onClick={() => setAlertModalError(false)}><AiOutlineCloseCircle style={{ fontSize: '24px', marginTop: '8px' }} /></BtnR>
          </span>
          <span className="flex flex-col items-center justify-items-center content-center pt-20">
            <FiAlertTriangle className="text-2xl mb-3" />
            <h1 className="uppercase mb-3 text-lg"> Algo não ocorreu como devia! <br /><b>Beneficiado não cadastrado</b></h1>
          </span>
        </ModalSm>
      </div>
    </MainCtnHorizontal>
  );
}