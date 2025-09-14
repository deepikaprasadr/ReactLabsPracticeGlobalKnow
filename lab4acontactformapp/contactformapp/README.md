 npm install @mui/material
 npm install @emotion/react
npm install @emotion/styled

mkdir src/components

Code explanaiton : Lab 4 Contact Form app. Here’s how everything connects:

App.js → Renders your ContactForm inside a Material UI Container.

index.js → Currently imports TodoApp instead of App.
You should import App instead, since your contact form lives there.

ContactForm.js

ContactForm

 → Handles form state, validation, and submission.

TextInput.js

TextInput

 → Reusable Material UI TextField wrapper.

SubmitButton.js

SubmitButton

 → Reusable styled submit button.

data.js → Contains product info, but it’s not used anywhere in this app right now.