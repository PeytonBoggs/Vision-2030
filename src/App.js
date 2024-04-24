import { Flex } from '@chakra-ui/react';
import Map from './Map';
import Stats from './Stats';
import { useState } from 'react';
import Actions from './Actions';
import Calendar from './Calendar';

function App() {
  const [locations, setLocations] = useState([
    ["Wren Building", false, 1000000000, -50, [{lat: 37.270894, lng:-76.707451}, {lat: 37.271889, lng:-76.709330}, {lat: 37.269840, lng:-76.709330}]],
    ["Tucker Hall", false, 100000000, -10, [{lat: 37.271889, lng:-76.709330}, {lat: 37.271889, lng:-76.710365}, {lat: 37.271195, lng:-76.710367}, {lat: 37.271195, lng:-76.709330}]],
    ["Chancellors Hall", false, 350000000, -20, [{lat: 37.271889, lng:-76.710365}, {lat: 37.271889, lng:-76.711292}, {lat: 37.271195, lng:-76.711292}, {lat: 37.271195, lng:-76.710367}]],
    ["James Blair Hall", false, 150000000, -15, [{lat: 37.271889, lng:-76.711292}, {lat: 37.271889, lng:-76.712164}, {lat: 37.271195, lng:-76.712164}, {lat: 37.271195, lng:-76.711292}]],
    ["Ewell Hall", false, 100000000, 10, [{lat: 37.269840, lng:-76.709330}, {lat: 37.269840, lng:-76.710365}, {lat: 37.270481, lng:-76.710365}, {lat: 37.270481, lng:-76.709330}]],
    ["Washington Hall", false, 300000000, -10, [{lat: 37.269840, lng:-76.710365}, {lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.710365}]],
    ["McGlothlin-Street Hall", false, 750000000, 25, [{lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.712164}, {lat: 37.269840, lng:-76.712164}]],
    ["Sunken Garden", false, 500000000, -50, [{lat: 37.271195, lng:-76.709330}, {lat: 37.271195, lng:-76.712164}, {lat: 37.270481, lng:-76.712164}, {lat: 37.270481, lng:-76.709330}]],
    ["Monroe Hall", true, 500000000, 0, [{lat: 37.271889, lng:-76.709330}, {lat: 37.272617, lng:-76.710849}, {lat: 37.271889, lng:-76.710849}]],
    ["Blow Memorial Hall", false, 400000000, -5, [{lat: 37.271889, lng:-76.710849}, {lat: 37.272617, lng:-76.710849}, {lat: 37.272968, lng:-76.711593}, {lat:  37.271889, lng:-76.711593}]],
    ["Old Dominion Hall", false, 500000000, -10, [{lat:  37.271889, lng:-76.711593}, {lat: 37.272968, lng:-76.711593}, {lat: 37.271889, lng:-76.713313}]],
    ["Crim Dell", false, 150000000, -30, [{lat: 37.269840, lng:-76.712164}, {lat: 37.271889, lng:-76.712164}, {lat: 37.271889, lng:-76.713313}, {lat: 37.270714, lng: -76.714724}]],
    ["Jefferson Hall", false, 250000000, -20, [{lat: 37.269840, lng:-76.709330}, {lat: 37.269840, lng: -76.710825}, {lat: 37.269267, lng: -76.710664}]],
    ["Barrett Hall", false, 250000000, -20, [{lat: 37.269267, lng: -76.710664}, {lat: 37.269840, lng: -76.710825}, {lat: 37.269840, lng: -76.711767}, {lat: 37.269131, lng: -76.711826}, {lat: 37.268979, lng: -76.711449}]],
    ["Chandler Hall", false, 250000000, -20, [{lat: 37.269131, lng: -76.711826}, {lat: 37.269840, lng: -76.711767}, {lat: 37.269840, lng:-76.712164}, {lat: 37.270029, lng: -76.712723}, {lat: 37.269489, lng: -76.712723}]],
    ["Landrum Hall", false, 250000000, -20, [{lat: 37.269489, lng: -76.712723}, {lat: 37.270029, lng: -76.712723}, {lat: 37.270714, lng: -76.714724}, {lat: 37.270322, lng: -76.714799}]],
    ["Jamestown East", true, 750000000, 10, [{lat: 37.268979, lng: -76.711449}, {lat: 37.269409, lng: -76.712517}, {lat: 37.268964, lng: -76.712754}, {lat: 37.268522, lng: -76.712488}]],
    ["Hardy Hall", false, 100000000, -10, [{lat: 37.268964, lng: -76.712754}, {lat: 37.269409, lng: -76.712517}, {lat: 37.269755, lng: -76.713386}, {lat: 37.268920, lng: -76.713386}]],
    ["Lemon Hall", false, 100000000, -30, [{lat: 37.268522, lng: -76.712488}, {lat: 37.268964, lng: -76.712754}, {lat: 37.268920, lng: -76.713386}, {lat: 37.268120, lng: -76.713386}]],
    ["Barksdale Field", true, 50000000, -5, [{lat: 37.269161, lng: -76.713386}, {lat: 37.269161, lng: -76.714284}, {lat: 37.268120, lng: -76.714284}, {lat: 37.268120, lng: -76.713386}]],
    ["Integrated Science Center", false, 750000000, -50, [{lat: 37.270322, lng: -76.714799}, {lat: 37.269161, lng: -76.714799}, {lat: 37.269161, lng: -76.713386}, {lat: 37.269755, lng: -76.713386}]],
    ["ISC4", true, 1000000000, 10, [{lat: 37.270322, lng: -76.714799}, {lat: 37.270375, lng: -76.715270}, {lat: 37.269161, lng: -76.715270}, {lat: 37.269161, lng: -76.714799}]],
    ["Phi Beta Kappa", false, 750000000, -10, [{lat: 37.269161, lng: -76.714284}, {lat: 37.268224, lng: -76.715882}, {lat: 37.267685, lng: -76.715360}, {lat: 37.268120, lng: -76.714284}]],
    ["PBK Parking Lot", false, 50000000, -5, [{lat: 37.268120, lng: -76.713386}, {lat: 37.268120, lng: -76.714284}, {lat: 37.267685, lng: -76.715360}, {lat: 37.267254, lng: -76.716109}, {lat: 37.265995, lng: -76.717677}]],
    ["Andrews Hall", false, 250000000, -5, [{lat: 37.269161, lng: -76.715270}, {lat: 37.268529, lng: -76.716115}, {lat: 37.268224, lng: -76.715882}, {lat: 37.269161, lng: -76.714284}]],
    ["Swem Library", false, 750000000, -40, [{lat: 37.270375, lng: -76.715270}, {lat: 37.269819, lng: -76.717112}, {lat: 37.268529, lng: -76.716115}, {lat: 37.269161, lng: -76.715270}]],
    ["Muscarelle Museum", true, 200000000, 10, [{lat: 37.268529, lng: -76.716115}, {lat: 37.267254, lng: -76.716109}, {lat: 37.267685, lng: -76.715360}, {lat: 37.268224, lng: -76.715882}]],
    ["Boswell Hall", false, 800000000, 50, [{lat: 37.267254, lng: -76.716109}, {lat: 37.265995, lng: -76.717677}, {lat: 37.267955, lng: -76.717710}]],
    ["Jones Hall", false, 300000000, -15, [{lat: 37.268529, lng: -76.716115}, {lat: 37.267254, lng: -76.716109}, {lat: 37.267955, lng: -76.717710}]],
    ["Small Hall", false, 300000000, -15, [{lat: 37.268529, lng: -76.716115}, {lat: 37.269819, lng: -76.717112}, {lat: 37.267955, lng: -76.717710}]],
    ["Mason School of Business", false, 500000000, -30, [{lat: 37.267955, lng: -76.717710}, {lat: 37.265146, lng: -76.719927}, {lat: 37.265995, lng: -76.717677}]],
    ["Adair Hall", false, 200000000, 10, [{lat: 37.267955, lng: -76.717710}, {lat: 37.269819, lng: -76.717112}, {lat: 37.268160, lng: -76.719438}, {lat: 37.265146, lng: -76.719927}]],
    ["Bryan Complex", false, 600000000, -20, [{lat: 37.272968, lng:-76.711593}, {lat: 37.273932, lng: -76.713313}, {lat: 37.271889, lng: -76.713313}]],
    ["Zable Stadium", false, 750000000, -30, [{lat: 37.273932, lng: -76.713313}, {lat: 37.273932, lng: -76.716835}, {lat: 37.271889, lng: -76.716835}, {lat: 37.271889, lng: -76.713313}]],
    ["Sadler Center", false, 800000000, -50, [{lat: 37.271889, lng: -76.713313}, {lat: 37.271889, lng: -76.716835}, {lat: 37.270714, lng: -76.714724}]],
    ["One Tribe Place", false, 300000000, -25, [{lat: 37.272968, lng:-76.711593}, {lat: 37.275511, lng: -76.711888}, {lat: 37.273932, lng: -76.716835}, {lat: 37.273932, lng: -76.713313}]],
    ["Green & Gold Village", false, 1000000000, 75, [{lat: 37.275511, lng: -76.711888}, {lat: 37.274646, lng: -76.718330}, {lat: 37.271889, lng: -76.716835}, {lat: 37.273932, lng: -76.716835}]],
    ["Randolph Complex", false, 800000000, -20, [{lat: 37.271580, lng: -76.719509}, {lat: 37.268160, lng: -76.719438}, {lat: 37.269819, lng: -76.717112}, {lat: 37.271889, lng: -76.716835}]],
    ["Campus Woods", false, 100000000, -25, [{lat: 37.269819, lng: -76.717112}, {lat: 37.270375, lng: -76.715270}, {lat: 37.270322, lng: -76.714799}, {lat: 37.270714, lng: -76.714724}, {lat: 37.271889, lng: -76.716835}]],
    ["West Woods", true, 750000000, -15, [{lat: 37.274646, lng: -76.718330}, {lat: 37.271580, lng: -76.719509}, {lat: 37.271889, lng: -76.716835}]],
    ["DuPont Hall", false, 400000000, -10, [{lat: 37.271580, lng: -76.719509}, {lat: 37.269034, lng: -76.721453}, {lat: 37.268160, lng: -76.719438}]],
    ["Botetourt Complex", false, 750000000, 25, [{lat: 37.269034, lng: -76.721453}, {lat: 37.271213, lng: -76.721978}, {lat: 37.271580, lng: -76.719509}]],
    ["Commons Dining", false, 300000000, -25, [{lat: 37.271580, lng: -76.719509}, {lat: 37.271213, lng: -76.721978}, {lat: 37.272714, lng: -76.720698}, {lat: 37.272569, lng: -76.719129}]],
    ["Kaplan Arena", false, 800000000, -20, [{lat: 37.274646, lng: -76.718330}, {lat: 37.274734, lng: -76.720698}, {lat: 37.272714, lng: -76.720698}, {lat: 37.272569, lng: -76.719129}]],
    ["Kaplan Parking Lot", false, 100000000, -10, [{lat: 37.275511, lng: -76.711888}, {lat: 37.277083, lng: -76.719047}, {lat: 37.276096, lng: -76.724910}, {lat: 37.274845, lng: -76.722162}, {lat: 37.274734, lng: -76.720698}, {lat: 37.274646, lng: -76.718330}]],
    ["Bee McLeod Rec Ctr", false, 300000000, -15, [{lat: 37.274734, lng: -76.720698}, {lat: 37.274845, lng: -76.722162}, {lat: 37.271213, lng: -76.721978}, {lat: 37.272714, lng: -76.720698}]],
    ["Lake Matoaka", false, 1000000000, -50, [{lat: 37.274845, lng: -76.722162}, {lat: 37.276096, lng: -76.724910}, {lat: 37.268976, lng: -76.730789}, {lat: 37.263067, lng: -76.730060}, {lat: 37.263204, lng: -76.723386}, {lat: 37.265146, lng: -76.719927}, {lat: 37.268160, lng: -76.719438}, {lat: 37.269034, lng: -76.721453}, {lat: 37.271213, lng: -76.721978}]]
  ])

  const [month, setMonth] = useState(0)
  const [usedAction, setUsedAction] = useState(false)

  const [funds, setFunds] = useState(250000000)
  const [rating, setRating] = useState(50)
  const [students, setStudents] = useState(8000)
  const [tuition, setTuition] = useState(15000)

  const [won, setWon] = useState(false)

  return (
    <Flex flexDirection="column" fontFamily="Palatino Linotype" padding="1rem" height="100%" width="100%" backgroundColor="#B9975B">
      <Calendar month={month} setMonth={setMonth} setUsedAction={setUsedAction} funds={funds} setFunds={setFunds} rating={rating} setRating={setRating} students={students} tuition={tuition} won={won} />
      <Flex alignItems="stretch" justifyContent="space-evenly">
        <Stats funds={funds} rating={rating} students={students} tuition={tuition}/>
        <Map locations={locations} setLocations={setLocations}/>
        <Actions locations={locations} setLocations={setLocations} usedAction={usedAction} setUsedAction={setUsedAction} funds={funds} setFunds={setFunds} rating={rating} setRating={setRating} students={students} setStudents={setStudents} tuition={tuition} setTuition={setTuition} month={month} setWon={setWon}/>
      </Flex>
    </Flex>
  )
}

export default App;
