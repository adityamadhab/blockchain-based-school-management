
---

# Blockchain-Based School Management

![Project Logo](demo.png)

---

## 🎯 **Vision**

The **Blockchain-Based School Management** system aims to revolutionize school operations by leveraging blockchain technology to ensure transparency, security, and efficiency. The platform facilitates the seamless registration and management of students and teachers, with a tamper-proof record of their data. As a decentralized solution, it fosters trust and improves administrative processes within educational institutions.

---

## 🛠 **Tech Stack**

- **Smart Contract:** Solidity (0.8.19)
- **Frontend:** React.js, Tailwind CSS
- **Blockchain Network:** Ethereum
- **Deployment Tools:** Hardhat, MetaMask

---

## 🔗 **Smart Contract Flowchart**

```plaintext
+------------------------------------+
|          School Management         |
+------------------------------------+
            |       |               
     +------+       +-------+       
     |                      |       
 +---------+          +---------+   
 | Register|          | Register|   
 | Student |          | Teacher |   
 +----+----+          +----+----+   
      |                     |       
 +---------+          +---------+   
 |  Store  |          |  Store  |   
 | Student |          | Teacher |   
 |  Data   |          |  Data   |   
 +----+----+          +----+----+   
      |                     |       
+-----+-------+      +-------+-----+
| Access Data |      | Access Data |
|  (Student)  |      |  (Teacher)  |
+-------------+      +-------------+
```

---

## 📝 **Contract Details**

- **Contract Name:** `SchoolManagement`
- **License:** MIT
- **Network:** Ethereum
- **Contract Address:** `0xA253Bf9105FBDB40729BeC9Cdd9C83A2cA1d3d46`

### 🚀 **Functions**

- **registerStudent(_name, _age, _class):**  
  Registers a new student with the provided details.

- **registerTeacher(_name, _age, _subject):**  
  Registers a new teacher with the provided details.

- **getStudent(_studentAddress):**  
  Retrieves the details of a registered student by their address.

- **getTeacher(_teacherAddress):**  
  Retrieves the details of a registered teacher by their address.

---

## 💻 **Frontend Integration**

The frontend of the Blockchain-Based School Management system is built using **React** and **Tailwind CSS**. The integration provides a sleek and responsive user interface for interacting with the blockchain-based smart contract.

### 📚 **Features**

- **MetaMask Integration:** Users can connect to the Ethereum network via MetaMask.
- **Responsive Design:** Optimized for all devices using Tailwind CSS.
- **Interactive UI:** User-friendly forms for registering and retrieving student/teacher data.

### 📜 **Frontend Setup**

1. **Clone the Repository**
   ```bash
   git clone https://github.com/adityamadhab/school-management
   cd school-management
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

---

## 🌟 **Future Scope**

- **Enhanced Data Management:** Extend the contract to include class schedules, attendance records, and performance tracking.
- **Decentralized Grading System:** Enable teachers to submit grades on the blockchain, ensuring transparency.
- **Parent-Teacher Communication Portal:** Secure messaging between teachers and parents with privacy protection.
- **Multi-School Support:** Manage multiple schools, facilitating inter-school collaboration and resource sharing.

---

## 🚀 **Deployment Instructions**

1. **Compile and Deploy the Contract**
   - Use **Hardhat** or **Truffle** for contract deployment.
   - Ensure MetaMask is connected to the Ethereum network.

2. **Deploy to Ethereum**
   - Deploy the contract and note the contract address.
   - Use this address for interactions with the frontend.

3. **Integrate with Frontend**
   - Update the frontend configuration to point to the deployed contract address.

---

## 📧 **Contact Information**

For further inquiries, collaboration, or contributions, feel free to reach out:

- **Email:** [adityamadhabborah@gmail.com](mailto:adityamadhabborah@gmail.com)
- **GitHub:** [github.com/adityamadhab](https://github.com/adityamadhab)

---

### ✨ **Contributing**

Contributions are welcome! Please submit a pull request or open an issue to discuss any changes.

---
