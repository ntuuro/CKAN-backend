export interface Main {
    help:    string;
    success: boolean;
    result:  Result;
}

export interface Result {
    author:                   string;
    author_email:             string;
    creator_user_id:          string;
    id:                       string;
    isopen:                   boolean;
    license_id:               string;
    license_title:            string;
    license_url:              string;
    maintainer:               string;
    maintainer_email:         string;
    metadata_created:         Date;
    metadata_modified:        Date;
    name:                     string;
    notes:                    string;
    num_resources:            number;
    num_tags:                 number;
    organization:             Organization;
    owner_org:                string;
    private:                  boolean;
    state:                    string;
    title:                    string;
    type:                     string;
    url:                      string;
    version:                  string;
    resources:                Resource[];
    tags:                     Tag[];
    extras:                   any[];
    groups:                   any[];
    relationships_as_subject: any[];
    relationships_as_object:  any[];
}

export interface Organization {
    id:              string;
    name:            string;
    title:           string;
    type:            string;
    description:     string;
    image_url:       string;
    created:         Date;
    is_organization: boolean;
    approval_status: string;
    state:           string;
}

export interface Resource {
    cache_last_updated: null;
    cache_url:          null;
    created:            Date;
    description:        string;
    format:             string;
    hash:               string;
    id:                 string;
    last_modified:      Date;
    metadata_modified:  Date;
    mimetype:           string;
    mimetype_inner:     null;
    name:               string;
    package_id:         string;
    position:           number;
    resource_type:      null;
    size:               number;
    state:              string;
    url:                string;
    url_type:           string;
}

export interface Tag {
    display_name:  string;
    id:            string;
    name:          string;
    state:         string;
    vocabulary_id: null;
}
export interface Exports{
    year: string;
    domestic_exports: string;
    area: string;
}

export interface AnnualCars{
    year: string;
    category: string;
    type: string;
    number: string;
}
