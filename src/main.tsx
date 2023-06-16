import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import ErrorPage from './components/errorPage';
import App from './App';
import theme from './theme';
import RpgCharactersSheetsPage from './RpgCharactersSheetsPage';

const container = document.getElementById('root');

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/rpg/:id',
        element: <RpgCharactersSheetsPage />,
        errorElement: <ErrorPage />,
    },
]);

const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>
);
