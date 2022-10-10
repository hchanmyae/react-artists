interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updateAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    title: string;
    stubitle: string;
    mobileImage: Image;
    heroImage: Image;
    btn_link: string;
    btn: string;
}

export interface Artist extends SanityBody {
    _type: "artists";
    name: string;
    Image: Image;
}

export interface Brand extends SanityBody {
    _type: "brands";
    title: string;
    brand: string[];
}

export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}