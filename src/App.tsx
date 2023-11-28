import { NotificationPanel } from "./components/NotificationPanel";
import { Main } from "./components/Main";
import { Box } from "@chakra-ui/react";

function App() {

    return (
        <Box as="main" bg={'#FCFCFC'}>
            <NotificationPanel />
            <Main />
        </Box>
    )
}

export default App
