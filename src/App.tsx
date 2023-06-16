import { PDFDocument } from 'pdf-lib';
import { useCallback, useEffect, useState } from 'react';

import { Box, Flex, Grid, Text } from '@chakra-ui/react';

import RpgCard from './components/rpgCard';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
    const [pdfData, setPdfData] = useState<PDFDocument | null>(null);

    const loadPdf = useCallback(async () => {
        const url = 'public/PDF/DnD_5E_CharacterSheet_FormFillable.pdf';
        const existingPdfBytes = await fetch(url).then((res) =>
            res.arrayBuffer()
        );
        const pdfDoc = await PDFDocument.load(existingPdfBytes);
        setPdfData(pdfDoc);
    }, []);

    useEffect(() => {
        loadPdf();
    }, [loadPdf]);

    return (
        <Box>
            <Flex
                as='header'
                direction='column'
                alignItems='center'
                justifyContent='center'
                h='70vh'
                fontSize='3xl'
            >
                <Text fontSize={textFontSizes} mb='6'>
                    This site is there to generate PDFs of character sheets from
                    different roleplaying games.
                </Text>
                <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                    <RpgCard />
                    <RpgCard />
                    <RpgCard />
                    <RpgCard />
                    <RpgCard />
                    <RpgCard />
                    <RpgCard />
                </Grid>
            </Flex>
        </Box>
    );
}

export default App;
