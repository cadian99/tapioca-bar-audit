/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  CurveSwapper,
  CurveSwapperInterface,
} from "../../../contracts/swappers/CurveSwapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ICurvePool",
        name: "_curvePool",
        type: "address",
      },
      {
        internalType: "contract IPenrose",
        name: "_bar",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "curvePool",
    outputs: [
      {
        internalType: "contract ICurvePool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "getInputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "getOutputAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
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
        name: "tokenInId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokenOutId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "dexData",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "shareOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a0806040523461011557604081610c29803803809161001f828561011a565b8339810103126101155780516001600160a01b03918282169182900361011557602001519082821680920361011557600080546001600160a01b031916909117815560405163de40657760e01b815291602090839060049082905afa9182156101085781926100c3575b505016608052604051610ad5908161015482396080518181816101510152818161035f015281816103cb0152818161046301526107f50152f35b9091506020813d8211610100575b816100de6020938361011a565b810103126100fc57519082821682036100f957503880610089565b80fd5b5080fd5b3d91506100d1565b50604051903d90823e3d90fd5b600080fd5b601f909101601f19168101906001600160401b0382119082101761013d57604052565b634e487b7160e01b600052604160045260246000fdfe608080604052600436101561001357600080fd5b600090813560e01c908163218751b21461090657508063532bb1921461078a57806355a68e10146100a65763c6fe95491461004d57600080fd5b346100a35761005b36610957565b50505050606460405162461bcd60e51b815260206004820152600f60248201527f4e6f7420696d706c656d656e74656400000000000000000000000000000000006044820152fd5b80fd5b50346100a35760c03660031901126100a3576064356001600160a01b03811681036105805760a43567ffffffffffffffff8111610786576100ee6100f6913690600401610929565b8101906109c6565b90604051917f8d2e63b80000000000000000000000000000000000000000000000000000000083526004356004840152306024840152306044840152836064840152604435608484015260408360a481876001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af1928315610628578493610764575b5061019861018e82610a42565b51600f0b91610a65565b51926001600160a01b03855416604051947fc66106570000000000000000000000000000000000000000000000000000000086526fffffffffffffffffffffffffffffffff81166004870152602086602481855afa958615610759578796610719575b50604051635e0d443f60e01b8152600f85810b600483015282900b602482015260448101849052602081606481865afa90811561070e5788916106d8575b5060843511610694578691604051946370a0823160e01b86523060048701526020866024816001600160a01b038c165afa958615610628578496610660575b50813b1561050c578360849260405196879586947f3df021240000000000000000000000000000000000000000000000000000000086526004860152600f0b60248501526044840152833560648401525af1801561051c57610633575b5060206001600160a01b03936024604051809681936370a0823160e01b8352306004840152165afa9283156106285784936105ef575b50808311156105ab57820391821161059757604051907fcf35bdd000000000000000000000000000000000000000000000000000000000825283602435928360048201526080816024816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa90811561058c578291610527575b506001600160a01b03604460209260405194859384927f095ea7b3000000000000000000000000000000000000000000000000000000008452817f00000000000000000000000000000000000000000000000000000000000000001660048501528a6024850152165af1801561051c576104dc575b506001600160a01b0390604051927f9a9af97a000000000000000000000000000000000000000000000000000000008452600484015230602484015216604482015281606482015282608482015260408160a481866001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165af19081156104d157604093916104a2575b5082519182526020820152f35b6104c29150833d85116104ca575b6104ba818361098e565b810190610a75565b905038610495565b503d6104b0565b6040513d85823e3d90fd5b6020813d602011610514575b816104f56020938361098e565b8101031261051057518015150361050c5738610404565b8380fd5b8480fd5b3d91506104e8565b6040513d87823e3d90fd5b90506080813d8211610584575b816105416080938361098e565b810103126105805760058151101561058057604061056160208301610a8b565b9101516001600160a01b03811603610580576001600160a01b0361038f565b5080fd5b3d9150610534565b6040513d84823e3d90fd5b602483634e487b7160e01b81526011600452fd5b606460405162461bcd60e51b815260206004820152600b60248201527f73776170206661696c65640000000000000000000000000000000000000000006044820152fd5b9092506020813d602011610620575b8161060b6020938361098e565b8101031261061b5751913861030b565b600080fd5b3d91506105fe565b6040513d86823e3d90fd5b67ffffffffffffffff811161064c5760405260206102d5565b602485634e487b7160e01b81526041600452fd5b9095506020813d60201161068c575b8161067c6020938361098e565b8101031261050c57519438610278565b3d915061066f565b606460405162461bcd60e51b815260206004820152601760248201527f696e73756666696369656e742d616d6f756e742d6f75740000000000000000006044820152fd5b90506020813d602011610706575b816106f36020938361098e565b81010312610702575138610239565b8780fd5b3d91506106e6565b6040513d8a823e3d90fd5b9095506020813d602011610751575b816107356020938361098e565b8101031261074d5761074690610a8b565b94386101fb565b8680fd5b3d9150610728565b6040513d89823e3d90fd5b61077e91935060403d6040116104ca576104ba818361098e565b509138610181565b8280fd5b50346100a3576107a99061079d36610957565b819592939501906109c6565b90604051937f442c1599000000000000000000000000000000000000000000000000000000008552600485015260248401528160448401526020926001600160a01b03918482606481867f0000000000000000000000000000000000000000000000000000000000000000165afa918215610628579085929185926108d4575b5061087c938554169061084561083e82610a42565b5191610a65565b51604051635e0d443f60e01b8152600f92830b6004820152910b602482015260448101929092529092839190829081906064820190565b03915afa9182156108c8578092610898575b5050604051908152f35b9091508282813d83116108c1575b6108b0818361098e565b810103126100a3575051388061088e565b503d6108a6565b604051903d90823e3d90fd5b8092508391933d83116108ff575b6108ec818361098e565b8101031261050c5751849161087c610829565b503d6108e2565b9050346105805781600319360112610580576001600160a01b0360209254168152f35b9181601f8401121561061b5782359167ffffffffffffffff831161061b576020838186019501011161061b57565b606060031982011261061b5760043591602435916044359067ffffffffffffffff821161061b5761098a91600401610929565b9091565b90601f8019910116810190811067ffffffffffffffff8211176109b057604052565b634e487b7160e01b600052604160045260246000fd5b90602090818382031261061b57823567ffffffffffffffff9384821161061b570181601f8201121561061b5780359384116109b0578360051b9060405194610a108584018761098e565b8552838086019282010192831161061b578301905b828210610a33575050505090565b81358152908301908301610a25565b805115610a4f5760200190565b634e487b7160e01b600052603260045260246000fd5b805160011015610a4f5760400190565b919082604091031261061b576020825192015190565b51906001600160a01b038216820361061b5756fea2646970667358221220b25149f024f000903b6286eae097cd919f7b78a1752cda29514441f6d3a3a75264736f6c63430008120033";

type CurveSwapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CurveSwapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CurveSwapper__factory extends ContractFactory {
  constructor(...args: CurveSwapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _curvePool: PromiseOrValue<string>,
    _bar: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<CurveSwapper> {
    return super.deploy(
      _curvePool,
      _bar,
      overrides || {}
    ) as Promise<CurveSwapper>;
  }
  override getDeployTransaction(
    _curvePool: PromiseOrValue<string>,
    _bar: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_curvePool, _bar, overrides || {});
  }
  override attach(address: string): CurveSwapper {
    return super.attach(address) as CurveSwapper;
  }
  override connect(signer: Signer): CurveSwapper__factory {
    return super.connect(signer) as CurveSwapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CurveSwapperInterface {
    return new utils.Interface(_abi) as CurveSwapperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CurveSwapper {
    return new Contract(address, _abi, signerOrProvider) as CurveSwapper;
  }
}
