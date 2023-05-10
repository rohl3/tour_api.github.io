import {Carousel} from '@mantine/carousel';
import {useMediaQuery} from '@mantine/hooks';
import React from 'react';
import {Button, createStyles, Paper, rem, Text, Title, useMantineTheme} from '@mantine/core';
import {CardProps} from "./CardProps";
import {Popup} from "./Modal";

const useStyles = createStyles((theme) => ({
    card: {
        height: rem(420),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },

    title: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontWeight: 900,
        color: theme.white,
        lineHeight: 1.2,
        fontSize: rem(32),
        marginTop: theme.spacing.xs,
        textShadow: '1px 2px 10px black'
    },

    category: {
        color: theme.white,
        opacity: 0.7,
        fontWeight: 700,
        textTransform: 'uppercase',
    },
}));

function Card({ id, name, image, info, price }: CardProps) {
    const {classes} = useStyles();

    return (
        <Paper
            shadow="lg"
            p="xl"
            radius="md"
            sx={{backgroundImage: `url(${image})`}}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {price}$
                </Text>
                <Title order={3} className={classes.title}>
                    {name}
                </Title>
            </div>
            <Popup info={info} />
        </Paper>
    );
}

export default function CardsCarousel({data}: any) {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item: any) => (
        <Carousel.Slide key={item.id}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <Carousel
            slideSize="50%"
            breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: rem(2) }]}
            slideGap="xl"
            align="start"
            slidesToScroll={mobile ? 1 : 2}
        >
            {slides}
        </Carousel>
    );
}