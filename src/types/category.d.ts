export interface Category {
  id: number;
  images?: Image[]
  description?: string
  title?: string
  slug?: string
  url_path?: string
  breadcrumbs?: string
  is_active?: boolean
  ant_is_active?: boolean
  rdh_is_active?: boolean
  lft?: number
  rght?: number
  tree_id?: number
  level?: number
  parent?: null
}

export interface Image {
  image_url?: string
  thumbnail_url?: string
}

export interface Product {
		id?: number;
		title?: string;
		description?: string;
		price?: number;
		image_url?: string;
		thumbnail_url?: string;
	}