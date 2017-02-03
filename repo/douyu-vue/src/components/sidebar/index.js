import Channel from './channel';
import SidebarTabs from './sidebar-tabs';
import SidebarTab from './sidebar-tab';
import Board from './board';

export default {
    render(h) {
        const {sidebar: {columnBoards, discoveryBoards}} = this.$store.state;

        return <div id="left" class="left-menu">
                    <a class="left-btn">
                        <span></span>
                    </a>
                    <div class="left-big">
                        <div class="channel-cate">
                            <ul>
                                <Channel text="全部直播"  iconClassName="icon-live" to="all-lives"/>
                                <Channel text="全部分类" iconClassName="icon-game" to="all-categories"/>
                                <Channel text="排行榜" iconClassName="icon-rank" to="ranking-list"/>
                                <Channel text="我的关注" iconClassName="icon-focus" to="my-focus"/>
                                <Channel text="頁游中心" iconClassName="icon-collect" to="webgame-center"/>
                            </ul>
                        </div>
                        <SidebarTabs>
                            <SidebarTab label="栏目" className="icon-column">
                                {
                                    columnBoards.map(({header, items}) => <Board header={header} items={items}/>)
                                }
                            </SidebarTab>
                            <SidebarTab label="发现" className="icon-recom">
                                {
                                    discoveryBoards.map(({header, items}) => <Board header={header} items={items}/>)
                                }
                            </SidebarTab>
                        </SidebarTabs>
                    </div>
                </div>
    }
}