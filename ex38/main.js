// Creating a function
function describe_city(city, country) {
    if (country === void 0) { country = "PAKISTAN"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("karachi");
describe_city("Lahore");
describe_city("berlin", "germany");
