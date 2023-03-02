# Flash Cards

## Flash Cards is a web application meant to be used to study topics related to programming with a simple flash card mechanic for retention.
- npm start --prefix client
- rails server

### Features (...)
- Users can participate in curated “Lists” of Flash Cards, without being logged in
- Users can signup and login
- User can CRUD Lists
- Users can Create Cards
- Users can Read Cards, provided in a list based on particular filters/tags
- Users can Update Cards, moving them “up or down” the chain of their retention, for sharper study sessions
- Users can Delete Cards, from their personal “Lists”

### DB Schema (...)
- Users, Lists, Cards, Tags
    - User
        - Username
        - Password
    - List
        - Name
        - Description
        - Date Created
        - Date Updated
    - Card
        - Front
        - Back
        - Note
        - “Retention Level” - Built-in sub-List, essentially
    - Tag
        - Name
        - Icon

- User, has_many Lists
- User, has_many Cards, through Lists
- List, has_many Users
- List, has_many Cards
- List, has_many Tags
- Card, has_many Tags

### Technical Stack
- HTML
- CSS 
    - Mantine
    - https://mantine.dev/
- JS 
    - React
- Backend
    - Ruby/Rails
- Database
    - MySQL

MD Syntax: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
