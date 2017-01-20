import { connect } from 'react-redux';
import CodeEditor from '../mainbody/code-editor'; 
import { modifyContent, loadContent, loadHistory, syncRedux } from '../../redux/reducers/file';

export default connect(null, {
    modifyContent,
    loadContent,
    loadHistory,
    syncRedux
})(CodeEditor);