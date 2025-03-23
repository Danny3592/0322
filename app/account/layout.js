import React from 'react';

import SideNavigation from '../_components/SideNavigation';

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-full">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );d
};
q;
export default layout;
