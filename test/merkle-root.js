const { expect } = require("chai");
const { ethers } = require("hardhat");
const keccak256 = require("keccak256");
const { MerkleTree } = require("merkletreejs");

function encodeLeaf(address, spots) {
    //Same as abi.encodePacked in Solidity
    return ethers.utils.defaultAbiCoder.encode(
        ["address", "uint64"],
        [address, spots]
    )
}