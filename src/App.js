import './App.css';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

function App() {
  return (
    <div className="header">
      <p className="titleText">
        Vision 2026
      </p>
      <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <Map
          style={{width: '100vw', height: '100vh'}}
          defaultCenter={{lat:37.271032928849145, lng:-76.71531100979759}}
          defaultZoom={17}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
        />
      </APIProvider>
    </div>
  );
}

export default App;
