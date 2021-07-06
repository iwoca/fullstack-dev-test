# Backend

## Getting started (docker)

```bash
$ docker-compose build backend

$ docker-compose run backend ./manage.py migrate
$ docker-compose run --service-ports backend ./manage.py runserver 0.0.0.0:8000
```

## Getting started (without docker)

**- Requires Python 3.9 -**

```bash
$ python3 -m venv venv
$ source venv/bin/activate

$ pip3 install -r requirements.txt
$ ./manage.py migrate
$ ./manage.py runserver 8000
```

## Creating a superuser to access django admin

```bash
$ ./manage.py createsuperuser
```

## Running the tests

```bash
$ ./manage.py test
```
