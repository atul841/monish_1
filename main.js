// calculate start the code 
function calculateEMI() {
  const principal = parseFloat(document.getElementById('emiAmount').value);
  const annualRate = parseFloat(document.getElementById('emiRate').value);
  const months = parseInt(document.getElementById('emiTenure').value);
  const monthlyRate = annualRate / 12 / 100;

  if (principal && annualRate && months) {
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
    document.getElementById('emiResult').innerText = `Monthly EMI: ₹${emi.toFixed(2)}`;
  } else {
    document.getElementById('emiResult').innerText = "Please fill all EMI fields correctly.";
  }
}


function calculateGST() { 
  const amount = parseFloat(document.getElementById('gstAmount').value);
  const rate = parseFloat(document.getElementById('gstRate').value);

  if (amount && rate) {
    const gst = (amount * rate) / 100;
    const total = amount + gst;
    document.getElementById('gstResult').innerText = `GST: ₹${gst.toFixed(2)}, Total: ₹${total.toFixed(2)}`;
  } else {
    document.getElementById('gstResult').innerText = "Please fill all GST fields correctly.";
  }
}  


function calculateLoan() {
  const amount = parseFloat(document.getElementById('loanAmount').value);
  const rate = parseFloat(document.getElementById('loanInterest').value);
  const years = parseFloat(document.getElementById('loanYears').value);

  if (amount && rate && years) {
    const interest = (amount * rate * years) / 100;
    const totalPayment = amount + interest;

    document.getElementById('loanResult').innerText = 
      `Total Interest: ₹${interest.toFixed(2)} | Total Payment: ₹${totalPayment.toFixed(2)}`;
  } else {
    document.getElementById('loanResult').innerText = "Please fill all loan fields correctly.";
  }
}
function normalCalculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const op = document.getElementById("operation").value;

  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers.";
  } else {
    switch (op) {
      case "+":
        result = `Result: ${num1 + num2}`;
        break;
      case "-":
        result = `Result: ${num1 - num2}`;
        break;
      case "*":
        result = `Result: ${num1 * num2}`;
        break;
      case "/":
        result = num2 === 0 ? "Cannot divide by zero." : `Result: ${num1 / num2}`;
        break;
      default:
        result = "Invalid operation.";
    }
  }

  document.getElementById("normalResult").innerText = result;
}
// calculate code end 
  // lucknow in the best offer in the name of that point here . 
  

// calender start
function saveTask() {
    const date = document.getElementById("taskDate").value;
    const task = document.getElementById("taskText").value.trim();
    if (!date || !task) return alert("Please enter both date and task");

    let tasks = JSON.parse(localStorage.getItem("calendarTasks")) || {};
    if (!tasks[date]) tasks[date] = [];
    tasks[date].push(task);

    localStorage.setItem("calendarTasks", JSON.stringify(tasks));
    document.getElementById("taskText").value = "";
    displayTasks();
  }

  function saveName (){ 
      const date = document.getElementByIds

  }
  function deleteTask(date, index) {
    let tasks = JSON.parse(localStorage.getItem("calendarTasks")) || {};
    if (tasks[date]) {
      tasks[date].splice(index, 1);
      if (tasks[date].length === 0) {
        delete tasks[date]; // remove date if no tasks left
      }
      localStorage.setItem("calendarTasks", JSON.stringify(tasks));
      displayTasks();
    }
  }

  function displayTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    const tasks = JSON.parse(localStorage.getItem("calendarTasks")) || {};

    for (const date in tasks) {
      const groupItem = document.createElement("li");
      groupItem.className = "list-group-item";

      const header = document.createElement("strong");
      header.innerText = `${date}:`;

      const ul = document.createElement("ul");
      ul.className = "list-unstyled mt-2";

      tasks[date].forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.className = "d-flex justify-content-between align-items-center mb-1";
        taskItem.innerHTML = `
          <span>${task}</span>
          <button class="btn btn-sm btn-outline-danger" onclick="deleteTask('${date}', ${index})">
            ✅ Done
          </button>
        `;
        ul.appendChild(taskItem);
      });

      groupItem.appendChild(header);
      groupItem.appendChild(ul);
      list.appendChild(groupItem);
    }
  }

  // Load tasks on page load
  document.addEventListener("DOMContentLoaded", displayTasks);

  // calender code  end

// graph code start here 
const createPieChart = (ctxId, labels, data, colors) => {
    const ctx = document.getElementById(ctxId).getContext("2d");
    return new Chart(ctx, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
          },
        ],
      },
    });
  };

  const createBarChart = (ctxId, labels, data, colors) => {
    const ctx = document.getElementById(ctxId).getContext("2d");
    return new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: ctxId,
            data: data,
            backgroundColor: colors,
          },
        ],
      },
    });
  };

  // Create all charts
  const emailChart = createPieChart("emailChart", ["Read", "Unread"], [30, 70], ["#36A2EB", "#FF6384"]);
  const clientChart = createPieChart("clientChart", ["New", "Old"], [20, 80], ["#FFCE56", "#4BC0C0"]);
  const customerChart = createBarChart("customerChart", ["Jan", "Feb", "Mar"], [100, 150, 200], ["#FF6384", "#36A2EB", "#FFCE56"]);
  const netWorthChart = createBarChart("netWorthChart", ["Assets", "Liabilities"], [50000, 20000], ["#4BC0C0", "#9966FF"]);
  const returnChart = createPieChart("returnChart", ["Returned", "Not Returned"], [10, 90], ["#FF9F40", "#36A2EB"]);
  const productChart = createBarChart("productChart", ["P1", "P2", "P3"], [50, 30, 20], ["#FF6384", "#FFCE56", "#4BC0C0"]);
  const orderChart = createBarChart("orderChart", ["Today", "Yesterday", "Last Week"], [5, 12, 35], ["#9966FF", "#FF9F40", "#36A2EB"]);

  // Auto update charts (simulate live changes)
  setInterval(() => {
    const random = () => Math.floor(Math.random() * 100);
    
    emailChart.data.datasets[0].data = [random(), random()];
    clientChart.data.datasets[0].data = [random(), random()];
    customerChart.data.datasets[0].data = [random(), random(), random()];
    netWorthChart.data.datasets[0].data = [random() * 1000, random() * 500];
    returnChart.data.datasets[0].data = [random(), random()];
    productChart.data.datasets[0].data = [random(), random(), random()];
    orderChart.data.datasets[0].data = [random(), random(), random()];

    emailChart.update();
    clientChart.update();
    customerChart.update();
    netWorthChart.update();
    returnChart.update();
    productChart.update();
    orderChart.update();
  }, 5000); // update every 5 seconds

  // graph code end 

// Show only login if not logged in
  function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      document.getElementById("loginSection").style.display = "flex";

      // Hide all other sections
      document.querySelectorAll('[id$="Section"]').forEach((sec) => {
        if (sec.id !== "loginSection") sec.style.display = "none";
      });
    }
  }

  // Enforce login on every reload
  window.addEventListener("DOMContentLoaded", checkLoginStatus);

  // Login Function
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const profile = JSON.parse(localStorage.getItem("adminProfile"));

    if (
      profile &&
      email === profile.email &&
      password === profile.newPassword
    ) {
      sessionStorage.setItem("isLoggedIn", "true");
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block";
    } else {
      document.getElementById("loginError").style.display = "block";
    }
  }

  // Logout Function
  function logout() {
    sessionStorage.removeItem("isLoggedIn");
    document.getElementById("loginSection").style.display = "flex";

    // Hide all other sections
    document.querySelectorAll('[id$="Section"]').forEach((sec) => {
      if (sec.id !== "loginSection") sec.style.display = "none";
    });
  }

  // Prevent section switching without login
  function showSection(id) {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      alert("Please login first!");
      checkLoginStatus();
      return;
    }

    // Hide all sections
    document.querySelectorAll('[id$="Section"]').forEach((sec) => {
      sec.style.display = "none";
    });

    // Show selected section
    document.getElementById(id).style.display = "block";
  }

  // logout section end 


// login section code
// Show login first on page load
  window.addEventListener("DOMContentLoaded", () => {
    const loggedIn = sessionStorage.getItem("isLoggedIn");
    if (!loggedIn) {
      document.getElementById("loginSection").style.display = "flex";
      document.querySelectorAll('[id$="Section"]').forEach((section) => {
        if (section.id !== "loginSection") section.style.display = "none";
      });
    } else {
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block"; // default page
    }
  });

  // Login function
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const profile = JSON.parse(localStorage.getItem("adminProfile"));

    if (
      profile &&
      email === profile.email &&
      password === profile.newPassword
    ) {
      sessionStorage.setItem("isLoggedIn", "true");
      document.getElementById("loginSection").style.display = "none";
      document.getElementById("dashboardSection").style.display = "block";
    } else {
      document.getElementById("loginError").style.display = "block";
    }
  }

  // Logout function (optional)
  function logout() {
    sessionStorage.removeItem("isLoggedIn");
    location.reload(); // reload to show login again
  }

function setActive(element) {
  const links = document.querySelectorAll("#sidebarNav .nav-link");
  links.forEach((link) => {
    link.classList.remove("bg-danger"); // remove red bg
  });
  element.classList.add("bg-danger"); // highlight clicked one
}

// profile image in the section
document.getElementById("profileImage").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    document.getElementById("profilePreview").src = URL.createObjectURL(file);
  }
});

// profiel code
const profileForm = document.getElementById("profileForm");

// Load saved profile data on page load
// window.addEventListener("DOMContentLoaded", () => {
//   const saved = JSON.parse(localStorage.getItem("adminProfile"));
//   if (saved) {
//     document.getElementById("adminName").value = saved.name || "";
//     document.getElementById("adminEmail").value = saved.email || "";
//     document.getElementById("adminPhone").value = saved.phone || "";
//     document.getElementById("adminGender").value = saved.gender || "";
//     document.getElementById("adminAddress").value = saved.address || "";
//     document.getElementById("adminRole").value = saved.role || "Administrator";
//     if (saved.image) {
//       document.getElementById("profilePreview").src = saved.image;
//     }
//   }
// });
const savedProfile = {
    email: "atul123@gmail.com",
    password: "1234"
  };

  function login() {
    const enteredEmail = document.getElementById("loginEmail").value.trim();
    const enteredPassword = document.getElementById("loginPassword").value.trim();

    if (
      enteredEmail === savedProfile.email &&
      enteredPassword === savedProfile.password
    ) {
      document.getElementById("loginError").style.display = "none";
      document.getElementById("loginSection").style.display = "none";

      // Show dashboard or other section here
      document.getElementById("dashboardSection").style.display = "block"; // Example
    } else {
      document.getElementById("loginError").style.display = "block";
    }
  }
// Save profile data
profileForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const profileData = {
  name: document.getElementById("adminName").value,
  email: document.getElementById("adminEmail").value,
  phone: document.getElementById("adminPhone").value,
  gender: document.getElementById("adminGender").value,
  address: document.getElementById("adminAddress").value,
  role: document.getElementById("adminRole").value,
  image: document.getElementById("profilePreview").src,
  newPassword: document.getElementById("adminNewPassword").value || "", // store password
};

localStorage.setItem("adminProfile", JSON.stringify(profileData));
  alert("Profile updated and saved successfully!");
});

// Preview image and save base64
document.getElementById("profileImage").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profilePreview").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// profile code end

document.getElementById("profileForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const profileData = {
    name: document.getElementById("adminName").value,
    email: document.getElementById("adminEmail").value,
    phone: document.getElementById("adminPhone").value,
    gender: document.getElementById("adminGender").value,
    address: document.getElementById("adminAddress").value,
    role: document.getElementById("adminRole").value,
  };
  localStorage.setItem("adminProfile", JSON.stringify(profileData));
  alert("Profile updated successfully!");
});

// live tracking script code
setInterval(() => {
  // Refresh logic or AJAX call here
  console.log("Refreshing tracking info...");
}, 15000); // refresh every 15 seconds

let products = JSON.parse(localStorage.getItem("products")) || [];

function showSection(id) {
  document
    .querySelectorAll(".container-fluid > div")
    .forEach((sec) => (sec.style.display = "none"));
  document.getElementById(id).style.display = "block";
}
// return ka js code
function showSection(id) {
  document
    .querySelectorAll('div[id$="Section"]')
    .forEach((el) => (el.style.display = "none"));
  document.getElementById(id).style.display = "block";
}
// massage ka js code
document
  .getElementById("recipientType")
  .addEventListener("change", function () {
    const field = document.getElementById("recipientField");
    if (this.value === "mobile" || this.value === "name") {
      field.style.display = "block";
    } else {
      field.style.display = "none";
    }
  });

// Load saved messages
function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  const table = document.getElementById("messageTable");
  table.innerHTML = "";
  messages.forEach((msg) => {
    const row = `<tr>
        <td>${msg.to}</td>
        <td>${msg.message}</td>
        <td>${msg.date}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

// Save and send message
document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const type = document.getElementById("recipientType").value;
  const value = document.getElementById("recipientValue").value.trim();
  const message = document.getElementById("messageContent").value.trim();
  const date = new Date().toLocaleString();

  let recipient = "All Customers";
  if (type === "mobile") recipient = `Mobile: ${value}`;
  if (type === "name") recipient = `Name: ${value}`;

  const messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push({ to: recipient, message: message, date: date });
  localStorage.setItem("messages", JSON.stringify(messages));
  loadMessages();
  this.reset();
  document.getElementById("recipientField").style.display = "none";
});

// Clear all messages
function clearMessages() {
  localStorage.removeItem("messages");
  loadMessages();
}

// Load messages on page load
window.addEventListener("load", loadMessages);
// massage code end

// email section code
function loadEmails() {
  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  const table = document.getElementById("emailTable");
  table.innerHTML = "";
  emails.forEach((email) => {
    const row = `<tr>
        <td>${email.name}</td>
        <td>${email.email}</td>
        <td>${email.message}</td>
        <td>${email.reply}</td>
        <td>${email.date}</td>
      </tr>`;
    table.innerHTML += row;
  });
}

document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("emailCustomerName").value.trim();
  const email = document.getElementById("emailCustomerEmail").value.trim();
  const message = document.getElementById("emailCustomerMessage").value.trim();
  const date = new Date().toLocaleString();

  // Auto Reply Template
  const autoReply = `Dear ${name}, Thank you for contacting us. We have received your message and will get back to you shortly.`;

  const emails = JSON.parse(localStorage.getItem("emails")) || [];
  emails.push({ name, email, message, reply: autoReply, date });
  localStorage.setItem("emails", JSON.stringify(emails));

  loadEmails();
  this.reset();
});

function clearEmails() {
  localStorage.removeItem("emails");
  loadEmails();
}

window.addEventListener("load", loadEmails);
// email section code end

//  chat section code start
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");
const chatInput = document.getElementById("chatInput");

function loadChat() {
  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  chatBox.innerHTML = "";
  messages.forEach((msg) => {
    const div = document.createElement("div");
    div.className = `chat-message ${
      msg.sender === "admin" ? "chat-right ms-auto" : "chat-left me-auto"
    }`;
    div.textContent = msg.text;
    chatBox.appendChild(div);
  });
  chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (text === "") return;

  const messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
  messages.push({ sender: "admin", text });
  localStorage.setItem("chatMessages", JSON.stringify(messages));
  chatInput.value = "";
  loadChat();

  // Simulate customer reply after 2 seconds
  setTimeout(() => {
    const replies = ["Thanks!", "Okay", "Got it", "I will check."];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    messages.push({ sender: "user", text: reply });
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    loadChat();
  }, 2000);
});

window.addEventListener("load", loadChat);
// chat section end

function updateProductTable() {
  const table = document.getElementById("productTable");
  table.innerHTML = "";
  products.forEach((p, i) => {
    const row = `<tr>
      <td><img src="${p.image}" alt="" style="height:40px;"/></td>
      <td>${p.name}</td>
      <td>${p.type}</td>
      <td>${p.price}</td>
      <td>${p.size}</td>
      <td>${p.quantity}</td>
      <td>${p.description}</td>
      <td>
        <button class='btn btn-sm btn-warning' onclick='editProduct(${i})'>Edit</button>
        <button class='btn btn-sm btn-danger' onclick='deleteProduct(${i})'>Delete</button>
      </td>
    </tr>`;
    table.innerHTML += row;
  });
  updateDashboard();
  saveProductsToStorage();
}

function updateDashboard() {
  const sold = products.reduce((a, b) => a + (b.sold || 0), 0);
  const returned = products.reduce((a, b) => a + (b.returned || 0), 0);
  const profit = products.reduce(
    (a, b) => a + b.price * ((b.sold || 0) - (b.returned || 0)),
    0
  );
  document.getElementById("totalProducts").textContent = products.length;
  document.getElementById("productsSold").textContent = sold;
  document.getElementById("productsReturned").textContent = returned;
  document.getElementById("netProfit").textContent = `₹${profit}`;
  updateChart(sold, returned);
}

function saveProductsToStorage() {
  localStorage.setItem("products", JSON.stringify(products));
}

function editProduct(index) {
  const p = products[index];
  document.getElementById("name").value = p.name;
  document.getElementById("type").value = p.type;
  document.getElementById("price").value = p.price;
  document.getElementById("size").value = p.size;
  document.getElementById("quantity").value = p.quantity;
  document.getElementById("description").value = p.description;
  document.getElementById("editIndex").value = index;
}

function deleteProduct(index) {
  products.splice(index, 1);
  updateProductTable();
}
// product js code start here 
document.getElementById("productForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const price = document.getElementById("price").value;
  const size = document.getElementById("size").value;
  const quantity = document.getElementById("quantity").value;
  const description = document.getElementById("description").value;
  const imageInput = document.getElementById("image");

  const reader = new FileReader();
  reader.onload = function () {
    const image = reader.result;

    const product = {
      name,
      type,
      price,
      size,
      quantity,
      description,
      image,
    };

    const products = JSON.parse(localStorage.getItem("products") || "[]");
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    alert("Product saved!");
    document.getElementById("productForm").reset();
    document.getElementById("preview").src = "";
  };

  if (imageInput.files[0]) {
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    alert("Please select an image.");
  }
});

// image add screept
document.getElementById("image").addEventListener("change", function (e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (evt) {
      document.getElementById("preview").src = evt.target.result;
    };
    reader.readAsDataURL(file);
  }
});
// the end screet  in the name section

let salesChart;
function updateChart(sold, returned) {
  const ctx = document.getElementById("salesChart").getContext("2d");
  if (salesChart) salesChart.destroy();
  salesChart = new Chart(ctx, {
    type: "pie",
    data: {
      labels: ["Sold", "Returned"],
      datasets: [
        {
          data: [sold, returned],
          backgroundColor: ["#198754", "#ffc107"],
        },
      ],
    },
  });
}

showSection("dashboardSection");
updateProductTable();


// product add js


  const productForm = document.getElementById("productForm");
  const productTable = document.getElementById("productTable");
  const preview = document.getElementById("preview");
  const imageInput = document.getElementById("image");

  // Image Preview
  imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        preview.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });

  // Form Submit
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const file = imageInput.files[0];
    if (!file) {
      alert("Please select an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const imageBase64 = e.target.result;

      const newProduct = {
        id: Date.now(),
        name: document.getElementById("name").value,
        type: document.getElementById("type").value,
        price: parseFloat(document.getElementById("price").value),
        size: document.getElementById("size").value,
        quantity: parseInt(document.getElementById("quantity").value),
        description: document.getElementById("description").value,
        image: imageBase64
      };

      const products = JSON.parse(localStorage.getItem("products")) || [];
      products.push(newProduct);
      localStorage.setItem("products", JSON.stringify(products));
      productForm.reset();
      preview.src = "";
      alert("Product saved successfully!");
      renderProductTable();
    };
    reader.readAsDataURL(file);
  });

  function renderProductTable() {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    productTable.innerHTML = products.map((p, i) => `
      <tr>
        <td>${p.name}</td>
        <td>${p.type}</td>
        <td>₹${p.price}</td>
        <td>${p.size}</td>
        <td>${p.quantity}</td>
        <td>${p.description}</td>
        <td>
          <button class="btn btn-danger btn-sm" onclick="deleteProduct(${i})">Delete</button>
        </td>
      </tr>
    `).join("");
  }

  function deleteProduct(index) {
    const products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    renderProductTable();
  }

  renderProductTable();


