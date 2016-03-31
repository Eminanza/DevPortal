###Build with Webpack
    npm run build

###Init git

    git init
    ...
    git remote add origin URL
    git push origin master

###Git commands for Portal (gh-pages)

    git checkout --orphan gh-pages
    git merge master
    git push origin gh-pages

###See unpushed commit

    git diff origin/master

###Add modifs to current commit without changing comment

    git commit --amend --no-edit

###Display git log graphic

    git log --all --graph --decorate --oneline --simplify-by-decoration

###Push all of your local branches to the specified remote

    git push <remote> --all