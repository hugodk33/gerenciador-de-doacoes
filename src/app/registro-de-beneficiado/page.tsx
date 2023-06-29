"use client";
import { BsHouse, BsPeople, BsPersonVcard , BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineForm , AiFillSave } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputTextForms, InputSelect } from '@/components/template/input'
import { Btn } from '@/components/template/btn'
import BeneficiarysList from '@/components/sections/beneficiarysList';

export default function ClientRegister() {
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
            <InputTextForms label="Nome" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="RG" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="CPF" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Estado Civil" />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsTelephoneOutbound className="inline-block text-blue-500" /> Contato</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Telefone" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Email" />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsPeople className="inline-block text-blue-500" /> Parentesco</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
            <BeneficiarysList benefeciarys={[]} />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsHouse className="inline-block text-blue-500" /> Endereço</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="CEP" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Rua" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Bairro" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Número" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pr-1 pt-4" >
            <InputTextForms label="Bairro" />
          </span>
          <span className="inline-block sm:w-full md:w-6/12 md:pl-1 pt-4" >
            <InputTextForms label="Complemento" />
          </span>
          <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
            <Btn onclick={() => console.log('teste')}><AiFillSave className="inline-block" /> Registrar </Btn>
          </span>
        </Content>
      </div>
    </MainCtnHorizontal>
  );
}