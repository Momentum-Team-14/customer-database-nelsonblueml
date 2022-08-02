// data is being pulled from customers.js

const customerContainer = document.querySelector('#customerContainer');

function fillCustomerContainer(customerArray) {
    for(let indivCustomer of customerArray) {
        let customerDiv = document.createElement("div");
        customerDiv.classList.add("customer");

        // image
        let imageDiv = document.createElement("div");
        imageDiv.classList.add("photo");
        let picture = document.createElement("img");
        picture.src = indivCustomer.picture.large;
        imageDiv.appendChild(picture);
        customerDiv.appendChild(imageDiv);

        // name
        let nameDiv = document.createElement("div");
        nameDiv.classList.add("name");
        let firstName = indivCustomer.name.first;
        let lastName = indivCustomer.name.last;
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1); // capitalize first letter
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        nameDiv.innerText = `${firstName} ${lastName}`;
        customerDiv.appendChild(nameDiv);
        
        // email
        let emailDiv = document.createElement("div");
        emailDiv.classList.add("email");
        emailDiv.innerText = indivCustomer.email;
        customerDiv.appendChild(emailDiv);
        
        // address1
        let address1Div = document.createElement("div");
        address1Div.classList.add("address1");
        address1Div.innerText = `${indivCustomer.location.street.number} ${indivCustomer.location.street.name}`;
        customerDiv.appendChild(address1Div);

        // address2
        let address2Div = document.createElement("div");
        address2Div.classList.add("address2");
        let stateAbbr = nameToAbbr(indivCustomer.location.state); // using states.js
        address2Div.innerText = `${indivCustomer.location.city}, ${stateAbbr} ${indivCustomer.location.postcode}`;
        customerDiv.appendChild(address2Div);

        // dob
        let dobDiv = document.createElement("div");
        dobDiv.classList.add("dob");
        dobDiv.innerText = "DOB: " + moment(indivCustomer.dob.date).format('ll'); // using moment.js
        customerDiv.appendChild(dobDiv);

        // startDate
        let startDateDiv = document.createElement("div");
        startDateDiv.classList.add("startDate");
        startDateDiv.innerText = "Customer since: " + moment(indivCustomer.registered.date).format('ll'); // using moment.js
        customerDiv.appendChild(startDateDiv);

        // append customerDiv to customerContainer
        customerContainer.appendChild(customerDiv);
    }
}

fillCustomerContainer(customers);
