# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

SSH in: ssh -i C:\Users\joell\OneDrive\Desktop\260keypair.pem ubuntu@44.217.195.141

My IP address is: 44.217.195.141
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

This was easy. I was careful to use the correct structural elements such as header, footer, main, nav, and form. The links between the three views work great using the `a` element.

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```




## 🧩 SECTION 1: HTML BASICS

### 1. What does the `<link>` element do?

✅ **Summary:**  
The `<link>` element connects external resources (like stylesheets or icons) to an HTML document.

💡 **Example:**
``html
<link rel="stylesheet" href="styles.css">``
goes inside the head. does not display anything on the page.

### 2. What does a `<div>` tag do?
Division groups elemments into a block for styling or layout. 
``<div class="container">
<p>Hello World</p>
</div>``
often paired with CSS classes or IDs

### 3. Opening tags for key HTML elements
<p> paragraph. block of text
<ol> ordered list. numbered list
<ul> unordered list bulleted

### 4. Declaring doc type
```<!DOCTYPE html>```
always at the top of HTML doc

### 5. displaying image with hyperlink
`` <a href="https://byu.edu">
 <img src="cougar.png" alt="BYU logo">
</a>``

### 6. Difference between #title and .grid
- #title selects element by ID. just one thing
- .grid selects element by class. reusable mult things in same class
(in css)

### 7. Padding vs margin
- padding = space inside the element (between content and border)
- margin = space outside element (between border and neighbor)
+-----------------------------+
|         Margin              |
|   +---------------------+   |
|   |      Border         |   |
|   |  +-------------+    |   |
|   |  |  Padding    |    |   |
|   |  |  Content    |    |   |

### 9. change all divs to red

div {
  background-color: red;
}

### 10. trouble text to green 
```<p>double <span id="trouble">trouble</span></p>```
CSS:
#trouble {
  color: green;
}

<p>double <span style="color: green;">trouble</span></p>


<p id="byu">BYU Rocks!</p>

<script>
document.getElementById("byu").style.color = "green";
</script>





### 11. Default display of span is inline. don't start on a newline and only take as much space as needed

### 12. flexbox image layout
.container {
  display: flex;
}
- children (e.g. images) appear side by side horizontally 
- can control direction with flex-direction and spacing with justify-content

# 13. padding CSS
div {
  padding: 10px 20px 5px 15 px;
}
top, right, bottom, left (clockwise)

### 14. Arrow function syntax
const add = (x, y) => x + y;
console.log(add(2, 3)); // 5
- shorter syntax. dont bind tier own this. great for callbacks and array methods

### 15. Using map() on arrays
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
- creates new array by applying a function to each element

### 16. Using getElementById and addEventListener
document.getElementById("btn").addEventListener("click", () => {
  console.log("Button clicked!");
});
- select elements by id, attaches an event (like click) and runs the function

### 17. using a # selector in JS.
document.querySelector("#title");
- works like CSS -- # = id, . = class, element name = tag selector

### 18. selecting and syling with JS

document.getElementById("byu").style.color = "green";

### 19. changing text in JS
HTML:
<p id="animal">fish</p>
JS:
document.getElementById("animal").innerText = "crow";

### JS control syntax:
if (x > 5) { ... } else { ... }
for (let i = 0; i < 5; i++) { ... }
while (x < 10) { ... }
switch(day) {
  case 'Mon': ...
}


switch (day) {
  case "Mon":
    console.log("Start of week");
    break;
  case "Fri":
    console.log("Weekend!");
    break;
  default:
    console.log("Midweek");
}




### 21. JS objects
const person = {
  name: "Joella",
  age: 21
};
person.job = "developer";
- objects are dynamic. can add or modify keys

### 22. Including JS in html
<script src="script.js"></script>
place before </body> so html loads first

### 23. javascript for loop 
for (let i = 1; i <= 3; i++) {
  console.log(i);
}

### 24. promises
Promise.resolve("hi").then(msg => console.log(msg));
- promises handle ansynchronous code -- then() runs after resolution

🌐 SECTION 4: DOM (Document Object Model)

✅ The DOM represents the HTML page as a tree of objects that JS can manipulate.

💡 True statements about the DOM:

It lets JS access and modify HTML/CSS.

Each element is a node.

You can add, remove, or edit elements dynamically.


### 💻 SECTION 5: TERMINAL COMMANDS
Command	    What it does
chmod	      Change file permissions
pwd	        Print current directory
cd	        Change directory
ls	        List files
vim	        Open Vim text editor
nano	      Open Nano text editor
mkdir     	Make directory
mv	        Move or rename files
rm	        Remove files
man       	Show manual page
ssh	        Secure shell (remote login)
ps	        Show running processes
wget      	Download file from web
sudo	      Run as superuser (admin)

✅ ssh creates a remote shell session.

✅ ls -la → lists all files including hidden ones in long format.


### 🌍 SECTION 6: INTERNET BASICS
1. Domain breakdown

banana.fruit.bozo.click

Top-level domain (TLD): click

Root domain: bozo.click

Subdomain: banana.fruit

2. Web certificates & HTTPS

✅ Yes, a valid certificate is required for HTTPS.

3. DNS A record

✅ Can point to:

An IP address ✅

Not another A record ❌ (it must point to an IP)

4. Common ports
Port	Protocol
443 	HTTPS
80  	HTTP
22  	SSH