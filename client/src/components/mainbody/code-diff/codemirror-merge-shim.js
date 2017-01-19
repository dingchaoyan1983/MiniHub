import diffMatchPatch from 'diff-match-patch';

const {diff_match_patch, DIFF_DELETE, DIFF_INSERT, DIFF_EQUAL} = diffMatchPatch;

window.diff_match_patch = diff_match_patch;
window.DIFF_DELETE = DIFF_DELETE;
window.DIFF_INSERT = DIFF_INSERT;
window.DIFF_EQUAL = DIFF_EQUAL;
