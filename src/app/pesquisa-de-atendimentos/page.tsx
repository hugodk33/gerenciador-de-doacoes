'use client'

import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
<<<<<<< HEAD
=======
import { FiEdit } from 'react-icons/fi';
import { BsEye, BsHouse, BsPeople, BsTelephoneOutbound, BsPersonVcard } from 'react-icons/bs';
import { InputCalendarForm, InputSelect, InputTextArea, InputTextForms, InputTimeForm } from '@/components/template/input';
import { Btn, BtnR, BtnRS } from '@/components/template/btn';
import { useEffect, useState } from 'react';
import { AiFillSave, AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai';
import { GrFormCheckmark, GrFormClock, GrFormClose } from 'react-icons/gr'
import axios from 'axios';
import Pagination from '@/components/template/pagination';
import Modal from 'react-modal';
import AddressesList from '@/components/sections/addressesList';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import BeneficiaryService from '@/components/sections/beneficiaryService';
>>>>>>> 7b073e5 (fixing)

import { BsTrash, BsEye } from 'react-icons/bs';
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
              <InputTextForms label={'Digite sua busca'} onChange={()=>{}} />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 pr-2 mt-2" >
              <InputSelect label={'Tipo de atendimento'} />
            </span>
            <span className="inline-block sm:w-full md:w-4/12 mt-2" >
              <Btn onClick={() => { }}>Buscar</Btn>
            </span>
            <ul className="flex flex-col p-4 gap-3 rounded overflow-y-scroll mb-5 mt-5">
<<<<<<< HEAD
              <li key={'key-bottom-'} className="flex flex-row text-4xl w-full">
                <span className='custom-svg w-2/12'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-gray text-md mr-7 mt-2" >
                    <path fill="none" stroke="" stroke-width="1" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M7.5,15 L10.5,18 L16.5,12"></path></svg>
                </span>
                <span className='w-6/12'>
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
                <span className='custom-svg w-2/12'>
                  <svg stroke="currentColor" fill="currentColor" stroke-width="1" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" className="text-gray text-md mr-7 mt-2" >
                    <path fill="none" stroke="" stroke-width="1" d="M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M7.5,15 L10.5,18 L16.5,12"></path></svg>
                </span>
                <span className='w-6/12'>
                  <p className='text-2xl'>Pessoas em situação de risco em local tal</p>
                  <p className='text-sm uppercase font-semibold'>11/11/11 - 2 pessoas em uma casa - <b className='text-rose-500'>PENDENTE</b></p>
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
=======
              {
                isSearch ?
                  servicesList.length > 0 ? (
                    servicesList.map((a, b) => {
                      return (
                        <li key={'key-bottom-' + b} className='flex flex-row text-4xl w-full'>
                          <span className='custom-svg w-2/12'>
                            <svg
                              stroke='currentColor'
                              fill='currentColor'
                              strokeWidth='1'
                              viewBox='0 0 24 24'
                              height='1em'
                              width='1em'
                              xmlns='http://www.w3.org/2000/svg'
                              className='text-gray text-md mr-7 mt-2'
                            >
                              <path fill='none' stroke='' strokeWidth='1' d='M2.99787498,0.999999992 L17.4999998,0.999999992 L20.9999998,4.50000005 L21,23 L3,23 L2.99787498,0.999999992 Z M16,1 L16,6 L21,6 M7.5,15 L10.5,18 L16.5,12'></path>
                            </svg>
                          </span>
                          <span className='w-8/12'>
                            <p className='text-2xl'>{a.title}</p>
                            <p className='text-sm uppercase font-semibold'>
                              {"ID " + " #" + a.service_id + " - " + formatDate(a.date as string) } 
                            </p>
                          </span>
                          <span className='flex flex-row-reverse w-1/12'>
                            <BtnRS href={`/atendimento/despacho/${a.service_id}`}>
                              <FiEdit style={{ fontSize: '24px', marginTop: '8px' }}  />
                            </BtnRS>
                          </span>
                          <span className='flex flex-row-reverse w-1/12'>
                            <button className='flex rounded-full justify-center bg-gray-100 drop-shadow-md w-10 h-10 text-gray'>
                              <AiOutlineCloseCircle style={{ fontSize: '24px', marginTop: '8px' }} onClick={() => {}} />
                            </button>
                          </span>
                        </li>
                      );
                    })
                  ) : (
                    <p>Nenhum serviço encontrado.</p>
                  ) : null
              }
>>>>>>> 7b073e5 (fixing)
            </ul>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}