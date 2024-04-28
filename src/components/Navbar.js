import {logo} from '../assets/images'

const Navbar = () => {
  return (
    <header className="max-w-[1100px] h-20 mx-auto flex justify-between items-center px-3 rounded">
      <div className="w-40">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul className="flex gap-7 font-semibold text-gray-400">
          <li><a href="#Features">Features</a></li>
          <li><a href="#Pricing">Pricing</a></li>
          <li><a href="#FAQs">FAQs</a></li>
          <li><a href="#Docs">Docs</a></li>
          <li><a href="#blog">Blog</a></li>
        </ul>
      </nav>
        <button type="button" className="px-5 py-1 border-2 border-gray-400 rounded-3xl  hover:bg-gray-800  text-white">Login</button>
    </header>
  )
}

export default Navbar