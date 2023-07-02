"use client";
import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs'
import { AiFillSave } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputTextForms } from '@/components/template/input'
import { Btn } from '@/components/template/btn'
import BeneficiarysList from '@/components/sections/beneficiarysList';
import axios from 'axios';
import { useEffect, useState } from 'react';

type data = {
  name: string | null,
  password: string | null,
  birthday: Date | null,
  RG: number | null,
  CPF: number | null,
  maritial_statuts: string | null,
  kinship: number | null,
  address: number | null,
  email: string | null,
  phone: number | null,
}

const initialData = {
  name: null,
  password: null,
  birthday: null,
  RG: null,
  CPF: null,
  maritial_statuts: null,
  kinship: null,
  address: null,
  email: null,
  phone: null,
}

//'2023-07-01 21:37:37'

export default function ClientRegister() {

  const [dataForm, setDataForm] = useState<data>(initialData)

  const handleForm = (value: React.ChangeEvent<HTMLInputElement>) => {
    const index = value.target.id
    let tempValue = value.target.value
    let tempData = dataForm
    tempData = { ...tempData, [index]: tempValue }
    setDataForm(tempData)
  }

  const sendForm = () => {
    try {
      const response = axios('http://localhost:3333/clients', {
        method: 'POST',
        params: {
          name: dataForm.name,
          birthday: '2023-07-01',
          RG: dataForm.RG,
          CPF: dataForm.CPF,
          maritial_statuts: dataForm.maritial_statuts,
          kinship: 1,
          address: 1
        },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      })

        .then(function (response) {
          console.log(response);
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

  useEffect(() => {
    console.log('dataForm')
    console.log(dataForm)
  }, [dataForm])

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
            <InputTextForms id={'maritial_statuts'} label="Estado Civil" value={dataForm.maritial_statuts} onChange={(e) => handleForm(e)} />
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
            <InputTextForms label="CEP" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Rua" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Bairro" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Número" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Bairro" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Complemento" value='texto' onChange={(e) => console.log(e)} />
          </span>
          <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
            <Btn onclick={() => sendForm()}><AiFillSave className="inline-block" /> Registrar </Btn>
          </span>
        </Content>
      </div>
    </MainCtnHorizontal>
  );
}

// const beneficiaryRegister = () => {

//   try {
//     const response = axios('http://localhost:3333/clients', {
//       method: 'POST',
//       params: {
//         name: 'aterrajaficou',
//         password: 'hugohugo',
//         birthday: '2023-07-01 21:37:37',
//         RG: 1234567,
//         CPF: 12345678910,
//         maritial_statuts: 'solteiro',
//         kinship: 1,
//         address: 1
//       },
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//       }
//     })

//       .then(function (response) {
//         console.log(response);
//       })

//       .catch(function (error) {
//         console.log(error);
//       })

//       .finally(function () {
//         // always executed
//       });
//   } catch (error) {
//     console.error(error);
//   }
// }