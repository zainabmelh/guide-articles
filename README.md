![](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

## freeCodeCamp Guide Articles
This repo is where we plan and maintain freeCodeCamp's guide articles, which we then host on our community's wiki-like [guides website](guide.netlify.com/docs).

### What are Guide Articles?
<!-- I would like to link to existing articles from here when they are available -->
Guide articles can be an explanation of a syntax, design pattern, what aria labels are for, or something like what the numbers mean in the top right hand corner of your screen when at freecodecamp.org.

### What can I write an article for?
- Take a look through our issues and find an article request that you can write up.
- Find a `stub article` on our [guides website](guide.netlify.com/docs) and write the article to remove the stub.
- Open an issue with an article request or the draft of an article you have written.

Before you begin writing, make sure to read the [article style guide](article-style-guide.md).

### How to contribute
We are open to you just using the GitHub interface to suggest edits or suggest a brand new article.

If you prefer to write locally and submit a pull request (PR), then you can follow these steps:
- Fork this repository
- Copy it to your local machine by running the command `git clone https://github.com/<your-username>/guide-articles.git`
- Add a remote upstream so git knows where the official freeCodeCamp guide-articles repository is located with `git remote add upstream https://github.com/freeCodeCamp/guide-articles.git`
- Create a new branch for your work with the command `git checkout -b <new-branch-name>`. Try to name your branch in a way that describes your article topic, like `fix/ArticleHTMLElements`
- Write your article, commit your changes locally, and push your new branch to GitHub with the command `git push origin <new-branch-name>`
- Go to your repository on GitHub and open a PR

Make sure to maintain your local fork going forward so it stays up-to-date with the freeCodeCamp guide-articles repository. The next time you want to contribute, checkout your local `master` branch and run the command `git pull --rebase upstream master` before creating a new branch. This will grab all the changes on the official `master` branch without making an additional commit in your local repository.

We're happy to help answer any questions you may have and give you feedback on your articles. :sparkles:
