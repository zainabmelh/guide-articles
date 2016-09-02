## Changing History with Git

#### Using Git to undo mistakes
- `git revert` is a very safe command that makes it _feel_ like you're going back in history, but you're actually going forward by creating a new commit
- Other ways to undo history may be the best choice - but be careful about changing commit IDs of anything in shared history on the remote.

#### Altering commit IDs
- `git rebase`
- `git reset`
- `git cherry-pick`
- `git commit --amend`

#### Not gone locally, at least not at first
- `git reflog`
