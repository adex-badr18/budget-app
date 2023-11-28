import React from "react";
import {
    HomeIcon,
    ReportIcon,
    BudgetIcon,
    ChatIcon,
    ProfileIcon
} from "../icons/Icons";
import {
    VStack,
    Icon,
    Text,
    Flex,
    Box
} from "@chakra-ui/react";

interface LinkType {
    icon: React.ElementType,
    linkName: string
};

const NavItem = (props: LinkType) => {
    const { icon, linkName } = props;
    return (
        <VStack
            as='a'
            spacing='2.5'
            mt={linkName === 'Chat' ? '-11px' : ''}
            cursor='pointer'
        >
            <Icon as={icon} />
            <Text
                fontSize='xs'
                fontWeight='medium'
                color={linkName === 'Budget' ? '#001233' : '#C1C4CD'}
                mt={linkName === 'Chat' ? '-15px' : ''}
            >
                {linkName}
            </Text>
        </VStack>
    )
};

export const Nav = () => {
    const links: LinkType[] = [
        { linkName: 'Home', icon: HomeIcon },
        { linkName: 'Report', icon: ReportIcon },
        { linkName: 'Chat', icon: ChatIcon },
        { linkName: 'Budget', icon: BudgetIcon },
        { linkName: 'Profile', icon: ProfileIcon }
    ];

    return (
        <Box
            as='nav'
            position='sticky'
            bg='white'
            zIndex='sticky'
            w='100%'
            bottom='0'
            left='0'
            right='0'
            boxShadow='0px -5px 20px 5px rgba(0, 0, 0, 0.04)'
        >
            <Flex
                as='ul'
                listStyleType='none'
                direction='row'
                justify='space-between'
                px='7'
                py='6'
            >
                {links.map((link: LinkType, index: number) => (
                    <Box as='li' key={index}>
                        <NavItem linkName={link.linkName} icon={link.icon} />
                    </Box>
                ))}
            </Flex>
        </Box>
    )
}
