import classname from 'classname';

export default {
    props: {
        initAcitveTabIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            activeTabIndex: 0,
            tabs: []
        }
    },
    created() {
        this.activeTabIndex = this.initAcitveTabIndex;
    },
    render(h) {
        return <div class="leftnav-cate">
                    <div class="r-tit">
                        <ul>
                            {
                                this.tabs.map(({label, className}, index) => {
                                    return  <li class={classname(index === this.activeTabIndex ? 'cur' : '')} on-click={this.onClick.bind(this, index)}>
                                                <i class={classname('icon', className)}></i>
                                                <span>{label}</span>
                                            </li>
                                }
                            )}
                        </ul>
                    </div>
                    {this.$slots.default}
               </div>
    },
    methods: {
        registerTab(tab) {
            this.tabs.push(tab);
        },
        onClick(index) {
            this.activeTabIndex = index;
        }
    }
}