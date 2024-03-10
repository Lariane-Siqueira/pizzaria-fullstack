import Hero from "../Components/layout/Hero";
import HomeMenu from "../Components/layout/HomeMenu";
import SectionHeaders from "../Components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className="text-gray-500 mx-auto max-w-md mt-4 flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ea
            neque tempore sunt voluptatem reprehenderit molestias, accusamus
            ipsa cupiditate cum doloremque nemo excepturi aspernatur
            perspiciatis quas velit laborum ad sit?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem non
            alias, ipsa illo nam esse quis mollitia tempore, similique totam
            voluptate, laudantium qui? Voluptatum iusto illum architecto enim,
            inventore blanditiis.
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit accusamus delectus soluta nobis unde et tempor.
          </p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders subHeader={"Dont hesitate"} mainHeader={"Contact Us"} />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel. +46738123123"
          >
            +46 738 123 123
          </a>
        </div>
      </section>
    </>
  );
}
