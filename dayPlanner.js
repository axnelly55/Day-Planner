$(document).ready(function() {
    $(".saveBtn").on("click", function() {
        event.preventDefault();
        var description = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        console.log("button clicked");
        localStorage.setItem(time, description);
    })

});
//this is where the variable is storing and looping through scheduler
let theBigDay = [
    {
        id: "0",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        meridiem: "pm",
        reminder: ""
    },
    
]


// this call goes ahead and gets data for the header date
function getMeDate() {
var getMeDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(getMeDate);
}

// this call goes ahead saves data to localStorage
function saveReminders() {
localStorage.setItem("theBigDay", JSON.stringify(theBigDay));
}

// this call sets any data in localStorage to the view
function displayReminders() {
theBigDay.forEach(function (_thisHour) {
    $(`#${_thisHour.id}`).val(_thisHour.reminder);
})
}

// this call allows setting any existing localStorage data to the view if it exists
function init() {
var ayeDay = JSON.parse(localStorage.getItem("theBigDay"));

if (ayeDay) {
    theBigDay = ayeDay;
}

saveReminders();
displayReminders();
}

// this call goes ahead and loads header date
getMeDate();

// this call creates the visuals for the scheduler body
theBigDay.forEach(function(thisHour) {
// this call goes ahead and creates timeblocks row
var hourRow = $("<form>").attr({
    "class": "row"
});
$(".container").append(hourRow);

// this call allows for the creation of a time field
var hourField = $("<div>")
    .text(`${thisHour.hour}${thisHour.meridiem}`)
    .attr({
        "class": "col-md-2 hour"
});

// this calls for creation of schdeduler data
var hourPlan = $("<div>")
    .attr({
        "class": "col-md-9 description p-0"
    });
var planData = $("<textarea>");
hourPlan.append(planData);
planData.attr("id", thisHour.id);
if (thisHour.time < moment().format("HH")) {
    planData.attr ({
        "class": "past", 
    })
} else if (thisHour.time === moment().format("HH")) {
    planData.attr({
        "class": "present"
    })
} else if (thisHour.time > moment().format("HH")) {
    planData.attr({
        "class": "future"
    })
}

// this call creates a save button
var saveButton = $("<i class='far fa-save fa-lg'></i>")
var savePlan = $("<button>")
    .attr({
        "class": "col-md-1 saveBtn"
});
savePlan.append(saveButton);
hourRow.append(hourField, hourPlan, savePlan);
})

// this allows us to load any existing localstorage data after components created
init();


// and here we go ahead and save data to be used in localStorage
$(".saveBtn").on("click", function(event) {
event.preventDefault();
var saveIndex = $(this).siblings(".description").children(".future").attr("id");
theBigDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
console.log(saveIndex);
saveReminders();
displayReminders();

})


