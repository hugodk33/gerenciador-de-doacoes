"use client";
import { useState , useEffect } from 'react';
import {MainCtnHorizontal} from '@/components/template/mainctn'
import SideMenu from '@/components/sections//sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import { Btn } from '@/components/template/btn'
import { CheckBox } from '@/components/template/checkbox';
import { AiOutlineUsergroupAdd , AiFillSave } from 'react-icons/ai'
import { BsHouse, BsPeople, BsPersonVcard , BsTelephoneOutbound } from 'react-icons/bs'
import { arrayDumb } from '@/components/dumb/beneficiarysListDumb';
import axios from 'axios';

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
          username:'victorus',
          password:'hugohugo'
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
      const response =  axios.get('http://localhost:3333', {           
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
        <div className='flex w-full pt-5 md:pl-20 md:pr-20'>
            <SideMenu />
            <Content>
              <h1 className='text-3xl pb-2 pt-2'>Atendimento</h1>
              <Btn onclick={() => getteste()}>teste</Btn>
              <h3 className='text-xl pb-2 pt-2'><BsPersonVcard id="beneficiado-nome" className="inline-block" /> beneficiado</h3>
              <hr className='mb-4' />
              <BeneficiarysList benefeciarys={[]} />
              <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block" /> tipo de atendimento</h3>
              <hr className='mb-4' />
              <fieldset className='flex flex-row text-xl gap-4 pb-2 pt-2'>
                <CheckBox label='comum'/>
                <CheckBox label='saúde' />
                <CheckBox  label='psicológico'/>
              </fieldset>
            </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}