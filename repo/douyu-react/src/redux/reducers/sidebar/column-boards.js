const initialState = [
    {
        header: {
            title: '热门游戏',
            href: '/directory/columnRoom/game'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/LOL","text":"英雄联盟"},
            {"href":"https://www.douyu.com/directory/game/How","text":"炉石传说"},
            {"href":"https://www.douyu.com/directory/game/DOTA2","text":"DOTA2"},
            {"href":"https://www.douyu.com/directory/game/CF","text":"穿越火线"},
            {"href":"https://www.douyu.com/directory/game/WOW","text":"魔兽世界"},
            {"href":"https://www.douyu.com/directory/game/Overwatch","text":"守望先锋"},
            {"href":"https://www.douyu.com/directory/game/SC","text":"星际争霸"},
            {"href":"https://www.douyu.com/directory/game/FTG","text":"格斗游戏"},
            {"href":"https://www.douyu.com/directory/game/TVgame","text":"主机游戏"},
            {"href":"https://www.douyu.com/directory/game/DNF","text":"DNF"},
            {"href":"https://www.douyu.com/directory/game/qipai","text":"棋牌娱乐"},
            {"href":"https://www.douyu.com/directory/game/CSGO","text":"CS:GO"},
            {"href":"https://www.douyu.com/directory/game/mszb","text":"魔兽争霸"},
            {"href":"https://www.douyu.com/directory/game/classic","text":"怀旧游戏"}
        ]
    },
    {
        header: {
            title: '移动游戏',
            href: 'https://www.douyu.com/directory/columnRoom/ydyx'
        },
        items: [
            {"href":"https://www.douyu.com/directory/game/wzry","text":"王者荣耀"},
            {"href":"https://www.douyu.com/directory/game/yys","text":"阴阳师"},
            {"href":"https://www.douyu.com/directory/game/qqdzz","text":"球球大作战"},
            {"href":"https://www.douyu.com/directory/game/xyzx","text":"新游中心"},
            {"href":"https://www.douyu.com/directory/game/hyrz","text":"火影忍者"},
            {"href":"https://www.douyu.com/directory/game/hszz","text":"皇室战争"},
            {"href":"https://www.douyu.com/directory/game/phone","text":"综合手游"},
            {"href":"https://www.douyu.com/directory/game/mhzx","text":"梦幻诛仙"}
        ]
    }
];

export default function(state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}
