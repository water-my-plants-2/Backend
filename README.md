# **Plant Parenthood API**

## **Base URL:**
URL Goes Here

**Authentication**

**Register**

[POST] /api/auth/register

REQUEST

Body

	

```

{
  username: "test",
  password: "testing"
}
RESPONSE
201 (Created)
{
  "message": "User registration successful.",
  "id": 9,
  "username": "test"
}
```
**Login**
[POST] /api/auth/login

REQUEST

Body



```

{
  username: "test",
  password: "testing"
}
```

RESPONSE
200 (OK)
```

{
  id: 1,
  username: "test",
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoidGVzdCIsImlhdCI6MTU4MzExODAzNiwiZXhwIjoxNTg0MzI3NjM2fQ.Yd5JCaZJ6cDhGFwSgd1NoOyJ4E4-8IZt7laC_TG_zjc"
}
```
## **Plants**

**Get all plants for user**

[GET] /api/:id/plants


```
RESPONSE
200 (OK)
[
   {
    "id": 1,
    "nickname": "Prickly",
    "species": "Cactus",
    "h2o_frequency": "Monthly",
    "image": "pictureurl",
    "user_id": 1
  },
  {
    "id": 2,
    "nickname": "Spiderman",
    "species": "Spider Plant",
    "h2o_frequency": "Weekly",
    "image": "pictureurl",
    "user_id": 1
  },
]
```
**Get individual plant**

[GET] /api/:id/plants/:plantId

```
RESPONSE
200 (OK)
 {
    "id": 2,
    "nickname": "Spiderman",
    "species": "Spider Plant",
    "h2o_frequency": "Weekly",
    "image": "pictureurl",
    "user_id": 1
  },
```
**Add a Plant**

[POST] /api/:id/plants


```
{
  "nickname": "Fred",
  "species": "Fern",
  "h2o_frequency": "Daily",
  "image": "pictureurl"
}
```
```
RESPONSE
201 (Created)
{
    "id": 1,
    "nickname": "Prickly",
    "species": "Cactus",
    "h2o_frequency": "Monthly",
    "image": "pictureurl",
    "user_id": 1
  },
```
**Update a Plant**

[PUT] /api/:id/plants/:plantId



```
{
  "species": "Lemon Tree" // Ex: only changing species.
}
```
```
RESPONSE
200 (OK)
[
{
  "id": 3,
    "nickname": "Aloey",
    "species": "Aloe Vera",
    "h2o_frequency": "Weekly",
    "image": "pictureurl",
    "user_id": 1
  }
]
```
**Delete a Plant**

[DELETE] /api/:id/plants/:plantId



```
RESPONSE
200 (OK)
{
  "message": "Plant has been deleted successfully."
}