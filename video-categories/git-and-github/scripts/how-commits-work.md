## How Commits Work

#### Snapshots, not Deltas
- Commits are snapshots with metadata as well as compressed files. 
- Branches are really just commits pointing back to other commits
- Don't want to get too deep into commit structure, just to give enough context so it's clear that it's bad practice to alter commit IDs in shared history

#### Importance of Commit ID
- Once a commit exists, it has a 40 character commit ID.
- This ID is very important! Once a commit exists on the remote, you **do not** want to edit that commit ID or history.
