## API SETUP

Open a new terminal and run the following command:

mysql -u root -p

mysql> create database matrix;

Next, let's add a SQL table in our database. Simpy run the following SQL instructions:

mysql> use matrix;

mysql> CREATE TABLE `movies` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `year` varchar(4) NOT NULL,
  `imdbID` varchar(20),
  `type` varchar(20),
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

mysql> CREATE TABLE `posters` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  `imdbID` varchar(20),
  `poster` varchar(100)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-------------------------


## REACT SETUP

Run the following:

yarn install
yarn start


ENJOY!!!!
