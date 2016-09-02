## Branching & the GitHub Workflow

#### What are branches?
- Very lightweight - low memory needs and very fast
- Branches _function_ as a different copy of the code where you can safely make changes without affecting any other branch
- Branches are really just pointers to a commit, which is why they are lightweight
- Branch early and branch often, then delete your branches when you're done.

#### GitHub Workflow
- https://guides.github.com/introduction/flow/
- Branch
  - Make changes in a safe sandbox without affecting the production code on `master`
- Make Commits 
  - Git stores commits, not deltas. When you make a commit, you're taking a snapshot of your entire repository at that point in time. Commits are also lightweight, so commit often with atomic and logical units of work changed in each commit.
- Pull Request
  - Open a pull request to start the collaboration and code review process early. Make sure to describe your changes and `@` mention those who you'd like feedback from.
- Collaborate & More Commits
  - Hopefully, you'll get feedback. Make more commits on your branch and your pull request will be updated automatically to reflect that.
- Merge :tada: 
  - Merge your changes into the master branch once they're ready! 
  - Be sure to have a conversation with your team about who merges and when. 
    - Do you wait for a specific Q&A member to merge all pull requests?
    - Do you merge your own pull requests only after a team member gives the OK?
    - May good ways to do it, but it's important to know what the team workflow is.

#### Why do we branch?
- It's good practice to branch even if you are working on a small project alone or with a small team.
- It's just a few extra steps and can allow you to have different features being developed at the same time without interfering. 
