import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
