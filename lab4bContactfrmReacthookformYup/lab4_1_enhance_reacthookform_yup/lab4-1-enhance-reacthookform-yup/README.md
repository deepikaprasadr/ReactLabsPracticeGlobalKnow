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


GitCode push:
1.Get the latest code
2.Add the completed project folder structure
3.git add lab4acontactformapp
4.git commit -m "Added lab4acontactformapp contact form project"
5.git push origin main
6.completed
