https://www.youtube.com/watch?v=xMCnDesBggM&list=PL4cUxeGkcC9gUxtblNUahcsg0WLxmrK_y

It is a query language.
A syntax to request or mutate data. An alternative to REST API.
We still use http requests but gives us more flexibility.
REST API:
```
website.com/api/animal
website.com/api/animal/123 // Fetch a single element.
```
Problems
- Over fetching: Getting more data than what we need.
- Under fetching: We don't get the data we need.

GraphQL
Request to a single endpoint.
```
website.com/graphql
```
The query syntax will specify the data we need from the server.

## Query basics
How to make a query:
```
Query [nameofquery] {
	reviews { // entrypoint.
		rating,
		content,
		id
	}
}
```
In GraphQL we need to define what fields we want to get back.
Nest query:
```
Query [nameofquery] {
	reviews { // entrypoint.
		rating,
		content,
		id,
		author {
			name,
			id,
			verified,
			reviews {
				rating,
				id,
				game {
					title
				}
			}
		},
		game {
			title,
			platform
		}
	}
}
```
## A GraphQL server with Apollo


