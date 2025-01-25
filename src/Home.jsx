import React from 'react';



const Home = () => {
    return (
        <div>
            <header>
                <div className=" flex justify-center items-center  w-[1920px] mx-auto">
                   <div><img src="/public/images/homebgc.png"></img></div>
                   <div className="absolute">
        <div className="w-[1320px] h-[450px] flex  flex-col justify-center items-center text-white w-[1000px] bg-black bg-opacity-40">
       
                <h1 className='text-[88px] font-[700]'> Welcome  </h1>
                <h1 className='text-[24px] font-[600] text-center'> Would you like to try a dish?<br></br> just give it a visit !</h1>
                
            
        </div>
        </div>

                    
                </div>
            </header>
            

            
            <main className='flex flex-col items-center mt-[50px]'>
    <div className='w-[450px] space-y-[20px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>---From 11:00am to  10:00pm---</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>ORDER ONLINE</h1>
              <hr></hr>

   </div>
        

          <div className='mt-[50px] flex gap-[15px]'>
            <div>
              <img src="/public/images/salad .png" className='rounded-[15px]'></img>
              <h1 className='text-center mt-[15px]'>SALAD'S</h1>
              
            </div>
            <div>
              <img src="/public/images/Pizzas.png" className='rounded-[15px]'></img>
              <h1 className='text-center mt-[15px]'>PIZZA'S</h1>
              
            </div>
            <div>
              <img src="/public/images/Soups.png" className='rounded-[15px]'></img>
              <h1 className='text-center mt-[15px]'>SOUP'S</h1>
              
            </div>
            <div>
              <img src="/public/images/Deserts.png" className='rounded-[15px]'></img>
              <h1 className='text-center mt-[15px]'>DESERT'S</h1>
              
            </div>
            

         </div>
         {/* Menu Section */}
         <div className='w-[450px] space-y-[20px] mt-[40px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>------Check it out------</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>FROM OUR MENU</h1>
              <hr></hr>

          </div>

         <section className='mt-[40px] '>
         
          {/* Menu cards */}
          <div className='grid grid-cols-2 mt-[30px] gap-[15px]' >
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>ROAST DUCK BREAST ------------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>TUNA NIÇOISE ------------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>ESCALOPE DE VEAU ------------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>CHICKEN AND WALNUT SALAD ---------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>FISH PARMENTIER ------------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>
            <div className='flex gap-[12px]'>
              <div><img src="/public/images/bokkor.png" className='w-[110px]'></img></div>
              <div>
                <h1 className='text-[20px] font-[600]'>ROASTED PORK BELLY ------------------</h1>
                <h1>Roasted duck breast (served pink) with gratin potato and<br></br> a griottine cherry sauce</h1>
              </div>
              <div><h1 className='text-[#BB8506]'>$14.5</h1></div>

            </div>


          </div>
          


         </section>
         <div className='mt-[40px] '>
          <h1>VIEW FULL MENU</h1>
          <hr ></hr>
         </div>

         <div className='mt-[50px] w-[1320px] h-[250px]  bg-black flex items-center justify-center rounded-[35px_0px_35px_0px]'>
          <h1 className='text-[#FFF] text-[50px] font-[600]   '> Call Us: +88 0192345678910</h1>



         </div >
         <div className='w-[450px] space-y-[20px] mt-[40px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>---From 11:00am to  10:00pm---</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>ORDER ONLINE</h1>
              <hr></hr>
              </div>


              <div className='flex gap-[30px]  mt-[30px]'>
                <div><img src="/public/images/cot.png" className='rounded-[20px]'></img></div>
                <div className='flex justify-center items-center' >
                    <h1>March 20, 2023<br></br>
WHERE CAN I GET SOME?<br></br>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Error<br></br> voluptate facere, deserunt dolores maiores quod nobis quas. <br></br> Eaque repellat recusandae ad laudantium tempore<br></br> consequatur consequuntur omnis ullam maxime tenetur.</h1>
                </div>


                
              </div>
         </main>

         <footer className='mt-[40px] '>
            <div className='grid grid-cols-2 '>
                <div className='bg-[#1F2937] h-[300px]  flex items-center justify-center rounded-[40px_0px_0px_0px]'>
                    <div className='flex flex-col '>
                        <h1 className='text-white text-center text-[32px] font-[500]'>CONTACT US</h1>
                        <h1 className='text-white text-center text-[20px] font-[500]'>123 ABS Street, Uni 21, Bangladesh<br></br>
+88 123456789<br></br>
Mon - Fri: 08:00 - 22:00 <br></br>
Sat - Sun: 10:00 - 23:00</h1>
                    </div>

                </div>


                <div className='bg-[#111827] h-[300px]  flex items-center justify-center '>
                    <div>
                        <h1 className='text-white text-center text-[32px] font-[500] '>Follow US</h1>
                        <h1 className='text-white text-center mt-[30px] text-[20px] font-[500]'>Join us on social media</h1>
                        <div className='flex gap-[15px] mt-[30px] '>
                            <div><img src="/public/images/fb.png" className='w-[80px] h-[80px]  '></img></div>
                            <div><img src="/public/images/insta.png" className='w-[80px] h-[80px]  '></img></div>
                            <div><img src="/public/images/twitter.png" className='w-[80px] h-[80px]  '></img></div>
                        </div>
                        
                    </div>

                </div>



            </div>
            <div className='h-[70px] bg-[#151515] flex items-center justify-center rounded-[0px_0px_40px_0px] '>
                <h1 className='text-[20px] font-[500] text-white'> Copyright © CulinaryCloud. All rights reserved.</h1>

            </div>



         </footer>

            
        </div>
    );
};

export default Home;