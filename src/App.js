import './App.css';
import TopHeader from './components/TopHeader'
import ImageContent from './components/ImageContent';
import "@fontsource/inter";
import News from './components/News';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div>
      <TopHeader />
      <ImageContent />
      <News />
      <Contact />
      <About />
    </div>
  );
}

export default App;
