/**
 * some utils
 */
import Path from 'path';
import DiffMatchPatch from 'diff-match-patch';

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

export function createPatch(text1, text2) {
    const diff = dmp.diff_main(text1, text2, true);

    if (diff.length > 2) {
        dmp.diff_cleanupSemantic(diff);
    }

    const patch_list = dmp.patch_make(text1, text2, diff);
    const patch_text = dmp.patch_toText(patch_list);

    return patch_text;
}

export function applyPatch(text1, patch_text) {
    const patches = dmp.patch_fromText(patch_text);
    const results = dmp.patch_apply(patches, text1);
    return results[0];
}
