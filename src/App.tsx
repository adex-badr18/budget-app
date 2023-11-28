import { NotificationPanel } from "./components/NotificationPanel";
import { Main } from "./components/Main";
import { Box } from "@chakra-ui/react";
import { Nav } from "./components/Nav";

function App() {
    return (
        <Box as="main" bg={'#FCFCFC'} maxW='550px' mx='auto'>
            <NotificationPanel />
            <Main />
            <Nav />
        </Box>
    )
}

export default App
