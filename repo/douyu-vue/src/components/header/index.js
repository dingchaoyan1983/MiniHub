import Nav from './nav';
import HeaderActions from './header-actions';

export default {
    render(h) {
        return <div id="header">
                    <div class="head w1366head">
                        <a class="head-logo fl" href="https://www.douyu.com/"></a>
                        <Nav/>
                        <HeaderActions/>
                    </div>
                </div>
    }
}
