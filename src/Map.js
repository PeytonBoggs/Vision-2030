import { useState } from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Polygon } from './Polygon.ts';
import { Flex } from '@chakra-ui/react';

export default function WMap() {

    const [locations, setLocations] = useState([
        ["Wren Building", false, [{lat: 37.270894, lng:-76.707451}, {lat: 37.271889, lng:-76.709330}, {lat: 37.269840, lng:-76.709330}]],
        ["Tucker Hall", false, [{lat: 37.271889, lng:-76.709330}, {lat: 37.271889, lng:-76.710365}, {lat: 37.271195, lng:-76.710367}, {lat: 37.271195, lng:-76.709330}]],
        ["Chancellors Hall", false, [{lat: 37.271889, lng:-76.710365}, {lat: 37.271889, lng:-76.711292}, {lat: 37.271195, lng:-76.711292}, {lat: 37.271195, lng:-76.710367}]],
        ["James Blair Hall", false, [{lat: 37.271889, lng:-76.711292}, {lat: 37.271889, lng:-76.712164}, {lat: 37.271195, lng:-76.712164}, {lat: 37.271195, lng:-76.711292}]],
        ["Ewell Hall", false, [{lat: 37.269840, lng:-76.709330}, {lat: 37.269840, lng:-76.710365}, {lat: 37.270481, lng:-76.710365}, {lat: 37.270481, lng:-76.709330}]],
        ["Washington Hall", false, [{lat: 37.269840, lng:-76.710365}, {lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.710365}]],
        ["McGlothlin-Street Hall", false, [{lat: 37.269840, lng:-76.711292}, {lat: 37.270481, lng:-76.711292}, {lat: 37.270481, lng:-76.712164}, {lat: 37.269840, lng:-76.712164}]],
        ["Sunken Garden", false, [{lat: 37.271195, lng:-76.709330}, {lat: 37.271195, lng:-76.712164}, {lat: 37.270481, lng:-76.712164}, {lat: 37.270481, lng:-76.709330}]],
    ])

    const changeConstruction = (clickedLocation) => {
        const updatedLocations = locations.map(location => {
            if (location[0] === clickedLocation[0]) {
                return [location[0], !location[1], location[2]];
            }
            return location;
        })
        setLocations(updatedLocations);
    }

    return (
        <Flex justifyContent="space-evenly" alignItems="center">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map
                style={{width: '80vw', height: '80vh'}}
                defaultCenter={{lat:37.271032928849145, lng:-76.71531100979759}}
                defaultZoom={16}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                >
                {locations.map((location, index) => (
                    <Polygon
                        key={index}
                        paths={location[2]}
                        onClick={() => changeConstruction(location)}
                        fillColor={location[1] ? "#E63A37" : "#6a6a6a"}
                        strokeColor={location[1] ? "#DA1E1B" : "#000000"}
                    />
                ))}
                </Map>
            </APIProvider>
        </Flex>
    )
}