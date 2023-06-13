import { Route, Routes } from 'react-router-dom';
import './App.css';

import { NotFound } from './views/NotFound';
import { Home } from './components/Home';
function App() {
  return (
    <div className='App'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/error' element={<NotFound />} />
      </Routes>
      <div className='box' style={{
        margin: 30,
        height: '30rem', borderRadius: '12px',
        background: `url('https://scontent.whatsapp.net/v/t39.8562-34/316546300_547692113846445_7299710494491288098_n.png?ccb=1-7&_nc_sid=2fbf2a&_nc_ohc=NaIatGV3aTgAX8Vrhql&_nc_ht=scontent.whatsapp.net&oh=01_AdSQiyWFW5Ik6f9lm5_uiv6CGqg9_X2G9DDUeaGkLyDgXg&oe=648814A5')`,
        position: 'relative', // Add this to enable positioning of the text
      }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: 'white',
            fontSize: '2rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(0, 0, 0, 0)', // Set the background color with transparency
            padding: '10px', // Optional padding for the text container
            borderRadius: '8px', // Optional border radius for the text container          
          }}
        >
          Your Text Here
        </div>


      </div>
    </div>
  );
}

export default App;
