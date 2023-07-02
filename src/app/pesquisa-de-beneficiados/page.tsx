'use client'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { BsEye, BsTrash, BsHouse } from 'react-icons/bs';
import { InputText } from '@/components/template/input';
import { Btn } from '@/components/template/btn';
import { CheckBox } from '@/components/template/checkbox';

export default function warehouseSearch() {
  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-4 pt-2'>Pesquisar Famílias ou Beneficiados</h1>
            <hr className='mb-2 mt-4' />
            <span className="inline-block sm:w-full md:w-10/12 pt-2 pr-2" >
              <InputText label={'Digite sua pesquisa'}  value='texto' />
            </span>
            <span className="inline-block sm:w-full md:w-2/12 pt-2" >
              <Btn onClick={() => { }}>Buscar</Btn>
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
              <fieldset className='flex flex-row text-xl gap-4 pb-1 pt-4'>
                <CheckBox label='Beneficiado' />
                <CheckBox label='Endereço Familiar' />
              </fieldset>
            </span>
            <ul className="flex flex-col p-4 gap-3 rounded overflow-y-scroll mb-5 mt-5">
              <li key={'key-bottom-'} className="flex flex-row text-4xl w-full">
                <span className='custom-svg w-2 /12'>
                  <BsHouse className={'text-20 mr-10 mt-2'} />
                </span>
                <span className='w-6/12'>
                  <p className='text-2xl'>Família 1</p>
                  <p className='text-sm uppercase font-semibold'>3 pessoas - Rua tuntl. N 27</p>
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
                <span className='custom-svg w-2/12'>
                  <BsHouse className={'text-20 mr-10 mt-2'} />
                </span>
                <span className='w-6/12'>
                  <p className='text-2xl'>Família 2</p>
                  <p className='text-sm uppercase font-semibold'>5 pessoas - Rua tuntl. N 27</p>
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