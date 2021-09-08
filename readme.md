# Brief

To create a simple library application using prototype methods

## Thoughts before beginning

I'm not going to format this one as extensively as my last project, I'll be focusing more on DOM manipulation and event listeners. I hope the exercise won't pose any completely unforseen challenges.

## Thoughts after completion

I decided not to go for the 'extra credit' this time, as I can always go down the 'local and cloud storage' rabbit hole when approaching a portfolio project. For now I think I'd be better served by moving on.

I'm satisfied with the basic functionality of my project; presentationally, once again, I've gone for a hue-based colour scheme, so stylistic concerns and colour theory would be _another_ rabbit hole to go down when the time comes. There are some concerns left half-baked, e.g.:

- Too long a book title breaks the formatting but I didn't want to spend ages tweaking in case someone happens to want to read 'The Curious Incident of the Dog in the Nighttime'
- The reorder drop-down should throw in a few more instances
- my .css file could do with being combed through and structured more logically if this was for deployment

but I did add basic responsiveness this time so the app works on small screens.

## Areas for improvement

I feel that my function declaration is getting better since reading the _You Don't Know JS_ books, such as declaring functions and variables as exclusively scoped as possible, but `this` is still tricky; I understand that it refers to the clicked element in a click event-listener call-back, but I don't know how to pass that element to another called function declared within the Global object without manually passing in `this` as an argument. I intend to reread _This and Object Prototypes_ upon its second edition, by which time I hope to be better equipped to understand.

I tried to keep the code as DRY as possible (see my function `createBook()`), but functions like `createCard()` still make me a little nauseous to look at. I'm sure this could have been better written, but I think it most productive to come back and review the code when I'm more experienced.

As mentioned above, at some point I'll take the time to dive in to basic concerns regarding design and UI/UX.

## Lessons learned

### Plan functionality before beginning

I'm still too keen still to 'leap in' to the problem solving before adding functionality: I had a bunch of code to create and insert the form for adding a book so I could add a nice transition, then decided I didn't want a transition after all and could have saved loads of time by writing it in to the HTML directly and only using JS to toggle `display: none;` (as I went on to do). I also hadn't factored on a reordering drop-down, but when I _do_ come up with a new idea midway through I'm reluctant to leave it out purely because I hadn't planned for it.
