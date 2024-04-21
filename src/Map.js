import { APIProvider, Map } from '@vis.gl/react-google-maps';
import { Polygon } from './Polygon.ts';
import { Flex, useToast } from '@chakra-ui/react';

export default function WMap({ locations, setLocations }) {
    const toast = useToast()

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function handleClick(location) {
        if (location[1]) {
            toast({
                title: location[0] + " under construction",
                description: "Cost: " + formatter.format(location[2]) + ", Approval Rating: " + location[3] + "%",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
        } else {
            toast({
                title: location[0] + " not under construction",
                description: "Cost: " + formatter.format(location[2]) + ", Approval Rating: " + location[3] + "%",
                status: 'error',
                duration: 3000,
                isClosable: true,
              })
        }
    }
    
    return (
        <Flex justifyContent="space-evenly" alignItems="center" background="#9e7d43" borderRadius="20px" padding="10px">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map
                style={{width: '40vw', height: '80vh'}}
                defaultCenter={{lat:37.271032928849145, lng:-76.71531100979759}}
                defaultZoom={16}
                gestureHandling={"greedy"}
                disableDefaultUI={true}
                >
                {locations.map((location, index) => (
                    <Polygon
                        key={index}
                        paths={location[4]}
                        onClick={() => handleClick(location)}
                        fillColor={location[1] ? "#E63A37" : "#6a6a6a"}
                        strokeColor={location[1] ? "#DA1E1B" : "#000000"}
                    />
                ))}
                </Map>
            </APIProvider>
        </Flex>
    )
}