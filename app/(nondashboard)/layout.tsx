import Navbar from '@/components/ui/Navbar';
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React, { Children } from 'react'

const layout = ({children}: { children:React.ReactNode }) => {
  return (
    <div>
       <Navbar />
        <main className = {`h-full flex w-full flex-col pt-[${NAVBAR_HEIGHT}PX]`}>
        {children}
        </main>
     </div>
  );
};

export default layout;