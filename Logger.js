const winston = require('winston');
 
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log'}),
    new winston.transports.File({ filename: 'info.log',  level: 'info'}),
    new winston.transports.File({ filename: 'warn.log',  level: 'warn'}),
    new winston.transports.File({ filename: 'http.log',  level: 'http'}),
    new winston.transports.File({ filename: 'verbose.log',  level: 'verbose'}),
    new winston.transports.File({ filename: 'debug.log',  level: 'debug'}),
    new winston.transports.File({ filename: 'silly.log',  level: 'silly'})
  ],
});
 
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
      format: winston.format.simple(),
    }));
}

function check(level){
    switch(level) {
        case info: logger.info('this is info');break;
        case warn: logger.warn('this is warn');break;
        case error: logger.error('this is error');break;
        case http: logger.http('this is http');break;
        case verbose: logger.verbose('this is verbose');break;
        case debug: logger.debug('this is debug');break;
        case silly: logger.silly('this is silly');
    };
}

check(info);
check(warn);
check(error);
