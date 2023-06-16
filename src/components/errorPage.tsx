import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Box, Heading, Text, Flex } from '@chakra-ui/react';

function ErrorPage() {
    const error = useRouteError();

    return (
        <Box id='error-page'>
            <Flex
                direction='column'
                alignItems='center'
                justifyContent='center'
                h='100vh'
            >
                <Heading size='xl'>Oops!</Heading>
                <Text fontSize='4xl'>
                    Sorry, an unexpected error has occurred.
                </Text>
                <Text>
                    <Text fontSize='3xl' as='i'>
                        {isRouteErrorResponse(error)
                            ? `${error.status} ${error.statusText}`
                            : 'Erreur inconnue'}
                    </Text>
                </Text>
            </Flex>
        </Box>
    );
}

export default ErrorPage;
