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
import AddressesList from '@/components/sections/addressesList';

interface Client {
  client_id?: number | null;
  name?: string | null;
  birthday?: string | null;
  RG?: number | null;
  CPF?: number | null;
  phone?: number | null;
  email?: string | null;
  maritial_status?: string | null;
  address?: number | null;
}

interface KinshipList {
  kinship_id?: number | null;
  client?: Client | null;
  kinship_type?: string | null;
  kin?: Client | null;
}

type DataForm = {
  name: string | null;
  birthday: string | null;
  RG: number | null;
  CPF: number | null;
  maritial_status: string | number | null | undefined;
  kinship: number | null;
  email: string | null;
  phone: number | null;
  kinships: KinshipList[]
};

const initialData: DataForm = {
  name: null,
  birthday: null,
  RG: null,
  CPF: null,
  maritial_status: 'solteiro(a)',
  kinship: null,
  email: null,
  phone: null,
  kinships: []
};

const maritial_status_options = [
  { value: 'solteiro(a)', label: 'solteiro(a)' },
  { value: 'casado(a)', label: 'casado(a)' },
  { value: 'divorciado(a)', label: 'divorciado(a)' },
  { value: 'separado(a)', label: 'separado(a)' }
];

export default function ClientRegister() {

  const [dataForm, setDataForm] = useState<DataForm>(initialData)
  const [alertModalSucess, setAlertModalSuccess] = useState(false)
  const [alertModalError, setAlertModalError] = useState(false)
  const [selectedClientKinships, setSelectedClientKinships] = useState<KinshipList[]>([]);
  const [selectedClientKinshipsSendForm, setSelectedClientKinshipsSendForm] = useState([]);

  const sendForm = async () => {
    try {
      const {
        name,
        birthday,
        RG,
        CPF,
        maritial_status,
        phone,
        email
      } = dataForm;

      const clientResponse = await axios.post(
        'http://localhost:3333/clients',
        {
          name,
          birthday,
          RG,
          CPF,
          maritial_status,
          phone,
          email
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
        }
      );

      if (clientResponse.status === 201) {
        setAlertModalSuccess(true);
        setDataForm(initialData);
      } else {
        setAlertModalError(true);
      }
    } catch (error) {
      console.error(error);
      setAlertModalError(true);
    }
  };

  const handleForm = (value: React.ChangeEvent<HTMLInputElement>) => {
    const index = value.target.id;
    let tempValue = value.target.value;
    let tempData = { ...dataForm }; // Crie uma cópia do objeto dataForm

    tempData = { ...tempData, [index]: tempValue };

    setDataForm(tempData);
  };


  const handleFormSelect = (value: string) => {
    const selectedValue = value.trim() !== '' ? value : null; // Definir como null se o valor estiver vazio
    let prevDataForm = { ...dataForm, maritial_status: selectedValue };
    setDataForm(prevDataForm);
  };

  const handleFormCalendar = (value: string) => {
    let prevDataForm = { ...dataForm, birthday: value };
    setDataForm(prevDataForm);
  };

  const handleAddressValue = (selectedValue: number) => {
    let prevDataForm = { ...dataForm, address: selectedValue };
    setDataForm(prevDataForm);
  };

  const handleSelectedClientKinships = (selectedKinships: KinshipList[]) => {
    const modifiedKinships = selectedKinships.map((kinship) => ({
      ...kinship,
      client: kinship.client?.client_id || null, // Replace nested object with client_id or null
      kin: kinship.kin?.client_id || null, // Replace nested object with client_id or null
    }));
    setSelectedClientKinshipsSendForm(modifiedKinships as [])
    setSelectedClientKinships(selectedKinships)
  };

  useEffect(() => {
    let prevDataForm = { ...dataForm, kinships: selectedClientKinships };
    setDataForm(prevDataForm);
  }, [selectedClientKinships])

  useEffect(() => {
    console.log('----------------------------------')
    console.log(selectedClientKinships)
    console.log('----------------------------------')
    console.log(selectedClientKinshipsSendForm)
    console.log('----------------------------------')
  }, [dataForm])

  return (
    <MainCtnHorizontal>
      <Header />
      <div className='flex pt-5 md:pl-60 md:pr-60 w-full'>
        <SideMenu />
        <Content>
          <h1 className='text-3xl pb-2 pt-2'>cadastro de beneficiado</h1>
          <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block text-blue-500" /> dados pessoais</h3>
          <hr className='mb-2 mt-4' />
          <span className="inline-block max-w-full sm:w-full md:w-full pt-4" >
            <InputTextForms id={'name'} label="Nome" value={dataForm.name} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms id={'RG'} label="RG" value={dataForm.RG} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id={'CPF'} label="CPF" value={dataForm.CPF} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputSelect id={'maritial_status'} label="Estado Civil" value={dataForm.maritial_status} onChange={(e) => handleFormSelect(e)} options={maritial_status_options} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputCalendarForm
              id={'birthday'}
              label="Data de Nascimento"
              value={dataForm.birthday}
              onChange={handleFormCalendar}
            />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsTelephoneOutbound className="inline-block text-blue-500" /> Contato</h3>
          <hr />
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms id={'phone'} label="Telefone" value={dataForm.phone} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms id={'email'} label="Email" value={dataForm.email} onChange={(e) => handleForm(e)} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-full md:pr-1 pt-4" >
            <h3 className='text-xl pb-2 pt-6'><BsHouse className="inline-block text-blue-500" /> Endereço</h3>
            <hr />
            <AddressesList addresses={[]} value={handleAddressValue} />
          </span>
          <span className="inline-block max-w-full sm:w-full md:w-full md:pr-1 pt-4" >
            <h3 className='text-xl pb-2 pt-6'><BsPeople className="inline-block text-blue-500" /> Parentesco</h3>
            <hr />
            <BeneficiarysList clientprop={[]} value={(e) => handleSelectedClientKinships(e)} />
          </span>
          <span className="block mr-auto ml-auto sm:w-full md:w-8/12 md:pr-1 pt-4" >
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