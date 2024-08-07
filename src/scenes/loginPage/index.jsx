import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {

    const theme = useTheme();
    const isNonMobileScreens = useMediaQuery("(min-width: 100px)");
    return (
        <center>
            <Box>
                <Box
                    width="100%"
                    backgroundColor={theme.palette.background.alt}
                    p="1rem 6%"
                    texAlign="center">
                    <Typography
                        fontWeight="bold"
                        fontSize="clamp(1rem,2rem,2.25rem)"
                        color="primary"
                    >
                        WISE
                    </Typography>
                </Box>

                <Box
                width={isNonMobileScreens ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                backgroundColor={theme.palette.background.alt}
                >
                    <Typography 
                    fontWeight="500" 
                    variant="h5" 
                    sx={{mb: "1.5rem"}}>
                        Spill the Tea and use us for free 
                    </Typography>
                    <Form></Form>
                </Box>
            </Box>
        </center>
    );
};

export default LoginPage;