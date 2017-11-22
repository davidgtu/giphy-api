# Giphy + React search

Done as a challenge and practice. This is built on React. Built in about a day.

### Getting Started
- `git clone https://github.com/atom/markdown-preview.git` and `cd` into it
- `npm install`
- `npm run start`

If you would like to know more about the documentation and thought process behind this project, .`then()` read on! Otherwise, the above is all you need to get started.

### Approach
Originally, I thought about building just a basic search input where you enter a query and click a CTA or press enter to get your response, but I wanted to try _something different, dammit_! I wanted to challenge myself! So, I tried my hand at performing the search by cutting the middle man and search without needing to click a button!

There are absolutely better ways to my solution, but I had fun touching upon code _and_ design. It's what makes me really happy to do what I do! That said, please type slowly in the main search bar!

Included is also a fun little `route` that leads to searching everything cats.

### Things that can be improved on
- The biggest challenge for me was displaying the search history for the search bar. Granted, I made it hard for myself with searching with every `onChange`, which would also not be performant wise in a production setting. Perhaps I could've submitted a request to the API after a slight pause if given more time!

- Introduce Redux into the project. Given what my app is doing, Redux would be the perfect candidate rather than the unidirectional data flow of this app.

- Unit testing! Testing is very under-appreciated, and though it makes development slow, it makes the application more solid.

- dont push to master

### Lastly
However the implementation of the app, I am passionate about having a good UI, and on top of loving React, I love CSS/SASS. I try to keep my conventions close to BEM CSS.


Thank you if you've read this far!
