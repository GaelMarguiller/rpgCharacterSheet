import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { Heading, Text } from '@chakra-ui/react';

function ErrorPage() {
    const error = useRouteError();

    return (
        <div id='error-page'>
            <Heading size='md'>Oops!</Heading>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <Text>
                <Text as='i'>
                    $
                    {isRouteErrorResponse(error)
                        ? `${error.status} ${error.statusText}`
                        : 'Erreur inconnue'}
                </Text>
            </Text>
        </div>
    );
}

export default ErrorPage;
