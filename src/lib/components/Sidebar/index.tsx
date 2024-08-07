import { SidebarHeader, SidebarNav, SidebarNavItem, SidebarWrapper } from '@/lib/components/Sidebar/styled';
import { useState } from 'react';
import { Dimmed } from '@/lib/components/Dimmed';
import { SidebarProps } from '@/lib/components/Sidebar/type';

export const Sidebar = ({ links, onXBtnClick, headerHeight = 0, isOpen, right = false }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  links.forEach(link => {
    if ('href' in link.props || 'to' in link.props) {
      return;
    }
    throw Error('a태그가 아닌 다른 태그를 사용하셨습니다.');
  });
  return (
    <Dimmed isOpen={isOpen} onClose={onXBtnClick}>
      <SidebarWrapper isOpen={isOpen} headerHeight={headerHeight} right={right}>
        <SidebarHeader>
          <button onClick={onXBtnClick}>
            <img src={'/x_icon.svg'} alt="X" />
          </button>
        </SidebarHeader>
        <SidebarNav>
          <ul>
            {links.map((link, i) => (
              <SidebarNavItem key={i} isSelected={selectedItem === i} onClick={() => setSelectedItem(i)}>
                {link}
              </SidebarNavItem>
            ))}
          </ul>
        </SidebarNav>
      </SidebarWrapper>
    </Dimmed>
  );
};
