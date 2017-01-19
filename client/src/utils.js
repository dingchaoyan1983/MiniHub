/**
 * some utils
 */
import Path from 'path';

const DELIMITER = '/';

export function extname(splat = '') {
    return Path.extname(splat);
}

export function isFile(splat = '') {
    const ext = extname(splat);
    return !!ext.trim().length;
}

export function splitPath(splat = '') {
    return splat.split(DELIMITER);
}
