import { Flex, Text } from '@chakra-ui/react';
import './App.css';
import Map from './Map';
import Stats from './Stats';
import { useState } from 'react';

function App() {
  const [funds, setFunds] = useState(1000000)
  const [rating, setRating] = useState(100)

  return (
    <Flex className="background">
      <Flex justifyContent="center">
        <Text className="titleText">
          Vision 2030
        </Text>
      </Flex>
      <Flex flex="1" alignItems="stretch" justifyContent="space-evenly">
        <Stats funds={funds} rating={rating}/>
        <Map />
      </Flex>
    </Flex>
  )
}

export default App;
