import { PDFDocument } from 'pdf-lib';
import { useCallback, useEffect, useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

const textFontSizes = [16, 18, 24, 30];

function App(): JSX.Element {
    const [pdfData, setPdfData] = useState<PDFDocument | null>(null);

    const loadPdf = useCallback(async () => {
        const url = 'src/PDF/DnD_5E_CharacterSheet_FormFillable.pdf';
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
                h='100vh'
                fontSize='3xl'
            >
                <Text fontSize={textFontSizes}>
                    This site is there to generate PDFs of character sheets from
                    different roleplaying games.
                </Text>
            </Flex>
        </Box>
    );
}

export default App;
