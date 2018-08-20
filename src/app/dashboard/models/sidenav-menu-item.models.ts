import { SideNavMenuItemChild } from './sidenav-items-child.models';

export class SideNavMenuItem {
    public id: string;
    public title: string;
    public icon: string;
    public route: string;
    public children: SideNavMenuItemChild[];


    constructor(id: string, title: string, icon: string, route: string, children: SideNavMenuItemChild[]) {
        this.id = id;
        this.title = title;
        this.icon = icon;
        this.route = route;
        this.children = children;
    }
}
