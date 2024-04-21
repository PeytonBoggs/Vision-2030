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
            return "#F53F3B"
        }
    }
    
    return (
        <Flex flexDir="column" alignItems="stretch" justifyContent="space-evenly" fontSize="25px">
            <Flex flexDir="column" alignItems="center" background="#9e7d43" borderRadius="20px" padding="10px">
                <Text>Funds:</Text>
                <Text padding="10px">{formatter.format(Math.trunc(funds))}</Text>
            </Flex>
            <Flex flexDir="column" alignItems="center" background="#9e7d43" borderRadius="20px" padding="10px">
                <Text marginBottom="15px">Approval Rating:</Text>
                <CircularProgress value={rating} size="200px" color={getColor()} trackColor="#7a6134">
                    <CircularProgressLabel>{rating}%</CircularProgressLabel>
                </CircularProgress>
            </Flex>
            <Flex flexDir="column" alignItems="center" background="#9e7d43" borderRadius="20px" padding="10px" fontSize="20px">
                <Text>Student Body: {Math.trunc(students).toLocaleString()}</Text>
                <Text>Tuition: {formatter.format(tuition)}/sem</Text>
                <Text>Income: {formatter.format(students * tuition)}/sem</Text>
            </Flex>
        </Flex>
    )
}