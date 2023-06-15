"use client";
import { useState , useEffect } from 'react';
import {MainCtnHorizontal} from '@/components/template/mainctn'
import SideMenu from '@/components/sections//sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import { Button } from '@/components/template/button'
import { CheckBox } from '@/components/template/checkbox';
import { AiOutlineUsergroupAdd , AiFillSave } from 'react-icons/ai'
import { BsHouse, BsPeople, BsPersonVcard , BsTelephoneOutbound } from 'react-icons/bs'
import { arrayDumb } from '@/components/dumb/beneficiarysListDumb';

export default function Service() {
  useEffect(() => {
    console.log('arrayDumb')
    console.log(arrayDumb)
  }, [])
  return (
    <section>   
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-20 md:pr-20'>
            <SideMenu />
            <Content>
              <h1 className='text-3xl pb-2 pt-2'>Atendimento</h1>
              <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block" /> beneficiado</h3>
              <hr className='mb-4' />
              <BeneficiarysList benefeciarys={[]} />
              {/* <BeneficiarysList children={undefined} benefeciarys={[]} /> */}
              <h3 className='text-xl pb-2 pt-2'><BsPersonVcard className="inline-block" /> tipo de atendimento</h3>
              <hr className='mb-4' />
              <fieldset className='flex flex-row text-xl gap-4 pb-2 pt-2'>
                <CheckBox label='comum'/>
                <CheckBox label='saúde' />
                <CheckBox  label='psicológico'/>
              </fieldset>
              <Button onclick={function () {
                alert('Function not implemented.');
              } } >
                teste
              </Button>
            </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}