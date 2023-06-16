import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';

export default function ListaDeAtendimentos() {
  return (
    <section>
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-20 md:pr-20'>
          <SideMenu />
          <Content>
            <h1 className='text-3xl pb-2 pt-2'>Atendimentos</h1>
            <hr />
            <ul className="flex flex-col p-4 gap-3 rounded bg-gray-200 overflow-y-scroll mb-5">
              
              <li key={'key-bottom-'} className="flex flex-row text-4xl">
                <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >

                </button>
                <div className="">
                  <p className='text-2xl'>{'a.nome'}</p>
                  <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                </div>
              </li>

              <li key={'key-bottom-'} className="flex flex-row text-4xl">
                <button className="flex rounded-full justify-center bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 drop-shadow-md w-10 h-10 text-gray mr-5" >

                </button>
                <div className="">
                  <p className='text-2xl'>{'a.nome'}</p>
                  <p className='text-sm uppercase font-semibold'>lorem ipsum</p>
                </div>
              </li>
              
            </ul>
          </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}