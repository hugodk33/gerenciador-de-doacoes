import { MainCtnHorizontal } from '@/components/template/mainctn'
import SideMenu from '@/components/sections//sidemenu'
import Content from '@/components/sections/content';
import Header from '@/components/sections/header';

export default function atendimento() {
  return (
    <section>   
      <MainCtnHorizontal>
        <Header />
        <div className='flex w-full pt-5 md:pl-60 md:pr-60'>
            <SideMenu />
            <Content>
            <h1>Beneficiado</h1>
            </Content>
        </div>
      </MainCtnHorizontal>
    </section>
  );
}