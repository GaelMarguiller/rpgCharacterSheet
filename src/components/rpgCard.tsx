import { Box, Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';

function RpgCard(): JSX.Element {
    return (
        <Card maxW='250px'>
            <CardBody>
                <Stack
                    display='flex'
                    direction='column'
                    alignItems='center'
                    justifyContent='center'
                >
                    <Image
                        src='../public/image/DD-Logo.png'
                        alt='dungeons & dragon logo'
                        borderRadius='lg'
                        boxSize='75%'
                    />
                    <Box mt='6' display='flex' justifyContent='center'>
                        <Text as='b' fontSize='md'>
                            Dungeons & Dragon
                        </Text>
                    </Box>
                </Stack>
            </CardBody>
        </Card>
    );
}

export default RpgCard;
