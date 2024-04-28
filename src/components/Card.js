import { laptop, desktop,searchResults,pin,privacy,Import,moon,cookie,bulkCheck,key,install,rocket } from "../assets/images"

const Card = () => {
  const Info =[
    {
      Image: laptop,
      title: 'Open Source, Self-hostable',
      description: 'Our source code is on Github for easy deployment on your machine'
    },
    {
      Image: desktop,
      title:"Responsive Design",
      description:"Responsive designs for all screen, from wide screens to smartphones"
    },
    {
      Image: searchResults,
      title:"Powerful Search",
      description:"Effortlessly search and filter curated content across all collections"
    },
    {
      Image: pin,
      title:"Pin your favorite pages",
      description:"Pin your favourite web pages to the dashboard for easy access anytime"
    },
    {
      Image: privacy,
      title:"Privacy Friendly",
      description:"Privacy is a fundamental human right. We wont sell your data to third parties."
    },
    {
      Image: Import,
      title:"Import & Export your data",
      description:"You can import and export your data from the settings"
    },
    {
      Image: moon,
      title:"Dark & Light mode Supported",
      description:"Easy toggle between dark and light mode whenever you prefer"
    },
    {
      Image: cookie,
      title:"Browser Extension",
      description:"Collect webpages diectly from your browser with our open-source extensions"
    },
    {
      Image: bulkCheck,
      title:"Bulk Actions",
      description:"Edit or delete multiple items at once"
    },
    {
      Image: key,
      title:"Secure API Integration",
      description:"connect and secure your integrations using access tokens to create custom solutions to automate with ease"
    },
    {
      Image: install,
      title:"Installable PWA for Mobile",
      description:"Enable seamless app-like experience across devices with PWA support, ensuring optimal performance and accessibility for all users"
    },
    {
      Image: rocket,
      title:"And Many More Features",
      description:`We're constantly improving and got tons of updates, some are outlined in our public roadmap`
    }
  ];
  return (
    <article className="grid grid-cols-3 gap-4">
    {Info.map((info)=>{
      return(
        <div className="flex flex-col  justify-center items-center hover:scale-105 cursor-pointer duration-100  text-center p-5 bg-[#161616] rounded-3xl shadow-md">
        <div className="text-center rounded-md w-[100px] h-[100px] bg-gradient-to-r from-[#673AB7] to-[#3A00A1] p-1 items-center mb-3">
        <img src={info.Image} className="object-center w-[60%] inline-block mt-5" alt="" />
        </div>
          <h3 className="font-bold text-lg mb-1 text-white">{info.title}</h3>
          <p className="text-[14px] text-gray-500">{info.description}</p>
        </div>
      )
    })}
    </article>
  )
}

export default Card