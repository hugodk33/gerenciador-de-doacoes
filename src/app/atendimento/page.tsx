"use client";
import { useState, useEffect } from 'react';
import { MainCtnHorizontal } from '@/app/components/template/mainctn'
import SideMenu from '@/components/sections//sidemenu'
import Content from '@/app/components/sections/content';
import Header from '@/app/components/sections/header';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import { Btn , BtnS} from '@/app/components/template/btn'
import { CheckBox } from '@/app/components/template/checkbox';
import { AiOutlineForm } from 'react-icons/ai'
import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs'
import { arrayDumb } from '@/app/components/dumb/beneficiarysListDumb';
import axios from 'axios';
import { InputTextForms , InputSelect , InputTextArea } from '@/app/components/template/input'

export default function Service() {


  const tttest = () => axios('http://localhost:3333', {
    method: 'GET',
    params: {

    },
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true
  }).then(response => {
    console.log(response)
  })

  const getteste = () => {
    try {
      const response = axios('http://localhost:3333/sessions', {
        method: 'POST',
        params: {
          username: 'victorus',
          password: 'hugohugo'
        },
        headers: {
          'Content-Type': 'application/json'
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

  const gertteste = async () => {
    try {
      const response = axios.get('http://localhost:3333', {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
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
        })

        ;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-4 pt-2'>Atendimento</h1>
            <h3 className='text-xl pb-2 pt-4'><AiOutlineForm id="beneficiado-nome" className="inline-block text-blue-500" /> Informar atendimento</h3>
            <hr className='mb-2 mt-2' />
            <span className="inline-block sm:w-full md:w-full pt-4" >
              <InputTextForms label="Assunto do atendimento" onChange={() => {}} />
            </span>
            <fieldset className='flex flex-row text-xl gap-4 pb-1 pt-4'>
              <CheckBox label='comum' />
              <CheckBox label='saúde' />
              <CheckBox label='psicológico' />
            </fieldset>
            <span className="inline-block sm:w-full md:w-full pt-2" >
              <InputTextArea label={'observações'}  />
            </span>
            <h3 className='text-xl pb-2 pt-2'><BsPersonVcard id="beneficiado-nome" className="inline-block text-blue-500" /> Pesquisar beneficiado</h3>
            <hr className='mb-4' />
            <BeneficiarysList benefeciarys={[]} />

            <span className="inline-block sm:w-full md:w-3/12 pt-4" >
              <Btn onClick={() => {}}>Enviar</Btn>
            </span>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}

//<Btn onclick={() => getteste()}>teste</Btn>