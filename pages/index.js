import Head from 'next/head'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
      <meta name='description' content='Description' />
      <meta name='keywords' content='Keywords' />
      <title>Next.js PWA Example</title>

      <link rel='manifest' href='/manifest.json' />
      <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
      <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content='#317EFB' />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      </Head>
      <section className="text-gray-400 bg-gray-900 body-font" style={{height:"100vh", overflowY:"hidden"}}>
  <div className="container  ">
    <div  className="flex lg:w-2/3 w-full sm:flex-row items-center flex-col mx-auto px-8 sm:px-0 items-end sm:space-x-4 sm:space-y-0 space-y-4">
     <div classNameName="mt-10">
       <h1 >Whatsapp 2.0</h1>
     </div>
      <div  style={{marginTop:"30vh"}} className="relative sm:mb-0 flex-grow w-full">
        <input type="number" autoFocus="true" id="email" placeholder={"phone number"} name="email" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 focus:bg-transparent text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button className="text-white text-l justify-center  bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded ">Next</button>
    </div>
  </div>
</section>
     
    </>


  )
}
