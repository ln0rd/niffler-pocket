import clipboard from 'clipboardy';

const copyToClipboard = (value) => {
    clipboard.writeSync(value);
}

export { copyToClipboard }