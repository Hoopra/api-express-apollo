import app from '@server';
import { logger } from '@util';
import { Express } from 'express';
import cors from 'cors';
import { database } from './database/pool';

const listen = async (app: Express) => {
    app.use(cors());

    // Start the server
    const port = Number(process.env.PORT || 8000);
    // start database to force migration
    await database();
    app.listen(port, async () => {
        logger.info('Express server started on port: ' + port);
    });
};

listen(app);
