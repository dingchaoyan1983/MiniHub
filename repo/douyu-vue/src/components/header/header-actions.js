import ActionIcon from './action-icon';

export default {
    render(h) {
        return <div class="head-oth fr">
                    <div class="o-search fl">
                        <input class="s-ipt fl" type="text" autocomplete="off" placeholder="搜房间/主播/分类" value="" id="suggest-search"/>
                        <a class="s-ico fr" href="https://www.douyu.com/directory/game/mszb#">
                            <i class="icofont"></i>
                        </a>
                    </div>
                    <ActionIcon action="history" text="历史">
                        <ul class="h-list">
                            <li><p><a href="/531869" target="_blank">斗鱼第一汽车频道！</a></p><span><a href="#" class="head-ico1">18小时前</a><a href="#" class="head-ico2">电影天地520</a><a href="#" class="head-ico3">355</a></span></li>
                            <li><p><a href="/466326" target="_blank">我不是卖票的啊啊啊啊啊啊</a></p><span><a href="#" class="head-ico1">18小时前</a><a href="#" class="head-ico2">冷小六</a><a href="#" class="head-ico3">0</a></span></li>
                            <li><p><a href="/992048" target="_blank">小z妹妹的直播间</a></p><span><a href="#" class="head-ico1">18小时前</a><a href="#" class="head-ico2">小z妹妹</a><a href="#" class="head-ico3">33749</a></span></li>
                            <li><p><a href="/71017" target="_blank">冯提莫：前几天没怎么睡觉今天休息下..</a></p><span><a href="#" class="head-ico1">2天前</a><a href="#" class="head-ico2">冯提莫</a><a href="#" class="head-ico3">350</a></span></li>
                            <li><p><a href="/255865" target="_blank">今日直播时间：19:00</a></p><span><a href="#" class="head-ico1">2天前</a><a href="#" class="head-ico2">Infi小王</a><a href="#" class="head-ico3">13</a></span></li>
                        </ul>
                    </ActionIcon>
                    <ActionIcon action="follow" text="关注"/>
                    <ActionIcon action="download" text="下载">
                        <ul>
                            <li>
                                <a href="/client?platform=2" target="_blank">App下载</a>
                            </li>
                            <li>
                                <a href="/client?platform=1" target="_blank">主播工具下载</a>
                            </li>
                        </ul>
                    </ActionIcon>
                </div>
    }
}
