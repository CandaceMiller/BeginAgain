//this is the date method it will show an updated day each day you come to this site
let today = new Date();
$('#date').text(today.toDateString());
// this is where I'm hiding my input & go button until you click a day button it makes it cleaner and less clutter
$('.formInput').hide();          //this is a jQuery method
$('.goBtn').hide();
//this is where I'm calling the function to show the input button for the times of meetings once you click the day button
$('.weekBtn').on('click', function (e) {
    $('select').empty();     //this is a jQuery method
    let button = $(e.target);
    dayOfWeek = $(button).attr('id');
    setInputTimes(dayOfWeek);
    $('.formInput').show();      //this is a jQuery method
    $('.goBtn').show();
});
let setInputTimes = (day) => {      //(this is where the for...in statement is being used)
    for (x in meetings[day]) {
        $('select').append(`<option value="${x}">${x}</option>`);
    };
};
$('.goBtn').on('click', function (e) {
    e.preventDefault();         //this is a jQuery method
    $('td').remove();
    let time = $("select option:selected").val();
    let meetingTimes = meetings[dayOfWeek][time];
    for (let i = 0; i < meetingTimes.length; i++) {
        $('table').append(`<tr><td>${meetingTimes[i][0]}</td><td>${meetingTimes[i][1]}</td><td><a href="#">${meetingTimes[i][2]}</a></td></tr>`);      //this is a jQuery method
        $('.formInput').hide();       //this is a jQuery method
        $('.goBtn').hide();
    };
});
// this is where my rehabs are set in cards and when the user clicks on them the address', phone numbers and google maps links show up
// this makes it cleaner and less cluttered
$('.card-text').hide();
$('.card').on('click', function () {
    let target = $(this).children();
    let targetChildren = $(target[0]).children();
    $(targetChildren[1]).toggle();
    $(targetChildren[2]).toggle();
    $(targetChildren[3]).toggle();
});
$('.card').on('click', function () {
    $(this).toggleClass('location');
});
// this is rerouting you to the home page once signed in it's also pulling the values of your input for local storage
$('.signUpForm').on('submit', function (e) {
    e.preventDefault();
    alert('Thank you for signing up! You will recieve an email shortly!');
    let usersEmail = $('.emailInput').val();
    let usersName = $('.nameInput').val();
    usersArray.push(new SignUp(usersName, usersEmail));
    localStorage.setItem('user', JSON.stringify(usersArray)); 
    window.location.href = "file:///Users/candace.miller.208596/Desktop/candace-miller-capstone/index.html"
});
// constructor function for sign up page
function SignUp(name, email) {
    this.name = name;
    this.email = email;
};
// this is going to make my page say thank you when you click submit review button on my feedback page, pulling values & then take you back to the home page
$('.submitBtn').on('click', function (e) {
    e.preventDefault();
    alert('Thank you for your feedback! It was successfully submitted!');
    let usersEmail = $('.emailInput').val();
    let usersName = $('.nameInput').val();
    let usersGender = $('.radio-buttons').val();
    let referred = $('#hear-about').val();
    let comments = $('#comments').val();
    let visitAgain = $('input[type=radio]:checked').val();  
    usersArray.push(new Feedback(usersName, usersEmail,usersGender, comments, visitAgain, referred));
    localStorage.setItem('user', JSON.stringify(usersArray));
    window.location.href = "file:///Users/candace.miller.208596/Desktop/candace-miller-capstone/index.html"
});
// constructor function for feedback page
function Feedback(name, email, gender, comments, visitAgain, referred) {
    this.name = name;
    this.email = email;
    this.gender = gender;
    this.comments = comments;
    this.visitAgain = visitAgain;
    this.reffered = referred;
};
//this is where I'm using localStorage on my feedback & sign up page checking if we have local storage array set to users array and if not were setting to feedback array
let feedbackArray = [];
let usersArray = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):feedbackArray;