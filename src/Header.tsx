import {
    createStyles,
    Header,
    Container,
    rem,
    Group,
    Title,
} from '@mantine/core';
import {ActionToggle} from "./ThemeScheme";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    }

}));

export function HeaderResponsive() {
    const { classes } = useStyles();

    return (
        <Header height={HEADER_HEIGHT} mb={69} className={classes.root}>
            <Container className={classes.header}>
                <Group position={'apart'}>
                    <Title order={2}>Tours</Title>
                    <ActionToggle />
                </Group>

            </Container>
        </Header>
    );
}