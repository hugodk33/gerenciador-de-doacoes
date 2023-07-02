"use client";
import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineForm, AiFillSave } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputTextForms, InputSelect } from '@/components/template/input'
import { Btn } from '@/components/template/btn'
import BeneficiarysList from '@/components/sections/beneficiarysList';
import axios from 'axios';
import { ChangeEvent, FormEvent, ReactEventHandler, useState } from 'react';

const data = {
  name: String,
  password: String,
  birthday: String,
  RG: Number,
  CPF: Number,
  maritial_statuts: String,
  kinship: Number,
  address: Number
}

//'2023-07-01 21:37:37'

export default function ClientRegister() {

  const [ senddata , setSendData] = useState(data)

  const handleForm = (value:React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleForm')
    console.log(value.target.value)
  }

  return (
    <MainCtnHorizontal>
      <Header />
      <div className='flex pt-5 md:pl-60 md:pr-60'>
        <SideMenu />
        <Content>
          <h1 className='text-3xl pb-2 pt-2'>cadastro de beneficiado</h1>
          <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block text-blue-500" /> dados pessoais</h3>
          <hr className='mb-2 mt-4' />
          <form>
            <span className="inline-block sm:w-full md:w-full pt-4" >
              <InputTextForms id={'client-name'} label="Nome" value='Nome' onChange={(e) => handleForm(e)}/>
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="RG" value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
              <InputTextForms label="CPF" value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="Estado Civil"  value='texto' onChange={(e) => console.log(e)} />
            </span>
            <h3 className='text-xl pb-2 pt-6'><BsTelephoneOutbound className="inline-block text-blue-500" /> Contato</h3>
            <hr />
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="Telefone"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
              <InputTextForms label="Email"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <h3 className='text-xl pb-2 pt-6'><BsPeople className="inline-block text-blue-500" /> Parentesco</h3>
            <hr />
            <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
              <BeneficiarysList benefeciarys={[]} />
            </span>
            <h3 className='text-xl pb-2 pt-6'><BsHouse className="inline-block text-blue-500" /> Endereço</h3>
            <hr />
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="CEP"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
              <InputTextForms label="Rua"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="Bairro"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
              <InputTextForms label="Número"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
              <InputTextForms label="Bairro"  value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
              <InputTextForms label="Complemento" value='texto'  onChange={(e) => console.log(e)} />
            </span>
            <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
              <Btn onclick={() => console.log('nada')}><AiFillSave className="inline-block" /> Registrar </Btn>
            </span>
          </form>
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