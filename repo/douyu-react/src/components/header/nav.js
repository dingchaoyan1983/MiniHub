import React from 'react';
import NavItem from './nav-item';
import CategoryList from './category-list';
import ViewAllBtn from './view-all-btn';

export default function Nav(props) {
    const {hot, recommendation, onlineGame} = props;

    return (
        <ul className="head-nav fl">
            <NavItem href="https://www.douyu.com/" name="首页"/>
            <NavItem href="https://www.douyu.com/directory/all" name="直播"/>
            <NavItem href="https://www.douyu.com/directory" name="分类">
                <CategoryList name={hot.name} items={hot.items}/>
                <CategoryList name={recommendation.name} items={recommendation.items}>
                    <ViewAllBtn href="http://wan.douyu.com/" />
                </CategoryList>                
            </NavItem>
            <NavItem href="https://www.douyu.com/directory" name="游戏">
                <CategoryList name={onlineGame.name} items={onlineGame.items}/>
            </NavItem>
            <NavItem href="https://www.douyu.com/directory/all" name="鱼吧"/>
        </ul>
    );
}
