from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# Mock Database
students = []
faculty = []
courses = []

@app.route('/')
def index():
    return render_template('index.html', 
                         student_count=len(students),
                         faculty_count=len(faculty),
                         course_count=len(courses))

@app.route('/students', methods=['GET', 'POST'])
def students_page():
    if request.method == 'POST':
        name = request.form['name']
        course = request.form['course']
        year = request.form['year']
        students.append({
            'id': f"STU{len(students)+1:03d}",
            'name': name,
            'course': course,
            'year': year
        })
    return render_template('students.html', students=students)

@app.route('/faculty', methods=['GET', 'POST'])
def faculty_page():
    if request.method == 'POST':
        name = request.form['name']
        department = request.form['department']
        faculty.append({
            'id': f"FAC{len(faculty)+1:03d}",
            'name': name,
            'department': department
        })
    return render_template('faculty.html', faculty=faculty)

@app.route('/courses', methods=['GET', 'POST'])
def courses_page():
    if request.method == 'POST':
        name = request.form['name']
        credits = request.form['credits']
        courses.append({
            'code': f"CRS{len(courses)+1:03d}",
            'name': name,
            'credits': credits
        })
    return render_template('courses.html', courses=courses)

if __name__ == '__main__':
    app.run(debug=True)