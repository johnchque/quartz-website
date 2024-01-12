Redis is an in-memory data store and uses key-value structures. It is used as a caching layer between the app and the database. That is because redis is fast as it is stored on memory.
The downside is that the data is volatile because the data would be lost if the server crashes.
Now it can be used as the main database because of data persistance, JSON support, search, and object mapping.
Having redis with modules, it is called Redis stack.
### Redis Data Types
We still store in key value pairs. It could be a string, a set (an unordered collection of strings), hashes (like objects), lists (string based), sorted sets (sets where the values are ordered by some column).
### Redis Keys
The keys of redis can be called anything. A common convention is to use books:1 and books:2 for example.
### Making a Redis database
We can install Redis in our computer.
## Basic commands
Strings
Redis stores numbers as strings. If we want to create a new key value set we run the commands
```redis
SET name John
```
To get a value
```
GET name
```
To delete data, where name2 is the key of the key value pair.
```
DEL name2
```
To define multiple key value pairs
```
MSET name2 Yoshi color green rating 10
```
To get multiple values
```
MGET name name2
```
To get the first characters of a string
```
GETRANGE name 0 3
```
-1 is the last character.
```
GETRANGE name -3 -1
```
To set a range of characters in an existing key
```
SETRANGE name 2 abc
```
To increase a number by one
```
INCR rating
```
Even if rating is stored as a string, Redis knows that it is a number.
To decrease
```
DECR rating
```
To increase more
```
INCRBY rating 5
```
## Command options
Options are extra flags that we can add to some of the commands. 
For example, if we run
```
SET name yoshi EX 7
```
The value will be yoshi and after 7 seconds it will be deleted.
```
SET name Yoshi NX
```
NX is a flag to set something if it doesn't exist.
```
SET name Yoshi XX
```
XX is a flag that indicates to only overrides if it does exist.
```
SET name Peach GET
```
Will return the previous value and set the new value as Peach.
## Sets (Data type)
Sets are unordered collection of strings which all have to be unique.
```
SADD names mario peach
```
It will add them to the end if it does exist.
To delete one element of the set
```
SREM names yoshi
```
If we want to return two sets in something like a join, we run
```
SUNION names morenames
```
This does not create a new set. 
```
SISMEMBER names yoshi
```
Check whether a value exist in the set. Returns 1 if found.
## Lists (Data type)
Is a collection of different values. They do not need to be unique. They have an unique order based on how they were added. The way values are queried are very different than sets. In a list we can think of a queue.
Accessing a value in the middle of a list is slow. If we are working in two ends of the list, that operation is very fast. Lists can be good for when data progresses over time. Or when we want the last 10 updates or so.
To add a value to the list from the left, do
```
LPUSH orders [value]
```
If we do it again, the last value added will be the first on on the list.
To push from the right
```
RPUSH orders [name] [name]
```
These will be added at the end of the list.
To take things off the list
```
LPOP orders 1
```
This removes 1 element from the left on the list.
To get a specific item
```
LINDEX orders 1
```
To get the position
```
LPOS orders ryu
```
## Hashes (Data type)
