import React from 'react';
import { Outlet ,Link } from "react-router-dom";


const App = () => {
  return (
    <div  className='max-w-[1920px] mx-auto'>
      <header >
      <div className='mt-[25px] h-[130px]  w-[1920px]  flex items-center justify-between bg-black bg-opacity-35 absolute top-[-25px]  '>
          <div className='ml-[15px] text-white'>
          <h1><span className='text-[32px] font-[900]'>BISTRO BOSS</span><br></br><span className='text-[24px] font-[700]'>Restaurant</span> </h1>
          </div >
              <div className='w-[1000px] text-[20px] font-[800] flex justify-between items-center mr-[15px] text-white'>
                
                
                  <Link to="/" className="hover:text-[#efec36] font-bold  "> Home</Link>
                  
                  
                   <Link to="/ourMenu" className="hover:text-[#efec36] font-bold  ">OUR MENU</Link>
                  <div className='flex items-center gap-[15px]'> <Link to="/ourShop" className="hover:text-[#efec36] font-bold  ">OUR SHOP </Link>
                  <div><img src="/public/images/shop.png " className='w-[60px]'></img></div></div>
                  <Link to="/contactUs" className="hover:text-[#efec36] font-bold  ">CONTACT us</Link>
                  <div className='flex items-center gap-[15px]'>
                    
                  <Link to="/" className="hover:text-[#efec36] font-bold  ">SIGN OUT</Link>
                  <div><img src="/public/images/Signout.png " className='w-[60px]'></img></div>
                  
                  </div>
                  
                   
                   
              </div>
      </div>
      
    </header>

    
    <div >
          <Outlet> </Outlet>
    </div>

    

   
    </div>
    
  );
};

export default App;