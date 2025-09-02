function Header() {
  return (
    <header className="flex justify-around bg-white py-[22px]">
      <div>
        <img src="./image/Logo.png" alt="nexcent logo" />
      </div>
      <div>
        <ul className="flex gap-x-[50px]">
          <li>
            <a href="/Home" className="font-normal text-#18191f text-base">
              Home
            </a>
          </li>
          <li>
            <a href="/Service" className="font-normal text-#18191f text-base">
              Service
            </a>
          </li>
          <li>
            <a href="/features" className="font-normal text-#18191f text-base">
              Features
            </a>
          </li>
          <li>
            <a href="/products" className="font-normal text-#18191f text-base">
              Products
            </a>
          </li>
          <li>
            <a
              href="/testimonial"
              className="font-normal text-#18191f text-base"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a href="/FAQ" className="font-normal text-#18191f text-base">
              FAQ
            </a>
          </li>
        </ul>
      </div>
      <div>
        <button className="p-[10px] font-sm font-medium text-[#4caf4f] text-center">
          Log In
        </button>
        <button className="bg-[#4caf4f] px-[20px] py-[10px] border-none rounded-md font-sm font-medium text-white text-center">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Header;
