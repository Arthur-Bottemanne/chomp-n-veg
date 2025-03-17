# chomp-n-veg

## Description

Track and manage your food

## Getting Started

### Prerequisites

* Visual Studio Code
* npm: 10.9.2
* node: v22.13.1

### Configuration

Modify the following .env values:

```shell
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=chomp_n_veg // recommended to keep this name for the init-db script
MYSQL_USER=placeholder
MYSQL_PASSWORD=placeholder

NODE_ENV=development // either development or production

IMAGE_STORAGE_KEY=placeholder // fliestack api key

JWT_SECRET=placeholder
```

## Deployment

### On dev environment

1. Clone this repository:

```
git clone https://github.com/Arthur-Bottemanne/chomp-n-veg.git
```

2. Install the packages:

```
npm install
```

3. Create the .env file

```
vim .env
```

4. Change the configuration of the .env file according to your own needs

5. init the database:

```
npm run init-db
```

6. run the project:

```
npm run dev
```

### On integration environment

1. Publish the project to whatever service you like

2. Install only the necessary packages:

```
npm install --omit=dev
```

3. Setup the environment variables depending on your cloud service

4. Run the application

```
npm run prod
```
