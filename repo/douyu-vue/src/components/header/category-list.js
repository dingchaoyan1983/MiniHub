export default {
    props: {
        name: {
            type: String,
            default: 'untitled'
        },
        items: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    render(h) {
        return <div class="a-list">
                    <h3>{this.name}</h3>
                    <ul class="btns">
                        {
                            this.items.map((item) => <li><a target="_blank" class="btn" href={item.href}>{item.text}</a></li>)
                        }
                    </ul>
                    {this.$slots.default}
                </div>
    }
}
