import Title from "../components/title";

function ManageSection() {
  const MANAGE_LIST = [
    {
      img: "./image/Icon.png",
      title: "Membership Organizations",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "./image/Icon.png",
      title: "National Associations",
      description:
        " Our membership management software provides full automation of membership renewals and payments",
    },
    {
      img: "./image/Icon.png",
      title: "Clubs and Groups",
      description:
        "Our membership management software provides full automation of membership renewals and payments",
    },
  ];
  return (
    <section className="bg-white mb-[42px] px-[144px]">
      <div>
        <Title title="Manage your entire community in a single system" />

        <p className="mb-[16px] font-normal text-[#717171] text-[24px] text-base text-center">
          Who is Nextcent suitable for
        </p>
      </div>
      <div className="gap-x-6 grid grid-cols-3">
        {MANAGE_LIST.map((item) => {
          return (
            <div>
              <img src={item.img} alt="Icon 2" />
              <h3 className="mb-[10px] font-bold text-[#4d4d4d] text-[28px] text-center">
                {item.title}
              </h3>
              <p className="font-normal text-[#717171] text-[24px] text-base text-center">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ManageSection;
