import "./styles.css";

let citiesSonVisited = [
  "Amsterdam",
  "Kiev",
  "Zurich",
  "Prague",
  "Berlin",
  "Barcelona"
];
let ticketsAvailable = [
  "Paris-Skopje",
  "Zurich-Amsterdam",
  "Prague-Zurich",
  "Barcelona-Berlin",
  "Kiev-Prague",
  "Skopje-Paris",
  "Amsterdam-Barcelona",
  "Berlin-Kiev",
  "Berlin-Amsterdam"
];

let route = [];
for (let i of ticketsAvailable) {
  let tickets = i.split("-");
  if (tickets[0] === "Kiev") {
    route.push(tickets);
  } else if (tickets[0] === "Prague") {
    route.push(tickets);
  } else if (tickets[0] === "Zurich") {
    route.push(tickets);
  } else if (tickets[0] === "Amsterdam") {
    route.push(tickets);
  } else if (tickets[0] === "Barcelona") {
    route.push(tickets);
  } else if (tickets[0] === "Berlin") {
    route.push(tickets);
  }
}
console.log(route);
