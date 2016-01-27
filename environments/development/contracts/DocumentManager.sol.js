"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var factory = function factory(Pudding) {
  // Inherit from Pudding. The dependency on Babel sucks, but it's
  // the easiest way to extend a Babel-based class. Note that the
  // resulting .js file does not have a dependency on Babel.

  var DocumentManager = (function (_Pudding) {
    _inherits(DocumentManager, _Pudding);

    function DocumentManager() {
      _classCallCheck(this, DocumentManager);

      _get(Object.getPrototypeOf(DocumentManager.prototype), "constructor", this).apply(this, arguments);
    }

    return DocumentManager;
  })(Pudding);

  ;

  // Set up specific data for this class.
  DocumentManager.abi = [{ "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }], "name": "getOpenRequestPublicKey", "outputs": [{ "name": "key", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "hash", "type": "string" }, { "name": "name", "type": "string" }], "name": "newDocument", "outputs": [{ "name": "nb", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }], "name": "getRequestOwner", "outputs": [{ "name": "addr", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }], "name": "getDocument", "outputs": [{ "name": "hash", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }], "name": "getEncryptedKeyFromRequest", "outputs": [{ "name": "name", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }], "name": "getDocumentHash", "outputs": [{ "name": "", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }, { "name": "encryptedKey", "type": "string" }], "name": "grantAccess", "outputs": [], "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }], "name": "getLastRequestId", "outputs": [{ "name": "id", "type": "uint256" }], "type": "function" }, { "constant": true, "inputs": [], "name": "nbDocuments", "outputs": [{ "name": "", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "publicKey", "type": "string" }], "name": "requestDocument", "outputs": [{ "name": "nb", "type": "uint256" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }], "name": "getRequestStatus", "outputs": [{ "name": "", "type": "uint8" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }], "name": "getDocumentName", "outputs": [{ "name": "name", "type": "string" }], "type": "function" }, { "constant": false, "inputs": [{ "name": "documentId", "type": "uint256" }, { "name": "requestId", "type": "uint256" }], "name": "denyAccess", "outputs": [], "type": "function" }, { "inputs": [], "type": "constructor" }];
  DocumentManager.binary = "606060405260028054600160a060020a031916331790556109ac806100246000396000f3606060405236156100ae5760e060020a60003504630fa7a79881146100b05780631a1486441461014f57806336a31de5146102715780633f9b250a146102bf5780636efe39a3146103375780638796ec86146102bf5780638d10215e146103d65780638da5cb5b146104d55780639152f0b2146104e757806399dc8dbd14610521578063a6b2df9b1461052a578063be9a9a2814610620578063c6b547e614610655578063d3f40a02146106cf575b005b6107396004356024356040805160208181018352600080835285815280825283812085825260050190915291909120805460a060020a900460ff16600114156109255760018181018054604080516020600295841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156109695780601f1061093e57610100808354040283529160200191610969565b6040805160206004803580820135601f81018490048402850184019095528484526107a7949193602493909291840191908190840183828082843750506040805160208835808b0135601f8101839004830284018301909452838352979998604498929750919091019450909250829150840183828082843750949650505050505050600180548101808255600090815260208181526040808320805473ffffffffffffffffffffffffffffffffffffffff1916331790558354835282208551908401805481855283852094959194600292821615610100026000190190911691909104601f9081018490048201938801908390106107d657805160ff19168380011785555b506108069291505b8082111561086e576000815560010161025d565b6107b960043560243560008281526020819052604081208054600160a060020a03908116339190911614156109375782825260058101602052604090912054600160a060020a031690610937565b6107396004356040805160208181018352600080835284815280825283902083516001918201805460029381161561010002600019011692909204601f8101849004840282018401909552848152929390918301828280156109a05780601f10610975576101008083540402835291602001916109a0565b6107396004356024356040805160208181018352600080835285815280825283812085825260050190915291909120805460a060020a900460ff16600214156109255760018181018054604080516020600295841615610100026000190190931694909404601f8101839004830285018301909152808452908301828280156109695780601f1061093e57610100808354040283529160200191610969565b604080516020604435600481810135601f81018490048402850184019095528484526100ae94813594602480359593946064949293910191819084018382808284375094965050505050505060008381526020819052604090208054600160a060020a03908116339190911614156108b157600083815260058201602090815260408220805460a060020a60ff0219167402000000000000000000000000000000000000000017815584516001918201805481865294849020909460029381161561010002600019011692909204601f9081018490048301939192918701908390106108b757805160ff19168380011785555b506108ae92915061025d565b6107b9600254600160a060020a031681565b6107a760043560008181526020819052604081208054600160a060020a039081163391909116141561051b57600381015491505b50919050565b6107a760015481565b60408051602060248035600481810135601f81018590048502860185019096528585526107a79581359591946044949293909201918190840183828082843750949650505050505050600082815260208181526040808320600381018054600190810191829055908552600582018452918420805460a060020a60ff02191660a060020a1773ffffffffffffffffffffffffffffffffffffffff19163317815585518184018054818852868820949693959194600292821615610100026000190190911691909104601f9081018490048201938901908390106108e757805160ff19168380011785555b5061091792915061025d565b6107a760043560243560008281526020818152604080832084845260050190915290205460a060020a900460ff165b92915050565b610739600435604080516020818101835260008083528481528082528390206002908101805485516001821615610100026000190190911692909204601f810184900484028301840190955284825292939092918301828280156109a05780601f10610975576101008083540402835291602001916109a0565b6100ae60043560243560008281526020819052604090208054600160a060020a03908116339190911614156107345760008281526005820160205260409020805460a060020a60ff021916740300000000000000000000000000000000000000001790555b505050565b60405180806020018281038252838181518152602001915080519060200190808383829060006004602084601f0104600302600f01f150905090810190601f1680156107995780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60408051918252519081900360200190f35b60408051600160a060020a03929092168252519081900360200190f35b82800160010185558215610255579182015b828111156102555782518260005055916020019190600101906107e8565b5050600180546000908152602081815260408220855160029182018054818652948490209095851615610100026000190190941691909104601f908101839004840193919287019083901061087257805160ff19168380011785555b506108a292915061025d565b5090565b82800160010185558215610862579182015b82811115610862578251826000505591602001919060010190610884565b5050600154905061064f565b50505b50505050565b828001600101855582156104c9579182015b828111156104c95782518260005055916020019190600101906108c9565b82800160010185558215610614579182015b828111156106145782518260005055916020019190600101906108f9565b505050600301549392505050565b60408051602081019091526000815291505b5092915050565b820191906000526020600020905b81548152906001019060200180831161094c57829003601f168201915b50505050509150610937565b820191906000526020600020905b81548152906001019060200180831161098357829003601f168201915b5050505050905091905056";

  if ("0x8571dd94a6bd5472ba5ba340e71c65d975e8e9ca" != "") {
    DocumentManager.address = "0x8571dd94a6bd5472ba5ba340e71c65d975e8e9ca";

    // Backward compatibility; Deprecated.
    DocumentManager.deployed_address = "0x8571dd94a6bd5472ba5ba340e71c65d975e8e9ca";
  }

  DocumentManager.generated_with = "1.0.3";
  DocumentManager.contract_name = "DocumentManager";

  return DocumentManager;
};

// Nicety for Node.
factory.load = factory;

if (typeof module != "undefined") {
  module.exports = factory;
} else {
  // There will only be one version of Pudding in the browser,
  // and we can use that.
  window.DocumentManager = factory;
}