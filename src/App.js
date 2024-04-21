import { Flex } from '@chakra-ui/react';
import Map from './Map';
import Stats from './Stats';
import { useState } from 'react';
import Actions from './Actions';
import Calendar from './Calendar';

function App() {
  const [locations, setLocations] = useState([
    ["Wren Building", false, 100000000, -50, [{lat: 37.270894, lng:-76.707451}, {lat: 37.271889, lng:-76.709330}, {lat: 37.269840, lng:-76.709330}]],
    ["Tucker Hall", false, 10000000, -10, [{lat: 37.271889, lng:-76.709330}, {lat: 37.271889, lng:-76.710365}, {lat: 37.271195, lng:-76.710367}, {lat: 37.271195, lng:-76.709330}]],
    ["Chancellors Hall", false, 35000000, -20, [{lat: 37.271889, lng:-76.710365}, {lat: 37.271889, lng:-76.711292}, {lat: 37.271195, lng:-76.711292}, {lat: 37.271195, lng:-76.710367}]],
    ["James Blair Hall", false, 15000000, -15, [{lat: 37.271889, lng:-76.711292}, {lat: 37.271889, lng:-76.712164}, {lat: 37.271195, lng:-76.712164}, {lat: 37.271195, lng:-76.711292}]],
    ["Ewell Hall", false, 5000000, -5, [{lat: 37.269840, lng:-76.709330}, {lat: 37.269840, lng:-76.710365}, {lat: 37.270481, lng:-76.710365}, {lat: 37.270481, lng:-76.709330}]],
    ["Washington Hall", false, 10000000, -10, [{lat: 37.269840, lng:-76.710365}, {lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.710365}]],
    ["McGlothlin-Street Hall", false, 20000000, 10, [{lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.712164}, {lat: 37.269840, lng:-76.712164}]],
    ["Sunken Garden", false, 1000000, -25, [{lat: 37.271195, lng:-76.709330}, {lat: 37.271195, lng:-76.712164}, {lat: 37.270481, lng:-76.712164}, {lat: 37.270481, lng:-76.709330}]],
  ])

  const [month, setMonth] = useState(50)
  const [usedAction, setUsedAction] = useState(false)

  const [funds, setFunds] = useState(120000000)
  const [rating, setRating] = useState(100)
  const [students, setStudents] = useState(8000)
  const [tuition, setTuition] = useState(15000)

  return (
    <Flex flexDirection="column" fontFamily="Palatino Linotype" backgroundColor="#B9975B" padding="10px" height="100vh" width="100vw" overflow="hidden">
      <Calendar month={month} setMonth={setMonth} setUsedAction={setUsedAction} funds={funds} setFunds={setFunds} students={students} tuition={tuition}/>
      <Flex flex="1" alignItems="stretch" justifyContent="space-evenly">
        <Stats funds={funds} rating={rating} students={students} tuition={tuition}/>
        <Map locations={locations} setLocations={setLocations}/>
        <Actions locations={locations} setLocations={setLocations} usedAction={usedAction} setUsedAction={setUsedAction} funds={funds} setFunds={setFunds} rating={rating} setRating={setRating} students={students} setStudents={setStudents} tuition={tuition} setTuition={setTuition}/>
      </Flex>
    </Flex>
  )
}

export default App;
