import React from 'react';
import { TextField, Paper } from '@material-ui/core';

export const Editor = ({ text, setText }) => {
    return (
        <Paper style={{padding: 10, marginTop: 20}}>
            <TextField
                id="editor"
                label="Editor"
                multiline
                margin="normal"
                fullWidth
                type="textarea"
                value={text}
                onChange={setText}
            />
        </Paper>
    )
}