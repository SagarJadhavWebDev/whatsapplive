import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <section class="text-gray-400 bg-gray-900 body-font" style={{height:"100vh", overflowY:"hidden"}}>
  <div class="container  ">
    <div  class="flex lg:w-2/3 w-full sm:flex-row items-center flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
     <div className="mt-10">
       <h1>Whatsapp 2.0</h1>
     </div>
      <div  style={{marginTop:"30vh"}} class="relative sm:mb-0 flex-grow w-full">
        <input type="number" autoFocus="true" id="email" placeholder={"phone number"} name="email" class="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white text-l justify-center  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded ">Next</button>
    </div>
  </div>
</section>
     
    </>


  )
}
