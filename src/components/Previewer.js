import React, { useEffect } from 'react';
import { Paper, Box } from '@material-ui/core';
import marked from 'marked';

export const Previewer = ({ text }) => {
    useEffect(() => {
        const preview = document.querySelector('#preview');
        if (!preview) return;
        preview.innerHTML = marked(text, {
            breaks: true
        });
    })

    return (
        <Paper style={{padding: 10, marginTop: 20}}>
            <Box id='preview'>
                
            </Box>
        </Paper>
    )
}