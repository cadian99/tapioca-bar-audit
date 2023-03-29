/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  Multicall3,
  Multicall3Interface,
} from "../../../contracts/utils/Multicall3";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate3Value",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getBasefee",
    outputs: [
      {
        internalType: "uint256",
        name: "basefee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBlockNumber",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainId",
    outputs: [
      {
        internalType: "uint256",
        name: "chainid",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [
      {
        internalType: "address",
        name: "coinbase",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "difficulty",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "addr",
        type: "address",
      },
    ],
    name: "getEthBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastBlockHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "value",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call3Value[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicallValue",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "requireSuccess",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "blockHash",
        type: "bytes32",
      },
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall3.Result[]",
        name: "returnData",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610d4a908161001c8239f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c80630f28c97d14610137578063174dea7114610132578063252dba421461012d57806327e86d6e146101285780633408e47014610123578063399542e91461011e5780633e64a6961461011957806342cbb15c146101145780634d2301cc1461010f5780636e5a9cbb1461010a57806372425d9d1461010557806382ad56cb1461010057806386d516e8146100fb578063a8b0574e146100f6578063bce38bd7146100f1578063c3077fa9146100ec578063e8bbf5d7146100e75763ee82ac5e146100e257600080fd5b610903565b610862565b6107c8565b6107a5565b61078a565b61076f565b61069f565b610684565b6105d5565b6105ad565b610574565b610559565b610535565b6104c5565b6104a5565b6103e4565b610283565b34610152576000366003190112610152576020604051428152f35b600080fd5b9181601f840112156101525782359167ffffffffffffffff8311610152576020808501948460051b01011161015257565b6020600319820112610152576004359067ffffffffffffffff8211610152576101b391600401610157565b9091565b60005b8381106101ca5750506000910152565b81810151838201526020016101ba565b906020916101f3815180928185528580860191016101b7565b601f01601f1916010190565b908082519081815260208091019281808460051b8301019501936000915b84831061022d5750505050505090565b909192939495848061025f600193601f19868203018752828b51805115158352015190604090818582015201906101da565b980193019301919493929061021d565b9060206102809281815201906101ff565b90565b61028c36610188565b600061029782610aa3565b91815b8181106102c0576102bc846102b0853414610be1565b6040519182918261026f565b0390f35b6102ca8185610a44565b516102d6828488610bbf565b600080604061030a81850135809901986102ef866109b7565b926102fd60608801886109c1565b93909151809481936109f4565b03925af191610317610a1e565b9061032c602094859384840152829015159052565b51910135171561033f575060010161029a565b62461bcd60e51b60005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260846000fd5b90604082019082526020604081840152835180925260608301928160608460051b8301019501936000915b8483106103b65750505050505090565b90919293949584806103d4600193605f198682030187528a516101da565b98019301930191949392906103a6565b6103ed36610188565b906103ff6103fa83610962565b610937565b82815291601f1961040f82610962565b0160005b81811061049457505060005b81811061043557604051806102bc86438361037b565b8061048e6000806104496001958789610990565b81610461610456836109b7565b9260208101906109c1565b9190610472604051809481936109f4565b03925af161047e610a1e565b6104888489610a44565b52610a58565b0161041f565b806060602080938801015201610413565b346101525760003660031901126101525760206040516000194301408152f35b34610152576000366003190112610152576020604051468152f35b90604060031983011261015257600435801515810361015257916024359067ffffffffffffffff8211610152576101b391600401610157565b61028093926060928252602082015281604082015201906101ff565b6102bc61054a610544366104e0565b91610b07565b60405191829143404384610519565b34610152576000366003190112610152576020604051488152f35b34610152576000366003190112610152576020604051438152f35b73ffffffffffffffffffffffffffffffffffffffff81160361015257565b346101525760203660031901126101525760206004356105cc8161058f565b31604051908152f35b6105de36610188565b6000916105ea82610aa3565b91835b818110610603576102bc846102b0873414610be1565b61060d8185610a44565b5161067161066d60008061062286888a610bbf565b61064960409b8c8301358091019c6102fd84359461063f8661058f565b60608101906109c1565b03925af192610667610659610a1e565b602083019081529415158252565b51151590565b1590565b61067e57506001016105ed565b51610c3d565b34610152576000366003190112610152576020604051448152f35b6106a836610188565b6106b181610aa3565b9060005b8181106106ca57604051806102bc858261026f565b6106d48184610a44565b516106e0828487610b9d565b6000806106ec836109b7565b6106fe8260406102fd818801886109c1565b03925af19161070b610a1e565b90610720602094859384840152829015159052565b51910135171561073357506001016106b5565b62461bcd60e51b60005260045260176024527f4d756c746963616c6c333a2063616c6c206661696c656400000000000000000060445260646000fd5b34610152576000366003190112610152576020604051458152f35b34610152576000366003190112610152576020604051418152f35b6102bc6107b4610544366104e0565b6040519182916020835260208301906101ff565b6107d136610188565b6107da81610aa3565b9160005b8281106107f757604051806102bc864380409084610519565b8061085c61080760019387610a44565b51610813838787610990565b60008082356108218161058f565b81610831602095868101906109c1565b9190826040519384928337810182815203925af19061084e610a1e565b908301521515809152610a58565b016107de565b61086b36610188565b61087481610aa3565b9060005b81811061089557604051602080825281906102bc908201866101ff565b61089f8184610a44565b516000806108ae848689610b9d565b8035906108ba8261058f565b826108ca604092838101906109c1565b8093519384928337810182815203925af1906108e4610a1e565b918260208301521590811590526108fe5750600101610878565b610c3d565b34610152576020366003190112610152576020604051600435408152f35b634e487b7160e01b600052604160045260246000fd5b6040519190601f01601f1916820167ffffffffffffffff81118382101761095d57604052565b610921565b67ffffffffffffffff811161095d5760051b60200190565b634e487b7160e01b600052603260045260246000fd5b91908110156109b25760051b81013590603e1981360301821215610152570190565b61097a565b356102808161058f565b903590601e1981360301821215610152570180359067ffffffffffffffff82116101525760200191813603831361015257565b908092918237016000815290565b67ffffffffffffffff811161095d57601f01601f191660200190565b3d15610a3f573d90610a326103fa83610a02565b9182523d6000602084013e565b606090565b80518210156109b25760209160051b010190565b15610a5f57565b606460405162461bcd60e51b815260206004820152601760248201527f4d756c746963616c6c333a2063616c6c206661696c65640000000000000000006044820152fd5b90610ab06103fa83610962565b8281528092610ac1601f1991610962565b016000805b828110610ad35750505050565b604090815182810181811067ffffffffffffffff82111761095d576020935283815282606081830152828701015201610ac6565b929190610b1382610aa3565b9360005b838110610b245750505050565b80610b3160019288610a44565b5183610b3e838888610990565b6000808235610b4c8161058f565b81610b5c602095868101906109c1565b9190826040519384928337810182815203925af190610b79610a1e565b908401521515809252610b8e575b5001610b17565b610b9790610a58565b38610b87565b91908110156109b25760051b81013590605e1981360301821215610152570190565b91908110156109b25760051b81013590607e1981360301821215610152570190565b15610be857565b606460405162461bcd60e51b815260206004820152601a60248201527f4d756c746963616c6c333a2076616c7565206d69736d617463680000000000006044820152fd5b9060206102809281815201906101da565b6044815110610cd0576004810151810190602081602484019303126101525760248101519067ffffffffffffffff82116101525701908060438301121561015257602482015191610c906103fa84610a02565b918383526044848301011161015257610ccc92610cb49160446020850191016101b7565b60405191829162461bcd60e51b835260048301610c2c565b0390fd5b606460405162461bcd60e51b815260206004820152600e60248201527f526561736f6e20756e6b6e6f776e0000000000000000000000000000000000006044820152fdfea2646970667358221220ce1382f7e716a426579b48fc00ba92ea0bbb7f04754acf7fa3c935b01341cff264736f6c63430008120033";

type Multicall3ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: Multicall3ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Multicall3__factory extends ContractFactory {
  constructor(...args: Multicall3ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Multicall3> {
    return super.deploy(overrides || {}) as Promise<Multicall3>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Multicall3 {
    return super.attach(address) as Multicall3;
  }
  override connect(signer: Signer): Multicall3__factory {
    return super.connect(signer) as Multicall3__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Multicall3Interface {
    return new utils.Interface(_abi) as Multicall3Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall3 {
    return new Contract(address, _abi, signerOrProvider) as Multicall3;
  }
}
