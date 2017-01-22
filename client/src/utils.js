/**
 * some utils
 */
import Path from 'path';
import DiffMatchPatch from 'diff-match-patch';

const {DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL} = DiffMatchPatch;

const dmp = new DiffMatchPatch();
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

export function createPatch(text1 = '', text2 = '') {
    text1 = normalizeLineEndings(text1);
    text2 = normalizeLineEndings(text2);
    const diff = dmp.diff_main(text1, text2, true);
    let lines = 0;
    
    if (diff.length > 2) {
        dmp.diff_cleanupSemantic(diff);
    }

    for(let i = 0; i< diff.length; i++) {
        if(diff[i][0] === DIFF_DELETE) {
            let deleted = encodeURIComponent(diff[i][1]);
            //%0A is 换行符
            let count = countForSubstr(deleted, '%0A');
            lines = lines - count;
        }

        if (diff[i][0] === DIFF_INSERT) {
            let inserted = encodeURIComponent(diff[i][1]);
            //%0A is 换行符
            let count = countForSubstr(inserted, '%0A');
            lines = lines + count;
        }
    }

    const patches = dmp.patch_make(text1, text2, diff);

    return {patches, lines};
}

export function applyPatch(text1, patches) {
    const results = dmp.patch_apply(patches, text1);
    return results[0];
}

export function normalizeLineEndings (str) {
	if (!str) return str;
	return str.replace(/\r\n|\r/g, '\n');
}

export function countForSubstr(str, subStr) {
    let count = 0;
    while(true) {
        let position = str.indexOf(subStr);
        if(position > -1) {
            count++;
            str = str.substr(position + subStr.length);
        } else {
            break;
        }
    }

    return count;
}

