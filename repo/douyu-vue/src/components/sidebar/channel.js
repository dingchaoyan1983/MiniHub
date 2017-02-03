import classname from 'classname';

export default {
    props: {
        text: {
            type: String,
            default: '全部直播'
        },
        href: {
            type: String,
            default: 'javascript:void(0)'
        },
        iconClassName: {
            type: String,
            default: 'icon-live'
        },
        to: {
            type: String
        }
    },
    render(h) {
        return <li class={classname('channel-catelist-resize')}>
                    <router-link to={this.to} active-class="cur" class="channel-catelist-resize" href={this.href}> <i class={classname('icon', this.iconClassName )}></i>
                        <span>{this.text}</span>
                    </router-link>
               </li>
    }
}