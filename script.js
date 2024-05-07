let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById("display").value = displayValue;
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById("display").value = displayValue;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}

function clearDisplay() {
  displayValue = "";
  document.getElementById("display").value = "";
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the checkbox element
    const checkbox = document.querySelector('.switch input');

    // Function to toggle the active state of the switch
    function toggleSwitch() {
        const slider = document.querySelector('.slider');
        const bgimg = document.querySelector('.body');
        if (checkbox.checked) {
            bgimg.style.backgroundImage = 'url(nekobgdark.jpg)';
            slider.style.backgroundColor = 'var(--track_active_color)';
            slider.style.boxShadow = '0 0 0 2px var(--track_active_color)';
            slider.querySelector(':before').style.transform = 'translateX(calc(var(--switch_width) - var(--switch_height))) translateY(-0.2em)';
        } else {
            bgimg.style.backgroundImage = 'url(nekobglight.jpg)';
            slider.style.backgroundColor = 'var(--track_color)';
            slider.style.boxShadow = '0 0 0 0';
            slider.querySelector(':before').style.transform = 'translateY(-0.2em)';
        }
    }

    // Add event listener to the checkbox for change events
    checkbox.addEventListener('change', toggleSwitch);
});
