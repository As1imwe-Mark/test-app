import {useState} from 'react'

const FAQ = () => {
  const [ID, setID]=useState(null)
  
   const Questions = [
    {id: 1,
      question:"Why use the paid plan when I can host it myself ?"
    },
    {id: 2,
      question:"How does the free trial work ?"
    },
    {id: 3,
      question:"How will i be billed ?"
    },
    {id: 4,
      question:"Where's my data stored ?",
    },
    {id: 5,
      question:"Can I have a customized instance designed specifically for my needs ?"
    },
    {id: 6,
      question:"How can I cancel my plan ?"
    }
  ]

  const openAns = (Id)=>{
    setID(Id === ID ? null: Id)
  }

  return (
    <section id='FAQs' className="max-w-[1100px] mx-auto text-white h-full mt-7">
    <h3 className="text-center font-bold text-5xl my-10">Frequently Asked Questions</h3>
    <div className="border p-5 max-w-[900px] mx-auto bg-[#22293322] rounded-2xl">
    <div className="max-w-[80%] mx-auto flex flex-col justify-center">
    {
      Questions.map((qtn)=>(
      <div key={qtn.id} className={`${qtn.id === 6 ? 'border-b-0 mb-4 ':'border-b py-5'}  `}>
      <p className="cursor-pointer text-2xl" onClick={()=>{openAns(qtn.id)}}><span className='font-bold text-2xl px-2'>{ID === qtn.id ? '-':'+'}</span> {qtn.question}</p> {ID === qtn.id && (
        <p className="border max-w-[100%] max-h-24 p-4 rounded-lg my-3 border-b-gray-200 bg-gradient-to-r from-[#222] to-[#050c0522] block"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quaerat ex soluta commodi inventore vero, sequi deserunt dicta velit quia quod aliquam cumque aliquid ut cupiditate culpa vel, incidunt aspernatur!</p>
      )}
    </div>
      ))
    }
    </div>
    </div>
    <p className="text-center my-5">For any other questions, feel free to reach out to us at <a href="support@Linkwarden.app" className="text-sm"><u>support@Linkwarden.app</u></a></p>
    </section>
  )
}

export default FAQ