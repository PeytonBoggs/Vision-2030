import { Button, CircularProgress, CircularProgressLabel, Flex, Tab, TabList, TabPanel, TabPanels, Table, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react";

export default function Actions({ locations, setLocations, usedAction, setUsedAction, funds, setFunds, rating, setRating, students, setStudents, tuition, setTuition, setWon }) {    
    const toast = useToast()

    function handleAction(changeInFunds, changeInRating, changeInStudents, changeInTuition) {
        setFunds(funds + changeInFunds)
        setRating(rating + changeInRating)
        setStudents(students * changeInStudents)
        setTuition(tuition * changeInTuition)
        setUsedAction(true)
    }
    
    const construct = (selectedLocation) => {
        const updatedLocations = locations.map(location => {
            if (location[0] === selectedLocation[0]) {
                return [location[0], !location[1], location[2], location[3], location[4]];
            }
            return location;
        })

        setLocations(updatedLocations);
        setFunds(funds - selectedLocation[2])
        setRating(rating + selectedLocation[3])
        
        let won = true

        for (let i = 0; i < updatedLocations.length; i++) {
            if (!updatedLocations[i][1]) {
                won = false
            }
        }

        if (won) {
            setWon(true)
            toast({
                title: "You did it!",
                description: "Before 2030, William & Mary is entirely under construction! Congratulations!",
                status: "success",
                duration: 10000
            })
        }
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function getColor(rating) {
        if (rating < 0) {
            return "#F53F3B";
        }
        return "#115740"
    }

    return(
        <Flex background="#9e7d43" borderRadius="20px" height="85vh" width="35%">
            <Tabs overflowY="auto" colorScheme="blackAlpha">
                <TabList>
                    <Tab>
                        Actions
                    </Tab>
                    <Tab>
                        Construct
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TableContainer>
                            <Table colorScheme="blackAlpha" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Action</Th>
                                        <Th>Effect</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    <Tr>
                                        <Td>
                                            <Button backgroundColor="#D5D8DB" onClick={() => handleAction(0, -5, 1.1, 1)} isDisabled={usedAction}>
                                                Raise Acceptance Rate
                                            </Button>
                                        </Td>
                                        <Td whiteSpace="normal">Fight for a higher acceptance rate, increasing student body by 10%. -5% approval rating.</Td>
                                    </Tr>   
                                    <Tr>
                                        <Td>
                                            <Button backgroundColor="#D5D8DB" onClick={() => handleAction(0, 20, 1, 1)} isDisabled={usedAction}>
                                                Meet with Students
                                            </Button>
                                        </Td>
                                        <Td whiteSpace="normal">Attend club meetings and events. Students feel more seen and heard by you. +20% approval rating.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Button backgroundColor="#D5D8DB" onClick={() => handleAction(0, 5, 1.05, 1.05)} isDisabled={usedAction}>
                                                Visit High Schools
                                            </Button>
                                        </Td>
                                        <Td whiteSpace="normal">Encourage more high school seniors to apply. The acceptance pool rises, W&M gets more competative, and tuition can be raised. +5% approval rating, students, and tuition.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Button backgroundColor="#D5D8DB" onClick={() => handleAction(0, -10, 1, 1.15)} isDisabled={usedAction}>
                                                Raise Tuition
                                            </Button>
                                        </Td>
                                        <Td whiteSpace="normal">Meet the Board of Visitors and encourage a tuition hike. +15% tuition, -10% approval rating.</Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Button backgroundColor="#D5D8DB" onClick={() => handleAction(-100000, 0, 1, 1)} isDisabled={usedAction}>
                                                Buy a Tesla
                                            </Button>
                                        </Td>
                                        <Td whiteSpace="normal">-$100,000. Worth it.</Td>
                                    </Tr>                                    
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel>
                        <TableContainer>
                            <Table colorScheme="blackAlpha" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Location</Th>
                                        <Th>Approval</Th>
                                        <Th>Construct</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {locations.map((location, index) => (
                                        !location[1] ? (
                                        <Tr key={index}>
                                            <Td>{location[0]}</Td>
                                            <Td>
                                                <CircularProgress value={Math.abs(location[3])} color={getColor(location[3])} trackColor="#7a6134">
                                                    <CircularProgressLabel>{location[3]}%</CircularProgressLabel>
                                                </CircularProgress>
                                            </Td>
                                            <Td>
                                                <Button backgroundColor="#D5D8DB" onClick={() => construct(location)} isDisabled={location[1] || (funds - location[2] < 0) || (rating + location[3]) <= 0}>
                                                    {formatter.format(location[2])}
                                                </Button>
                                            </Td>
                                        </Tr>
                                        ) : null
                                    ))}
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}