'use client'
import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { BsEye, BsFillTrashFill } from 'react-icons/bs';
import { InputSelect, InputText } from '@/components/template/input';
import { Btn } from '@/components/template/btn';

export default function warehouseSearch() {
    return (
        <section>
        <MainCtnHorizontal>
          <Header />
          <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
            <SideMenu />
            <Content>
              <h1 className='text-3xl pb-2 pt-2'>Pesquisar no Almoxarifado</h1>
              <span className="inline-block sm:w-full md:w-10/12 pt-2 pr-2" >
                <InputText label={'Digite sua pesquisa'}  />
              </span>
              <span className="inline-block sm:w-full md:w-2/12 pt-2" >
                <Btn onclick={() => {}}>Buscar</Btn>
              </span>
              <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
                <InputSelect label={'observações'}  />
              </span>
              <span className="inline-block sm:w-full md:w-4/12 pt-2 md:pr-2" >
                <InputSelect label={'observações'}  />
              </span>
              <ul className="flex flex-col p-4 gap-3 rounded overflow-y-scroll mb-5 mt-5">
                
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-green-500'>DESPACHADO</b></p>
                  </div>
                </li>
                <hr />
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Família precisando fazer festa de 15 anos</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 1 pessoas em uma casa - <b className='text-red-500'>PENDENTE</b></p>
                  </div>
                </li>
                <hr />
  
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-green-500'>DESPACHADO</b></p>
                  </div>
                </li>
                <hr />
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Família precisando fazer festa de 15 anos</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 1 pessoas em uma casa - <b className='text-red-500'>PENDENTE</b></p>
                  </div>
                </li>
                <hr />
  
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-green-500'>DESPACHADO</b></p>
                  </div>
                </li>
                <hr />
                <li key={'key-bottom-'} className="flex flex-row text-4xl">
                  <button className="flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsFillTrashFill style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >
                    <BsEye className='text-white' style={{fontSize: '24px' , marginTop: '8px'}}/>
                  </button>
                  <div className="">
                    <p className='text-2xl'>Família precisando fazer festa de 15 anos</p>
                    <p className='text-sm uppercase font-semibold'>11/11/11 - 1 pessoas em uma casa - <b className='text-red-500'>PENDENTE</b></p>
                  </div>
                </li>
                <hr />
                
              </ul>
            </Content>
          </div>
        </MainCtnHorizontal>
      </section>
    );
}