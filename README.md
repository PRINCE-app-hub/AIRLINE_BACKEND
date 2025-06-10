# AIRLINE_BACKEND
# Adding Sequalizer npm , Sequlizer cli , and MYSQL2 to connect the very two to MYSQL as it helps bind our data 
Why to add migration using sequilizer ?
migration help us  do increamental changes. 
we have to sync it to db but 
use command npx sequelize db migrate to migrate the changes .
--> To find out changes go to mysql using the command 
mysql -u root -p 
then type show tables;
now find out table of your intest 
now type use <table name>;  to use the table 
now type show tables; to find out tha tables 
; is mandotary
sequelize metadata actually cointains the data which is already migrated 
to find out use the command "select *from SequelizeMeta; 
In order to find out all the details use the command ?
"describe <table name>; 
