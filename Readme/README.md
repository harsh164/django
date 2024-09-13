Instructions on how to set up and run the application

for the frontend part 
 cd frontend
 npm install
 npm run dev

for the backend part
cd backend
pip install psycopg2
pip install psycopg2-binary
python manage.py migrate
python manage.py runserver

Any libraries or tools used
1 Django
installation pip install django
2 Django REST framework
installation pip install djangorestframework
3 Next.js
installation npx create-next-app@latest
4 Chart.js
installation npm install chart.js
5 react-chartjs-2
installation npm install react-chartjs-2
6 Axios
installation npm install axios
7 CORS
installation pip install django-cors-headers
8 React Ploty.js
installation npm install react-plotly.js plotly.js

Brief explanation of the approach and thought process

overview 
this project involves a web application with a next.js and django api backend 
it features a dashboard for various types of charts 
1 Candlestick 
2 Line chart
3 Bar chart
4 pie Chart

Frontend approach 
for the frontend we used Next.js which is a powerful React framework. 
We integrated chart.js  for its flexibility of creating range of charts   and react-ploty.js for advance chart like candlestick
Axios was used for data fetching because it handles http request easily 

Backend approach
On the backend We utilized Django a robust python framework 
The backend provides hardcoded data for Candlestick, Line, Bar, and Pie charts through dedicated API endpoints
to connect the backend and frontend we used django-cors-headers for handling cors

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',  # or 'sqlite3', 'mysql', etc.
        'NAME': 'blockhouse',
        'USER': 'postgres',
        'PASSWORD': '1Jyotigupta',
        'HOST': 'localhost',
        'PORT': '5432',  
    }
}
