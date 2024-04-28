import { checkMark } from "../assets/images"

const Pricing = () => {
  return (
    <section id="Pricing" className="text-white max-w-[1100px] mx-auto mt-32 h-screen">
      <div className="w-80 h-9 items-center justify-between rounded-2xl flex mx-auto border relative">
        <p className="w-1/2 bg-blue-600 text-center rounded-2xl p-1">Monthly</p>
        <p className="w-1/2 text-center">Yearly</p>
        <p className="w-16 absolute top-[-12px] right-[-10px] transform skew-y-12 rounded bg-[#F10000] text-center text-sm">25% off</p>
      </div>
      <h3 className="text-center font-bold text-5xl mt-7">Pick the Right Plan for You</h3>
      <div className="flex items-center justify-center gap-10 mt-12 max-w-[900px] mx-auto">
      <div className="w-1/3 border flex flex-col items-center p-1 rounded-2xl space-y-4 pb-12 hover:scale-105 cursor-pointer duration-100">
        <p className="text-blue-500">Self-hosted</p>
        <h2 className="text-3xl text-center">Free</h2>
        <button type="button" className="px-5 py-[5px] border-2 border-gray-700 rounded-3xl  hover:bg-gray-900 duration-100  text-white self-center">Get Started Now</button>
        <div className="space-y-2">
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Hosted by yourself</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Links</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Collections</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Tags</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />All Premium features</p>
        </div>
      </div>
      <div className="w-1/3 border flex flex-col items-center hover:scale-105 cursor-pointer duration-100 p-1 rounded-2xl space-y-4  border-gray-50 shadow backdrop-blur-xl">
      <p className="text-blue-700">Cloud</p>
        <h2 className="text-3xl"><span className="text-4xl font-bold">$3</span>/mon</h2>
        <h2 className="">Per user</h2>
        <button type="button" className="px-5 py-[5px] border-2 border-gray-700 rounded-3xl  hover:bg-gray-900 duration-100  text-white self-center">Get Started Now</button>
        <div className="space-y-2">
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Hosted by us</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Links</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Collections</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Tags</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />All the Premium features</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Priority support</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Fully custom instance</p>
        </div>
        14-day free trial, cancel anytime
      </div>
      <div className="w-1/3 border flex flex-col items-center p-2 rounded-2xl space-y-4 hover:scale-105 cursor-pointer duration-100">
      <p className="text-blue-700">Enterprise</p>
        <h2 className="text-3xl">Custom</h2>
        <button type="button" className="px-5 py-[5px] border-2 border-gray-700 rounded-3xl  text-white hover:bg-gray-900 duration-100">Get Started Now</button>
        <div className="space-y-2">
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Hosted by us</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Links</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Collections</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Unlimited Tags</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />All the Premium features</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Priority support</p>
        <p><img src={checkMark} alt="" className="inline-block w-6 h-6" />Fully custom instance</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Pricing