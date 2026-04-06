---
title: Lie Groups and Lie Algebras, Part I
published: 2026-04-03
description: Building the language of Lie groups and their representations from the ground up — generators, structure constants, representations, Casimir operators, and the exponential map.
tags:
  - mathematical-physics
  - quantum-field-theory
  - physics
category: Notes
draft: false
---
**Prerequisites**: Linear algebra (matrix exponentials, commutators), some exposure to group theory (what a group is, what the identity element is), and basic quantum mechanics (angular momentum).

---

If you've ever tried learning quantum field theory, you've probably hit a wall that sounds something like: *"Consider the Lie algebra of the Lorentz group..."* — and suddenly every textbook assumes you already know what that means.

This post is the first in a series that builds the language of Lie groups and their representations from the ground up. The goal is not to be rigorous in the way a mathematician would demand, but to be *honest* — to tell you what each object is, why we care about it, and where the subtleties hide.

---

## Definition: Lie Algebra

At its core, a Lie group is a group whose elements depend *continuously* on some set of parameters. Think of rotations: you can rotate by any angle $\theta$, and as $\theta$ varies smoothly, so does the rotation. This is in contrast to discrete groups (like the group $\{+1, -1\}$ under multiplication), where you can list all the elements.

Because the group elements depend on continuous parameters, we can do calculus on them. In particular, we can expand a group element near the identity and extract what are called **generators** — the infinitesimal building blocks of the group. The commutation relations between these generators define the **Lie algebra**:

$$[T^a, T^b] = i f^{ab}{}_c \, T^c$$

where $T^a, T^b$ are generators, and $f^{ab}{}_c$ are called the **structure constants**.

A few important points:

- **The structure constants are independent of representation.** This is crucial. No matter *how* you choose to represent the generators (as $2\times2$ matrices, $3\times3$ matrices, differential operators, etc.), the structure constants $f^{ab}{}_c$ are always the same. They are intrinsic to the algebra itself.

- **This relation is exact, not an approximation.** When we derive the commutator from the group multiplication law (which we will do shortly), it emerges at second order in the expansion parameters. One might worry: don't higher-order terms modify the algebra? They don't. The reason is that the Lie algebra captures the *full* local structure of the group near the identity. Higher-order terms in the Baker-Campbell-Hausdorff expansion are entirely determined by repeated commutators — they add no new information beyond what $[T^a, T^b] = if^{ab}{}_c T^c$ already encodes.

- **The structure constants define the Lie algebra.** Two Lie groups can look very different globally but have the same Lie algebra. For instance, $SU(2)$ and $SO(3)$ share the same algebra, even though $SU(2)$ is a double cover of $SO(3)$. The note to carry forward: *the algebra captures the local structure, not the global topology.*

Putting it differently: the problem of finding all matrix representations of a Lie algebra is the algebraic problem of finding all possible matrix solutions $T^a_R$ satisfying $[T^a_R, T^b_R] = if^{ab}{}_c T^c_R$.

---

## Abelian Lie Groups

A group is called **abelian** if all its elements commute:

$$g_1 \cdot g_2 = g_2 \cdot g_1 \quad \text{for all } g_1, g_2$$

Since the elements commute, the generators must also commute amongst themselves. This means:

$$[T^a, T^b] = 0 \quad \text{for all } a, b$$

and therefore, for an abelian Lie group, **all structure constants vanish**: $f^{ab}{}_c = 0$.

### Representations of Abelian Lie Groups

The representation theory of abelian Lie groups has a beautifully simple structure:

> **Any $d$-dimensional abelian Lie algebra is isomorphic to the direct sum of $d$ one-dimensional abelian Lie algebras.**

This is equivalent to saying:

> **All irreducible representations of abelian groups are one-dimensional.**

Why? If two generators commute, Schur's lemma tells us they can be simultaneously diagonalized. In an irreducible representation, each generator must act as a scalar (a $1\times1$ matrix). So the irreducible representations are all one-dimensional, each labeled by the eigenvalue of the single generator.

The classic example is $U(1)$: the group of phase rotations $e^{i\alpha}$. It has one generator, and every irreducible representation is labeled by a single number — the charge $q$. In quantum electrodynamics, this is the electric charge.

---

## Non-Abelian Lie Groups

When generators do not all commute — that is, when at least some $f^{ab}{}_c \neq 0$ — the group is called **non-abelian**. This is where Lie theory becomes rich and, frankly, where most of the physics lives. The Standard Model is built on the non-abelian groups $SU(3) \times SU(2) \times U(1)$.

### Definition: Casimir Operators

In a non-abelian algebra, individual generators don't commute with each other. But we can ask: are there *combinations* of generators that commute with *every* generator?

> **Operators constructed from the generators $T^a$ that commute with all the generators are called Casimir operators.**

In other words, a Casimir operator $C$ satisfies:

$$[C, T^a] = 0 \quad \text{for all } a$$

These operators have two key properties:

1. **In each irreducible representation, the Casimir is proportional to the identity matrix.** This is a direct consequence of Schur's lemma: any operator that commutes with all generators in an irreducible representation must be a multiple of the identity.

2. **The proportionality constants label the representation.** Since the Casimir takes a definite value on each irreducible representation, these values serve as quantum numbers that identify the representation.

The number of independent Casimir operators equals the **rank** of the Lie algebra (the dimension of its maximal abelian subalgebra, also known as the Cartan subalgebra). For $SU(2)$, the rank is 1, so there is one Casimir. For $SU(3)$, the rank is 2, so there are two.

### Example: Angular Momentum

The angular momentum algebra is:

$$[J^i, J^j] = i\epsilon^{ijk} J^k$$

This is the Lie algebra of $SU(2)$ (equivalently, $\mathfrak{so}(3)$). The single Casimir operator is:

$$\mathbf{J}^2 = (J^x)^2 + (J^y)^2 + (J^z)^2$$

You can verify that $[\mathbf{J}^2, J^i] = 0$ for any $i$ — it commutes with all three generators.

On an irreducible representation, $\mathbf{J}^2$ takes the value:

$$\mathbf{J}^2 = j(j+1)\,\mathbf{I}$$

where $j = 0, \tfrac{1}{2}, 1, \tfrac{3}{2}, 2, \ldots$ labels the representation. Each value of $j$ gives a $(2j+1)$-dimensional irreducible representation. This is exactly the story of angular momentum quantization in quantum mechanics — and now you see it's not a peculiarity of angular momentum, but a structural consequence of the $SU(2)$ Lie algebra.

---

## Definition: Linear Representation

We've been using the word "representation" loosely. Let's be precise.

A (linear) **representation** $R$ of a group is an operation that assigns a **linear operator** $D_R(g)$ to each abstract group element $g$.

### Properties

The map $g \mapsto D_R(g)$ must respect the group structure:

1. **Identity**: $D_R(e) = \mathbf{1}$, where $e$ is the identity element of the group. (For a Lie group with continuous parameter $\theta$, we have $g(0) = e$, so $D_R(g(0)) = \mathbf{1}$.)

2. **Homomorphism**: $D_R(g_1) D_R(g_2) = D_R(g_1 g_2)$, so the mapping preserves the group multiplication law.

In other words, a representation is a *homomorphism* from the group to the group of linear operators on some vector space. The representation might not be injective (one-to-one) — multiple group elements could map to the same operator. When the map *is* injective, the representation is called **faithful**.

### Basis of the Representation

The vector space on which the operators $D_R(g)$ act is called the **basis** (or **carrier space**) of the representation $R$.

In a matrix representation, the operators $D_R(g)$ are $n \times n$ matrices $(D_R(g))^i{}_j$, and they act on an $n$-dimensional vector space. The indices $i, j = 1, \ldots, n$ label the components of vectors in this space.

### Reducible vs. Irreducible Representations

A representation is **reducible** if there exists a basis in which every $D_R(g)$ is simultaneously block-diagonal:

$$D_R(g) = \begin{pmatrix} D_{R_1}(g) & 0 \\ 0 & D_{R_2}(g) \end{pmatrix}$$

for all group elements $g$. In this case, the representation decomposes as a direct sum: $R = R_1 \oplus R_2$. The vector space splits into invariant subspaces that don't talk to each other under the group action.

A representation is **irreducible** if no such decomposition exists — there is no invariant subspace other than $\{0\}$ and the whole space. Irreducible representations (often called **irreps**) are the building blocks of representation theory. Any representation can, under fairly general conditions, be decomposed into a direct sum of irreducible ones. This is the analog of decomposing a vector into components along basis vectors.

### Equivalent Representations

Two representations $D_R(g)$ and $D_{R'}(g)$ are **equivalent** if they are related by a similarity transformation:

$$D_{R'}(g) = S \, D_R(g) \, S^{-1}$$

for some fixed invertible matrix $S$ and for *all* $g$. Equivalent representations are, physically speaking, the same representation written in a different basis — they encode the same physics, just in different coordinates on the vector space.

---

## Deriving the Commutator from the Group: Where $[T^a, T^b]$ Comes From

We stated the Lie algebra relation $[T^a, T^b] = if^{ab}{}_c T^c$ at the beginning. But where does it actually come from? Here's the quick derivation.

Consider a Lie group element near the identity, parameterized by a small parameter $\alpha^a$:

$$g(\alpha) \approx \mathbf{1} + i\alpha^a T^a + \frac{1}{2}(i\alpha^a T^a)^2 + \ldots$$

Now consider the combination $g(\alpha)\,g(\beta)\,g(\alpha)^{-1}\,g(\beta)^{-1}$. For an abelian group this would just be the identity. For a non-abelian group, it isn't — and the deviation from the identity tells us about the commutator.

Expanding each factor to the relevant order and multiplying out, the first-order terms cancel (because $g \cdot g^{-1} = \mathbf{1}$), and at second order we find:

$$g(\alpha)\,g(\beta)\,g(\alpha)^{-1}\,g(\beta)^{-1} \approx \mathbf{1} - \alpha^a \beta^b [T^a, T^b] + \ldots$$

Since the left side is a group element (the group is closed under multiplication), and it's near the identity, it must be expressible in terms of generators:

$$\approx \mathbf{1} + i\gamma^c T^c + \ldots$$

for some parameters $\gamma^c$. Comparing the two expressions:

$$[T^a, T^b] = if^{ab}{}_c T^c$$

where the structure constants $f^{ab}{}_c$ are defined by the relationship $\gamma^c = -f^{ab}{}_c \,\alpha^a \beta^b$. The commutator of generators is itself a linear combination of generators — the algebra closes.

This is the key insight: **the Lie algebra is the infinitesimal version of the group multiplication law.**

---

## Example: Deriving a Generator — Rotations about the $z$-axis

All of this is quite abstract, so let's see it work in a concrete case. Consider a rotation of a wavefunction $\psi(\theta^z)$ about the $z$-axis by an infinitesimal angle $\delta\theta_0$:

$$\psi(\theta^z + \delta\theta_0) = \psi(\theta^z) + \frac{d\psi(\theta^z)}{d\theta^z}\,\delta\theta_0 + \ldots$$

We recall that the angular momentum operator along $z$ is:

$$J^z = -i\frac{d}{d\theta^z}$$

Substituting:

$$\psi(\theta^z + \delta\theta_0) = \psi(\theta^z) + iJ^z\,\psi(\theta^z)\,\delta\theta_0 = (1 + iJ^z\,\delta\theta_0)\,\psi(\theta^z)$$

This is the infinitesimal rotation: $(1 + iJ^z \delta\theta_0)$ acting on the wavefunction.

### Building a Finite Rotation

To rotate by a *finite* angle $\theta_0$, we can compose $N$ infinitesimal rotations, each of size $\delta\theta_0 = \theta_0/N$:

$$\psi(\theta^z + \theta_0) = \lim_{N\to\infty}\left(1 + iJ^z\frac{\theta_0}{N}\right)^N \psi(\theta^z) = e^{iJ^z\theta_0}\,\psi(\theta^z)$$

This is the exponential map — the bridge from the Lie algebra (the generator $J^z$) to the Lie group (the finite rotation $e^{iJ^z\theta_0}$).

### Sign Convention

For a general rotation parameterized by the angle vector $\boldsymbol{\theta} = (\theta^x, \theta^y, \theta^z)$, the rotation operator is conventionally written as:

$$R(\boldsymbol{\theta}) = \exp(-i\,\mathbf{J}\cdot\boldsymbol{\theta})$$

where $\mathbf{J} = (J^x, J^y, J^z)$.

Wait — we just derived $e^{+iJ^z\theta_0}$, and now there's a minus sign? This is not a mistake; it's a choice of convention. The sign depends on whether you think of the rotation as acting on the *coordinates* (passive) or on the *physical system* (active):

- **Active transformation** (rotating the physical state): The operator acting on a state $|\psi\rangle$ in the Hilbert space is $e^{-i\mathbf{J}\cdot\boldsymbol{\theta}}$.
- **Passive transformation** (rotating the coordinate axes): The wavefunction transforms as $\psi \to e^{+i\mathbf{J}\cdot\boldsymbol{\theta}}\psi$.

The two are inverses of each other, related by $\boldsymbol{\theta} \to -\boldsymbol{\theta}$. Most QFT textbooks (Schwartz, Peskin & Schroeder, Weinberg) use the active convention with the minus sign. Lancaster & Blundell also use the minus sign. **Pick one, state it clearly, and be consistent throughout.**

---

## Connection to What Comes Next

Everything we've built here — generators, commutation relations, representations, the exponential map — forms the language we need for the Lorentz group.

In the next post, we'll define the Lorentz group $O(3,1)$ as the group of transformations preserving the spacetime interval, extract its generators (three rotations $J^i$ and three boosts $K^i$), and discover that these six generators satisfy a very specific algebra:

$$\Lambda = \exp\!\left(-\tfrac{i}{2}\,\omega_{\mu\nu}\,J^{\mu\nu}\right)$$

The fact that this algebra is non-abelian — and *non-compact* — will have profound consequences for representation theory, ultimately leading us to spinors, the Dirac equation, and the classification of all particles by mass and spin.

---

*Next post: [Part II: The Lorentz Group — Definition, Structure, and Representations](/posts/notes/lorentz-group/)*

---

This post is based on my own self-study notes that I created in 2022 in order to get a deeper understanding of all of this.