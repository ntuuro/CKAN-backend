# CKAN
CKAN is the world’s leading open-source data portal platform. CKAN makes it easy to publish, share and work with data. It's a data management system that provides a powerful platform for cataloging, storing and accessing datasets with a rich front-end

## Why CKAN?
CKAN is a powerful data management system that makes data accessible – by providing tools to streamline publishing, sharing, finding and using data. CKAN is used by hundreds of organizations around the world to power their data portals. CKAN is a mature, stable and well supported open source project.

## CKAN Features
* **Publishing** - CKAN makes it easy to publish data online. It provides a simple user interface for uploading and describing data, and a powerful API for managing datasets programatically.
* **Searching** - CKAN provides a powerful search engine that makes it easy to find data. CKAN's search engine is based on Apache Solr, and provides a rich API for building custom search interfaces.
* **DataStore** - CKAN provides a powerful datastore API that allows you to store and query data in your datasets. The DataStore is built on top of PostgreSQL and provides a SQL-like interface for querying your data.
* **Data Preview** - CKAN provides a powerful data previewer that can automatically preview a wide range of file formats, including CSV, XLS, PDF, XML, JSON, KML, WMS, WFS, RSS and more.
* **Data Formats** - CKAN provides a powerful data format library that allows you to describe your data in a wide range of formats, including CSV, XLS, XML, JSON, RDF, KML, WMS, WFS, RSS and more.

## Resources
* [CKAN Website](http://ckan.org)
* [CKAN Documentation](http://docs.ckan.org)
* [CKAN Blog](http://blog.ckan.org)
* [CKAN Singapore](https://data.gov.sg/)

### Setup
* [Install CKAN](http://docs.ckan.org/en/latest/maintaining/installing/install-from-package.html)
* [Install CKAN Docker](https://docs.ckan.org/en/latest/maintaining/installing/install-from-docker-compose.html)

### Configuration
* Run ``cd project Directory``
* Run ``cd contrib/docker``
* Run ``docker-compose up -d`` to start the containers
* Run ``docker-compose exec ckan /usr/local/bin/ckan -c /etc/ckan/production.ini sysadmin add userAdmin`` to add a sysadmin user
* Run ``docker-compose exec ckan /usr/local/bin/ckan -c /etc/ckan/production.ini config-tool /etc/ckan/production.ini`` to configure the site
* Run ``docker exec -it ckan /bin/bash`` then navigate to `` /etc/ckan/production.ini`` to edit the configuration file and enable Cors for the frontend

### Endpoints
* CKAN API: ``CkanDomain/api/3/action``
* CKAN Frontend: ``Frontend Domain``
* CKAN DataStore: ``CkanDomain/datastore``
* CKAN API Query: ``CkanDomain/api/3/action/datastore_search?resource_id=resource_id``
* CKAN DataStore query: ```CkanDomain/datastore/dump/resource_id```

### Frontend
was build with Nextjs and Reactjs
#### Run Frontend
* Run ``npm install`` to install dependencies
* Run ``yarn dev`` to start the frontend

#### Contributors
* [Johnson](https://github.com/joshwambere)

#### License
[MIT](https://choosealicense.com/licenses/mit/)

#### Acknowledgements
* [CKAN](https://ckan.org/)
* [Nextjs](https://nextjs.org/)
* [Reactjs](https://reactjs.org/)
