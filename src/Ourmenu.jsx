import React from 'react';

const Ourmenu = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            
            <header>
                <div className=" flex justify-center items-center  w-[1920px] mx-auto">
                   <div><img src="/public/images/Ourmenu.png"></img></div>
                   <div className="absolute">
        <div className="w-[1320px] h-[450px] flex  flex-col justify-center items-center text-white w-[1000px] bg-black bg-opacity-40">
       
                <h1 className='text-[88px] font-[700]'> OUR MENU </h1>
                <h1 className='text-[24px] font-[600]'> Would you like to try a dish? </h1>
                
            
        </div>
        </div>

                    
                </div>
            </header>

            <main className='flex flex-col items-center mt-[50px]'>
            <div className='w-[450px] space-y-[20px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>---Don't miss---</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>TODAY'S OFFER</h1>
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

         <section>
         <div className=" flex  justify-center items-center mb-20 mt-20">
        <div className="bg-white w-72 text-center rounded-l shadow shadow-black bg-yellow-500" >
            <h2 className="text-lg font-semibold text-gray-900 font-[900] ">ORDER YOUR FAVOURITE FOOD</h2>
         </div>
    </div>


    <div className="px-10 flex justify-center items-center mt- w-[1920px] mx-auto">
        <div> <img src="/public/images/ourshop.png" alt=""></img></div>
    <div className="absolute">
    <div className="h-60 flex justify-center items-center text-white w-[1450px] bg-black bg-opacity-40">

            <h1 className="text-center"> <span className="text-3xl "> DESSERTS</span> <br></br>
            
                Lorem Ipsum has been the  standard dummy text ever since the 1500s,<br></br> 
                when an unknown printer took a galley of type and scrambled it to <br></br>make a type specimen book.
            </h1>
        
    </div>
    </div>
    </div>
    <div className='mt-[100px] ml-[280px]' >
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
    </div>

         </section>


         <section>
         <div className=" flex  justify-center items-center mb-20 mt-20">
        <div className="bg-white w-72 text-center rounded-l shadow shadow-black bg-yellow-500" >
            <h2 className="text-lg font-semibold text-gray-900 font-[900] ">ORDER YOUR FAVOURITE FOOD</h2>
         </div>
    </div>


    <div className="px-10 flex justify-center items-center mt- w-[1920px] mx-auto">
        <div> <img src="/public/images/ourshop.png" alt=""></img></div>
    <div className="absolute">
    <div className="h-60 flex justify-center items-center text-white w-[1450px] bg-black bg-opacity-40">

            <h1 className="text-center"> <span className="text-3xl "> PIZZA's</span> <br></br>
            
                Lorem Ipsum has been the  standard dummy text ever since the 1500s,<br></br> 
                when an unknown printer took a galley of type and scrambled it to <br></br>make a type specimen book.
            </h1>
        
    </div>
    </div>
    </div>
    <div className='mt-[100px] ml-[280px]' >
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
    </div>

         </section>
         <section>
         <div className=" flex  justify-center items-center mb-20 mt-20">
        <div className="bg-white w-72 text-center rounded-l shadow shadow-black bg-yellow-500" >
            <h2 className="text-lg font-semibold text-gray-900 font-[900] ">ORDER YOUR FAVOURITE FOOD</h2>
         </div>
    </div>


    <div className="px-10 flex justify-center items-center mt- w-[1920px] mx-auto">
        <div> <img src="/public/images/ourshop.png" alt=""></img></div>
    <div className="absolute">
    <div className="h-60 flex justify-center items-center text-white w-[1450px] bg-black bg-opacity-40">

            <h1 className="text-center"> <span className="text-3xl "> SALAD'S</span> <br></br>
            
                Lorem Ipsum has been the  standard dummy text ever since the 1500s,<br></br> 
                when an unknown printer took a galley of type and scrambled it to <br></br>make a type specimen book.
            </h1>
        
    </div>
    </div>
    </div>
    <div className='mt-[100px] ml-[280px]' >
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
    </div>

         </section>
         <section>
         <div className=" flex  justify-center items-center mb-20 mt-20">
        <div className="bg-white w-72 text-center rounded-l shadow shadow-black bg-yellow-500" >
            <h2 className="text-lg font-semibold text-gray-900 font-[900] ">ORDER YOUR FAVOURITE FOOD</h2>
         </div>
    </div>


    <div className="px-10 flex justify-center items-center mt- w-[1920px] mx-auto">
        <div> <img src="/public/images/ourshop.png" alt=""></img></div>
    <div className="absolute">
    <div className="h-60 flex justify-center items-center text-white w-[1450px] bg-black bg-opacity-40">

            <h1 className="text-center"> <span className="text-3xl "> SOUPS</span> <br></br>
            
                Lorem Ipsum has been the  standard dummy text ever since the 1500s,<br></br> 
                when an unknown printer took a galley of type and scrambled it to <br></br>make a type specimen book.
            </h1>
        
    </div>
    </div>
    </div>
    <div className='mt-[100px] ml-[280px]' >
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
    </div>

         </section>


            </main>
            <footer className='mt-[100px]'>
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

export default Ourmenu;