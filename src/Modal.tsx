import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import './tours.css';

export function Popup({info}: any) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} overlayProps={{blur: 3}} withCloseButton={false} centered>
                {info}
            </Modal>

            <Group position="center">
                <Button variant={'gradient'} gradient={{from: 'blue', to: 'green'}}
                        className={'infoBtn'} onClick={open}>More Information</Button>
            </Group>
        </>
    );
}