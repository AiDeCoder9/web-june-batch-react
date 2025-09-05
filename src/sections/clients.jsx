import Title from "../components/title";

function ClientsSection() {
  const imageList = [
    {
      src: "./image/Logo1.png",
      alt: "Our clients logo 1",
    },
    {
      src: "./image/Logo2.png",
      alt: "Our clients logo 2",
    },
    {
      src: "./image/Logo3.png",
      alt: "Our clients logo 3",
    },
  ];
  return (
    <section className="bg-white mb-[40px] px-[144px]">
      <div>
        <Title title="Our Clients" />

        <p className="mb-[16px] font-normal text-[#717171] text-[24px] text-base text-center">
          We have been working with some Fortune 500+ clients
        </p>
      </div>
      <div className="flex gap-x-[136px]" margin1="mb-[40px]">
        {imageList.map((item) => {
          return <img src={item.src} alt={item.alt} />;
        })}
      </div>
    </section>
  );
}
export default ClientsSection;
