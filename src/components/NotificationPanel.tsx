import { Box, Flex, Text, Stack, Icon } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NetworkIcon, WifiIcon, BatteryIcon } from "../icons/Icons";

export const NotificationPanel = () => {
    const [date, setDate] = useState(new Date());
    
    useEffect(() => {
        const intervalId = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(intervalId);
    }, []);

  return (
    <Box px={'7'} py={'3.5'}>
        <Flex align='center' justify='space-between'>
            <Text fontSize={'md'} fontWeight={'semibold'}>{`${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`}</Text>

            <Stack direction='row' spacing={'1.5'}>
                <Icon as={NetworkIcon} />
                <Icon as={WifiIcon} />
                <Icon as={BatteryIcon} />
            </Stack>
        </Flex>
    </Box>
  )
}
