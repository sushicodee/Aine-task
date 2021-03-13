import './styles/main.scss';
import Sidenav from './components/sidebar/Sidenav';
import Routes from './routes/Routes';
const App = () => {
  return (
    <div className ='app'>
    <header>
      <Sidenav />
      </header>
      <main>
      <Routes/>
      </main>
    </div>
  );
}

export default App;
