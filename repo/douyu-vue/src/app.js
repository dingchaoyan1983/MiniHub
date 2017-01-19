import Header from './components/header';
import Sidebar from './components/sidebar';

export default {
    render(h) {
        return <div>
             <Header/>
             <Sidebar/>
             <div class="mainbody">
                <router-view></router-view>
             </div>
           </div>;
    }
}