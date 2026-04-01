---
title: "Three Commutator Identities for a Constant Commutator"
published: 2023-07-20
description: "When [A, B] = c is a constant, a slick ODE trick unlocks three powerful operator identities used throughout quantum mechanics."
tags: [Quantum Mechanics]
category: Notes
draft: false
---

These three identities show up constantly in quantum mechanics — in the derivation of coherent states, the Baker–Campbell–Hausdorff formula, time evolution of observables, and Weyl quantization. The proofs are elegant enough to be worth writing down carefully.

## Setup

Let $A$ and $B$ be operators satisfying

$$[A, B] = c$$

where $c$ is a **c-number** (a constant, not an operator). We want to prove:

1. $e^A B e^{-A} = B + c$
2. $e^A B^n e^{-A} = (B + c)^n$
3. $e^A e^B e^{-A} e^{-B} = e^c$

---

## The key trick: turn it into an ODE

The standard approach for identities of this type is to **embed the LHS into a one-parameter family**, differentiate, and solve the resulting differential equation.

Define

$$\mathcal{F}(x) = e^{xA}\, B\, e^{-xA}$$

so that $\mathcal{F}(0) = B$ (the initial condition) and $\mathcal{F}(1)$ is exactly what we want to prove equals $B + c$.

### Differentiating an operator exponential

First, a small but important fact. For any operator $A$,

$$\frac{d}{dx} e^{xA} = \frac{d}{dx} \sum_{n=0}^{\infty} \frac{x^n}{n!} A^n = \sum_{n=0}^{\infty} \frac{x^{n-1}}{(n-1)!} A^n = A\, e^{xA} = e^{xA} A$$

So the operator exponential commutes with its own derivative in the exponent — it behaves just like a scalar exponential in this regard.

### Solving for $\mathcal{F}(x)$

Differentiating $\mathcal{F}(x)$:

$$\frac{d\mathcal{F}}{dx} = e^{xA} A B\, e^{-xA} - e^{xA} B A\, e^{-xA} = e^{xA} [A, B]\, e^{-xA}$$

Since $[A, B] = c$ is a constant, it commutes with everything:

$$\frac{d\mathcal{F}}{dx} = e^{xA}\, c\, e^{-xA} = c$$

Integrating both sides from $0$ to $x$:

$$\mathcal{F}(x) = \mathcal{F}(0) + cx = B + cx$$

Setting $x = 1$:

$$\boxed{e^A B e^{-A} = B + c}$$

---

## Part 2: $e^A B^n e^{-A} = (B+c)^n$

Insert $e^{-A}e^A = \mathbf{1}$ between each factor of $B$:

$$e^A B^n e^{-A} = e^A B \underbrace{e^{-A} e^A}_{1} B \underbrace{e^{-A} e^A}_{1} \cdots B\, e^{-A}$$

Each adjacent pair $e^A B e^{-A}$ is replaced by $(B + c)$ from Part 1, giving $n$ such factors:

$$\boxed{e^A B^n e^{-A} = (B+c)^n}$$

---

## Part 3: $e^A e^B e^{-A} e^{-B} = e^c$

Expand $e^B$ as a power series and sandwich it:

$$e^A e^B e^{-A} = e^A \left(\sum_{n=0}^{\infty} \frac{B^n}{n!}\right) e^{-A} = \sum_{n=0}^{\infty} \frac{e^A B^n e^{-A}}{n!}$$

Applying Part 2:

$$= \sum_{n=0}^{\infty} \frac{(B+c)^n}{n!} = e^{B+c}$$

So:

$$e^A e^B e^{-A} e^{-B} = e^{B+c} e^{-B} = e^{B+c-B} = e^c$$

where the last step uses the fact that $B+c$ and $B$ commute (their commutator is zero), so the exponentials combine freely.

$$\boxed{e^A e^B e^{-A} e^{-B} = e^c}$$

---

## Why do these come up?

**Part 1** is the infinitesimal generator version of a similarity transformation. If $A = -i\theta \hat{n} \cdot \vec{J}/\hbar$ is a rotation generator, $e^A B e^{-A}$ gives the rotated observable $B$ — and the deviation from $B$ is exactly the commutator structure.

**Part 3** says that the group commutator $e^A e^B e^{-A} e^{-B}$ equals $e^c$ — this is the leading-order term in the Baker–Campbell–Hausdorff formula. It also appears directly in the derivation of **coherent states**: for the harmonic oscillator with $[a, a^\dagger] = 1$, it tells you that the displacement operator $D(\alpha) = e^{\alpha a^\dagger - \alpha^* a}$ satisfies $D^\dagger a D = a + \alpha$, which defines a coherent state.
