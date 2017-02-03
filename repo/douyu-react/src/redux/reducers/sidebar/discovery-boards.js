const initialState = [
    {
        header: {
            title: '我最喜欢'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/mszb?is_hot=1","text":"魔兽争霸"},
            {"href":"https://www.douyu.com/directory/game/xx?is_hot=1","text":"星秀"},
            {"href":"https://www.douyu.com/directory/game/gm?is_hot=1","text":"国漫"},
            {"href":"https://www.douyu.com/directory/game/LOL?is_hot=1","text":"英雄联盟"},
            {"href":"https://www.douyu.com/directory/game/yz?is_hot=1","text":"颜值"},
            {"href":"https://www.douyu.com/directory/game/outdoor?is_hot=1","text":"户外"},
            {"href":"https://www.douyu.com/directory/game/Overwatch?is_hot=1","text":"守望先锋"},
            {"href":"https://www.douyu.com/directory/game/smkj?is_hot=1","text":"数码科技"},
            {"href":"https://www.douyu.com/directory/game/hszz?is_hot=1","text":"皇室战争"}
        ]
    }
];

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
