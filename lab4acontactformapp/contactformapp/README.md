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

Moving code to git:
1.cd path/to/ReactLabsPracticeGlobalKnow
2.Pull the latest code from the git everytime.
3.Now add your new project folder in the local file structure into your root folder /ReactLabsPracticeGlobalKnow
  3.a. ./ReactLabsPracticeGlobalKnow/lab4acontactformapp
4.git add lab4acontactformapp
5.git commit -m "Added lab4acontactformapp contact form project"
6.git push origin main


If I skipped step 2, then I got the following error:

error:
git push origin main
To https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git'  
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

next steps:
git push origin main
To https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git'  
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

next error:
To https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git ! [rejected] main -> main (non-fast-forward) error: failed to push some refs to 'https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git' hint: Updates were rejected because a pushed branch tip is behind its remote hint: counterpart. If you want to integrate the remote changes, use 'git pull' hint: before pushing again. hint: See the 'Note about fast-forwards' in 'git push --help' for details.

next ssteps:
1.git pull origin main --rebase
2.git push origin main

Result:
Github repo was updated with my new lab:
<img width="893" height="599" alt="image" src="https://github.com/user-attachments/assets/7826c336-a556-4c9e-bc08-e61b7e40ed3a" />

