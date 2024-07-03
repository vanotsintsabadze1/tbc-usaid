# Introduction

Project is based on TBC x USAID's technical task of fourth step to React Course.

This very task assigned the student to build an analog of: https://www.tbcacademy.ge/usaid

The website had to:

    1. Be responsive.
    2. Have the same functionality as the original website.

# Table of Contents

1. [Introduction](#Introduction)
2. [Getting Started](#Getting-Started)
   - [Cloning the Repository](#Cloning-the-Repository)
   - [Run the Project in Live](#Running-the-Project-in-Live)
3. [Project Structure](#Project-Structure)
4. [Features](#Features)

# Getting Started

**Cloning the Repository**:

    1. Open your terminal or CMD.
    2. Navigate to the directory where you want your project to be located.
    3. Run the following command: git clone https://github.com/vanotsintsabadze1/tbc-usaid.git

**Running the Project in Live**:

    1. Navigate to the project directory: cd tbc-usaid.
    2. Open the codebase in the desired editor.
    3. Open the index.html in your browser or on the development server.

**How to Run the Project with Live Server**:

    1. Install Live Server in your editor: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer.
    2. Open the project in your code editor and focus on the index.html file.
    3. Click on the Go Live in the bottom right corner.

# Project Structure

    root/
    |-- index.html
    |-- assets/
    |-- data/
    |-- scripts/

- **index.html:** Main HTML file for the project.
- **assets:** Directory for storing static assets like images, stylesheets, or fonts:

        1. Images, logos and icons.
        2. CSS files.
        3. Custom font that is used for the project.

- **data:** Directory for storing data files used in the project.
- **scripts:** Directory for storing JavaScript files or other scripts.

# Features

Since and because the project preferred not to use Javascript libraries, all the designs and features used in the project were built from scratch.

The built-in page slider does not include any kind of library and is designed from scratch, as close as possible to the original slider.

The project uses a dynamic way of adding and removing courses.

**What does this mean?**

Since courses can be added or removed from the page, the easiest way for the codebase user to do this would be from a separate Javascript file, rather than from an HTML file that includes the entire site's markup.

Therefore, the array created in the courses.js file represents the number of courses and their information, through which the courseRenderer.js file creates and adds a course container to a specific location in the document.

In the future, casually, this addition would make it easier for the working staff to easily add and remove courses.

**Regarding the font usage**

Site uses a custom font called **Contractica**.

This is an accessible free font library, which you can retrieve from here: https://www.contractica.ge/

Although this is the closest font that's used on the original website, some fonts were still not matching, which leaves us with the idea of some fonts being private and inaccessible.
