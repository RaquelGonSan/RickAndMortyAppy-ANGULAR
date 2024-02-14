
export interface InfoResults{
    info: Info,
    results:Character[]
}

export interface Info{
    count:number;
    pages:number;
    next:string;
    prev:string;
}

export interface Origin{
    name:string;
    url:string;
}

export interface Location{
    name:string;
    url:string;
}

export interface Character{
    id:number;
    name:string;
    status:string;
    species:string;
    type:string;
    gender:string;
    origin: Origin;
    location:Location;
    image:string;
    episode:string[];
    UrlHandlingStrategy:string;
    created:string;
}

