function ClientsSection() {
  return (
    <section className="bg-white mb-[40px] px-[144px]">
      <div>
        <h2 className="mb-[8px] font-semibold text-[#4d4d4d] text-4xl text-center">
          Our Clients
        </h2>
        <p className="mb-[16px] font-normal text-[#717171] text-[24px] text-base text-center">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex gap-x-[136px]" margin1="mb-[40px]">
        <img src="./image/Logo1.png" alt="Our clients logo 1" />
        <img src="./image/Logo2.png" alt="Our Clients Logo 2" />
        <img src="./image/Logo3.png" alt="Our Clients Logo 3" />
        <img src="./image/Logo4.png" alt="Our Clients Logo 4" />
        <img src="./image/Logo5.png" alt="Our Clients Logo 5" />
        <img src="./image/Logo6.png" alt="Our Clients Logo 6" />
        <img src="./image/Logo7.png" alt="Our CLients Logo 7" />
      </div>
    </section>
  );
}
export default ClientsSection;
