 Deepika Lab: 3 d:
 
 How to move my code to Github.com into my repo:
 1. Copy the completed project folder
Place your lab3dUseContext_TodoLocalStore folder inside the root of your repository (where you see other folders like lab1-day-jslib, etc.).
2.Add the new folder to git
In your terminal, run:
	git add lab3dUseContext_TodoLocalStore

3. git commit -m "add Add completed lab3dUseContext_TodoLocalStore project"



4.Push to GitHub
git push origin main


Error:

To https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnow.git       
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/deepikaprasadr/ReactLabsPracticeGlobalKnhint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. If you want to integrate the remote changes,
hint: use 'git pull' before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.

Next steps:
You successfully committed your new lab3dUseContext_TodoLocalStore project locally, but when pushing, Git is rejecting it because your local main branch is behind the remote main branch on GitHub.

That means someone (or you from another machine) has already pushed new commits to main after the last time you pulled.

	

Solution:
 

git pull origin main --rebase
git push origin main

details:
git pull --rebase brings in the remote commits and replays your new commit on top.

Then you can push without conflicts.

-Deepika
