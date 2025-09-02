function Footer() {
  return (
    <footer className="bg-black px-[64px] py-165px">
      <div>
        <img
          src="./image/nexcent footer logo.png"
          alt="Company Logo"
          className="mb-[40px]"
        />
        <p className="mb-[40px] font-normal text-[#717171] text-[24px] text-base text-left">
          Copyright © 2020 Nexcent ltd. <br />
          All rights reserved
        </p>
        <img src="./image/Social Links.png" alt="social link" />
      </div>
      <div>
        <h5 className="mb-[24px] font-semibold text-[#ffffff] text-xl text-left">
          Company
        </h5>
        <ul>
          <li>
            <a
              href="/aboutus"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/blog"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/contactus"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="/testimonial"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Testimonial
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="mb-[24px] font-semibold text-[#ffffff] text-xl text-left">
          Support
        </h5>
        <ul>
          <li>
            <a
              href="/helpcenter"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Help Center
            </a>
          </li>
          <li>
            <a
              href="/termsofservices"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Terms Of Services
            </a>
          </li>
          <li>
            <a
              href="/legal"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              href="/privacypolicy"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/status"
              className="mb-[12px] font-normal text-[#f5f7fa] text-sm"
            >
              Status
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5 className="mb-[24px] font-semibold text-[#ffffff] text-xl text-left">
          Stay Up to Date
        </h5>
        <input
          className="mb-[108px]"
          type="text"
          placeholder="your email address"
        />
      </div>
    </footer>
  );
}
export default Footer;
