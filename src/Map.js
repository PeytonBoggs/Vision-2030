import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Polygon } from './Polygon.ts';
import { Flex } from '@chakra-ui/react';

export default function WMap({ locations, setLocations }) {
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
                style={{width: '50vw', height: '80vh'}}
                defaultCenter={{lat:37.271032928849145, lng:-76.71531100979759}}
                defaultZoom={16}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                >
                {locations.map((location, index) => (
                    <Polygon
                        key={index}
                        paths={location[4]}
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