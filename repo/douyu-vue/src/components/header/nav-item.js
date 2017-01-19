import classname from 'classname';

export default {
    props: {
        class: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: 'http://www.baidu.com'
        },
        name: {
            type: String,
            default: 'untitled'
        }
    },
    data() {
        return {
            expanded: false
        }
    },
    render(h) {
        let navItem = null;

        if(!!Object.keys(this.$slots).length) {
            navItem = <li class={classname('fl', 'assort' ,this.class, this.expanded ? 'open' : '')} on-mouseenter={this.onMouseEnter} on-mouseleave={this.onMouseLeave}>
                        <a href={this.href}>{this.name}</a>
                        <i></i>
                        <div class="a-pop">
                            <i></i>
                            {this.$slots.default}
                        </div>
                      </li>
        } else {
            navItem = <li class={classname('fl', this.class)}>
                        <a href={this.href}>{this.name}</a>
                      </li>
        }
        
        return navItem;  
    },
    methods: {
        onMouseEnter(e) {
            this.closable = false;
            this.expanded = true;
        },
        onMouseLeave() {
            this.closable = true;

            window.setTimeout(() => {
               if (this.closable) {
                    this.expanded = false
               }
            }, 100);
        }
    }
}
