# Responsive Login Form

This is a simple, responsive login form built using HTML, CSS, and JavaScript. The form includes client-side validation, a loading spinner during an API call, and a "Remember Me" checkbox.

## Features

- **Responsive Design**: The login form adapts to different screen sizes and works well on both web and mobile devices.
- **Client-side Validation**: The form validates user inputs, ensuring that the email is in the correct format and the    password meets the required length.
- **Remember Me Checkbox**: Users can choose to remember their login details for future sessions.
- **Loading Spinner**: A loading indicator is displayed while the API request is being processed.
- **Form Reset**: The form automatically resets after a successful or failed login attempt.

## Demo

[Live Demo](https://jayupatil182.github.io/Awac-Assignment/)

## How to Run the Project Locally

Follow these steps to run the project on your local machine:

1. Clone the repository:
   git clone https://github.com/Jayupatil182/Awac-Assignment.git

2. Navigate to the project directory:
   cd Awac-Assignment

3. Open index.html in your browser to view the login form.

## Usage Instructions
1. Open the login page in your browser.
2. Fill in the Username/Email and Password fields.
3. The form will validate:Username must be a valid email.Password must be at least 6 characters long.
4. On successful validation,a POST request is made to the API with the login credentials.
5. Based on the API response,you will see either:A success message if the login is valid or An error message if the login fails.

## Technologies Used
HTML5: For structuring the web page.
CSS3: For styling and creating responsive layouts.
JavaScript: For handling form validations, API interactions, and additional functionality like the loading spinner and remember me checkbox.

## Screenshots
**Web View**:
![alt text](image.png)

**Mobile View**:
![alt text](image-1.png)
