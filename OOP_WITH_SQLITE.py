import sqlite3
import datetime as d


print('[+] أهلا و سهلا بك في تسجيل من أجل العمل في منظمة الأمن الحر العالمية نتمنمى منك تسجيل البيانات')

conn = sqlite3.connect('people.db')
cursor = conn.cursor()

cursor.execute('''CREATE TABLE IF NOT EXISTS people
                  (name TEXT, age INTEGER, login_time TEXT)''')

class Person:
    def __init__(self, name, age, login_time):
        self.name = name
        self.age = age
        self.login_time = login_time

    def insert_into_db(self):
        cursor.execute("INSERT INTO people (name, age, login_time) VALUES (?, ?, ?)",
                       (self.name, self.age, self.login_time))
        conn.commit()

name_p = input('[+] Give me your name ==> ')
age_p = input('[+] Give me your age ==> ')
date_time_p = d.datetime.now().strftime('%Y-%m-%d %H:%M:%S')


person = Person(name_p, age_p, date_time_p)


person.insert_into_db()

print('[+] Data inserted successfully.')

conn.close()

