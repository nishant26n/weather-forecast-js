function getBotResponse(input) {
  // Weather Bot
  const yourInput = input.toLowerCase();
  if (
    (yourInput.includes("tom") && yourInput.includes("out")) ||
    (yourInput.includes("tom") && yourInput.includes("weather"))
  ) {
    return `Tommorow, the weather is ${condition1.innerHTML}`;
  }

  if (yourInput.includes("out") && conditionOutput.innerHTML == "Clear") {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can 😇.`;
  } else if (yourInput.includes("out") && conditionOutput.innerHTML == "Mist") {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can but be safe😟`;
  } else if (
    yourInput.includes("out") &&
    conditionOutput.innerHTML == "Partly cloudy"
  ) {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can but take umbrella with you.🌂`;
  } else if (
    yourInput.includes("out") &&
    conditionOutput.innerHTML == "Sunny"
  ) {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can 😇.`;
  } else if (
    yourInput.includes("out") &&
    conditionOutput.innerHTML == "Rainy"
  ) {
    return `Current Weather is ${conditionOutput.innerHTML} Only if there is an emergency and take umbrella with you☔️`;
  } else if (yourInput.includes("weather")) {
    return `Weather is ${conditionOutput.innerHTML}`;
  }

  // Simple responses
  if (yourInput == "hello" || yourInput == "hi" || yourInput == "hey") {
    return "Hello there!";
  } else if (
    yourInput == "bye" ||
    yourInput == "goodbye" ||
    yourInput == "okay"
  ) {
    return "Talk to you later!";
  } else {
    return "Try asking something else!";
  }
}
