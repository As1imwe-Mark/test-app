import {star,logo,github,x,me,discord} from '../assets/images'

const Footer = () => {
const links=[
  {
    id:1,
    linkName:"Features"
  },
  {
    id:2,
    linkName:"Pricing"
  },
  {
    id:3,
    linkName:"FAQs"
  },
  {
    id:4,
    linkName:"Docs"
  },
  {
    id:5,
    linkName:"Blog"
  },
  {
    id:6,
    linkName:"Terms of Services"
  },
  {
    id:7,
    linkName:"Privacy Policy"
  },
];

const Socials = [
  {
    id:1,
    src:discord,
    name:'discord'
  },
  {
    id:2,
    src:me,
    name:'medium'
  },
  {
    id:3,
    src:x,
    name:'x'
  },
  {
    id:4,
    src:github,
    name:'github'
  },
]
  return (
    <footer className="max-w-[1100px] mx-auto text-white mt-48 pb-20">
    <div className="space-y-7">
      <h3 className="text-center font-bold text-5xl mt-36">Start your bookmarking journey</h3>
      <p className="text-center font-bold">14-day free trial, cancel anytime</p>
      <div className="flex gap-5 items-center justify-center mt-6">
      <button type="button" className="px-8 py-2 bg-gradient-to-r from-[#673AB7] to-[#4B03CD] rounded-3xl  text-white">Start Free Trial</button>
      <button type="button" className="px-5 py-[5px] border-2 border-gray-700 rounded-3xl  text-white"><span><img src={star} alt="" className="inline-block w-3 h-3 text-center p-0 mt-[-1px] object-contain"></img></span> Star us on Github</button>
    </div>
    </div>
    <div className="flex flex-1 justify-between mt-10 p-5">
    <div>
      <img src={logo} alt="logo" className="" />
      <p className="text-sm">Linkwarden is a fully self-hostable <br /> and open-source, collaborative <br /> bookmark manager</p>
    </div>
    <div className="space-y-4">
      <h4 className="font-semibold text-lg">Useful links</h4>
      {
        links.map((link)=>(
          <ul key={link.id}>
            <li><a href={`#${link.linkName}`} className="text-sm">{link.linkName}</a></li>
          </ul>
        ))
      }
    </div>
    <div>
      <h4 className="font-semibold text-lg">Contact us</h4>
      <p><a href="support@Linkwarden.app" className="text-sm"><u>support@Linkwarden.app</u></a></p>
      <div className="flex justify-between items-center mt-5 space-x-4">
      {
        Socials.map((social)=>(
          <div key={social.id}>
            <a href={`#${social.name}`}><img src={social.src} alt={social.name} className="inline-block" /></a>
          </div>
        ))
      }
      </div>
    </div>
    </div>
    </footer>
  )
}

export default Footer