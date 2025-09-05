function Header() {
  const list = [
    {
      name: "Home",
      link: "/home",
    },
    {
      name: "Service",
      link: "/service",
    },
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Products",
      link: "/products",
    },
    {
      name: "Testimonial",
      link: "/testimonial",
    },
    {
      name: "FAQ",
      link: "/faq",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  return (
    <header className="flex justify-around items-center bg-white py-[22px]">
      <div>
        <img src="./image/Logo.png" alt="nexcent logo" />
      </div>
      <div>
        <ul className="flex gap-x-[50px]">
          {list.map((item) => {
            return (
              <li>
                <a
                  href={item.link}
                  className="font-normal text-#18191f text-base"
                >
                  {item.name}
                </a>
              </li>
            );
          })}
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
