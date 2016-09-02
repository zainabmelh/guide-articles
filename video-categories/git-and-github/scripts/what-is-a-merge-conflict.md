## What's a Merge Conflict? 

#### Merge Conflicts
- Git is smart and takes nothing for granted - merge conflicts are only generated if:
  - The same LINES in the same FILE are changed separately on the two branches being merged together

#### Fixing them
- It's best practice to fix merge conflicts locally on a clone of the repository in the CLI
- Type `git status`, find the files with conflicts, open them, choose the version of code you want, and delete the merge conflict markers. 
- Save, add, and commit those changes, and the merge conflict will automatically be resolved!
