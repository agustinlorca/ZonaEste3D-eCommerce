import "./App.css";
import Navigation from "./routes/Navigation";
import Layout from "./components/Layout/Layout";
function App() {
  return (
    <div>
      <Layout>
        <Navigation />
      </Layout>
    </div>
  );
}

export default App;
