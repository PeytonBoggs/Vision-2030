import { Button, CircularProgress, CircularProgressLabel, Flex, Tab, TabList, TabPanel, TabPanels, Table, TableCaption, TableContainer, Tabs, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export default function Actions({ locations }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function getColor(rating) {
        if (rating < 0) {
            return "red";
        }
        return "#115740"
    }

    return(
        <Flex background="#9e7d43" borderRadius="20px" height="85vh" width="30vw">
            <Tabs>
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
                        <TableContainer overflowY="auto">
                            <Table colorScheme="green" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Action</Th>
                                        <Th>Approval</Th>
                                        <Th>Effect</Th>
                                    </Tr>
                                </Thead>
                            </Table>
                        </TableContainer>
                    </TabPanel>
                    <TabPanel>
                        <TableContainer overflowY="auto">
                            <Table colorScheme="green" size="sm">
                                <Thead>
                                    <Tr>
                                        <Th>Location</Th>
                                        <Th>Approval</Th>
                                        <Th>Construct</Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {locations.map((location, index) => (
                                        <Tr key={index}>
                                            <Td>{location[0]}</Td>
                                            <Td>
                                                <CircularProgress value={Math.abs(location[3])} color={getColor(location[3])} trackColor="#7a6134">
                                                    <CircularProgressLabel>{location[3]}%</CircularProgressLabel>
                                                </CircularProgress>
                                            </Td>
                                            <Td>
                                                <Button>
                                                    {formatter.format(location[2])}
                                                </Button>
                                            </Td>
                                        </Tr>
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