# notes
My own notes

# unordred list
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

#orderd list
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

#anchor tag(links)
<a href="url">link text</a>

#image tag
<img src="url" alt="alternatetext" width="500" height="600">

<hr> is used for hrizontal line 

<div> </div> is used to group everything within it together 

b,i,u is used for text (bold.italci,underline)


#video tag 
<video src="video.mp4" controls></video>   
<video src="video.mp4" controls poster="thumbnail.jpg"></video>   

#audio tag
<audio controls>
  <source src="sound.ogg" type="audio/ogg">
  <source src="sound.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>

#table tag
<table>
  
  <caption> table name</caption>
  <tr>
  <th> header1</th>
  <th> header2</th>
  </tr>
  <tr>
    <td> data1</td>
    <td> daat2</td>
  </tr>
</table>


using sematics for table
    <table >
        <caption> decription of the table </caption>
        <tr>
            <thead>
                <th>head1</th>
                <th>head2</th>
            </thead>
        </tr>

        <tr>
            <tbody>
                <td>
                    data1
                </td>
                <td>
                    data2
                </td>
            </tbody>
        </tr>
    </table>


# forms in html
action attribute is sued to define what action to be done for this form

input tag is used to get the input 
they r of soo many types depends on what we need 
    <form action="">
        <input type="text" name="" id="">
        <input type='password'>
        <input type="color">
        <input type="date">
        <input type="week">
    </form>

placeholder in input used to show what should be written here 

<label for="username">Click me to focus on the input field</label>
<input type="text" id="username" />

Checkbox
<input type="checkbox" name="hobby" value="cricket">
Checkbox lets the user select zero, one, or many options from a list.  

Radio button
<input type="radio" name="gender" value="male">
Radio button lets the user select exactly one option from a group (same name)

Select (dropdown)
<select name="city">
  <option value="indore">Indore</option>
  <option value="bhopal">Bhopal</option>
</select>
Select creates a dropdown list where the user chooses one (or, with multiple, several) options.

range

<input type="range" name="volume" min="0" max="100" value="50" step="5">

Textarea 
<textarea name="feedback" rows="5" cols="40" placeholder="Enter your feedback here"></textarea>


Inline CSS
Inline CSS is written directly inside an HTML tag using the style attribute, and it applies only to that specific element
<p style="color: red; font-size: 20px;">Hello</p>


Internal CSS
Internal CSS is written inside a <style> tag placed in the <head> section of the HTML file and can style multiple elements on that single page
<head>
  <style>
    p { color: blue; font-size: 18px; }
  </style>
</head>

External CSS
External CSS is written in a separate .css file and linked to the HTML document using a <link> tag inside the <head> section, allowing reuse across many pages

<head>
  <link rel="stylesheet" href="styles.css">
</head>

basic css syntax
selector {
  property: value;
}

colour
selector {
  color: value;
}

background colour 
selector {
  background-color: value;
}

fonntweight
selector {
  font-weight: value;
}


text decoration
none → no decoration (often used to remove underline from links)
underline → line below the text
overline → line above the text
line-through → line through the text (strike-through)


line-height sets the height of line boxes, controlling vertical space between lines of text for better readability

FONT FAMILY
selector {
  font-family: "font name", fallback, generic-family;
}
