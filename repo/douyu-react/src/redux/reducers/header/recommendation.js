const initialState = {
    name: '玩家推荐',
    items: [
        {text: '星际争霸', href: 'https://www.douyu.com/directory/game/SC'},
        {text: '格斗游戏', href: 'https://www.douyu.com/directory/game/FTG'},
        {text: '怀旧游戏', href: 'https://www.douyu.com/directory/game/classic'},
        {text: '我的世界', href: 'https://www.douyu.com/directory/game/MC'},
        {text: '王者荣耀', href: 'https://www.douyu.com/directory/game/wzry'},
        {text: '皇室战争', href: 'https://www.douyu.com/directory/game/hszz'},
        {text: '综合手游', href: 'https://www.douyu.com/directory/game/phone'},
        {text: 'DNF', href: 'https://www.douyu.com/directory/game/DNF'},
        {text: '户外', href: 'https://www.douyu.com/directory/game/outdoor'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}
