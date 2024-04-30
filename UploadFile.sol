// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Upload {
    mapping (address=>string[]) private userFiles;
    modifier onlyOwnerAccess(address _user){
        require(msg.sender == _user,"You are not authorised");
        _;
    }

    function uploadFiles(address _user, string memory _ipHash) external{
        userFiles[_user].push(_ipHash);
    }

    function viewFiles(address _user) external view onlyOwnerAccess(_user) returns(string[] memory){
        return userFiles[_user];
    }

}
