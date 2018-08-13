import { SideNavMenuItemChild } from './sidenav-items-child.models';

export class SideNavMenuItem {
    public title: string;
    public icon: string;
    public route: string;
    public children: SideNavMenuItemChild[];


    constructor(title: string, icon: string, route: string, children: SideNavMenuItemChild[]) {
        this.title = title;
        this.icon = icon;
        this.route = route;
        this.children = children;
    }
}
