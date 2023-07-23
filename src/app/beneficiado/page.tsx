'use client'
import { useState } from 'react';
import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs';
import { AiFillSave, AiOutlineCloseCircle } from 'react-icons/ai';
import { MainCtnHorizontal } from '@/components/template/mainctn';
import SideMenu from '@/components/sections/sidemenu';
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputCalendarForm, InputSelect, InputTextForms } from '@/components/template/input';
import { Btn, BtnR } from '@/components/template/btn';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import AddressesList from '@/components/sections/addressesList';
import { FiAlertTriangle } from 'react-icons/fi';
import { useRouter } from 'next/router';

type DataForm = {
  name: string | null;
  birthday: string | null;
  RG: number | null;
  CPF: number | null;
  maritial_status: string | number | null | undefined;
  kinship: number | null;
  email: string | null;
  phone: number | null;
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
};

const maritial_status_options = [
  { value: 'solteiro(a)', label: 'solteiro(a)' },
  { value: 'casado(a)', label: 'casado(a)' },
  { value: 'divorciado(a)', label: 'divorciado(a)' },
  { value: 'separado(a)', label: 'separado(a)' },
];

export default function ClientEditForm() {
//   const router = useRouter();
//   const { id } = router.query;
  const [dataForm, setDataForm] = useState<DataForm>(initialData);
  const [alertModalSucess, setAlertModalSuccess] = useState(false);
  const [alertModalError, setAlertModalError] = useState(false);

  const handleForm = (value: React.ChangeEvent<HTMLInputElement>) => {
    const index = value.target.id;
    let tempValue = value.target.value;
    let tempData = { ...dataForm };

    tempData = { ...tempData, [index]: tempValue };

    setDataForm(tempData);
  };

  const handleFormSelect = (value: string) => {
    const selectedValue = value.trim() !== '' ? value : null;
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

  const sendForm = async () => {
    try {
      // Lógica para enviar o formulário atualizado
      // ...
      setAlertModalSuccess(true);
    } catch (error) {
      console.error(error);
      setAlertModalError(true);
    }
  };

  const isFormValid = () => {
    if (
      !dataForm.name ||
      !dataForm.RG ||
      !dataForm.CPF ||
      !dataForm.phone
    ) {
      return false;
    }

    return true;
  };

  return (
    <MainCtnHorizontal>
      <Header />
      <div className='flex pt-5 md:pl-60 md:pr-60 w-full'>
        <SideMenu />
        <Content>
          <h1 className='text-3xl pb-2 pt-2'>Edição de Beneficiado:</h1>
          <h3 className='text-xl pb-2 pt-2'>
            <BsPersonVcard className='inline-block text-blue-500' /> Dados Pessoais
          </h3>
          <hr className='mb-2 mt-4' />
          <span className='inline-block max-w-full sm:w-full md:w-full pt-4'>
            <InputTextForms
              id={'name'}
              label='Nome'
              value={dataForm.name}
              onChange={(e) => handleForm(e)}
            />
          </span>
          <span className='inline-block max-w-full sm:w-full md:w-6/12 md:pr-1 pt-4'>
            <InputTextForms
              id={'RG'}
              label='RG'
              value={dataForm.RG}
              onChange={(e) => handleForm(e)}
            />
          </span>
          <span className='inline-block max-w-full sm:w-full md:w-6/12 md:pl-1 pt-4'>
            <InputTextForms
              id={'CPF'}
              label='CPF'
              value={dataForm.CPF}
              onChange={(e) => handleForm(e)}
            />
          </span>
          <span className='inline-block max-w-full sm:w-full md:w-6/12 md:pr-1 pt-4'>
            <InputSelect
              id={'maritial_status'}
              label='Estado Civil'
              value={dataForm.maritial_status}
              onChange={(e) => handleFormSelect(e)}
              options={maritial_status_options}
            />
          </span>
          <span className='inline-block max-w-full sm:w-full md:w-6/12 md:pl-1 pt-4'>
            <InputCalendarForm
              id={'birthday'}
              label='Data de Nascimento'
              value={dataForm.birthday}
              onChange={handleFormCalendar}
            />
          </span>
          {/* Restante do formulário */}
          {/* ... */}
          <span className='block mr-auto ml-auto sm:w-full md:w-8/12 md:pr-1 pt-4'>
            <Btn
              onClick={() => sendForm()}
            >
              <AiFillSave className='inline-block' /> Salvar
            </Btn>
          </span>
        </Content>
        {/* Modais de sucesso e erro */}
        {/* ... */}
      </div>
    </MainCtnHorizontal>
  );
}  