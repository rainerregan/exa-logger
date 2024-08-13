# Exalogger

A simple and customizable terminal logger utility for Node.js applications. Exalogger allows you to log messages with different levels of severity (`INFO`, `WARN`, `ERROR`), all with color-coded output for better readability.

## Features

- **Timestamped Logs**: Automatically adds a timestamp to every log.
- **Color-Coded Output**: Uses `chalk` to colorize log levels for easy identification.
- **Simple API**: Call `info`, `warn`, or `error` methods directly without the need for instantiating classes.
- **Chainable Logging**: Supports chaining log levels in a single line.

## Installation

You can install the library via npm:

```bash
npm install exalogger
```

## Usage

Import the Exalogger object and use the logging functions as needed.

```typescript
import { Exalogger } from 'exalogger';

Exalogger.info('This is an info message');
Exalogger.warn('This is a warning message');
Exalogger.error('This is an error message');
```

### Example Output

When using the logger, you’ll see output like this in your terminal:

```
[2024-08-13 14:55:23] INFO: This is an info message
[2024-08-13 14:55:24] WARN: This is a warning message
[2024-08-13 14:55:25] ERROR: This is an error message
```

### Chaining Example

You can chain multiple log methods together:

```typescript
Exalogger.info('Starting process...')
         .warn('Low disk space')
         .error('Failed to complete process');
```

## Dependencies

Dependencies

	•	dayjs: For formatting timestamps.
	•	chalk: For colorizing terminal output.


## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Author

Rainer Regan - rainer.aff@gmail.com