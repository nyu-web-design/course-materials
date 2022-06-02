# Automated Grading of Web Sites

There are `tests` directories in most assignments. These includes Python-based unit testing code that automatically analyzes students’ web sites to determine whether they have satisfied the requirements of the assignment. These automated tests pop open a "headless" web browser, loads a student's web site in the browser, and looks for the components of the web site required by the assignment.

To use these tests, do the following:

1. Download the appropriate version of [Webdriver for Chrome](https://sites.google.com/chromium.org/driver/downloads) for your operating system and your version of Chrome.

1. Move the executable file you download to a directory that is already included in your system’s `PATH` variable. You can see which directories are on your system’s `PATH` by opening up a command line window (i.e. Terminal on Mac or `cmd` on Windows) and typing `echo $PATH` (Mac) or `echo %PATH%` (Windows). Mac users can most likely safely place the file into `/usr/local/bin`. Windows users can probably place it into `C:\Windows\system32`

1. Install [Python](https://www.python.org/downloads/) if you don’t already have it, and then install `pytest`. You can install `pytest` from the command line by running `pip3 install pytest` or `pip install pytest`.

1. Now, try it out on a student’s work. Open a student's repository in Visual Studio Code, open the integrated Terminal within VSCode, and run the command, `pytest`. This should show you how many tests passed and how many failed. Develop a rubric for each assignment that determines how many points each test should be worth, and subtract points for any tests that fail. All tests should be equally weighted.

1. Once this automatic analysis of student web sites works on your machine, focus your human efforts on looking over students' code and giving useful feedback and criticism. Take off some points for stylistic code problems like poor indentation of code, inconsistent capitalization, and other sloppy practices discussed in the course, even if the code works functionally.

1. Leave short but clear comments for every assignment in the gradebook that are helpful, and explain in human terms why they lost any points. There is no need to refer the tests in these comments - explain concisely in human terms the problems identified in the code either by the automated tests or by yourself.
