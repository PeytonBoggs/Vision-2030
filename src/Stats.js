import { CircularProgress, CircularProgressLabel, Flex, Text } from "@chakra-ui/react";

export default function Stats({ funds, rating }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function getColor() {
        if (rating > 66) {
            return "green"
        } else if (rating > 33) {
            return "orange"
        } else {
            return "red"
        }
    }
    
    return (
        <Flex flexDir="column" alignItems="center" justifyContent="space-evenly" fontSize="25px">
            <Flex flexDir="column" alignItems="center">
                <Text marginBottom="15px">Funds:</Text>
                <Text padding="10px" background="#9e7d43" borderRadius="10px">{formatter.format(funds)}</Text>
            </Flex>
            <Flex flexDir="column" alignItems="center">
                <Text marginBottom="15px">Approval Rating:</Text>
                <CircularProgress value={rating} size="200px" color={getColor()} trackColor="#9e7d43">
                    <CircularProgressLabel>{rating}%</CircularProgressLabel>
                </CircularProgress>
            </Flex>
        </Flex>
    )
}