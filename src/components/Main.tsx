import { Box, Text, Heading, Icon, HStack, Tabs, Tab, TabList, TabPanel, TabPanels, TabIndicator, CircularProgress, CircularProgressLabel, Stack, VStack, StackProps, Flex } from "@chakra-ui/react";
import { NairaIcon, FoodDrinkIcon, SavingsIcon } from "../icons/Icons";

interface ProgressType extends StackProps {
    size: string,
    thickness: string,
    trackColor: string,
    color: string,
    value: number
}

interface BreakdownItemType extends StackProps {
    budget: number,
    spent: number,
    title: string
}

export const Progress = (props: ProgressType) => {
    const { children, size, thickness, trackColor, color, value } = props
    return (
        <CircularProgress value={value} trackColor={trackColor} color={color} size={size} thickness={thickness}>
            <CircularProgressLabel color='#0466C8' fontSize='4xl' fontWeight='bold' lineHeight='9' letterSpacing='tighter'>{children}</CircularProgressLabel>
        </CircularProgress>
    )
}

export const BreakdownItem = (props: BreakdownItemType) => {
    const { children, budget, spent, title } = props;
    return (
        <Stack as='li' direction='row' spacing='' justify='space-between' align='flex-start'>
            <HStack spacing='2.5'>
                {children}

                <Flex direction='column' justify='center' gap='1' color='#001233'>
                    <Heading as='h3' fontSize='md' fontWeight='medium' lineHeight='6'>{title}</Heading>
                    <Text fontSize='md'>{`${Math.ceil(spent / budget * 100)}%`}</Text>
                </Flex>
            </HStack>

            <Text as='p' fontSize='lg' lineHeight='6' letterSpacing='tighter' fontWeight='semibold'>
                <Text as='span' color='#001233'>{`₦${spent}`}</Text>
                <Text as='span' color='#C1C4CD'>/{`₦${budget}`}</Text>
            </Text>
        </Stack>
    )
}

export const TabContent = () => {
    return (
        <VStack spacing='5' pt='5'>
            <Progress value={49} trackColor='rgba(4, 102, 200, 0.40)' color='#0466C8' size={'150px'} thickness='7px'>
                <Text as='div' color='#0466C8' fontSize='4xl' fontWeight='bold' lineHeight='9' letterSpacing='tighter'>49%</Text>
            </Progress>

            <Text fontSize='sm' color='#707480'>Amount spent so far</Text>

            <Text as='p' fontSize='md' lineHeight='8' letterSpacing='tighter' fontWeight='semibold' mt='-5'>
                <Text as='span' color='#0466C8'>₦50,000</Text>
                <Text as='span' color='#67A2DC'>/₦120,000</Text>
            </Text>
        </VStack>
    )
}


export const Main = () => {
    return (
        <Box>
            <Box as={'section'} px={'7'} py={'5'}>
                <Heading fontSize={'3xl'} fontWeight={'bold'} color={'#001233'} letterSpacing={'tighter'}>Budget</Heading>

                <HStack spacing={'2.5'} mt={'7'} mb={'2.5'}>
                    <Icon as={NairaIcon} />
                    <Text fontSize={'sm'} color={'#707480'}>Monthly Budget</Text>
                </HStack>

                <Box bg={'white'} px={'5'} py={'2'} borderRadius={'0.625em'} boxShadow={'0px 5px 10px 2px rgba(0, 0, 0, 0.03)'} mb={'7'}>
                    <Text fontSize={'3xl'} fontWeight={'bold'} lineHeight={'9'} letterSpacing={'tighter'}>₦120,000</Text>
                </Box>

                <Tabs position="relative" variant="unstyled" defaultIndex={1}>
                    <TabList>
                        <Tab
                            color='#707480'
                            fontWeight='medium'
                            _selected={{ color: '#0466C8' }}
                        >Last Month</Tab>
                        <Tab
                            color='#707480'
                            fontWeight='medium'
                            _selected={{ color: '#0466C8' }}
                        >This Month</Tab>

                    </TabList>
                    <TabIndicator
                        mt="-1.5px"                      
                        position='relative'
                        _after={{
                            content: "''",
                            position: "absolute",
                            height: "3px",
                            background: "#0466C8",
                            top: "100%",
                            width: "40%",
                            left: "35%",
                            transform: "translateX(-50%)"
                        }}
                    />
                    <TabPanels>
                        <TabPanel>
                            <TabContent />
                        </TabPanel>
                        <TabPanel>
                            <TabContent />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

            <Box>
                <Heading color='#001233' fontSize='xl' fontWeight='medium' lineHeight='base' mx='7' mb='2.5'>Category Breakdown</Heading>

                <Stack as='ul' px='7' py='5' mx='1.5px' bg='#FCFEFF' boxShadow='0px 5px 10px 2px rgba(0, 0, 0, 0.03)' borderRadius='lg' spacing='5'>
                    <BreakdownItem spent={20000} budget={42000} title="Food and Drink">
                        <Progress size='50px' thickness='5px' trackColor="#F4E9CD" color="#C89104" value={Math.ceil((20000 / 42000) * 100)}>
                            <Flex justify='center' align='center' boxSize='40px' ml='4px' bg='#F4E9CD' borderRadius='full' >
                                <Icon as={FoodDrinkIcon} />
                            </Flex>
                        </Progress>
                    </BreakdownItem>

                    <BreakdownItem spent={10000} budget={24000} title="Savings">
                        <Progress size='50px' thickness='5px' trackColor="rgba(3, 138, 57, 0.2)" color="#038A39" value={Math.ceil((10000 / 24000) * 100)}>
                            <Flex justify='center' align='center' boxSize='40px' ml='4px' bg='rgba(3, 138, 57, 0.2)' borderRadius='full' >
                                <Icon as={SavingsIcon} />
                            </Flex>
                        </Progress>
                    </BreakdownItem>

                </Stack>
            </Box>
        </Box>
    )
}
