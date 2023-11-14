import { createClient } from 'newt-client-js'

export const newtClient = createClient({
	spaceUid: import.meta.env.NEWT_SPACE_UID,
	token: import.meta.env.NEWT_CDN_API_TOKEN,
	apiType: 'cdn'
})

export interface NewtArticle {
	_sys: {
		createdAt: Date
		updatedAt: Date
	}
	title: string
	slug: string
	body: string
	coverImage: {
		_id: string
		src: string
		fileName: string
		fileType: string
		fileSize: number
		width: number
		height: number
		title: string
		altText: string
		description: string
		metadata: {}
	}
}

export interface NewtPlayer {
	fullName: string
	uniformNumber: string
	biography: string
	profileImage: {
		_id: string
		src: string
		fileName: string
		fileType: string
		fileSize: number
		width: number
		height: number
		title: string
		altText: string
		description: string
		metadata: {}
	},
	local: string
}

export interface NewtWorkout {
	title: string
	note: string
	date: Date
}
