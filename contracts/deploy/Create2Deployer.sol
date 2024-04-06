// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import {Create2} from "../node_modules/@openzeppelin/contracts/utils/Create2.sol";

contract Create2Deployer {

    function deployContract(
        bytes32 salt,
        bytes memory bytecode,
        bytes memory initializeData
    ) public returns (address) {
        address deployedAddress = Create2.deploy(0, salt, bytecode);
        // transfer ownership to the _originSender
        if (initializeData.length > 0) {
            (bool success, ) = deployedAddress.call(initializeData);
            require(success, "initiailse failed");
        }
        return deployedAddress;
    }

    function computeAddress(
        bytes32 salt,
        bytes32 codeHash
    ) public view returns (address) {
        return Create2.computeAddress(salt, codeHash);
    }

    function computeAddressWithDeployer(
        bytes32 salt,
        bytes32 codeHash,
        address deployer
    ) public pure returns (address) {
        return Create2.computeAddress(salt, codeHash, deployer);
    }

    receive() external payable {}
}