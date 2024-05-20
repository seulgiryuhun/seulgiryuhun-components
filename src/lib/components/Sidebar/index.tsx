import { SidebarHeader, SidebarNav, SidebarNavItem, SidebarWrapper } from '@/lib/components/Sidebar/styled';
import { SidebarProps } from '@/lib/components/Sidebar/types';
import { useState } from 'react';
import X from '@/assets/svg/X.svg';

export const Sidebar = ({ links }: SidebarProps) => {
  const [selectedItem, setSelectedItem] = useState<number>(0);
  links.forEach(link => {
    if ('href' in link.props || 'to' in link.props) {
      return;
    }
    throw Error('a태그가 아닌 다른 태그를 사용하셨습니다.');
  });
  return (
    <SidebarWrapper>
      <SidebarHeader>
        {/*  IconBtn으로 대체 */}
        <img src={X} alt="X" />
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
  );
};