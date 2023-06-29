'use client'

import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';

import { BsFillTrashFill, BsEye } from 'react-icons/bs';
import { InputSelect, InputTextForms } from '@/components/template/input';
import { Btn } from '@/components/template/btn';

export default function ServiceSearch() {
  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-4 pt-2'>Pesquisar Atendimentos</h1>
            <hr className='mb-2 mt-4' />
            <span className="inline-block sm:w-full md:w-12/12 pr-2" >
              <InputTextForms label={'Digite sua busca'} />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pr-2 mt-2" >
              <InputSelect label={'Tipo de atendimento'} />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 mt-2" >
              <Btn onclick={() => { }}>Buscar</Btn>
            </span>
            <ul className="flex flex-col p-4 gap-3 rounded overflow-y-scroll mb-5 mt-5">
              <li key={'key-bottom-'} className="flex flex-row text-4xl">
                <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-gray text-md mr-7 mt-2" >
                  <path fill="none" stroke="" stroke-width="1" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M7.5,15 L10.5,18 L16.5,12"></path></svg>
                <div className="">
                  <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                  <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-green-300'>DESPACHADO</b></p>
                </div>
                <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray ml-10" >
                  <BsEye style={{ fontSize: '24px', marginTop: '8px' }} />
                </button>
                <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray ml-3" >
                  <BsFillTrashFill style={{ fontSize: '24px', marginTop: '8px' }} />
                </button>
              </li>
              <hr />
              <li key={'key-bottom-'} className="flex flex-row text-4xl">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-gray text-md mr-7 mt-2">
                  <path fill="none" stroke="" stroke-width="1" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M12,20 L12,11 M8,14 L12,10 L16,14"></path>
                </svg>
                <div className="">
                  <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                  <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-red-300'>PENDENTE</b></p>
                </div>
                <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray ml-10" >
                  <BsEye style={{ fontSize: '24px', marginTop: '8px' }} />
                </button>
                <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray ml-3" >
                  <BsFillTrashFill style={{ fontSize: '24px', marginTop: '8px' }} />
                </button>
              </li>
              <hr />
            </ul>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}