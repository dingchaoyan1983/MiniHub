const initialState = {
     name: '热门分类',
     items: [
        {text: '英雄联盟', href: 'https://www.douyu.com/directory/game/LOL'},
        {text: '炉石传说', href: 'https://www.douyu.com/directory/game/How'},
        {text: 'DOTA2', href: 'https://www.douyu.com/directory/game/DOTA2'},
        {text: '主机游戏', href: 'https://www.douyu.com/directory/game/TVgame'},
        {text: '守望先锋', href: 'https://www.douyu.com/directory/game/Overwatch'},
        {text: '阴阳师', href: 'https://www.douyu.com/directory/game/yys'}
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        default: 
            return state;
    }
}
