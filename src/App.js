import { Flex, Text } from '@chakra-ui/react';
import './App.css';
import Map from './Map';
import Stats from './Stats';
import { useState } from 'react';
import Actions from './Actions';

function App() {
  const [locations, setLocations] = useState([
    ["Wren Building", false, 1000000, -50, [{lat: 37.270894, lng:-76.707451}, {lat: 37.271889, lng:-76.709330}, {lat: 37.269840, lng:-76.709330}]],
    ["Tucker Hall", false, 100000, -10, [{lat: 37.271889, lng:-76.709330}, {lat: 37.271889, lng:-76.710365}, {lat: 37.271195, lng:-76.710367}, {lat: 37.271195, lng:-76.709330}]],
    ["Chancellors Hall", false, 350000, -20, [{lat: 37.271889, lng:-76.710365}, {lat: 37.271889, lng:-76.711292}, {lat: 37.271195, lng:-76.711292}, {lat: 37.271195, lng:-76.710367}]],
    ["James Blair Hall", false, 150000, -15, [{lat: 37.271889, lng:-76.711292}, {lat: 37.271889, lng:-76.712164}, {lat: 37.271195, lng:-76.712164}, {lat: 37.271195, lng:-76.711292}]],
    ["Ewell Hall", false, 50000, -5, [{lat: 37.269840, lng:-76.709330}, {lat: 37.269840, lng:-76.710365}, {lat: 37.270481, lng:-76.710365}, {lat: 37.270481, lng:-76.709330}]],
    ["Washington Hall", false, 100000, -10, [{lat: 37.269840, lng:-76.710365}, {lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.710365}]],
    ["McGlothlin-Street Hall", false, 200000, 10, [{lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.712164}, {lat: 37.269840, lng:-76.712164}]],
    ["Sunken Garden", false, 10000, -25, [{lat: 37.271195, lng:-76.709330}, {lat: 37.271195, lng:-76.712164}, {lat: 37.270481, lng:-76.712164}, {lat: 37.270481, lng:-76.709330}]],
  ])
  const [funds, setFunds] = useState(1000000)
  const [rating, setRating] = useState(100)

  return (
    <Flex className="background" padding="10px" maxHeight="100vh" maxWidth="100vw" overflow="hidden">
      <Flex justifyContent="center">
        <Text className="titleText">
          Vision 2030
        </Text>
      </Flex>
      <Flex flex="1" alignItems="stretch" justifyContent="space-evenly">
        <Stats funds={funds} rating={rating}/>
        <Map locations={locations} setLocations={setLocations}/>
        <Actions locations={locations}/>
      </Flex>
    </Flex>
  )
}

export default App;
