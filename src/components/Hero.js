import {star, homeImage} from '../assets/images'

const Hero = () => {
  return (
    <section id='hero' className="max-w-[1100px] mx-auto text-center mt-5">
    <div>
      <h1 className="text-white font-bold text-7xl space-y-1">Webpage Management for Individuals and Teams</h1>
      <p className="text-white mt-3">Linkwarden is a fully self-hostable, open-source collaborative bookmark manager to<br /> collect, organize and archive webpages.</p>
    </div>

    <div className="flex gap-5 items-center justify-center mt-6">
      <button type="button" className="px-8 py-2 bg-gradient-to-r hover:bg-purple-700 duration-100 from-[#673AB7] to-[#4B03CD] rounded-3xl  text-white">Start Free Trial</button>
      <button type="button" className="px-5 py-[5px] border-2 hover:bg-gray-800 border-gray-700 rounded-3xl  text-white"><span><img src={star} alt="" className="inline-block w-3 h-3 text-center p-0 mt-[-1px] object-contain"></img></span> Star us on Github</button>
    </div>
    <div className="mt-12 w-3/4 mx-auto">
      <img src={homeImage} alt="" />
    </div>
    </section>
  )
}

export default Hero