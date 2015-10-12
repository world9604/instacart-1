Installation Guide

This web service runs on Django 1.8.5. I recommend use virtualenv to create a virtual environment that you can install certain packages as needed

$ virtualenv env

then run env/bin/python to check if you are running python 2.7. Otherwise you will have to run

$ virtualenv -p /usr/bin/python2.7 venv

To set default Python version for this environment

Set up Django and pytz

$ pip install django
$ pip install pytz


To set up DB schemas. Under the root directory (where manage.py is located)
$ python manage.py makemigrations
$ python manage.py migrate


Then run the server
$ python manage.py runserver

and go to http://localhost:8000 to see the website


go to http://localhost:8000/funnels.json/2015-10-05/2015-10-25 to see the funnels query results.

I spent time mostly on the front-end, forms, and the looks. So I donly tested the funnels features on 
a small number of users.

Most of the logic is in core/views.py

Let me know if you have any problems running it.
