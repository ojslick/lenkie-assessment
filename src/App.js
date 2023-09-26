import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Routes } from './Routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { theme } from './theme';
import { Navbar } from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

export function App() {
    const queryClient = new QueryClient();
    return (
        <ThemeProvider theme={theme}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Navbar />
                    <Routes />
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
