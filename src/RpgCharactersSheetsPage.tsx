import { useCallback, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import { Box, Text } from '@chakra-ui/react';

type PDFFile = string | File | null;

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url
).toString();

function RpgCharactersSheetsPage() {
    const [file, setFile] = useState<PDFFile>(
        '../public/PDF/DnD_5E_CharacterSheet_FormFillable.pdf'
    );
    const [numPages, setNumPages] = useState<number>();

    const onDocumentLoadSuccess = useCallback(
        ({ numPages: nextNumPages }: { numPages: number }) => {
            setNumPages(nextNumPages);
        },
        []
    );
    console.log(file);

    return (
        <Box>
            <Text>coucou</Text>
            <Box>
                <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.from(new Array(numPages), (el, index) => (
                        <Page
                            key={`page_${index + 1}`}
                            pageNumber={index + 1}
                        />
                    ))}
                </Document>
            </Box>
        </Box>
    );
}

export default RpgCharactersSheetsPage;
