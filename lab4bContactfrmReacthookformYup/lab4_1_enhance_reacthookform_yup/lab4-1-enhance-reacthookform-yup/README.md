lab 4-1 enhance with react-hook-form and yup schema
step1
install packages:
react-hook-form: npm install react-hook-form
//this did not happen initially. Therefore I got runtime errors.
//so reinstalled them again.

npm install @hookform/resolvers

npm install yup

npm install @mui/material
(when I missed mui install, I got errors.But after running this command)

step2: Create the validationschema.js file

yup.object().shape({})
yup.string()
required()
min() max()
email()


Errors:
1.packages install were incomplete. So, completed
2.styled-engine:false:1  Uncaught Error: Could not resolve "@emotion/react" imported by "@mui/styled-engine". Is it installed?
Ans: npm install @emotion/react @emotion/styled; npm ls @emotion/react

