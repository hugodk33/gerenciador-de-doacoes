"use client";
import { BsHouse, BsPeople, BsPersonVcard , BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineUsergroupAdd , AiFillSave } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputTextForms, InputSelect } from '@/components/template/input'
import { Button } from '@/components/template/button'
import BeneficiarysList from '@/components/sections/beneficiarysList';

export default function ClientRegister() {
  return (
    <MainCtnHorizontal>
      <Header />
      <div className='flex pt-5 md:pl-20 md:pr-20'>
        <SideMenu />
        <Content>
          <h1 className='text-3xl pb-2 pt-2'>cadastro de beneficiado</h1>
          <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block" /> dados pessoais</h3> 
          <hr />
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
          <h3 className='text-xl pb-2 pt-2'><BsTelephoneOutbound className="inline-block" /> Contato</h3>
          <hr />
          <h3 className='text-xl pb-2 pt-6'><BsPeople className="inline-block" /> Parentesco</h3>
          <hr />
          <span className="inline-block sm:w-full md:w-full md:pr-1 pt-4" >
            <BeneficiarysList benefeciarys={[]} />
          </span>
          <h3 className='text-xl pb-2 pt-6'><BsHouse className="inline-block" /> Endereço</h3>
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
            <Button onclick={() => console.log('teste')}><AiFillSave className="inline-block text-2xl" /> Registrar </Button>
          </span>
        </Content>
      </div>
    </MainCtnHorizontal>
  );
}