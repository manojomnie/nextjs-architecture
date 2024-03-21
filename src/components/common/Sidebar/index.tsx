import { SidebarContainer } from './Sidebar.styles';
import { MENU_ITEMS } from '@constants/menu-items';
import MenuItemsList from '@components/common/MenuItemsList';

type SidebarProps = {
  isOpened: boolean;
};
export default function Sidebar({ isOpened }: SidebarProps) {
  return (
    <SidebarContainer isOpened={isOpened}>
      <MenuItemsList options={MENU_ITEMS} />
    </SidebarContainer>
  );
}
