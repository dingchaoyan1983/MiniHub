export default {
    props: {
        href: {
            type: String,
            default : 'http://www.baidu.com'
        }
    },
    render(h) {
        return <div class="btn-all"><a target="_blank" href={this.href}>全部&gt;&gt;</a></div>        
    }
}
