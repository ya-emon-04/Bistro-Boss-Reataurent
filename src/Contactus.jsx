import React from 'react';

const Contactus = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <header>
                <div className=" flex justify-center items-center  w-[1920px] mx-auto">
                   <div><img src="/public/images/contatcus.png"></img></div>
                   <div className="absolute">
        <div className="w-[1320px] h-[450px] flex  flex-col justify-center items-center text-white w-[1000px] bg-black bg-opacity-40">
       
                <h1 className='text-[88px] font-[700]'> CONTACT US </h1>
                <h1 className='text-[24px] font-[600]'> Cantact to us if you want </h1>
                
            
        </div>
        </div>

                    
                </div>
            </header>
            <main className='flex flex-col items-center mt-[50px]'>

            <div className='w-[450px] space-y-[20px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>---Visit Us---</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>OUR LOCATION</h1>
              <hr></hr>
              </div>

              <div className='grid grid-cols-3 mt-[50px] gap-[20px]'>
                <div className='w-[430px] flex  flex-col items-center  '>
                    <div className='w-[430px] h-[80px] bg-[#D1A054] flex items-center justify-center '>
                        <div><img src="/public/images/phone.png" className='w-[50px]'></img></div>

                    </div >
                    <div className='w-[350px] h-[200px] bg-[#F3F3F3]  flex flex-col items-center justify-center space-y-[20px] '>
                        <h1 className='text-[24px] font-[500]'>PHONE</h1>
                        <h1>+38 (012) 34 56 789</h1>

                    </div>

                </div>
                <div className='w-[430px] flex  flex-col items-center  '>
                    <div className='w-[430px] h-[80px] bg-[#D1A054] flex items-center justify-center  '>
                        <div><img src="/public/images/location.png" className='w-[50px]'></img></div>

                    </div >
                    <div className='w-[350px] h-[200px] bg-[#F3F3F3]  flex flex-col items-center justify-center space-y-[20px] '>
                        <h1 className='text-[24px] font-[500]'>ADDRESS</h1>
                        <h1>+38 (012) 34 56 789</h1>

                    </div>

                </div>
                <div className='w-[430px] flex  flex-col items-center  '>
                    <div className='w-[430px] h-[80px] bg-[#D1A054] flex items-center justify-center '>
                        <div><img src="/public/images/phone.png" className='w-[50px]'></img></div>

                    </div >
                    <div className='w-[350px] h-[200px] bg-[#F3F3F3]  flex flex-col items-center justify-center space-y-[20px] '>
                        <h1 className='text-[24px] font-[500]'>WORKING HOURS</h1>
                        <h1>Mon - Fri: 08:00 - 22:00<br></br>
                        Sat - Sun: 10:00 - 23:00</h1>

                    </div>

                </div>


              </div>
              <div className='w-[450px] space-y-[20px] mt-[50px]'>
            <h1 className='text-[#D99904] text-[20px] font-[400] text-center'>---Send Us a Message---</h1>
             <hr></hr>
             <h1 className='text-[40px] font-[400] text-center'>CONTACT FORM</h1>
              <hr></hr>
              </div>

                {/*  */}
              <section className="bg-[#F3F3F3] my-11  m-auto p-12 w-[100%]">
                    <div className="flex justify-center w-full">
                        <div className="flex w-full space-x-5">
                            <div className="w-1/2">
                                <h1>Name*</h1>
                                <input type="text" className="w-full h-[40px] border-2 border-[#fff] rounded-md bg-white" placeholder="Enter your name" />
                            </div>
                            <div className="w-1/2">
                                <h1>Email*</h1>
                                <input type="email" className="w-full h-[40px] border-2 border-[#fff] rounded-md bg-white" placeholder="Enter your email" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h1>Phone*</h1>
                        <input type="text" className="w-full h-[40px] border-2 border-[#fff] rounded-md bg-white" placeholder="Enter your phone number" />
                    </div>

                    <div className="mt-5">
                        <h1>Message*</h1>
                        <textarea className="w-full h-[300px] border-2 border-[#fff] rounded-md bg-white" placeholder="Enter your message here"></textarea>
                    </div>

                    <div className="mt-9 flex items-center space-x-5">
                        <button id="verifyBtn" className="text-gray-500 p-4 rounded-lg hover:bg-blue-600">
                            I'm not a robot
                        </button>
                        <div id="verifiedText" className="text-green-500 hidden">
                            <span className="text-xl">✔ Verified!</span>
                        </div>
                        <img className="h-[78px]" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RecaptchaLogo.svg/1200px-RecaptchaLogo.svg.png" alt="reCAPTCHA logo" />
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button className="flex items-center px-5 py-4 bg-gradient-to-r from-[#835D23] to-[#B58130] rounded-lg" type="button">
                            <h1 className="text-white">Send Message</h1>
                            <img src="/public/images/paper-plane 1.svg" alt="Send" className="ml-3" />
                        </button>
                    </div>
                </section>

             {/*  */}

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

export default Contactus;