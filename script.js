$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        console.log(response);

        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            console.log(response.length);
            updateUserInformation(i, user)
        }
    }
})

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);
    $user.find("h3").text(user.name.first + " " + user.name.last);
    $user.find('.company').find('.name').text(user.company.name);
    $user.find('.company').find('.street').text(user.company.street);
    $user.find('.company').find('.city').text(user.company.city);
    $user.find('.company').find('span').find('.state').text(user.company.state);
    $user.find('.company').find('.zip').text(user.company.zip);
    $user.find('a').text(user.company.email);
    $user
        .find('.email')
        .find('a')
        .text(user.email)
        .attr('href', "mailto:" + user.email);

}

 /*<div class="col-sm-6 col-md-3 user-profile">
                <div class="thumbnail">
                    <img src="https://placehold.it/200x200" alt="" />
                    <div class="caption">
                        <h3 class="name">Steve Jobs</h3>
                        <address class="company">
                            <strong class="name">Apple Inc.</strong><br>
                            <span class="street">1 Infinite Loop</span><br>
                            <span class="city">Cupertino</span>, <span class="state">CA</span> <span class="zip">95014</span>
                            <a href="mailto:sjobs@apple.com" class="email">sjobs@apple.com</a>
                        </address>
                    </div>
                </div>
            </div>*/

// This assignment will be covering jQuery's [`$.ajax`][$.ajax], [`find`][jQuery find], [`attr`][jQuery attr], [`text`][jQuery text], and [`css`][jQuery css] function.


// 4. Using the [$.ajax] `success` function, loop through the response. Do not use a [hard coded][hard coding] number in the loop.

// 1. Create a new function that updates one user at a time. Call this new function inside the loop in step 4.

// 1. This new function should update the elements of the div with the class of `user-profile`. It should:

//     - Set the user's image.

//     - Set the user's first and last name.

//     - Set the user's company name and address.

//     - Set the user's email address. The email address should be clickable.

//     - Set the background color of `.user-profile` to the user's favorite color.

// **Hint**: Email address links need to have `mailto:` in from of them. E.g: `<a href="mailto:person@example.com">person@example.com</a>`

// ### The HTML page should produce an image like so:

// ![output](./output.jpg)

// [fork]: https://github.com/karbassi-id/jQuery-assignment-2/fork
// [script.js]: ./script.js
// [$.ajax]: https://api.jquery.com/jQuery.ajax/
// [jQuery find]: https://www.w3schools.com/jquery/traversing_find.asp
// [jQuery attr]: https://www.w3schools.com/jquery/html_attr.asp
// [jQuery text]: https://www.w3schools.com/jquery/html_text.asp
// [jQuery css]: https://www.w3schools.com/jquery/jquery_css.asp
// [hard coding]: https://encrypted.google.com/search?q=hard+coding

