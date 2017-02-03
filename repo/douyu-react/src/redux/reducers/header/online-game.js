const initialState = {
    name: '网游推荐',
    items: [
        {text: '少年群侠传', href: 'http://wan.douyu.com/snqxz/'},
        {text: '蓝月传奇', href: 'http://wan.douyu.com/lycq/'},
        {text: '盗墓笔记', href: 'http://wan.douyu.com/dmbj/'},
        {text: '铁骑冲锋', href: 'http://wan.douyu.com/tq/'},
        {text: '武神赵子龙', href: 'http://wan.douyu.com/zzl/'},
        {text: '青云志', href: 'http://wan.douyu.com/qyz/'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}
