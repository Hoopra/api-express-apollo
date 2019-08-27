import app from '@server';
import { logger } from '@util';

// Start the server
const port = Number(process.env.PORT || 8000);
app.listen(port, () => {
    logger.info('Express server started on port: ' + port);
});
