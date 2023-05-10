import React, {useEffect, useState} from 'react';
import {Center, ColorScheme, ColorSchemeProvider, Container, Grid, Loader, MantineProvider, Space} from "@mantine/core";
import "./Tours";
import CardsCarousel from './Tours';
import {HeaderResponsive} from "./Header";

export default function Main(): any {
    const [loading, setLoading] = useState(false);
    const [tours, setTours] = useState([])

    const fetchTours = async () => {
        setLoading(true);
        try {
            const api = 'https://course-api.com/react-tours-project';
            const response = await fetch(api);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
        } catch (e) {
            setLoading(true);
            console.log(e);
        }
    }

    useEffect(() => {
        fetchTours()
    }, [])


    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    if (loading) {
        return (
            <MantineProvider theme={{loader: 'oval'}}>
                <Center maw={400} h={600} mx="auto">
                    <Loader color="yellow" size="xl"/>
                </Center>
            </MantineProvider>
        );
    } else {
        return (
            <Container fluid>
                <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                    <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                        <Grid>
                            <Grid.Col span={12}>
                                <HeaderResponsive />
                            </Grid.Col>
                            <Grid.Col span={'auto'}></Grid.Col>
                            <Grid.Col span={9}>
                                <Center>
                                    <CardsCarousel data={tours}/>
                                </Center>
                                <Space></Space>
                            </Grid.Col>
                            <Grid.Col span={'auto'}></Grid.Col>
                        </Grid>
                    </MantineProvider>
                </ColorSchemeProvider>
            </Container>

        )
    }
}


