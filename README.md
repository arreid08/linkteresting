# Project 3: Linkful

## Project Description:
We will create an app to manage links/bookmarks. A user will login (login authentication only with post mvp) and see a page of their collections. User can open a collection to view all the links or add a new collection. Inside the collection the user can add delete or edit a link. A new link will have a name and a link address. Post MVP add tags and tag search functionality.

User Stories. As _ I want _ so I can _
As an everyday user I want to group my bookmarks so I can be more organized.
As a designer I want to save multiple links so I can review to get ideas, but not overload my bookmarks.

## Project Links
[Linkteresting]()
[API]()

## Wireframes
[LandingPage](https://drive.google.com/open?id=1m0CMqlXUoUda1lpd-76MzYYrcVlTPdDRrELhq-Az4TQ)
[PostLoginPage](https://drive.google.com/open?id=1LtstfmYZrgakQay9rjemwya3ooOqyAgn9auc94jC8Uk)
[CollectionsPage](https://docs.google.com/drawings/d/1vibjhKRvmdFeZTMEsHVE0dYaV2uQqtv1YufVO-n02wA/edit)
[CollectionDetails](https://drive.google.com/open?id=1eV4Ex961YCHtG3mqlprDmJPN-UFwUOauylE2q3IeAgw)

## MVL/ Post-MVP

### MVP: 
- Landing Page - Login with just your name.
- Users can create collections of links
- Each collection can be named and have a description
- Each collection will be a different color

### Post-MVP: 
- Each collection will show a picture from one of the links instead of a color.
- Login/User Validation
- Admin page to manage user accounts
- Sharability

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
| Total | H | 52hrs | hr | hr |

## Additional Libraries 


## Issues and Resolutions 

