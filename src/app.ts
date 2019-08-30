import { Express } from 'express';
import cors from 'cors';
import app from 'src/server';
import { logger } from 'src/util';
import { database } from 'src/database/pool';

const listen = async (express: Express) => {
    express.use(cors());

    // Start the server
    const port = Number(process.env.PORT || 8000);
    // start database to force migration
    await database();
    express.listen(port, async () => {
        logger.info('Express server started on port: ' + port);
    });
};

listen(app);
