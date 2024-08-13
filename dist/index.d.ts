type LogLevel = 'INFO' | 'WARN' | 'ERROR';

declare const ExaLogger: {
    log: (level: LogLevel, ...messages: any) => {
        info: (...msgs: any) => any;
        warn: (...msgs: any) => any;
        error: (...msgs: any) => any;
    };
    info: (...messages: any) => {
        info: (...msgs: any) => any;
        warn: (...msgs: any) => any;
        error: (...msgs: any) => any;
    };
    warn: (...messages: any) => {
        info: (...msgs: any) => any;
        warn: (...msgs: any) => any;
        error: (...msgs: any) => any;
    };
    error: (...messages: any) => {
        info: (...msgs: any) => any;
        warn: (...msgs: any) => any;
        error: (...msgs: any) => any;
    };
};

export { ExaLogger };
