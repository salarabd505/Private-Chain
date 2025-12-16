// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract PrivChain {

    struct Record {
        string data;
        uint256 timestamp;
        address creator;
    }

    Record[] private records;

    event RecordStored(uint256 indexed id, address indexed creator);

    function storeRecord(string memory _data) public {
        records.push(Record(_data, block.timestamp, msg.sender));
        emit RecordStored(records.length - 1, msg.sender);
    }

    function getRecord(uint256 index)
        public
        view
        returns (string memory, uint256, address)
    {
        require(index < records.length, "Invalid index");
        Record memory r = records[index];
        return (r.data, r.timestamp, r.creator);
    }

    function getRecordCount() public view returns (uint256) {
        return records.length;
    }

    function transferValue(address payable to) public payable {
        require(msg.value > 0, "Send ETH");
        to.transfer(msg.value);
    }
}
