import { gradCap,bulb,personIcon,projectCollaboration,bookmark,search,install,collaboration } from "../assets/images"

const Explore = () => {
  const Explorations =[
    {
      pic: personIcon,
      title: 'Personal Use'
    },
    {
      pic: bulb,
      title: 'Design Inspirations'
    },
    {
      pic: gradCap,
      title: 'Research and Reference'
    },
    {
      pic: projectCollaboration,
      title: 'Project Collaboration'
    }
  ];

  const More =[
    {
      Img:bookmark,
      title:'Bookmark Organization',
      Description:'Store and categorize links to articles, blog posts, and online content for easy retrieval'
    },
    {
      Img:collaboration,
      title:'Seamless Collaboration',
      Description:'Share essential links and references among your friends or even publicly'
    },
    {
      Img:install,
      title:'Content Preservation',
      Description:'Keep a permanent snapshot of links regardless of any changes to the original content'
    },
    {
      Img:search,
      title:'Easy Access',
      Description:'Conveniently revisit favorite or important online materials at any time '
    }
  ]
  return (
    <section id="Docs" className="max-w-[1100px] mx-auto text-white mt-32 scroll-smooth">
    <h3 className="text-center font-bold text-5xl">Exploring The use Cases</h3>
  <div className="grid grid-cols-4 gap-6 mt-16">
    {
      Explorations.map((explore)=>{
        return(
          <div className="w-full shadow-inner text-center cursor-pointer border border-slate-200 hover:bg-gradient-to-r from-[#673AB7] to-[#3A00A1] py-8 rounded-xl ">
            <div><img src={explore.pic} alt="" className="inline-block mb-3" /></div>
            <h4>{explore.title}</h4>
          </div>
        )
      })
    }
  </div>
  <div className="grid grid-cols-2 gap-7 items-center mt-14">
    {
      More.map((more)=>{
        return(
          <div className="flex items-center gap-4">
            <div className="flex justify-center items-center w-24 h-24 border rounded-full p-4 shadow-xl">
              <img src={more.Img} alt="" className="inline-block w-11 h-11"/>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">{more.title}</h4>
              <p className="text-sm">{more.Description}</p>
            </div>
          </div>
        )
      })
    }
  </div>
    </section>
  )
}

export default Explore