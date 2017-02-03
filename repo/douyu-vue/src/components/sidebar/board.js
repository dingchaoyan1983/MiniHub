export default {
    props: {
        header: {
            type: Object,
            default() {
                return {
                    title: 'untitled',
                    href: 'javascript: void(0)'
                }
            }
        },
        items: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    render(h) {
        const {title, href} = this.header;

        return <div>
             <dl>
                <dt class="cur">
                    <a href={href}>
                        <i></i><span>{title}</span>
                    </a>
                </dt>
             </dl>
             <dd>
                <ul class="clearfix">
                    {
                        this.items.map(({text = 'untitled', href='javascript:void(0)'}) => <li><a href={href} title={text}>{text}</a></li>)
                    }
                 </ul>
             </dd>
           </div>
    }
}