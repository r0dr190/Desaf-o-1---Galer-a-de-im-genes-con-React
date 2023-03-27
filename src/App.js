import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Card className="card" direccionImg='https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2019/09/19/15689160699365.jpg' titulo="título 1" descripcion="descrip 1" />
        <Card className="card" direccionImg='https://s1.1zoom.me/prev/587/Birds_Jynx_torquilla_586415_600x400.jpg' titulo="Torquilla" descripcion="descrip 2" />
        <Card className="card" direccionImg="https://s1.1zoom.me/prev/576/Birds_Common_Kingfisher_Branches_575482_600x400.jpg" titulo="título 5" descripcion="descrip 5" />
        <Card className="card" direccionImg="https://s1.1zoom.me/prev/584/Birds_Merops_apiaster_Branches_Two_Wings_583537_600x400.jpg" titulo="Merops apiaster" descripcion="" />    
        <Card className="card" direccionImg="https://s1.1zoom.me/big0/494/Birds_Fish_Common_Kingfisher_Hunting_586398_1280x853.jpg" titulo="Kingfisher Cazando" descripcion="descrip 2" />
        <Card className="card" direccionImg="https://s1.1zoom.me/big0/252/Tits_Birds_Nuts_Closeup_586321_1280x853.jpg" titulo="Tits Bird Nuts" descripcion="descrip 3" />
        <Card className="card" direccionImg="https://s1.1zoom.me/big0/958/Birds_Western_Tanager_female_Branches_586308_1280x853.jpg" titulo="Tanager Female Branches" descripcion="descrip 4" />
        <Card className="card" direccionImg="http://img.soy-chile.cl/Fotos/2015/12/12/file_20151212180725.jpg" titulo="Tutu-Tutu" descripcion="descrip 4" />
        <Footer />
      </div>
    </div>
  );
}

export default App;
