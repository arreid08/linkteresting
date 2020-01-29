# Project 3: Linkful

## Project Description:
We will create an app to manage links/bookmarks. A user will login (login authentication only with post mvp) and see a page of their collections. User can open a collection to view all the links or add a new collection. Inside the collection the user can add delete or edit a link. A new link will have a name and a link address. Post MVP add tags and tag search functionality.

User Stories. As _ I want _ so I can _
As an everyday user I want to group my bookmarks so I can be more organized.
As a designer I want to save multiple links so I can review to get ideas, but not overload my bookmarks.

## Project Links
- [Linkteresting](https://linkteresting.netlify.com/)
- [API-Links](http://list-links.herokuapp.com/api/link)
- [API-Collections](http://list-links.herokuapp.com/api/collection)
- [API-User](http://list-links.herokuapp.com/api/user)

## Wireframes
- [Architecture](https://drive.google.com/open?id=1zC-cR2DbKCw5VnstRQovnChTutAAF_zpSqdtvIx9wiQ)
- [Landing Page](https://drive.google.com/open?id=1m0CMqlXUoUda1lpd-76MzYYrcVlTPdDRrELhq-Az4TQ)
- [UserHome (New User) Page](https://drive.google.com/open?id=1LtstfmYZrgakQay9rjemwya3ooOqyAgn9auc94jC8Uk)
- [UserHome (Established User) Page](https://docs.google.com/drawings/d/1vibjhKRvmdFeZTMEsHVE0dYaV2uQqtv1YufVO-n02wA/edit)
- [Collections Page](https://drive.google.com/open?id=1eV4Ex961YCHtG3mqlprDmJPN-UFwUOauylE2q3IeAgw)

<!-- original -->
## Designs: 
![Login](https://i.imgur.com/UNz2NOi.jpg?1)
![UserHome](https://i.imgur.com/TPLvOgZ.jpg?1)
![CollectionDetails](https://i.imgur.com/oTOdkJ1.jpg?1)
![AddLink](https://i.imgur.com/eY6SMxE.jpg?1)
![AddCollection](https://i.imgur.com/kfhjsG2.png?1)

## MVP/ Post-MVP

### MVP: 
- Landing Page - Login with just your name.
- Users can create collections of links
- Each collection can be named and have a description
- Each collection will be a different color

### Post-MVP: 
- Each collection will show a picture from one of the links instead of a color.
- Login/User Validation
- Admin page to manage user accounts
- Sharability (sharing collections with other users)

## Structure:

### React Routes:
- Login
- Home:user
- Collection/:name

### Express routes:
- Create User
- Get User Collections
- Get One Collection
- Get One Link
- Post Link
- Post Collection
- Edit Collection
- Edit Link
- Delete Link
- Delete Collection
- Delete User

### React Components:
- Header
- LoginPage
- Home button <Link>
- UserHomePage
	- Add Collection
	- CollectionTile<Link>
- Collection
- Links
- Edit Collection
- Delete Collection
- Add Link
- Delete Link
- Change Name

## Components
| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Login | User can login to account to store their links | 
| User Home | User's full library of collections | 
| Collection | User's individual library of categorized collection | 
| Add | User has ability to add new links to each collection | 
| Edit | User has ability to edit links within each collection | 
| Delete | User has ability to delete links within each collection | 

## Time Frames 
| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Planning & Wireframing | H | 3hrs| 3hrs | 3hrs |
| Build file structure | H | 2hr| 2hr | 2hr |
| Controllers/ Routes | H | 4hr| hr | hr |
| Models | H | 2hr| hr | hr |
| Seeding | H | 2hr| hr | hr |
| Tests | H | 3hr| hr | hr |
| Login Component | H | 4hr| hr | hr |
| Edit/Add/Delete Components | H | 5hr| hr | hr |
| UserHome/Collections Components | H | 4hr| hr | hr |
| App Component | H | 2hr| hr | hr |
| Header Component | H | 1hr| hr | hr |
| Tests | H | 3hr| hr | hr |
| Working with API | H | 4hr| hr | hr |
| Styling | H | 5hr| hr | hr |
| Documentation | H | 3hr| hr | hr |
| Demo Page/ Modal | H | 3hr| hr | hr |
| Total | H | 52hrs | hr | hr |

## Additional Libraries 
- Bootstrap


## Issues and Resolutions 

