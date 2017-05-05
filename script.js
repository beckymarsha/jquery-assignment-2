$.ajax({
    url: "https://quarkbackend.com/getfile/karbassi/user-profiles",
    type: "GET",
    success: function (response) {
        for (var i = 0; i < response.length; i++) {
            var user = response[i];
            updateUserInformation(i, user)
        }
    }
})

function updateUserInformation(index, user) {
    var $user = $('.user-profile').eq(index);
    $user.find('img').attr('src', user.picture)
    $user.find("h3").text(user.name.first + " " + user.name.last);
    $user.find('.company').find('.name').text(user.company.name);
    $user.find('.company').find('.street').text(user.company.address.street);
    $user.find('.company').find('.city').text(user.company.address.city);
    $user.find('.company').find('span').find('.state').text(user.company.address.state);
    $user.find('.company').find('.zip').text(user.company.zip);
    $user.find('a').text(user.company.email);
    $user.find('.company')
        .find('a')
        .text(user.email)
        .attr('href', "mailto:" + user.company.email);
    $user.css("background-color", user.favoriteColor);
}