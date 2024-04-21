import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Flex, Image, Text, useDisclosure, useToast } from "@chakra-ui/react"
import React from "react"

export default function Calendar({ month, setMonth, setUsedAction, funds, setFunds, students, tuition, won }) {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function nextMonth() {
        setMonth(month + 1)
        setUsedAction(false)

        if (month % 12 == 11 || month % 12 == 3 || month % 12 == 7) {
            newSemester();
        }

        if (month == 59 && !won) {
            toast({
                title: "Game Over",
                description: "It's 2030, and William & Mary is not entirely under construction! You can still play in endless mode.",
                status: "error",
                duration: 10000
            })
        }
    }

    function newSemester() {
        if (month % 12 == 11 || month % 12 == 7) {
            setFunds(funds + (students * tuition))
            toast({
                title: "New Semester!",
                description: "Income added to funds",
                status: "success",
                duration: 3000
            })
        } else {
            setFunds(funds + ((students * tuition)/3))
            toast({
                title: "Summer Semester!",
                description: "1/3 of income added to funds",
                status: "success",
                duration: 3000
            })
        }
    }

    return (
        <Flex alignItems="center" justifyContent="space-evenly" marginBottom="10px">
            <Flex fontSize="50px" fontWeight="bolder" color="#115740" paddingX="20px" align="flex-start">
                Vision 2030
            </Flex>
            <Flex flex="1" alignItems="center" justifyContent="space-evenly" fontSize="50px" fontWeight="bolder" color="#D5D8DB" background="#115740" marginRight="20px" borderRadius="10px">
                <Flex flex="1" alignItems="center" justifyContent="center">
                    {months[(month % 12)]} {2025 + Math.trunc(month/12)}
                </Flex>
                <Button flex="1" marginX="2%" height="100%" fontSize="50px" fontWeight="bolder" color="#115740" background="#D5D8DB" onClick={() => nextMonth()}>
                    Next Month <Image boxSize="50px" src="/weathervane.png" marginLeft="20px"></Image>
                </Button>
            </Flex>
            <>
                <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                    <AlertDialogOverlay>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                Game Over
                            </AlertDialogHeader>
                            <AlertDialogBody>
                                It's January 2030 and William & Mary isn't all under construction!
                            </AlertDialogBody>
                            <AlertDialogFooter>
                                <Button ref={cancelRef} onClick={onClose}>
                                    Endless Mode
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </>
        </Flex>
    )
}