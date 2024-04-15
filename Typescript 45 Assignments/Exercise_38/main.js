"use strict";
const describeCity = (city, country = 'Pakistan') => {
    console.log(`${city} is in ${country}`);
};
describeCity('Karachi');
describeCity('Lahore');
describeCity("Paris", "France");
