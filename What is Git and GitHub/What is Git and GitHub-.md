
# What is Git and GitHub?
These two terms are very important for every software developer to know, especially when you start to work strong text in groups. Git and GitHub. Don't worry if you have never heard of these terms or if you have heard but felt they were complicated. They really aren't. A lot of people sign up on GitHub but the moment they see the documentation, they feel it's too complicated and leave it. But trust me, Git is very easy to learn and to use it on GitHub, even easier.

Let's start with learning what's Git cause GitHub doesn't really exist without git.
Git is a version control system (VCS)... Woah now wait! What's a Version Control System? Let me go one more step back.

### What is Version Control System (VCS)?
Let's see what this is with the help of an example. Suppose you have written a book and published it and after a year you get mails from people informing you of the various grammatical or spelling errors in your book. You then decide to release a new version of the book by making the required changes. So you make the required changes, assign a new version number to this new book and publish it. Now you might also want to keep track of the changes made to the book because this will help you to know the differences between the first version and the next to explain to the readers what the changes are. Imagine you face a situation where the changes you have made have affected the quality of the story and you decide to go back to the previous version. Well you have a version number, just pick the book with the version number 1 and start off again.
Version Control has been happening all around us since a long time, but became very important to us when starting developing software. When you are developing an application, you tend to try out a lot of stuff, some may work and some may not. If it works, you might want to keep the changes, else throw them away. And this is exactly what a Version Control System does. It helps you keep track of changes you have made since your last *commit* (we'll see this later) and gives you the option whether you wish to keep the changes or discard them. It also keeps track of all your versions from the beginning so that you can choose to *rebase* your app back to any version that you like.

A very naive question would be, 'How different is this from making copies of the app and storing them?'.
The answer is just NO! Don't ever do that. Firstly, copy-pasting takes too much time as compared to using a VCS. Secondly, you have no idea where are the differences in the code between any two versions. Thirdly, copy-pasting isn't really a good choice when you are working in a team where you would then have to send him a mail attached with your zipped folder every time you make a change. And suppose both of make some important changes to the folder at the same time? Well, God help you merge the changes (Without GitHub, this would have been very very difficult). I can go on and on about advantages of using a VCS but till you try it out yourself, you will never get it.

### Back to, What is Git?

Now that you have hopefully understood what is a VCS, let us start exploring Git. As I was saying, Git is a VCS, that anyone can use around the world for FREE! Git is also open-source and you can find the source code here.

Install git by typing this into your terminal: sudo apt-get install git-all
If you are using some other operating system other than Ubuntu/ Debian based OS, check out this.

Once you have installed Git, you are all ready to enter the world of Git.

**Repository** is a more like a workspace that Git can access and allow you to select the files/folders to track/untrack. When you are just starting a project, its always good to create a git repository. Let's start by creating a simple *Calculator* Program in Python and we are going to be using Git to help us on the way.
Create a folder and name it *calculator*. Enter the folder and open a terminal from there. Type: `git init`
There you go, your repository is now initialised with Git. Congratulations!
The repository you have created just now is called a Local Repository, because it isn't available remotely for anyone to download. (Don't worry, we'll see how to do that too very soon)

Our directory looks pretty empty as of now with literally no files. Let's add some file, call it *hello.py*. Enter this into the file:

`print "Hello World"`

Our repository looks much better now isn't it? Just kidding, this is just some dumb program that's going to tell us, "Hello World". Not very interesting. Let's start to track this file. Type: `git status`

> On branch master
> 
> Initial commit
> 
> Untracked files:   (use "git add <file>..." to include in what will be
> committed)
> 
> 	hello.py

I hope you have got the above output. Well it is trying to tell us that our file, *hello.py* isn't being tracked yet. Type: `git add hello.py` and then `git status` once again. Now you'll see that Git has begun to track changes to this file. However 

> Written with [StackEdit](https://stackedit.io/).