/* Autogenerated file, do not edit! */

/* eslint-disable */
import {
  type AbiType,
  AztecAddress,
  type AztecAddressLike,
  CompleteAddress,
  Contract,
  type ContractArtifact,
  ContractBase,
  ContractFunctionInteraction,
  type ContractInstanceWithAddress,
  type ContractMethod,
  type ContractStorageLayout,
  type ContractNotes,
  decodeFromAbi,
  DeployMethod,
  EthAddress,
  type EthAddressLike,
  EventSelector,
  type FieldLike,
  Fr,
  type FunctionSelectorLike,
  L1EventPayload,
  loadContractArtifact,
  loadContractArtifactForPublic,
  type NoirCompiledContract,
  NoteSelector,
  Point,
  type PublicKey,
  PublicKeys,
  type Wallet,
  type U128Like,
  type WrappedFieldLike,
} from "@aztec/aztec.js";
import CounterContractArtifactJson from "../../../../contracts/counter/target/counter-Counter.json" with { type: "json" };
export const CounterContractArtifact = loadContractArtifact(
  CounterContractArtifactJson as NoirCompiledContract,
);

/**
 * Type-safe interface for contract Counter;
 */
export class CounterContract extends ContractBase {
  private constructor(instance: ContractInstanceWithAddress, wallet: Wallet) {
    super(instance, CounterContractArtifact, wallet);
  }

  /**
   * Creates a contract instance.
   * @param address - The deployed contract's address.
   * @param wallet - The wallet to use when interacting with the contract.
   * @returns A promise that resolves to a new Contract instance.
   */
  public static async at(address: AztecAddress, wallet: Wallet) {
    return Contract.at(
      address,
      CounterContract.artifact,
      wallet,
    ) as Promise<CounterContract>;
  }

  /**
   * Creates a tx to deploy a new instance of this contract.
   */
  public static deploy(
    wallet: Wallet,
    headstart: bigint | number,
    owner: AztecAddressLike,
  ) {
    return new DeployMethod<CounterContract>(
      PublicKeys.default(),
      wallet,
      CounterContractArtifact,
      CounterContract.at,
      Array.from(arguments).slice(1),
    );
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified public keys hash to derive the address.
   */
  public static deployWithPublicKeys(
    publicKeys: PublicKeys,
    wallet: Wallet,
    headstart: bigint | number,
    owner: AztecAddressLike,
  ) {
    return new DeployMethod<CounterContract>(
      publicKeys,
      wallet,
      CounterContractArtifact,
      CounterContract.at,
      Array.from(arguments).slice(2),
    );
  }

  /**
   * Creates a tx to deploy a new instance of this contract using the specified constructor method.
   */
  public static deployWithOpts<M extends keyof CounterContract["methods"]>(
    opts: { publicKeys?: PublicKeys; method?: M; wallet: Wallet },
    ...args: Parameters<CounterContract["methods"][M]>
  ) {
    return new DeployMethod<CounterContract>(
      opts.publicKeys ?? PublicKeys.default(),
      opts.wallet,
      CounterContractArtifact,
      CounterContract.at,
      Array.from(arguments).slice(1),
      opts.method ?? "constructor",
    );
  }

  /**
   * Returns this contract's artifact.
   */
  public static get artifact(): ContractArtifact {
    return CounterContractArtifact;
  }

  /**
   * Returns this contract's artifact with public bytecode.
   */
  public static get artifactForPublic(): ContractArtifact {
    return loadContractArtifactForPublic(
      CounterContractArtifactJson as NoirCompiledContract,
    );
  }

  public static get storage(): ContractStorageLayout<"counters"> {
    return {
      counters: {
        slot: new Fr(1n),
      },
    } as ContractStorageLayout<"counters">;
  }

  public static get notes(): ContractNotes<"ValueNote"> {
    return {
      ValueNote: {
        id: new NoteSelector(0),
      },
    } as ContractNotes<"ValueNote">;
  }

  /** Type-safe wrappers for the public methods exposed by the contract. */
  public declare methods: {
    /** get_counter(owner: struct) */
    get_counter: ((owner: AztecAddressLike) => ContractFunctionInteraction) &
      Pick<ContractMethod, "selector">;

    /** increment(owner: struct, sender: struct) */
    increment: ((
      owner: AztecAddressLike,
      sender: AztecAddressLike,
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, "selector">;

    /** initialize(headstart: integer, owner: struct) */
    initialize: ((
      headstart: bigint | number,
      owner: AztecAddressLike,
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, "selector">;

    /** process_log(log_ciphertext: struct, tx_hash: field, unique_note_hashes_in_tx: struct, first_nullifier_in_tx: field, recipient: struct) */
    process_log: ((
      log_ciphertext: { storage: FieldLike[]; len: bigint | number },
      tx_hash: FieldLike,
      unique_note_hashes_in_tx: { storage: FieldLike[]; len: bigint | number },
      first_nullifier_in_tx: FieldLike,
      recipient: AztecAddressLike,
    ) => ContractFunctionInteraction) &
      Pick<ContractMethod, "selector">;

    /** sync_notes() */
    sync_notes: (() => ContractFunctionInteraction) &
      Pick<ContractMethod, "selector">;
  };
}
