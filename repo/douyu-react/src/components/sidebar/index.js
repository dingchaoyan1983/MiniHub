import React from 'react';
import Channel from './channel';
import SelectStateManager from 'src/components/common/select-state-manager';
import SidebarTabs from './sidebar-tabs';
import SidebarTab from './sidebar-tab';
import Board from './board';

export default function Sidebar(props) {
    const {columnBoards, discoveryBoards} = props;

    return <div id="left" className="left-menu">
                <a className="left-btn">
                    <span></span>
                </a>
                <div className="left-big">
                    <div className="channel-cate">
                        <ul>
                            <Channel text="全部直播"  iconClassName="icon-live" to="all-lives"/>
                            <Channel text="全部分类" iconClassName="icon-game" to="all-categories"/>
                            <Channel text="排行榜" iconClassName="icon-rank" to="ranking-list"/>
                            <Channel text="我的关注" iconClassName="icon-focus" to="my-focus"/>
                            <Channel text="頁游中心" iconClassName="icon-collect" to="webgame-center"/>
                        </ul>
                    </div>
                    <SidebarTabs initAcitveTabIndex={0}>
                        <SidebarTab name="栏目" className="icon-column">
                            {
                                columnBoards.map(({header, items}) => <Board header={header} items={items}/>)
                            }
                        </SidebarTab>
                        <SidebarTab name="发现" className="icon-recom">
                            {
                                discoveryBoards.map(({header, items}) => <Board header={header} items={items}/>)
                            }
                        </SidebarTab>
                    </SidebarTabs>
                </div>
           </div>
}
