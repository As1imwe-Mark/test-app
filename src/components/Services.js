import { google, byteDance, amazon,serviceImage,checkMark } from "../assets/images"
import Card from "./Card"

const Services = () => {
  return (
    <section id="Features" className="max-w-[1100px] mx-auto mt-36">
    <article>
      <h2 className="text-center font-bold text-5xl text-white">Loved by thousands at the world's most innovative companies</h2>
      <div className="flex justify-evenly items-center mt-24">
        <div><img src={google} alt="" /></div>
        <div><img src={amazon} alt="" /></div>
        <div><img src={byteDance} alt="" /></div>
      </div>
    </article>
    <article>
      <div className="text-center mt-28"><button type="button" className="px-5  hover:bg-gray-800 py-1 border-2 border-white rounded-3xl  text-white ">Collect & Organize</button></div>

      <div className="flex justify-center gap-6 items-center text-white mt-10 ">
      <div className="w-1/2">
        <h2 className="font-bold text-5xl mb-6">Collect and organize webpages</h2>
        <p><img src={checkMark} alt="" className="inline-block w-8 h-8" /> Collect webpages and bookmarks from any browser</p>
        <p><img src={checkMark} alt="" className="inline-block w-8 h-8" /> Organize your links with Collections and tags</p>
        <p><img src={checkMark} alt="" className="inline-block w-8 h-8" /> Create new collections to group related links</p>
      </div>
      <div className="w-1/2">
      <img src={serviceImage} alt="" />
      </div>
      </div>
      
      <div>
        <h3 className="font-bold text-4xl mt-[150px] text-center text-white mb-16">Hold on, there's more!</h3>
      </div>
      <Card />
    </article>
    </section>
  )
}

export default Services