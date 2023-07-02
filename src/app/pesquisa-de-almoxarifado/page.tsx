"use client";
import { BsEye, BsTrash } from 'react-icons/bs'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputSelect, InputText } from '@/components/template/input'
import { Btn } from '@/components/template/btn'

export default function warehouseSearch() {
  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-4 pt-2'>Pesquisar no Almoxarifado</h1>
            <hr className='mb-2 mt-4' />
            <span className="inline-block sm:w-full md:w-10/12 pt-2 pr-2" >
              <InputText label={'Pesquisar no Almoxarifado'} />
            </span>
            <span className="inline-block sm:w-full md:w-2/12 pt-2" >
              <Btn onclick={() => { }}>Buscar</Btn>
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
              <InputSelect label={'Tipo de item'} />
            </span>
            <ul className="flex flex-col p-4 gap-3 rounded overflow-y-scroll mb-5 mt-5">
              <li key={'key-bottom-'} className="flex flex-row text-4xl w-full">
                <span className='w-8/12'>
                  <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                  <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-blue-500'>DESPACHADO</b></p>
                </span>
                <span className='flex flex-row-reverse w-3/12'>
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-2 ml-4" >
                    <BsTrash style={{ fontSize: '24px', marginTop: '8px' }} />
                  </button>
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray" >
                    <BsEye style={{ fontSize: '24px', marginTop: '8px' }} />
                  </button>
                </span>
              </li>
              <hr />
              <li key={'key-bottom-'} className="flex flex-row text-4xl w-full">
                <span className='w-8/12'>
                  <p className='text-2xl'>Família precisando fazer festa de 15 anos</p>
                  <p className='text-sm uppercase font-semibold'>11/11/11 - 1 pessoas em uma casa - <b className='text-rose-500'>PENDENTE</b></p>
                </span>
                <span className='flex flex-row-reverse w-3/12'>
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-2 ml-4" >
                    <BsTrash style={{ fontSize: '24px', marginTop: '8px' }} />
                  </button>
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray" >
                    <BsEye style={{ fontSize: '24px', marginTop: '8px' }} />
                  </button>
                </span>
              </li>
              <hr />
            </ul>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}