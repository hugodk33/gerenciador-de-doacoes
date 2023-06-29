"use client";
import { BsHouse, BsPeople, BsPersonVcard , BsTelephoneOutbound } from 'react-icons/bs'
import { AiOutlineForm , AiFillSave } from 'react-icons/ai'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputTextForms, InputSelect, InputTextArea, InputText } from '@/components/template/input'
import { Btn } from '@/components/template/btn'
import BeneficiarysList from '@/components/sections/beneficiarysList';
import { CheckBox } from '@/components/template/checkbox';

export default function warehouseRegister() {
  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-4 pt-2'>Registro de Almoxarifado</h1>
            <h3 className='text-xl pb-2 pt-4'><AiOutlineForm id="beneficiado-nome" className="inline-block text-blue-500" /> Entrada de produto</h3>
            <hr className='mb-2 mt-2' />
            <span className="inline-block sm:w-full md:w-full pt-4" >
              <InputTextForms label="Nome do Produto" />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
              <InputSelect label={'observações'}  />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
              <InputTextForms label={'Nome da Medida'}  />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
              <InputTextForms label={'Quantidade'}  />
            </span>
            <span className="inline-block w-full pt-2" >
              <InputTextArea label={'observações'}  />
            </span>
            <span className="inline-block sm:w-full md:w-3/12 pt-4" >
              <Btn onclick={() => console.log('teste')}><AiFillSave /> Enviar</Btn>
            </span>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}