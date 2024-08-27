# Blockchain-Based School Management
### <img src="logo.png" alt="Project Logo" width="400"/>
## Vision

The Blockchain-Based School Management aims to create a decentralized, transparent, and secure system for managing school operations. It allows for seamless registration and management of students and teachers, providing a tamper-proof record of their data. This contract can be expanded to support various administrative functions, fostering trust and efficiency in educational institutions.

## Smart Contract Flowchart

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

## Contract Details

- **Contract Name:** SchoolManagement
- **Language:** Solidity (0.8.19)
- **License:** MIT
- **Network:** Ethereum
- **Contract Address:** 0xA253Bf9105FBDB40729BeC9Cdd9C83A2cA1d3d46

### Functions:

- **registerStudent(_name, _age, _class):** Registers a new student with the provided details.
- **registerTeacher(_name, _age, _subject):** Registers a new teacher with the provided details.
- **getStudent(_studentAddress):** Retrieves the details of a registered student by their address.
- **getTeacher(_teacherAddress):** Retrieves the details of a registered teacher by their address.

## Future Scope

- **Enhanced Data Management:** Extend functionality to include class schedules, attendance records, and performance tracking.
- **Decentralized Grading System:** Allow teachers to submit grades directly on the blockchain, ensuring transparency and immutability.
- **Parent-Teacher Communication Portal:** Enable secure communication between teachers and parents, preserving privacy while ensuring accountability.
- **Multi-School Support:** Expand the contract to manage multiple schools, allowing inter-school collaboration and resource sharing.

## Deployment

- Deploy the contract on Ethereum using a compatible wallet (e.g., MetaMask) and a deployment tool such as Hardhat or Truffle.
- Once deployed, the contract address can be used to interact with the smart contract functions using a frontend or direct blockchain interactions.

## Contact Information

For further inquiries, collaboration, or contributions, feel free to reach out:

- **Email:** [adityamadhabborah@gmail.com]
- **GitHub:** [https://github.com/adityamadhab]
