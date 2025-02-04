import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import Slider from '@mui/material/Slider';

// Set the workerSrc to the provided CDN for pdfjs
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfReader: React.FC = () => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [fileUrl, setFileUrl] = useState<string>('/files/your-file.pdf'); // Update the path to your PDF file

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        setPageNumber(newValue as number);
    };

    return (
        <div>
            <Document
                file={fileUrl}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div>Loading PDF...</div>}
                error={<div>Failed to load PDF</div>}
                options={{
                    cMapUrl: 'cmaps/',
                    cMapPacked: true,
                    disableAnnotationLayer: true,
                    disableTextLayer: true,
                }}
            >
                {Array.from(new Array(numPages), (el, index) => (
                    <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                ))}
            </Document>

            {numPages && (
                <div style={{ marginTop: '20px' }}>
                    <Slider
                        value={pageNumber}
                        min={1}
                        max={numPages}
                        step={1}
                        onChange={handleSliderChange}
                        valueLabelDisplay="auto"
                    />
                    <p>
                        Page {pageNumber} of {numPages}
                    </p>
                </div>
            )}
        </div>
    );
};

export default PdfReader;
