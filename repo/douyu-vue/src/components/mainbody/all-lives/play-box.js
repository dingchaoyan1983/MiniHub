export default {
    props: {
        playBoxTitle: {
            type: String,
            default: 'untitled'
        },
        gameCategory: {
            type: String,
            default: '主机游戏'
        },
        playPerson: {
            type: String,
            default: 'dane.ding'
        }
    },
    render(h) {
        return <li class="playBox">
                <span class="imgbox">
                    <b></b>
                    <i class="black"></i>
                    <img src="https://rpic.douyucdn.cn/a1701/13/12/477076_170113125542.jpg" width="283" height="163" style="display: inline;"/>
                </span>
                <div class="mes">
                    <div class="mes-tit">
                        <h3 class="ellipsis">{this.playBoxTitle}</h3>
                        <span class="tag ellipsis">{this.gameCategory}</span>
                    </div>
                    <p><span class="dy-name ellipsis fl">{this.playPerson}</span></p>
                </div>
               </li>
    }
}