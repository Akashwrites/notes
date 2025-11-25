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

