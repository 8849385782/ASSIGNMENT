// script.js

// Complaint Form

const complaintForm = document.getElementById("complaintForm");

if(complaintForm){

complaintForm.addEventListener("submit", function(e){

  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let vehicle = document.getElementById("vehicle").value;
  let complaint = document.getElementById("complaint").value;

  let data = JSON.parse(localStorage.getItem("complaints")) || [];

  data.push({
    name,
    phone,
    email,
    vehicle,
    complaint
  });

  localStorage.setItem("complaints", JSON.stringify(data));

  document.getElementById("success").innerText =
  "Complaint submitted successfully!";

  displayComplaints();

  complaintForm.reset();

});
}

// Display Complaints

function displayComplaints(){

  let tableBody = document.getElementById("tableBody");

  if(!tableBody) return;

  let data = JSON.parse(localStorage.getItem("complaints")) || [];

  tableBody.innerHTML = "";

  data.forEach(item => {

    tableBody.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.phone}</td>
        <td>${item.email}</td>
        <td>${item.vehicle}</td>
        <td>${item.complaint}</td>
      </tr>
    `;
  });

  document.getElementById("records").innerText =
  data.length + " record(s) found.";
}

displayComplaints();


// Services

function showService(type){

  const box = document.getElementById("serviceDetails");

  if(type === "repair"){
    box.innerHTML = `
      <h3>Vehicle Repair Service</h3>
      <p>We provide complete repair solutions for cars and bikes.</p>

      <ul>
        <li>Engine repair</li>
        <li>Brake servicing</li>
        <li>Oil changing</li>
        <li>Tyre replacement</li>
      </ul>
    `;
  }

  if(type === "insurance"){
    box.innerHTML = `
      <h3>Insurance Service</h3>
      <p>Insurance claims and policy support.</p>

      <ul>
        <li>Claim processing</li>
        <li>Policy renewal</li>
        <li>Accident claim support</li>
      </ul>
    `;
  }

  if(type === "roadside"){
    box.innerHTML = `
      <h3>Roadside Assistance</h3>
      <p>24/7 emergency roadside support.</p>

      <ul>
        <li>Towing service</li>
        <li>Fuel delivery</li>
        <li>Battery support</li>
      </ul>
    `;
  }
}


// Support

function showSupport(type){

  const box = document.getElementById("supportInfo");

  if(type === "technical"){
    box.innerHTML = `
      <h3>Technical Support</h3>
      <p>We solve technical website and software issues.</p>

      <ul>
        <li>Website errors</li>
        <li>Login issues</li>
        <li>System performance</li>
      </ul>
    `;
  }

  if(type === "billing"){
    box.innerHTML = `
      <h3>Billing Support</h3>
      <p>Invoice and payment support.</p>
    `;
  }

  if(type === "customer"){
    box.innerHTML = `
      <h3>Customer Care</h3>
      <p>General customer help and support.</p>
    `;
  }

  if(type === "complaint"){
    box.innerHTML = `
      <h3>Complaint Support</h3>
      <p>Complaint tracking and issue handling.</p>
    `;
  }
}


// Contact Form

const contactForm = document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  document.getElementById("messageSuccess").innerText =
  "Message sent successfully!";

  contactForm.reset();

});
}