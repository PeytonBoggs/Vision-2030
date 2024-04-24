import { Button, Divider, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useToast } from "@chakra-ui/react"
import React from "react"

export default function Calendar({ month, setMonth, setUsedAction, funds, setFunds, rating, setRating, students, tuition, won }) {
    const toast = useToast()
    const { isOpen, onOpen, onClose } = useDisclosure({ defaultIsOpen: true })
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })

    function nextMonth() {
        setMonth(month + 1)
        setUsedAction(false)

        switch (month % 12) {
            case 11:
                //January: Spring semester begins
                setFunds(funds + (students * tuition))
                toast({
                    title: "Spring Semester Begins!",
                    description: Math.trunc(students) + " students pay " + formatter.format(tuition) + " each in tuition. " + formatter.format(students * tuition) + " added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 0:
                //February: Charter Day
                updateRating(20)
                toast({
                    title: "Charter Day " + (2025 + Math.trunc(month/12)) + "!",
                    description: "Celebrate " + (332 + Math.trunc(month/12)) + " years of William and Mary! Approval rating up 20%.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 1:
                //March: Spring Break
                updateRating(10)
                toast({
                    title: "Spring Break " + (2025 + Math.trunc(month/12)) + "!",
                    description: "Students relax and destress. Approval rating up 10%.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 2:
                //April: One Tribe One Day
                setFunds(funds + 250000000)
                toast({
                    title: "One Tribe One Day!",
                    description: "$250,000,000 raised and added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 3:
                //May: Spring LDOC
                updateRating(15)
                toast({
                    title: "Spring LDOC!",
                    description: "Students are happy to wrap up the spring semester. Approval rating up 15%.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 4:
                //June: Summer semester
                updateRating(10)
                setFunds(funds + (students * tuition * 0.25))
                toast({
                    title: "Summer Semester!",
                    description: "Some students relax on break, others pay for summer school. Approval rating up 10% and 25% of income added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 5:
                //July: Summer semester
                updateRating(10)
                setFunds(funds + (students * tuition * 0.25))
                toast({
                    title: "Summer Semester!",
                    description: "Some students relax on break, others pay for summer school. Approval rating up 10% and 25% of income added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 6:
                //August: Summer semester
                updateRating(10)
                setFunds(funds + (students * tuition * 0.25))
                toast({
                    title: "Summer Semester!",
                    description: "Some students relax on break, others pay for summer school. Approval rating up 10% and 25% of income added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 7:
                //September: Fall semester begins
                setFunds(funds + (students * tuition))
                toast({
                    title: "Fall Semester Begins!",
                    description: Math.trunc(students) + " students pay " + formatter.format(tuition) + " each in tuition. " + formatter.format(students * tuition) + " added to funds.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 8:
                //October: Homecoming
                updateRating(20)
                setFunds(funds + 50000000)
                toast({
                    title: "Homecoming " + (2025 + Math.trunc(month/12)) + "!",
                    description: "Alumni visit campus and are happy to donate. Approval rating up 20% and funds increase by $50,000,000.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 9:
                //November: Thanksgiving Break
                updateRating(10)
                toast({
                    title: "Thanksgiving Break " + (2025 + Math.trunc(month/12)) + "!",
                    description: "Students relax and destress. Approval rating up 10%.",
                    status: "success",
                    duration: 5000
                })
                break;
            case 10:
                //December: Fall LDOC
                updateRating(15)
                toast({
                    title: "Fall LDOC!",
                    description: "Students are happy to wrap up the fall semester. Approval rating up 15%.",
                    status: "success",
                    duration: 5000
                })
                break;
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

    function updateRating(change) {
        if (rating + change > 100) {
            setRating(100)
        } else if (rating + change < 0) {
            setRating(0)
        } else {
            setRating(rating + change)
        }
    }

    return (
        <Flex alignItems="center" justifyContent="space-between" marginBottom="1rem" height="10vh">
            <Button alignItems="center" justifyContent="center" backgroundColor="#D5D8DB" height="100%" borderRadius="1rem" marginX="1rem" onClick={onOpen}>
                <Image src="/cypher.png" boxSize="3rem" marginRight="1rem"/>
                <Flex fontSize="2rem" fontWeight="bolder">
                    Vision 2030
                </Flex>
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={"xl"} scrollBehavior="inside">
                <ModalOverlay />
                <ModalContent alignItems="center">
                    <ModalHeader>Vision 2030</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Flex flexDirection="column" alignItems="center">
                            <Image src="/sunken_garden.jpg"/>
                            <Flex flexDirection="column">
                                <Text marginY="0.5rem">It's January 2025, and you're the President of William & Mary. As you walk through the Wren Building and look out across the Sunken Garden, you realize that there's only one thing that could make this campus better: construction. You have a vision -</Text>
                                <Text marginY="0.5rem" marginLeft="2rem" fontWeight="bold">"By 2030, William & Mary will be entirely under construction."</Text>
                                <Text marginY="0.5rem">But there's so many things to do, and so little time. Welcome to Vision 2030.</Text>
                                <Divider />
                                <Text marginY="0.5rem">A map of campus is laid out in front of you, and active construction sites are highlighted in red. You can click on any site to see it's status and associated costs.</Text>
                                <Text marginY="0.5rem">To the left, you can view your current funds and approval rating. Each site costs money and approval to put under construction - you will not be allowed to construct if these numbers dip too low. Your income (number of students times tuition per student) is paid at the start of each semester.</Text>
                                <Text marginY="0.5rem">To the right, the "Actions" tab shows actions that you can take as President to help you reach your vision. You can only take one action per month. The "Construct" tab lays out every site not actively under construcion. If you have enough funds and approval, you can start construction on a site by clicking the corresponding button.</Text>
                                <Text marginY="0.5rem">Finally, the "Next Month" button at the top advances the game one month.</Text>
                                <Text marginY="0.5rem">Good luck, President. The future of William & Mary is in your hands.</Text>
                            </Flex>
                        </Flex>
                    </ModalBody>
                    <ModalFooter width="100%">
                        <Button colorScheme="green" onClick={onClose} width="100%">
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Flex flex="1" alignItems="center" justifyContent="center" fontSize="2.5rem" fontWeight="bolder" background="#9e7d43" borderRadius="1rem" marginX="1rem">
                {months[(month % 12)]} {2025 + Math.trunc(month/12)}
            </Flex>
            <Button height="100%" marginX="1rem" fontSize="2rem" fontWeight="bolder" color="#D5D8DB" background="#115740" onClick={() => nextMonth()} _hover={{bg: "#0d4230"}}>
                Next Month <Image boxSize="2rem" src="/weathervane.png" marginLeft="1rem"></Image>
            </Button>
        </Flex>
    )
}