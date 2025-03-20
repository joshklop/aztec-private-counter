import { getInitialTestAccountsWallets } from "@aztec/accounts/testing";
import { createPXEClient } from "@aztec/aztec.js";
import { CounterContract } from "@aztec-private-counter/aztec-artifacts";

export async function deployContracts() {
  const pxe = createPXEClient("http://localhost:8080");
  const [wallet] = (await getInitialTestAccountsWallets(pxe)) ?? [];
  if (!wallet) {
    return;
  }
  const address = wallet.getAddress();
  const counter = await CounterContract.deploy(wallet, 0, address)
    .send()
    .deployed();
  console.log(`Counter deployed at ${counter.address}`);
}

deployContracts()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
