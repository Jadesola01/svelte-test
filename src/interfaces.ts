export interface partner {
	icon: any;
	href: string;
	label: string;
}

export interface doing {
	icon: any;
	title: string;
	description: string;
}

export interface work {
	flip?: boolean;
	imgSrc: string;
	imgAlt: string;
	title: string;
	description: string;
	btnText: string;
}

export interface testimonial {
	comment: string;
	avatarSrc: string;
	author: string;
	title: string;
	company: string;
	rating: number;
}
