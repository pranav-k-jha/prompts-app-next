import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        The Prompts app is an open-source AI tool designed for the modern era,
        enabling users to explore, create, and share creative prompts
        effortlessly.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
