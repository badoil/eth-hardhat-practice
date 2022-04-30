//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract AssetToken is ERC20 {
  constructor(
    uint256 totalSupply_,
    string memory name_,
    string memory symbol_) ERC20(name_, symbol_) {
      _mint(msg.sender, totalSupply_);
    //   _setupDecimals(decimals_);
    }
}
