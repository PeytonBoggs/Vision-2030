import { CircularProgress, CircularProgressLabel, Flex, Text } from "@chakra-ui/react";

export default function Stats({ funds, rating, students, tuition }) {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function getColor() {
        if (rating > 66) {
            return "#115740"
        } else if (rating > 33) {
            return "orange"
        } else {
            return "#BF0000"
        }
    }
    
    return (
        <Flex flexDir="column" alignItems="stretch" justifyContent="space-evenly" fontSize="1.5rem">
            <Flex flexDir="column" alignItems="center" background="#9e7d43" borderRadius="1rem" padding="0.5rem">
                <Text>Funds:</Text>
                <Text padding="0.5rem" fontWeight="bold">{formatter.format(Math.trunc(funds))}</Text>
            </Flex>
            <Flex flexDir="column" alignItems="center" background="#9e7d43" borderRadius="1rem" padding="0.5rem" marginY="0.5rem">
                <Text marginBottom="1rem">Approval Rating:</Text>
                <CircularProgress value={rating} size="13rem" color={getColor()} trackColor="#7a6134">
                    <CircularProgressLabel fontWeight="bold">{rating}%</CircularProgressLabel>
                </CircularProgress>
            </Flex>
            <Flex flexDir="column" alignItems="center" justifyContent="center" background="#9e7d43" borderRadius="1rem" padding="0.5rem" fontSize="1.3rem">
                <Text>Student Body: {Math.trunc(students).toLocaleString()}</Text>
                <Text>Tuition: {formatter.format(tuition)}/sem</Text>
                <Text>Income: {formatter.format(students * tuition)}/sem</Text>
            </Flex>
        </Flex>
    )
}