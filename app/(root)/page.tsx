import Hello from "@/components/Hello";

const Home = () => {
  console.log("this is a server component");
  return (
    <main>
      <div className="text-5xl underline">Welcome To Next.js</div>

      <Hello />
    </main>
  );
};

export default Home;
