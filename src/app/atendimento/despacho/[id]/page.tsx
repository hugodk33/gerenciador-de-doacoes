'use client'
import { useEffect, useState } from 'react';
import { BsHouse, BsPeople, BsPersonVcard, BsTelephoneOutbound } from 'react-icons/bs';
import { AiFillSave, AiOutlineCloseCircle } from 'react-icons/ai';
import { MainCtnHorizontal } from '@/components/template/mainctn';
import SideMenu from '@/components/sections/sidemenu';
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';
import { InputCalendarForm, InputSelect, InputTextForms } from '@/components/template/input';
import { Btn, BtnR } from '@/components/template/btn';
import BeneficiarysList from '@/components/sections/beneficiarysList';
import AddressesList from '@/components/sections/addressesList';
import { FiAlertTriangle } from 'react-icons/fi';
import { usePathname } from 'next/navigation'
import axios from 'axios';

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

type DataForm = {
    type: string | null;
    title: string | null;
    observations: string | null;
    client: number | null;
    user: number | number | null | undefined;
    begun: string | null;
    end: string | null;
    date: Date | string | null
};

const initialData = {
    type: 'comum',
    title: '',
    observations: ' ',
    client: null,
    user: null,
    begun: '',
    end: '',
    date: formattedDate
};

const maritial_status_options = [
    { value: 'solteiro(a)', label: 'solteiro(a)' },
    { value: 'casado(a)', label: 'casado(a)' },
    { value: 'divorciado(a)', label: 'divorciado(a)' },
    { value: 'separado(a)', label: 'separado(a)' },
];

export default function ClientEdtForm() {

    const pathname = usePathname();
    console.log(pathname)
    const parts = pathname.split('/');
    console.log(parts)
    const idx = parseInt(parts[3], 10);
    console.log(idx)

    const [dataForm, setDataForm] = useState<DataForm>(initialData);
    const [alertModalSucess, setAlertModalSuccess] = useState(false);
    const [alertModalError, setAlertModalError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');

    const searchService = async () => {
        console.log('searchService')
        try {
            const response = await axios.get(`http://localhost:3333/services/search/${idx}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params: {
                    perPage: 10,
                    page: 1
                }
            });
            console.log(response.data.services.data)
            setLoading(false)
            setDataForm(response.data.services.data[0])
        } catch (error) {
            console.error(error);
        }
    };

    const handleForm = (value: React.ChangeEvent<HTMLInputElement>) => {
        const index = value.target.id;
        let tempValue = value.target.value;
        let tempData = { ...dataForm };
        tempData = { ...tempData, [index]: tempValue };
        setDataForm(tempData);
    };

    const handleFormSelect = (value: string) => {
        const selectedValue = value.trim() !== '' ? value : null;
        let prevDataForm = { ...dataForm, maritial_status: selectedValue };
        setDataForm(prevDataForm);
    };

    const handleFormCalendar = (value: string) => {
        let prevDataForm = { ...dataForm, birthday: value };
        setDataForm(prevDataForm);
    };

    const handleAddressValue = (selectedValue: number) => {
        let prevDataForm = { ...dataForm, address: selectedValue };
        setDataForm(prevDataForm);
    };

    const sendForm = async () => {
        try {
            setAlertModalSuccess(true);
        } catch (error) {
            console.error(error);
            setAlertModalError(true);
        }
    };

    useEffect(() => {
        if (loading) {
            searchService()
        }
    }, [loading])

    useEffect(() => {
        console.log('dataForm')
        console.log(dataForm)
    }, [dataForm])

    return (
        <MainCtnHorizontal>
            <Header />
            <div className='flex pt-5 md:pl-60 md:pr-60 w-full'>
                <SideMenu />
                <Content>
                    <h1 className='text-xl pb-2 pt-2 text-gray-500'>Atendimento:</h1>
                    {
                    !loading?
                        <>
                            <h1 className='text-2xl pb-2 pt-2' style={{ fontWeight: 600 }}>{dataForm.title}</h1>
                            <hr className='mb-2 mt-1 w-full' />
                            {dataForm.date + " | " + dataForm.date + " | " + dataForm.begun + " | " + dataForm.end}
                            <h3 className='text-xl pb-2 pt-2'>
                                <BsPersonVcard className='inline-block text-blue-500' /> Dados Pessoais
                            </h3>
                            <span className='inline-block max-w-full sm:w-full md:w-full pt-4'>
                                <InputTextForms
                                    id={'name'}
                                    label='Nome'
                                    onChange={(e) => handleForm(e)}
                                />
                            </span>
                        </>
                    :null
                    }
                </Content>
            </div>
        </MainCtnHorizontal>
    );
}  