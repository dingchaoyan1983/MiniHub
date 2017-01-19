/**
 * project view container
 */
import {connect} from 'react-redux';

import Projects from '../mainbody/projects';

function mapStatesToProps({projects}) {
    return {
        projects
    };
}

export default connect(mapStatesToProps)(Projects);
