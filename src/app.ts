import app from '@server';
import { logger } from '@util';
import cors from 'cors';

app.use(cors());

// Start the server
const port = Number(process.env.PORT || 8000);
app.listen(port, async () => {
    logger.info('Express server started on port: ' + port);
});
