import { Card, CardBody, Heading, Image, Stack } from '@chakra-ui/react';

function RpgCard(): JSX.Element {
    return (
        <Card maxW='sm'>
            <CardBody>
                <Image
                    src='../src/PDF/DD-Logo.png'
                    alt='dungeons & dragon logo'
                    borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>Dungeons & Dragon</Heading>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default RpgCard;
