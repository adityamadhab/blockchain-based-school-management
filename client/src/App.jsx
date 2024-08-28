import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { FaUserGraduate, FaChalkboardTeacher, FaEthereum, FaCheckCircle } from 'react-icons/fa';
import Swal from 'sweetalert2';
import './App.css';

const contractABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_studentAddress",
        "type": "address"
      }
    ],
    "name": "getStudent",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_teacherAddress",
        "type": "address"
      }
    ],
    "name": "getTeacher",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_class",
        "type": "string"
      }
    ],
    "name": "registerStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "_age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "_subject",
        "type": "string"
      }
    ],
    "name": "registerTeacher",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "studentAccounts",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "students",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "class",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "studentAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "teacherAccounts",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "teachers",
    "outputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "subject",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "teacherAddress",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const contractAddress = '0xA253Bf9105FBDB40729BeC9Cdd9C83A2cA1d3d46';

function App() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);

  const [studentName, setStudentName] = useState('');
  const [studentAge, setStudentAge] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [studentAddress, setStudentAddress] = useState('');

  const [teacherName, setTeacherName] = useState('');
  const [teacherAge, setTeacherAge] = useState('');
  const [teacherSubject, setTeacherSubject] = useState('');
  const [teacherAddress, setTeacherAddress] = useState('');

  const [studentInfo, setStudentInfo] = useState({});
  const [teacherInfo, setTeacherInfo] = useState({});

  useEffect(() => {
    if (web3 && account) {
      const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
      setContract(contractInstance);
    }
  }, [web3, account]);

  const connectToBlockchain = async () => {
    if (window.ethereum) {
      try {
        const web3Instance = new Web3(window.ethereum);
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWeb3(web3Instance);
        setAccount(accounts[0]);
        Swal.fire({
          title: 'Connected!',
          text: 'Connected to MetaMask successfully.',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to connect to MetaMask.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } else {
      Swal.fire({
        title: 'MetaMask not found',
        text: 'Please install MetaMask to use this feature.',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
    }
  };

  const registerStudent = async () => {
    if (contract) {
      try {
        await contract.methods.registerStudent(studentName, studentAge, studentClass)
          .send({ from: account });
        Swal.fire({
          title: 'Success!',
          text: 'Student Registered Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } catch (error) {
        console.error("Error registering student:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to register student.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const registerTeacher = async () => {
    if (contract) {
      try {
        await contract.methods.registerTeacher(teacherName, teacherAge, teacherSubject)
          .send({ from: account });
        Swal.fire({
          title: 'Success!',
          text: 'Teacher Registered Successfully!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
      } catch (error) {
        console.error("Error registering teacher:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Failed to register teacher.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    }
  };

  const getStudentDetails = async () => {
    if (contract) {
      try {
        const student = await contract.methods.getStudent(studentAddress).call();
        setStudentInfo({ name: student[0], age: student[1], class: student[2] });
      } catch (error) {
        console.error("Error getting student details:", error);
      }
    }
  };

  const getTeacherDetails = async () => {
    if (contract) {
      try {
        const teacher = await contract.methods.getTeacher(teacherAddress).call();
        setTeacherInfo({ name: teacher[0], age: teacher[1], subject: teacher[2] });
      } catch (error) {
        console.error("Error getting teacher details:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-6 text-gray-100">
      <button
        onClick={connectToBlockchain}
        className="mb-6 flex items-center bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105"
      >
        <FaEthereum className="mr-2" /> Connect to MetaMask!
      </button>

      {account && (
        <div className="mb-8 text-center">
          <h3 className="text-2xl font-semibold">Connected Account:</h3>
          <p className="text-lg text-gray-200">{account}</p>
        </div>
      )}

      <div className="container mx-auto mt-5 bg-white p-8 rounded-lg shadow-xl text-gray-900 transform transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
          <FaUserGraduate className="mr-2 text-blue-500" /> Register Student
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            placeholder="Age"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Class"
            value={studentClass}
            onChange={(e) => setStudentClass(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={registerStudent}
            className="bg-green-500 hover:bg-green-600 w-48 mx-auto text-white font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-300"
          >
            Register Student
          </button>
        </div>
      </div>
      <div className="container mx-auto mt-5 bg-white p-8 rounded-lg shadow-xl text-gray-900 transform transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
          <FaChalkboardTeacher className="mr-2 text-green-500" /> Register Teacher
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={teacherName}
            onChange={(e) => setTeacherName(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="number"
            placeholder="Age"
            value={teacherAge}
            onChange={(e) => setTeacherAge(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="text"
            placeholder="Subject"
            value={teacherSubject}
            onChange={(e) => setTeacherSubject(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            onClick={registerTeacher}
            className="w-48 mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-300"
          >
            Register Teacher
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-5 bg-white p-8 rounded-lg shadow-xl text-gray-900 transform transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
          <FaCheckCircle className="mr-2 text-yellow-500" /> Get Student Details
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Student Address"
            value={studentAddress}
            onChange={(e) => setStudentAddress(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={getStudentDetails}
            className="w-48 mx-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-300"
          >
            Get Student
          </button>
          {studentInfo.name && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold">Student Info</h3>
              <p>Name: {studentInfo.name}</p>
              <p>Class: {studentInfo.class}</p>
            </div>
          )}
        </div>
      </div>

      <div className="container mx-auto mt-5 bg-white p-8 rounded-lg shadow-xl text-gray-900 transform transition-transform duration-300">
        <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
          <FaCheckCircle className="mr-2 text-yellow-500" /> Get Teacher Details
        </h2>
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Teacher Address"
            value={teacherAddress}
            onChange={(e) => setTeacherAddress(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button
            onClick={getTeacherDetails}
            className="w-48 mx-auto bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-full shadow-md transform transition-transform duration-300"
          >
            Get Teacher
          </button>
          {teacherInfo.name && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-inner">
              <h3 className="text-xl font-semibold">Teacher Info</h3>
              <p>Name: {teacherInfo.name}</p>
              <p>Subject: {teacherInfo.subject}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
