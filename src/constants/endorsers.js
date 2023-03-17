import {URLS} from "constants/urls.js"

const ENDORSERS = {
	CITIZENS: [
		{
			fullname: "Bill Gilbert",
			id: 1,
		},
		{
			fullname: "Dave Pitzer",
			id: 2,
		},
		{
			fullname: "Willie Hughey",
			id: 3,
		},
	],
	VIP: [
		{
			fullname: "Rory Bialostosky",
			href: URLS.WEST_LINN.RORY,
			id: 4,
			position: "City Councilor",
		},
		{
			fullname: "Thomas A. Frank ",
			href: URLS.ENDORSERS.THOMAS_FRANK,
			id: 5,
			position: "Former City Councilor ",
		},
		{
			fullname: "Erich Kunrath",
			href: URLS.WEST_LINN.BOLTON,
			id: 6,
			position: "Bolton NA Vice President ",
		},
		{
			fullname: "Alma Coston",
			href: URLS.ENDORSERS.ALMA_COSTON,
			id: 7,
			position: "Friends of Maddax Member ",
		},
		{
			fullname: "Walt Swan",
			href: URLS.WEST_LINN.BOLTON,
			id: 8,
			position: "Bolton Treasurer ",
		},
		{
			fullname: "Crystal Jayne",
			href: URLS.ENDORSERS.SAFE_AND_HOUND,
			id: 9,
			position: "Business Owner ",
		},
		{
			fullname: "Dean Suhr",
			href: URLS.ENDORSERS.DEAN_SUHR,
			id: 10,
			position: "Vote Before Tolls + No Tolls Army + MLD Foundation: Founder + President",
		},
		// {
		//	href: URLS.,
		//	id: 0,
		//	fullname: '',
		//	position: '',
		// },
	],
}

export {
	ENDORSERS as ENDORSERS
}
