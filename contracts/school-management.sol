// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SchoolManagement {
    struct Student {
        string name;
        uint age;
        string class;
        address studentAddress;
    }

    struct Teacher {
        string name;
        uint age;
        string subject;
        address teacherAddress;
    }

    mapping(address => Student) public students;
    mapping(address => Teacher) public teachers;
    address[] public studentAccounts;
    address[] public teacherAccounts;

    function registerStudent(string memory _name, uint _age, string memory _class) public {
        Student memory newStudent = Student({
            name: _name,
            age: _age,
            class: _class,
            studentAddress: msg.sender
        });

        students[msg.sender] = newStudent;
        studentAccounts.push(msg.sender);
    }

    function registerTeacher(string memory _name, uint _age, string memory _subject) public {
        Teacher memory newTeacher = Teacher({
            name: _name,
            age: _age,
            subject: _subject,
            teacherAddress: msg.sender
        });

        teachers[msg.sender] = newTeacher;
        teacherAccounts.push(msg.sender);
    }

    function getStudent(address _studentAddress) public view returns (string memory, uint, string memory) {
        Student memory s = students[_studentAddress];
        return (s.name, s.age, s.class);
    }

    function getTeacher(address _teacherAddress) public view returns (string memory, uint, string memory) {
        Teacher memory t = teachers[_teacherAddress];
        return (t.name, t.age, t.subject);
    }
}
