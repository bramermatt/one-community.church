document.addEventListener("DOMContentLoaded", () => {
  const roomSection = document.getElementById("room-section");
  const timeSection = document.getElementById("time-section");
  const nameSection = document.getElementById("name-section");
  const emailSection = document.getElementById("email-block");
  const purposeSection = document.getElementById("purpose-block");
  const outLabel = document.getElementById("out-time-label");
  const buttons = document.getElementById("action-buttons");

  const backgroundImage = document.getElementById("background-image");
  const roomSelect = document.getElementById("room");

  const startTimeInput = document.getElementById("start-time");
  const durationSelect = document.getElementById("duration");
  const outTimeSpan = document.getElementById("out-time");
  const form = document.querySelector("form");
  const checkBtn = document.querySelector("#action-buttons button[type='button']");

  form.reset(); 

  // ✅ Set initial default background image
  backgroundImage.style.backgroundImage = "url('../img/facilities/newOCCBuildingFRONT.JPG')";

  roomSelect.addEventListener("change", () => {
    const room = roomSelect.value;

    let imageUrl = "url('../img/facilities/newOCCBuildingFRONT.JPG')"; // Fallback if needed

    switch (room) {
      case "Fellowship Hall":
        imageUrl = "url('../img/facilities/fellowshipHall.JPG')";
        break;
      case "Gymnasium":
        imageUrl = "url('../img/facilities/flc-1.jpeg')";
        break;
    }

    backgroundImage.style.backgroundImage = imageUrl;
    timeSection.classList.remove("hidden");
  });

// Unavailable dates list
const daysOff = [
    "2025-07-21",
    // Add more dates as needed
];

// List of unavailable time ranges per date (YYYY-MM-DD: [{start, end}])
const unavailableTimes = {
    "2025-07-19": [{start: "8:00", end: "10:00"}],
    // "2025-07-20": [{start: "15:00", end: "16:30"}],
};

// Flatpickr disables dates, not times, so we handle time blocking separately
const unavailableDates = [
    function(date) {
        // 0 = Sunday, 6 = Saturday
        const day = date.getDay();
        // Only enable Saturdays and Sundays
        if (!(day === 0 || day === 6)) return true;

        // Disable if date is in daysOff
        const dateString = date.toISOString().split('T')[0];
        if (daysOff.includes(dateString)) return true;

        return false;
    }
];

// Helper to check if a time is within unavailable ranges for a given date
function isTimeUnavailable(dateStr, timeStr) {
    if (!unavailableTimes[dateStr]) return false;
    const [h, m] = timeStr.split(":").map(Number);
    const timeMinutes = h * 60 + m;
    return unavailableTimes[dateStr].some(({start, end}) => {
        const [sh, sm] = start.split(":").map(Number);
        const [eh, em] = end.split(":").map(Number);
        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em;
        return timeMinutes >= startMin && timeMinutes < endMin;
    });
}

// Setup Flatpickr
flatpickr("#date", {
    minDate: "today",
    dateFormat: "Y-m-d",
    disable: unavailableDates, // Disable certain dates based on logic
    onDayCreate: function(_, __, ___, dayElem) {
        const dateString = dayElem.dateObj.toISOString().split('T')[0];
        if (unavailableDates[0](dayElem.dateObj)) { // Check if the date is unavailable
            dayElem.classList.add("bg-gray-300", "text-gray-500", "cursor-not-allowed");
        }
    },
    onChange: function(selectedDates) {
        const selectedDate = selectedDates[0].toISOString().split('T')[0];
        const selectedTime = document.getElementById("start-time").value; // Assuming start-time is the ID for the time input

        // If the selected date has unavailable times
        if (isTimeUnavailable(selectedDate, selectedTime)) {
            alert("Selected time is unavailable for this date.");
            // You can reset or block the time selection here if needed
        }

        roomSection.classList.remove("hidden");
    }
});


  // Calculate and show out-time
  function updateOutTime() {
    const startTime = startTimeInput.value;
    const duration = parseInt(durationSelect.value, 10);

    if (startTime && duration) {
      const [hours, minutes] = startTime.split(":").map(Number);
      const end = new Date();
      end.setHours(hours, minutes, 0, 0);
      end.setMinutes(end.getMinutes() + duration * 60);

      const outHour = end.getHours().toString().padStart(2, "0");
      const outMin = end.getMinutes().toString().padStart(2, "0");

      outTimeSpan.textContent = `${outHour}:${outMin}`;

      // Show all the remaining form fields
      outLabel.classList.remove("hidden");
      nameSection.classList.remove("hidden");
      emailSection.classList.remove("hidden");
      purposeSection.classList.remove("hidden");
      buttons.classList.remove("hidden");
    } else {
      // Hide all if inputs not filled
      outLabel.classList.add("hidden");
      nameSection.classList.add("hidden");
      emailSection.classList.add("hidden");
      purposeSection.classList.add("hidden");
      buttons.classList.add("hidden");
    }
  }

  startTimeInput.addEventListener("input", updateOutTime);
  durationSelect.addEventListener("change", updateOutTime);

  // Check availability button
  checkBtn.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Checking Available!");
    // TODO: Add real availability check logic or modal here
  });

  // Form submit for booking/payment
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Booking submitted! (This is where your payment modal would launch.)");
    // TODO: Integrate Stripe or show payment modal
  });
});
