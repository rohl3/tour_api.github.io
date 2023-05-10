import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core';
import React from 'react';
import {BsMoonStarsFill, BsSunFill} from 'react-icons/bs';
export function ActionToggle() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <Group position="center" my="xl">
            <ActionIcon
                onClick={() => toggleColorScheme()}
                size="lg"
                sx={(theme) => ({
                    backgroundColor:
                        theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                    color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.blue[6],
                })}
            >
                {colorScheme === 'dark' ? <BsSunFill size="1.2rem" /> : <BsMoonStarsFill size="1.2rem" />}
            </ActionIcon>
        </Group>
    );
}