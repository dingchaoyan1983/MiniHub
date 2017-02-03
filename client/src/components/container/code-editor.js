import { connect } from 'react-redux';
import CodeEditor from '../mainbody/code-editor'; 
import { modifyFile, loadFileTree, loadHistory, syncRedux } from '../../redux/reducers/file';

export default connect(null, {
    modifyFile,
    loadFileTree,
    loadHistory,
    syncRedux
})(CodeEditor);