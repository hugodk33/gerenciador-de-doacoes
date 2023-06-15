import {MainCtnHorizontal} from '@/components/template/mainctn'
import SideMenu from '@/components/sections/sidemenu'
import Content from '@/components/sections/content';

export default function DashboardLayout() {
  return (
    <section>   
      <MainCtnHorizontal>
        <SideMenu />
        <Content>
          <h1>dashboard</h1>
        </Content>
      </MainCtnHorizontal>
    </section>
  );
}