// Author: Hugo Costilla
// Date of Development: 04/08/2023
// Purpose of Script: Show a console.log with the only active records with the Name, date, Favorite movie of each person

interface Member {
    Name: string;
    FavoriteFood: string;
    FavoriteMovie: string;
    /**@HugoCostilla I changed the type of this property to accept only the options 'Active' or 'Inactive'*/
    Status: 'Active' | 'Inactive';
    Date?: string; // Optional property
}

let rockyObj: Member = {
    Name: 'Rocky',
    FavoriteFood: 'Sushi',
    FavoriteMovie: 'Back to The Future',
    Status: 'Inactive',
};
let miroslavObj: Member = {
    Name: 'Miroslav',
    FavoriteFood: 'Sushi',
    FavoriteMovie: 'American Psycho',
    Status: 'Inactive',
};
let donnyObj: Member = {
    Name: 'Donny',
    FavoriteFood: 'Singapore chow mei fun',
    FavoriteMovie: 'The Princess Bride',
    Status: 'Inactive',
};
let mattObj: Member = {
    Name: 'Matt',
    FavoriteFood: 'Brisket Tacos',
    FavoriteMovie: 'The Princess Bride',
    Status: 'Inactive',
};

/**@HugoCostilla I added a new member with some of my information */
let hugoObj: Member = {
    Name: 'Hugo',
    FavoriteFood: 'Spaguetti',
    FavoriteMovie: 'Back to the future',
    Status: 'Inactive'
}

// Team member objects
let teamMembers: Member[] = [rockyObj, miroslavObj, donnyObj, mattObj, /** @HugoCostilla Newest member ->*/ hugoObj];

// Add the current date to each object
function addCurrentDateToObject(obj: Member) {
    obj.Date = new Date().toLocaleDateString();
}

// Add the current date to each object
teamMembers.forEach((member) => addCurrentDateToObject(member));

// Display active records
function displayActiveRecords(arr: Member[]) {
    let activeRecords = arr.filter((member) => member.Status === 'Active');
    if (activeRecords.length > 0) {
        activeRecords.forEach((member) =>
            /**@HugoCostilla I fixed this part of code by adding a correct braces for object and added backtick for each object property that printed down bellow */
            console.log({
                Name: `${member.Name}`, Date: `${member.Date}`, FavoriteMovie: `${member.FavoriteMovie}`
            })
        );
    } else {
        console.log('No active records found.');
    }
}

// Sort the output by object property (by 'Name' in this case) or by any property that you want
function sortOutputByProperty(arr: Member[], property: keyof Member) {
    arr.sort((a, b) => {
        if (a[property] && b[property]) {
            return a[property]! > b[property]! ? 1 : -1;
        }
        return 0;
    });
    console.log('sorted result:');
    arr.forEach((item) => {
        /**@HugoCostilla I fixed this part of code by adding a correct braces for object and added the correct property, in this case "Name" to print a sorted member's name list*/
        console.log({ [property]: `${item[property]}` });
    });
}

// Call the function to display active records Note: should be showing active objects
displayActiveRecords(teamMembers);

console.log('-------------------- ### ------------------------')

// Call the function to sort the output by 'Name' or any property that you want
sortOutputByProperty(teamMembers, 'Name');