/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  ProxyDeployer,
  ProxyDeployerInterface,
} from "../../contracts/ProxyDeployer";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "lzEndpoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lzEndpoint",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_salt",
        type: "bytes32",
      },
    ],
    name: "deployWithCreate2",
    outputs: [
      {
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
    ],
    name: "proxies",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiesCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461002857600080546001600160a01b03191633179055612b70908161002e8239f35b600080fdfe608060408181526004918236101561001657600080fd5b600092833560e01c9182638da5cb5b1461023957508163abd90f85146101e3578163aec3c2ac14610072575063dbb65cf71461005157600080fd5b3461006e578160031936011261006e576020906001549051908152f35b5080fd5b83838060031936011261006e57823573ffffffffffffffffffffffffffffffffffffffff918282168092036101df5782845416803303610182578151612884918282019282841067ffffffffffffffff85111761016f576102b78339848352602083015282816024359303019086f5801561016557831692600154680100000000000000008110156101525760209650917f3e92124ed434899798905270ec2eec729cc0faa83fbb940ff6ab9c132369e43b9161013784600188979601600155610269565b819291549060031b9187831b921b1916179055519480a38152f35b602486604189634e487b7160e01b835252fd5b81513d86823e3d90fd5b60248860418b634e487b7160e01b835252fd5b60648660208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601b60248201527f50726f78794465706c6f7965723a20756e617574686f72697a656400000000006044820152fd5b8380fd5b905034610235576020366003190112610235573591600154831015610232575073ffffffffffffffffffffffffffffffffffffffff610223602093610269565b92905490519260031b1c168152f35b80fd5b8280fd5b84903461006e578160031936011261006e5773ffffffffffffffffffffffffffffffffffffffff60209254168152f35b6001548110156102a05760016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf60190600090565b634e487b7160e01b600052603260045260246000fdfe60a034620000ce57601f6200288438819003918201601f19168301916001600160401b03831184841017620000d3578084926040948552833981010312620000ce57806200005f6020620000576200007d94620000e9565b9201620000e9565b906200006b33620000fe565b6001600160a01b0316608052620000fe565b60405161273e90816200014682396080518181816102dd01528181610405015281816104fe0152818161064d01528181610f93015281816110aa01528181611774015281816119600152611cdf0152f35b600080fd5b634e487b7160e01b600052604160045260246000fd5b51906001600160a01b0382168203620000ce57565b600080546001600160a01b039283166001600160a01b03198216811783559216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09080a356fe6080604052600436101561001257600080fd5b60003560e01c80621d35671461021657806307e0db17146102115780630df374831461020c57806310ddb137146102075780633d8b38f6146102025780633f1f4fa4146101fd57806342d65a8d146101f857806344770515146101f35780635b8c41e6146101ee57806366ad5c8a146101e9578063715018a6146101e45780637533d788146101df5780638cfd8f5c146101da5780638da5cb5b146101d55780638e8f294b146101d0578063950c8a74146101cb5780639f38369a146101c6578063a6c3d165146101c1578063af3fb21c146101bc578063b353aaa7146101b7578063baf3292d146101b2578063c4461834146101ad578063cbed8b9c146101a8578063d1deba1f146101a3578063df2a5b3b1461019e578063eab45d9c14610199578063eb8d72b714610194578063ed629c5c1461018f578063f2fde38b1461018a578063f3264a2d14610185578063f5ecbdbc146101805763f86a4ab31461017b57600080fd5b6117ee565b6116e9565b611663565b61157a565b611557565b61140c565b6113aa565b6112ac565b611153565b61104d565b611030565b610fb7565b610f73565b610f57565b610dd3565b610d25565b610cfe565b610cbb565b610c83565b610c28565b610bdb565b610a5e565b6108ca565b61082f565b6106d0565b61062b565b6105f2565b6105a7565b6104cc565b61048d565b6103d3565b6102c0565b61ffff81160361022757565b600080fd5b9181601f840112156102275782359167ffffffffffffffff8311610227576020838186019501011161022757565b906080600319830112610227576004356102738161021b565b9167ffffffffffffffff9060243582811161022757816102959160040161022c565b9390939260443581811681036102275792606435918211610227576102bc9160040161022c565b9091565b34610227576102ce3661025a565b91929493906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016330361038f5761035261035a926103609761034b61033161032c8a61ffff166000526001602052604060002090565b610aff565b8051908184149182610385575b5081610362575b50611bde565b3691610791565b923691610791565b92612076565b005b905061036f368486610791565b6020815191012090602081519101201438610345565b151591503861033e565b606460405162461bcd60e51b815260206004820152601e60248201527f4c7a4170703a20696e76616c696420656e64706f696e742063616c6c657200006044820152fd5b34610227576000602036600319011261048a576004356103f28161021b565b6103fa6118c3565b816001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691823b1561048657602461ffff918360405195869485937f07e0db170000000000000000000000000000000000000000000000000000000085521660048401525af1801561048157610475575080f35b61047e90610702565b80f35b61191b565b5080fd5b80fd5b346102275760403660031901126102275761ffff6004356104ad8161021b565b6104b56118c3565b166000526003602052602435604060002055600080f35b34610227576000602036600319011261048a576004356104eb8161021b565b6104f36118c3565b816001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691823b1561048657602461ffff918360405195869485937f10ddb1370000000000000000000000000000000000000000000000000000000085521660048401525af1801561048157610475575080f35b906040600319830112610227576004356105878161021b565b916024359067ffffffffffffffff8211610227576102bc9160040161022c565b3461022757602061ffff6105e36105bd3661056e565b93909116600052600184526105d56040600020610aff565b848151910120923691610791565b82815191012014604051908152f35b346102275760203660031901126102275761ffff6004356106128161021b565b1660005260036020526020604060002054604051908152f35b34610227576106393661056e565b91906106436118c3565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001691823b1561022757604051928380927f42d65a8d000000000000000000000000000000000000000000000000000000008252816106b36000988997889460048501612007565b03925af1801561048157610475575080f35b600091031261022757565b3461022757600036600319011261022757602060405160008152f35b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff811161071657604052565b6106ec565b60c0810190811067ffffffffffffffff82111761071657604052565b6040810190811067ffffffffffffffff82111761071657604052565b90601f8019910116810190811067ffffffffffffffff82111761071657604052565b67ffffffffffffffff811161071657601f01601f191660200190565b92919261079d82610775565b916107ab6040519384610753565b829481845281830111610227578281602093846000960137010152565b9080601f83011215610227578160206107e393359101610791565b90565b60005b8381106107f95750506000910152565b81810151838201526020016107e9565b6020906108239282604051948386809551938492016107e6565b82019081520301902090565b346102275760603660031901126102275760043561084c8161021b565b67ffffffffffffffff6024358181116102275761086d9036906004016107c8565b9060443590811681036102275761089c6108b59261ffff6108c695166000526005602052604060002090610809565b9067ffffffffffffffff16600052602052604060002090565b546040519081529081906020820190565b0390f35b34610227576108d83661025a565b949391503033036109f4576001600160a01b03946108fe61090693610983953691610791565b503691610791565b91600061091c602085518601016020860161222f565b969150169461095061094b610944886001600160a01b03166000526007602052604060002090565b5460ff1690565b6122d9565b604051809481927faa7d966500000000000000000000000000000000000000000000000000000000835260048301612457565b038183885af1908115610481577fe56f9bcb2a90b3dc97f0814c287246469fc5c7050a6022ad21b2fe9058129c819261ffff926109d2575b506109cd604051928392169482610bca565b0390a3005b6109ee903d806000833e6109e68183610753565b8101906123b7565b506109bb565b608460405162461bcd60e51b815260206004820152602660248201527f4e6f6e626c6f636b696e674c7a4170703a2063616c6c6572206d75737420626560448201527f204c7a41707000000000000000000000000000000000000000000000000000006064820152fd5b346102275760008060031936011261048a57610a786118c3565b806001600160a01b03815473ffffffffffffffffffffffffffffffffffffffff1981168355167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08280a380f35b90600182811c92168015610af5575b6020831014610adf57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610ad4565b9060405191826000825492610b1384610ac5565b908184526001948581169081600014610b825750600114610b3f575b5050610b3d92500383610753565b565b9093915060005260209081600020936000915b818310610b6a575050610b3d93508201013880610b2f565b85548884018501529485019487945091830191610b52565b915050610b3d94506020925060ff191682840152151560051b8201013880610b2f565b90602091610bbe815180928185528580860191016107e6565b601f01601f1916010190565b9060206107e3928181520190610ba5565b346102275760203660031901126102275761ffff600435610bfb8161021b565b1660005260016020526108c6610c146040600020610aff565b604051918291602083526020830190610ba5565b34610227576040366003190112610227576020610c7a600435610c4a8161021b565b61ffff60243591610c5a8361021b565b166000526002835260406000209061ffff16600052602052604060002090565b54604051908152f35b346102275760003660031901126102275760206001600160a01b0360005416604051908152f35b6001600160a01b0381160361022757565b34610227576020366003190112610227576001600160a01b03600435610ce081610caa565b166000526007602052602060ff604060002054166040519015158152f35b346102275760003660031901126102275760206001600160a01b0360045416604051908152f35b346102275760203660031901126102275761ffff600435610d458161021b565b166000526001602052610d5b6040600020610aff565b805115610d8f578051601319810191908211610d8a576108c691610d7e91612688565b60405191829182610bca565b611dcb565b606460405162461bcd60e51b815260206004820152601d60248201527f4c7a4170703a206e6f20747275737465642070617468207265636f72640000006044820152fd5b3461022757610de13661056e565b90610dea6118c3565b60405192602092808385870137610e166034868381013060601b88820152036014810188520186610753565b60009361ffff83168552600190818152604086209187519167ffffffffffffffff831161071657610e5183610e4b8654610ac5565b86612022565b80601f8411600114610ec1575091808092610eb09695948a9b7f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce9b94610eb6575b50501b916000199060031b1c19161790555b60405193849384612007565b0390a180f35b015192503880610e92565b91939498601f198416610ed987600052602060002090565b938a905b828210610f40575050917f8c0400cfe2d1199b1a725c78960bcc2a344d869b80590d0f2bd005db15a572ce999a95939185610eb098969410610f27575b505050811b019055610ea4565b015160001960f88460031b161c19169055388080610f1a565b808886978294978701518155019601940190610edd565b3461022757600036600319011261022757602060405160018152f35b346102275760003660031901126102275760206040516001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168152f35b34610227576020366003190112610227577f5db758e995a17ec1ad84bdef7e8c3293a0bd6179bcce400dff5d4c3d87db726b60206001600160a01b03600435610fff81610caa565b6110076118c3565b168073ffffffffffffffffffffffffffffffffffffffff196004541617600455604051908152a1005b346102275760003660031901126102275760206040516127108152f35b346102275760803660031901126102275760043561106a8161021b565b6024356110768161021b565b60643567ffffffffffffffff81116102275761109690369060040161022c565b90926110a06118c3565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690813b156102275760008094611130604051978896879586947fcbed8b9c00000000000000000000000000000000000000000000000000000000865261ffff80921660048701521660248501526044356044850152608060648501526084840191611fe6565b03925af180156104815761114057005b8061114d61036092610702565b806106c5565b61115c3661025a565b9161ffff869492961660005260056020526111a481604060002060206040518092878b8337878201908152030190209067ffffffffffffffff16600052602052604060002090565b54918215611242577fc264d91f3adc5588250e1551f547752ca0cfa8f6b530d243b9f9f4cab10ea8e59661123d946112319161122b91600061121f8761089c8d896112198f6112058f6111f8368c8e610791565b6020815191012014612549565b61ffff166000526005602052604060002090565b91612530565b556108fe36868c610791565b86612474565b604051958695866125ba565b0390a1005b608460405162461bcd60e51b815260206004820152602360248201527f4e6f6e626c6f636b696e674c7a4170703a206e6f2073746f726564206d65737360448201527f61676500000000000000000000000000000000000000000000000000000000006064820152fd5b34610227576060366003190112610227576004356112c98161021b565b6024356112d58161021b565b604435916112e16118c3565b821561135c5761123d7f9d5c7c0b934da8fefa9c7760c98383778a12dfbfc0c3b3106518f43fb9508ac09361ffff83166000526002602052806113368560406000209061ffff16600052602052604060002090565b556040519384938460409194939294606082019561ffff80921683521660208201520152565b606460405162461bcd60e51b815260206004820152601560248201527f4c7a4170703a20696e76616c6964206d696e47617300000000000000000000006044820152fd5b8015150361022757565b34610227576020366003190112610227577f1584ad594a70cbe1e6515592e1272a987d922b097ead875069cebe8b40c004a460206004356113ea816113a0565b6113f26118c3565b151560ff196006541660ff821617600655604051908152a1005b346102275761141a3661056e565b91906114246118c3565b60009161ffff811683526001602090808252604085209167ffffffffffffffff87116107165761145e876114588554610ac5565b85612022565b8590601f88116001146114c55750918680879893610eb0957ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab99936114ba575b501b906000198460031b1c191617905560405193849384612007565b88013592503861149e565b90601f1988166114da85600052602060002090565b9288905b828210611540575050918893917ffa41487ad5d6728f0b19276fa1eddc16558578f5109fc39d2dc33c3230470dab9899610eb0969410611526575b505082811b019055610ea4565b870135600019600386901b60f8161c191690553880611519565b808685968294968c013581550195019301906114de565b3461022757600036600319011261022757602060ff600654166040519015158152f35b346102275760203660031901126102275760043561159781610caa565b61159f6118c3565b6001600160a01b0380911680156115f95760009182548273ffffffffffffffffffffffffffffffffffffffff198216178455167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e08380a380f35b608460405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152fd5b346102275760403660031901126102275760043561168081610caa565b7f1bc0fc0d4d10627d4504555c200a4f8c7c6470c31b305764e9f1372161078a8d60206001600160a01b03602435936116b8856113a0565b6116c06118c3565b1692836000526007825260406000209015159060ff1981541660ff8316179055604051908152a2005b34610227576080366003190112610227576004356117068161021b565b602435906117138261021b565b61171e604435610caa565b604051917ff5ecbdbc00000000000000000000000000000000000000000000000000000000835261ffff809216600484015216602482015230604482015260643560648201526000816084816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa8015610481576108c6916000916117b5575b5060405191829182610bca565b6117d0913d8091833e6117c88183610753565b810190611fc0565b386117a8565b67ffffffffffffffff81116107165760051b60200190565b6080366003190112610227576004356118068161021b565b60249081359161181583610caa565b67ffffffffffffffff92604435848111610227573660238201121561022757806004013590611843826117d6565b936118516040519586610753565b828552602092818487019160051b8401019236841161022757828101915b84831061189d57505050505050606435938411610227576118976103609436906004016107c8565b92611927565b82358a81116102275786916118b883928736918701016107c8565b81520192019161186f565b6001600160a01b036000541633036118d757565b606460405162461bcd60e51b815260206004820152602060248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152fd5b6040513d6000823e3d90fd5b9092916040517f3408e4700000000000000000000000000000000000000000000000000000000081526020816004816001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000165afa908115610481576000916119ef575b5061ffff8084169116146119ab57610b3d93339233611af5565b606460405162461bcd60e51b815260206004820152601d60248201527f4d61726b65747350726f78793a20636861696e206e6f742076616c69640000006044820152fd5b906020823d8211611a21575b81611a0860209383610753565b8101031261048a575051611a1b8161021b565b38611991565b3d91506119fb565b908082519081815260208091019281808460051b8301019501936000915b848310611a575750505050505090565b9091929394958480611a75600193601f198682030187528a51610ba5565b9801930193019194939290611a47565b15611a8c57565b608460405162461bcd60e51b8152602060048201526024808201527f4c7a4170703a205f61646170746572506172616d73206d75737420626520656d60448201527f7074792e000000000000000000000000000000000000000000000000000000006064820152fd5b9094611b6694611bb391611b957fd3b01b57b25c5a506ceef68a2e5ce63cf91fe09d5270a8bb49839a64d5b1b1f7966040516bffffffffffffffffffffffff193060601b16602082015260148152611b4c81610737565b611b896040519a8b92606060208501526080840190610ba5565b6001600160a01b03809a166040840152601f199384848303016060850152611a29565b03908101895288610753565b60065460ff1615611bce57611baa8189611e3a565b34918789611ca5565b611bc961ffff6040519384931696169482610bca565b0390a3565b611bd9815115611a85565b611baa565b15611be557565b608460405162461bcd60e51b815260206004820152602660248201527f4c7a4170703a20696e76616c696420736f757263652073656e64696e6720636f60448201527f6e747261637400000000000000000000000000000000000000000000000000006064820152fd5b916107e39593611c7c611c8a9261ffff6001600160a01b039516865260c0602087015260c0860190610ba5565b908482036040860152610ba5565b931660608201526000608082015260a0818403910152610ba5565b90919361ffff82166000526001602052611cc26040600020610aff565b90815115611d6157611cd5845184611f02565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001692833b1561022757611d43600096604051988997889687957fc580310000000000000000000000000000000000000000000000000000000000875260048701611c4f565b03925af1801561048157611d545750565b8061114d610b3d92610702565b608460405162461bcd60e51b815260206004820152603060248201527f4c7a4170703a2064657374696e6174696f6e20636861696e206973206e6f742060448201527f61207472757374656420736f75726365000000000000000000000000000000006064820152fd5b634e487b7160e01b600052601160045260246000fd5b90601f8201809211610d8a57565b15611df657565b606460405162461bcd60e51b815260206004820152601b60248201527f4c7a4170703a20676173206c696d697420697320746f6f206c6f7700000000006044820152fd5b906022815110611ebe57602261ffff91015191166000526002602052604060002060016000526020526040600020548015611e7a57610b3d911015611def565b606460405162461bcd60e51b815260206004820152601a60248201527f4c7a4170703a206d696e4761734c696d6974206e6f74207365740000000000006044820152fd5b606460405162461bcd60e51b815260206004820152601c60248201527f4c7a4170703a20696e76616c69642061646170746572506172616d73000000006044820152fd5b61ffff166000526003602052604060002054908115611f67575b11611f2357565b606460405162461bcd60e51b815260206004820152602060248201527f4c7a4170703a207061796c6f61642073697a6520697320746f6f206c617267656044820152fd5b6127109150611f1c565b90929192611f7e81610775565b91611f8c6040519384610753565b829482845282820111610227576020610b3d9301906107e6565b9080601f830112156102275781516107e392602001611f71565b9060208282031261022757815167ffffffffffffffff8111610227576107e39201611fa6565b908060209392818452848401376000828201840152601f01601f1916010190565b60409061ffff6107e395931681528160208201520191611fe6565b90601f811161203057505050565b600091825260208220906020601f850160051c8301941061206c575b601f0160051c01915b82811061206157505050565b818155600101612055565b909250829061204c565b9290915a9260405160208101947f66ad5c8a00000000000000000000000000000000000000000000000000000000865261ffff87166024830152608060448301526120fb826120ed6120cb60a4830187610ba5565b67ffffffffffffffff8816606484015282810360231901608484015288610ba5565b03601f198101845283610753565b600080916040519761210c8961071b565b609689528260208a019560a036883751923090f1903d9060968211612153575b6000908288523e15612140575b5050505050565b6121499461215c565b3880808080612139565b6096915061212c565b919361221c7fe183f33de2837795525b4792ca4cd60535bd77c53b7e7030060bfcf5734d6b0c9561222a939561ffff815160208301209616958660005260056020526121e2836121c060208b604060002082604051948386809551938492016107e6565b8201908152030190209067ffffffffffffffff16600052602052604060002090565b5567ffffffffffffffff612208604051988998895260a060208a015260a0890190610ba5565b921660408701528582036060870152610ba5565b908382036080850152610ba5565b0390a1565b916060838303126102275782519260208082015161224c81610caa565b93604083015167ffffffffffffffff93848211610227570181601f8201121561022757805161227a816117d6565b946122886040519687610753565b818652848087019260051b8401019380851161022757858401925b8584106122b4575050505050505090565b83518381116102275787916122ce848480948a0101611fa6565b8152019301926122a3565b156122e057565b606460405162461bcd60e51b815260206004820152601e60248201527f4d61726b65747350726f78793a206d61726b6574206e6f742076616c696400006044820152fd5b81601f820112156102275780519061233b826117d6565b9260409261234b84519586610753565b808552602093848087019260051b8501019383851161022757858101925b85841061237a575050505050505090565b835167ffffffffffffffff811161022757820185603f820112156102275787916123ac87838786809601519101611f71565b815201930192612369565b9190916040818403126102275780519267ffffffffffffffff938481116102275782019381601f860112156102275784516123f1816117d6565b906123ff6040519283610753565b808252602096878084019260051b820101918583116102275788809201905b83821061243e575050505094830151908111610227576107e39201612324565b828091835161244c816113a0565b81520191019061241e565b9190602061246f600192604086526040860190611a29565b930152565b906124c46001600160a01b03926000612496602085518601016020860161222f565b969150169461095060ff6124bd886001600160a01b03166000526007602052604060002090565b54166122d9565b038183885af1908115610481577fe56f9bcb2a90b3dc97f0814c287246469fc5c7050a6022ad21b2fe9058129c819261ffff92612516575b50611bc96040519283926020845216946020830190610ba5565b61252a903d806000833e6109e68183610753565b506124fc565b6020919283604051948593843782019081520301902090565b1561255057565b608460405162461bcd60e51b815260206004820152602160248201527f4e6f6e626c6f636b696e674c7a4170703a20696e76616c6964207061796c6f6160448201527f64000000000000000000000000000000000000000000000000000000000000006064820152fd5b916125e79060609461ffff67ffffffffffffffff9499989799168552608060208601526080850191611fe6565b951660408201520152565b156125f957565b606460405162461bcd60e51b815260206004820152600e60248201527f736c6963655f6f766572666c6f770000000000000000000000000000000000006044820152fd5b1561264457565b606460405162461bcd60e51b815260206004820152601160248201527f736c6963655f6f75744f66426f756e64730000000000000000000000000000006044820152fd5b61269c8261269581611de1565b10156125f2565b6126a9828251101561263d565b816126c1575050604051600081526020810160405290565b60405191601f811691821560051b808486010193838501920101905b8084106126f55750508252601f01601f191660405290565b90928351815260208091019301906126dd56fea264697066735822122005f568a94511995305114463bcd5fc5a156ed1ac7f555e53fae5351a4d25a27464736f6c63430008120033a2646970667358221220012c09fe4203218dbed97b3cd486d4a1a760678c870dfbcfc52b11b3e7907e6664736f6c63430008120033";

type ProxyDeployerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProxyDeployerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProxyDeployer__factory extends ContractFactory {
  constructor(...args: ProxyDeployerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ProxyDeployer> {
    return super.deploy(overrides || {}) as Promise<ProxyDeployer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ProxyDeployer {
    return super.attach(address) as ProxyDeployer;
  }
  override connect(signer: Signer): ProxyDeployer__factory {
    return super.connect(signer) as ProxyDeployer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProxyDeployerInterface {
    return new utils.Interface(_abi) as ProxyDeployerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProxyDeployer {
    return new Contract(address, _abi, signerOrProvider) as ProxyDeployer;
  }
}
