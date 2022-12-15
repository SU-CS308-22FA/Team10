
# Weekly Soccer Team10

Our deployed project: https://weeklysoccer.onrender.com/  
Weekly Soccer is an homogenous system that you can see and rate the top of the player, matches and verified user's votes on referees. You can learn about weekly updates, the best player of the week and comment on latest matches. It has an user-friendly interface which everyone can vote easily.

[Code Documentation](https://docs.google.com/document/d/1Gxd_qC44liQVjxzXEJATsTmv0scIVRgO_sri39iLMiA/edit?usp=sharing)


##  How to install and run the software?

Clone the project

```bash
  git clone https://github.com/SU-CS308-22FA/Team10.git
```

Go to the backend

```bash
  cd backend
```

Install required packages

```bash
  npm install
```

Run the server

```bash
  npm start
```

Go to the frontend

```bash
  cd frontend
```

Install required packages

```bash
  npm install
```

Run the client

```bash
  npm start
```

  
## How to report a bug

To report a bug about our project you can go to this [link]( https://github.com/SU-CS308-22FA/Team10/issues/new) and describe the issue:


  

## Known Bugs
 We don't have any known bugs at this moment!


##  How to obtain the source code?

Clone the project

```bash
  git clone https://github.com/SU-CS308-22FA/Team10.git
```

Go to the backend

```bash
  cd backend
```

Create an .env file containing:

`MONGODB_URI`

`JWTPRIVATEKEY`

`SALT`

Install required packages

```bash
  npm install
```

Run the server

```bash
  npm start
```


Go to the frontend in another bash 

```bash
  cd frontend
```

Install required packages

```bash
  npm install
```

Run the client

```bash
  npm start
```


## Technologies

 React, Node, Express, MongoDB

## The layout of the directory structure

- backend 
    - middleware → Validators and handler
    - routes → Requests coming to the server
    - models → Database models
    - package.json → Dependencies of the application 
    - index.js → The main index file
    - db.js → The database connection file

- frontend 

    - build → Files used for building
    - public → Public files like the application icon
    - src → All of the pages, routes, context files, components
    - package.json → Dependencies of the application 
    
