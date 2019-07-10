document.getElementById("button").addEventListener(
    "click",
    function(event) {
        if (event.target.value === "Before") {
            event.target.value = "After";
        } else {
            event.target.value = "Before";
        }
    },
    false
);