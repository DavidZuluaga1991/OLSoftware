# OLSoftware

The application works as a tracking system for repositories, it will allow users to have clarity in the information stored in the various repositories that the company has, as well as their configurations and other relevant elements for each repository, the system has a session system and two roles that must block certain screens or modules:

* Login
* Dashboard
* Administration table for Projects
* Administration table for Users
* Administration table for Roles

## Deploy project

to deploy the project it can be done in 2 ways

* **Dockerfile:**
```bash
# Create docker image
$ docker build -t olsoftware .

# execute docker image
$ docker run -d -p 80:80 olsoftware
```

* **Docker Compose**
```bash
# running docker compose in daemon mode to run in the background
$ docker-compose up -d
```

## Folder structure

- **/src**: Angular Application (Main Application).
  - **/app**: Main application module.
    - **/components**:Application-specific components.
      - **/dashboard**: Components related to the dashboards.
        - **/pages**: Components for the different pages of the application.
          - **/home**: Components specific to the home page.
        - **/services**: Application specific services.
          - **/notifications**: Notifications service.
        - **/shared**: Module for shared elements across the application.
          - **/layout**: Module for overall layout of the application.
            - **/footer**: Footer component.
            - **/header**: Header component.
              - **/const**: Application constants.
              - **/models**: Application data models.
      - **/login**: Login component.
    - **/core**: Module for global components and services.
      - **/guards**: Guards for the application.
      - **/interceptors**: Interceptors of the application.
        - **/loading**: Middleware de login.
      - **/services**: Global application services.
        - **/auth**: Authentication service.
        - **/loading**: Loading service.
    - **/shared**: Module for shared elements across the application.
      - **/components**: Shared components.
        - **/loading**: Loading component.
        - **/not-found**: Component for the 404 error page (not found).
    - **/store**: Module for managing application state.
  - **/assets**: Static application resources (images, CSS, etc).
