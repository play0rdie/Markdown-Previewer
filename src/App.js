import React, { useState } from 'react';
import { Container, CssBaseline, Grid } from '@material-ui/core';
import { Editor } from './components/Editor';
import { Previewer } from './components/Previewer';

import { defaultText } from './components/defaultText';

const App = ()  => {
	const [text, setText] = useState(defaultText);
	
	const handleChange = (e) => {
		setText(e.target.value);
	}

	return (
		<>
			<CssBaseline />
			<Container fixed>
				<Grid container direction='row' justify="space-around" alignItems="flex-start" spacing={10}>
					<Grid item xs>
						<Editor text={text} setText={handleChange}/>
					</Grid>
					<Grid item xs>
						<Previewer text={text}/>
					</Grid>
				</Grid>
			</Container>
    	</>
	);
}

export default App;
