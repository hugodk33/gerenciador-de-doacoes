import Link from 'next/link';
import { MdPersonSearch , MdContentPasteSearch , MdPersonAddAlt, MdPersonAdd , MdHouse , MdDiversity3 } from 'react-icons/md'

export default function SideMenu( ) {
    return (
      <section id='side-menu' className='p-1 sm:w-full md:w-3/12'>
        <ul className='flex flex-col bg-white rounded p-4 gap-2'>
            <li className='text-md uppercase'>
                <Link href="/inicio"><MdHouse className="inline-block" /> Home</Link>
            </li>
            <span className='text-md font-bold uppercase mt-4'>beneficiados</span>
            <hr />
            <li className='text-md uppercase'>
                <Link href="/atendimento"><MdDiversity3 className="inline-block" /> Atendimento</Link>
            </li>
            <li className='text-md uppercase'>
                <Link href="/pesquisa-de-atendimentos"><MdHouse className="inline-block" /> Ver atendimentos</Link>
            </li>
            <span className='text-md font-bold uppercase mt-4'>beneficiados</span>
            <hr />
            <li className='text-md uppercase'>
                <Link href="/registro-de-beneficiado"><MdPersonAdd className="inline-block" /> Cadastro de beneficiado</Link>
            </li>
            <li className='text-md uppercase'>
                <Link href="/pesquisa-de-beneficiados"><MdPersonSearch className="inline-block" /> Consulta de famílias e beneficiados</Link>
            </li>
            <span className='text-md font-bold uppercase mt-4'>endereço</span>
            <hr />
            <li className='text-md uppercase'>
                <Link href="/registro-de-beneficiado"><MdPersonAdd className="inline-block" /> Cadastro de endereço</Link>
            </li>
            <li className='text-md uppercase'>
                <Link href="/pesquisa-de-beneficiados"><MdPersonSearch className="inline-block" /> Consulta de endereços</Link>
            </li>
            <span className='text-md font-bold uppercase mt-4'>estoque</span>
            <hr />
            <li className='text-md uppercase'>
                <Link href="/registro-de-almoxarifado"><MdPersonAddAlt className="inline-block" /> Cadastro de produtos</Link>
            </li>
            <li className='text-md uppercase'>
                <Link href="/pesquisa-de-almoxarifado"><MdContentPasteSearch className="inline-block"/> Consulta de produtos</Link>
            </li>
        </ul>
      </section>
    )
}