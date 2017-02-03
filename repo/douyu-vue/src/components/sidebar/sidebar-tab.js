import classname from 'classname';

export default {
    props: {
        label: {
            type: String,
            default: 'untitled'
        },
        className: {
            type: String,
            default: ''
        }
    },
    render(h) {
        return <div class={classname('r-cont', 'column-cont', this.selected ? '' : 'hide')}>
                {this.$slots.default}
               </div>
    },
    mounted() {
        this.$parent.registerTab(this);
    },
    computed: {
        selected() {
            return this === this.$parent.tabs[this.$parent.activeTabIndex];
        }
    }
}