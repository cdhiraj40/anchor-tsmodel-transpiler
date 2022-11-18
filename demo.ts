import { PublicKey } from "@solana/web3.js";
export interface Foo {
  authority: PublicKey;
  data: number;
  secondData: number;
  secondAuthority: number[]; // length of 32 in IDL
}

export interface Bar {
  authority: PublicKey;
  data: number;
}

export interface EventQ {
  events: Event[]; // length of 25000 in IDL
}

export interface Event {
  from: PublicKey;
  data: number;
}

export interface RpcEvent {
  from: PublicKey;
  data: number;
}
import { PublicKey } from "@solana/web3.js";
export interface Foo {
  authority: PublicKey;
  data: number;
  secondData: number;
  secondAuthority: number[]; // length of 32 in IDL
}

export interface Bar {
  authority: PublicKey;
  data: number;
}

export interface EventQ {
  events: Event[]; // length of 25000 in IDL
}

import { PublicKey } from "@solana/web3.js";
export interface Foo {
  authority: PublicKey;
  data: number;
  secondData: number;
  secondAuthority: number[]; // length of 32 in IDL
}

export interface Bar {
  authority: PublicKey;
  data: number;
}

export interface EventQ {
  events: Event[]; // length of 25000 in IDL
}

export interface Event {
  from: PublicKey;
  data: number;
}

export interface RpcEvent {
  from: PublicKey;
  data: number;
}
