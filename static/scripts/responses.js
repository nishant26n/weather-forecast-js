function getBotResponse(input) {
  // Weather Bot
  if (
    (input.includes("tom") && input.includes("out")) ||
    (input.includes("tom") && input.includes("weather"))
  ) {
    return `Tommorow, the weather is ${condition1.innerHTML}`;
  }

  if (input.includes("out") && conditionOutput.innerHTML == "Clear") {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can 😇.`;
  } else if (input.includes("out") && conditionOutput.innerHTML == "Mist") {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can but be safe😟`;
  } else if (
    input.includes("out") &&
    conditionOutput.innerHTML == "Partly cloudy"
  ) {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can but take umbrella with you.🌂`;
  } else if (input.includes("out") && conditionOutput.innerHTML == "Sunny") {
    return `Current Weather is ${conditionOutput.innerHTML} Yes you can 😇.`;
  } else if (input.includes("out") && conditionOutput.innerHTML == "Rainy") {
    return `Current Weather is ${conditionOutput.innerHTML} Only if there is an emergency and take umbrella with you☔️`;
  } else if (input.includes("weather")) {
    return `Weather is ${conditionOutput.innerHTML}`;
  }

  // Simple responses
  if (input == "hello" || input == "hi" || input == "hey") {
    return "Hello there!";
  } else if (input == "bye" || input == "goodbye" || input == "okay") {
    return "Talk to you later!";
  } else {
    return "Try asking something else!";
  }
}
