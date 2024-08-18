
export interface appConfigType {
	org: {
		title?: string,
		title_rus?: string,
		wwww?: string,
		email?: string,
		phone?: string,
		adress?: string,
	}
}




interface NavigationItem {
	title: string;
	slug: string;
}

export interface Navigation {
	[x: string]: NavigationItem;
	catalog: NavigationItem;
	solutions: NavigationItem;
	mans: NavigationItem;
	contacts: NavigationItem;
	about: NavigationItem;
	education: NavigationItem;
	
}

