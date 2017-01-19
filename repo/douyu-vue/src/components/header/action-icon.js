import classname from 'classname';

export default {
    props: {
        action: {
            type: String,
            default: 'history'
        },
        text: {
            type: String,
            default: '历史'
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    render(h) {
        let dom = <div class={classname(`o-${this.action}`, 'fl')}>
                    <span class="icofont h-ico"></span>
                    <span class="h-txt">{this.text}</span>
                  </div> 

        if (Object.keys(this.$slots).length) {
            dom = <div class={classname(`o-${this.action}`, 'fl', this.expanded ? 'open' : '')} on-mouseenter={this.onMouseEnter} on-mouseleave={this.onMouseLeave}>
                    <span class="icofont h-ico"></span>
                    <span class="h-txt">{this.text}</span>
                    <div class="h-pop">
                        <i></i>
                        {this.$slots.default}
                    </div>
                 </div> 
        }   

        return dom;  
    },
    methods: {
        onMouseEnter() {
            this.closable = false;
            this.expanded = true;
        },
        onMouseLeave() {
            this.closable = true;

            window.setTimeout(() => {
                if (this.closable) {
                    this.expanded = false;
                }
            }, 100);
        }
    }
}
