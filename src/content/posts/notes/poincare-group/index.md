---
title: "Lie Groups and Lie Algebras, Part IV: The Poincaré Group and the Classification of Particles"
published: 2026-04-06
description: "Exploring the Poincaré group, its Casimir operators, and Wigner's classification of elementary particles by mass and spin/helicity."
tags:
  - mathematical-physics
  - quantum-field-theory
  - special-relativity
  - physics
category: Notes
draft: false
---
**Prerequisites**: [Part I — Lie Groups and Lie Algebras](/posts/notes/lie-groups-lie-algebras/), [Part II — The Lorentz Group](/posts/notes/lorentz-group/), [Part III — Spinors, Fields, and the Representations That Matter](/posts/notes/lorentz-representations/). Familiarity with four-momentum and basic special relativity.

---

We've spent three posts building up the Lorentz group and its representations. We learned how fields transform under rotations and boosts, and we classified the building blocks — scalars, spinors, vectors — by pairs of half-integers $(j_+, j_-)$.

But we left something out. The Lorentz group describes rotations and boosts — it tells you how to transform between observers in relative motion. It does *not* include translations: moving your experiment from one place to another, or waiting and doing it tomorrow. These are also symmetries of nature, and they matter. Conservation of energy and momentum are consequences of translational symmetry, not Lorentz symmetry.

The full symmetry group of flat spacetime — the group that combines Lorentz transformations with translations — is the **Poincaré group**. Its representation theory answers the most fundamental question in particle physics:

> *What is a particle?*

The answer, due to Wigner, is precise and beautiful: **an elementary particle is an irreducible unitary representation of the Poincaré group.** Every such representation is labeled by exactly two numbers: mass and spin. This post develops that story.

---

## The Poincaré Group

### Definition

A general Poincaré transformation acts on spacetime coordinates as:

$$x^\mu \to x'^\mu = \Lambda^\mu{}_\nu\, x^\nu + a^\mu$$

where $\Lambda$ is a Lorentz transformation and $a^\mu$ is a constant translation four-vector. The Poincaré group is the set of all such transformations, and it's a **10-parameter** group: six parameters for $\Lambda$ (three rotations, three boosts) plus four parameters for $a^\mu$ (one time translation, three spatial translations).

The Poincaré group is a **semi-direct product** of the Lorentz group and the translation group:

$$\text{Poincaré} = \mathbb{R}^{3,1} \rtimes SO^+(3,1)$$

The semi-direct product (rather than a direct product) means that Lorentz transformations and translations don't simply commute — a Lorentz transformation *acts on* translations by rotating/boosting the translation vector. This will show up in the algebra.

### Generators

The Poincaré group has **10 generators**:

- $J^{\mu\nu}$ — the six Lorentz generators (three rotations $J^i$, three boosts $K^i$), as before
- $P^\mu$ — four translation generators (energy $P^0 = H$ and three-momentum $P^i$)

### The Poincaré Algebra

The commutation relations are:

$$[J^{\mu\nu}, J^{\rho\sigma}] = i\left(\eta^{\nu\rho}J^{\mu\sigma} - \eta^{\mu\rho}J^{\nu\sigma} - \eta^{\nu\sigma}J^{\mu\rho} + \eta^{\mu\sigma}J^{\nu\rho}\right)$$

$$[J^{\mu\nu}, P^\rho] = i\left(\eta^{\nu\rho}P^\mu - \eta^{\mu\rho}P^\nu\right)$$

$$[P^\mu, P^\nu] = 0$$

Let's unpack what these say:

**The first relation** is the Lorentz algebra from Part II, now written in fully covariant tensor notation. It encodes $[J^i, J^j] = i\epsilon^{ijk}J^k$, $[J^i, K^j] = i\epsilon^{ijk}K^k$, and $[K^i, K^j] = -i\epsilon^{ijk}J^k$ all in one compact formula.

**The second relation** says that $P^\rho$ transforms as a **4-vector** under Lorentz transformations. This is physically obvious: if you rotate your coordinate system, the components of momentum rotate accordingly. In terms of the rotation and boost generators:

$$[J^i, P^j] = i\epsilon^{ijk}P^k \qquad \text{(momentum is a 3-vector under rotations)}$$

$$[J^i, P^0] = 0 \qquad \text{(energy is a scalar under rotations)}$$

$$[K^i, P^j] = -iP^0\delta^{ij} \qquad \text{(boosts mix energy and momentum)}$$

$$[K^i, P^0] = -iP^i \qquad \text{(boosts mix energy and momentum)}$$

The last two are exactly what you'd expect from special relativity: a boost in the $x$-direction mixes $P^0$ (energy) with $P^x$ (momentum along $x$).

**The third relation** says that translations commute. This is the statement that spacetime is flat — there's no curvature. In general relativity, spacetime is curved and translations along different directions don't commute; the Poincaré group would be replaced by something more complicated. But for the flat spacetime of particle physics, $[P^\mu, P^\nu] = 0$.

---

## Casimir Operators of the Poincaré Group

Recall from Part I: Casimir operators commute with *all* generators, take definite values on each irreducible representation (by Schur's lemma), and thereby *label* the representations. The Poincaré group has **two** independent Casimir operators.

### First Casimir: $P^2$

$$C_1 = P^\mu P_\mu = P^2$$

This is the squared four-momentum — the mass squared:

$$P^2 = (P^0)^2 - \mathbf{P}^2 = m^2$$

You can verify that $[P^2, J^{\mu\nu}] = 0$ (since $P^\mu$ transforms as a vector, $P^2$ is a Lorentz scalar) and $[P^2, P^\mu] = 0$ (since translations commute). So $P^2$ commutes with all ten generators.

On each irreducible representation, $P^2$ takes a definite value $m^2$. This is the **mass** of the particle. The fact that mass is a Casimir — a label of the representation, not a dynamical variable — is why all electrons have exactly the same mass: they all live in the same irreducible representation.

### Second Casimir: $W^2$

The second Casimir is constructed from the **Pauli-Lubanski pseudovector**:

$$W^\mu = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma}J_{\nu\rho}P_\sigma$$

where $\epsilon^{\mu\nu\rho\sigma}$ is the totally antisymmetric Levi-Civita tensor with $\epsilon^{0123} = +1$.

The Pauli-Lubanski vector has several important properties:

- $W^\mu P_\mu = 0$ — it's orthogonal to the four-momentum. This follows from the antisymmetry of $\epsilon^{\mu\nu\rho\sigma}$ contracted with the symmetric product $P_\sigma P_\mu$.

- $W^\mu$ transforms as a four-vector under Lorentz transformations (it has one free index $\mu$) and commutes with translations ($[W^\mu, P^\nu] = 0$).

- The Casimir is $C_2 = W^\mu W_\mu = W^2$, which commutes with all ten generators.

The physical meaning of $W^2$ depends on whether the particle is massive or massless. We'll see this shortly.

---

## Wigner's Classification

We now want to find all irreducible unitary representations of the Poincaré group. Eugene Wigner developed the method in 1939, and the result is one of the deepest theorems in theoretical physics.

### Why Unitary?

In quantum mechanics, symmetry transformations must be represented by **unitary** operators (or anti-unitary, for time reversal). This is Wigner's theorem: any symmetry of a quantum system — any map that preserves transition probabilities — must be implemented by a unitary or anti-unitary operator on the Hilbert space.

For the Lorentz group alone, we saw in Part III that finite-dimensional representations are *not* unitary (the boost generators are anti-Hermitian). This isn't a contradiction: the finite-dimensional representations describe how *field components* transform, not how *quantum states* transform. Quantum states live in an infinite-dimensional Hilbert space, where unitary representations *do* exist.

The Poincaré group representations we're looking for are infinite-dimensional (they act on the space of one-particle states of definite momentum), and they are unitary.

### The Method of Induced Representations

Wigner's strategy is elegant:

**Step 1**: Since $P^2 = m^2$ is a Casimir, fix $m^2$ and consider the set of all four-momenta satisfying $p^2 = m^2$. This is a hyperboloid in momentum space (for $m^2 > 0$) or the light cone (for $m^2 = 0$).

**Step 2**: Pick a **standard (reference) momentum** $k^\mu$ on that surface. Any other momentum $p^\mu$ on the same surface can be reached from $k^\mu$ by a Lorentz transformation: $p^\mu = L(p)^\mu{}_\nu\, k^\nu$ for some "standard boost" $L(p)$.

**Step 3**: Find the **little group** — the subgroup of Lorentz transformations that leave $k^\mu$ invariant:

$$\Lambda^\mu{}_\nu\, k^\nu = k^\mu$$

The little group depends on the choice of $k^\mu$, but different choices on the same mass shell give isomorphic little groups.

**Step 4**: Classify the irreducible representations of the little group. These determine the "internal" degrees of freedom of the particle — spin, polarization, helicity.

**Step 5**: Build the full Poincaré representation by "boosting" the little group representation to all other momenta. This is the induced representation.

The result: **every irreducible unitary representation of the Poincaré group is determined by the mass $m$ and an irreducible representation of the little group.**

Let's now carry this out for the two physical cases.

---

## Massive Representations ($m^2 > 0$)

### Standard Momentum

For a massive particle, the natural choice of standard momentum is the **rest frame**:

$$k^\mu = (m, 0, 0, 0)$$

This is the momentum of a massive particle sitting at rest. Every other momentum $p^\mu = (E, \mathbf{p})$ on the mass shell $p^2 = m^2$ can be reached by boosting from the rest frame.

### Little Group: $SO(3)$

Which Lorentz transformations leave $k^\mu = (m, 0, 0, 0)$ invariant? The boosts certainly don't — boosting a particle at rest gives it momentum. But **rotations** leave the rest-frame momentum unchanged: rotating a particle at rest still leaves it at rest, with the same energy $m$ and zero three-momentum.

Therefore, the little group for massive particles is the **rotation group** $SO(3)$, or equivalently its double cover $SU(2)$.

### Spin

The irreducible representations of $SU(2)$ are labeled by the spin $j = 0, \frac{1}{2}, 1, \frac{3}{2}, 2, \ldots$, and have dimension $2j + 1$.

In the rest frame, the Pauli-Lubanski vector simplifies dramatically. Since $k^\mu = (m, \mathbf{0})$:

$$W^0 = \frac{1}{2}\epsilon^{0ijk}J_{ij}P_k = 0 \quad \text{(in the rest frame, } P_k = 0\text{)}$$

$$W^i = \frac{1}{2}\epsilon^{i0jk}J_{jk}P_0 = m\,\frac{1}{2}\epsilon^{ijk}J_{jk} = m\,J^i$$

So in the rest frame, $W^\mu = (0, m\,\mathbf{J})$ — the Pauli-Lubanski vector is simply mass times the angular momentum. The Casimir becomes:

$$W^2 = W^\mu W_\mu = -\mathbf{W}^2 = -m^2\,\mathbf{J}^2 = -m^2\,j(j+1)$$

This is the physical content of the second Casimir: **$W^2$ measures the spin**. A massive particle is characterized by:

$$\boxed{P^2 = m^2, \qquad W^2 = -m^2\,j(j+1)}$$

A massive spin-$j$ particle has $2j + 1$ independent polarization states (the $2j + 1$ values of $J^z$ in the rest frame: $m_j = -j, -j+1, \ldots, j-1, j$). For example:

- Spin-0 (Higgs boson): 1 state
- Spin-$\frac{1}{2}$ (electron): 2 states (spin up, spin down)
- Spin-1 ($W$ boson): 3 states (three polarizations)
- Spin-2 (hypothetical massive graviton): 5 states

---

## Massless Representations ($m^2 = 0$)

### Standard Momentum

For a massless particle, there is no rest frame — massless particles travel at the speed of light in every frame. The standard momentum is conventionally chosen along the $z$-axis:

$$k^\mu = (\omega, 0, 0, \omega)$$

for some energy $\omega > 0$. This satisfies $k^2 = \omega^2 - \omega^2 = 0$.

### Little Group: $ISO(2)$

Which Lorentz transformations leave $k^\mu = (\omega, 0, 0, \omega)$ invariant?

Rotations about the $z$-axis (the direction of motion) clearly do — they rotate the transverse $xy$-plane while leaving $k^\mu$ unchanged. This gives a $U(1)$ subgroup generated by $J^z$.

But there are also less obvious transformations. It turns out there are two additional generators that leave $k^\mu$ invariant. These are combinations of rotations and boosts in the transverse directions:

$$\Pi_1 = K^x + J^y, \qquad \Pi_2 = K^y - J^x$$

You can verify directly that $[\Pi_1, P^\mu]k_\mu = 0$ and $[\Pi_2, P^\mu]k_\mu = 0$ — these generators leave the standard momentum invariant. Together with $J^z$, they satisfy:

$$[J^z, \Pi_1] = i\Pi_2, \qquad [J^z, \Pi_2] = -i\Pi_1, \qquad [\Pi_1, \Pi_2] = 0$$

This is the algebra of $ISO(2)$ — the **Euclidean group in two dimensions**, consisting of rotations and translations of a 2D plane.

Compare this with the massive case:

| | Massive ($m > 0$) | Massless ($m = 0$) |
|---|---|---|
| Standard momentum | $(m, 0, 0, 0)$ | $(\omega, 0, 0, \omega)$ |
| Little group | $SO(3) \cong SU(2)/\mathbb{Z}_2$ | $ISO(2)$ |
| Generators | $J^x, J^y, J^z$ | $J^z, \Pi_1, \Pi_2$ |
| Compact? | Yes | No (translations) |

The little group has changed *topology* — from the compact group $SO(3)$ to the non-compact group $ISO(2)$. This is not a smooth deformation. You cannot continuously go from one to the other, and this will have physical consequences.

### Dealing with $ISO(2)$: The Translation Generators

The representations of $ISO(2)$ come in two types:

**Faithful representations**: The "translation" generators $\Pi_1, \Pi_2$ have nonzero eigenvalues. These give the **continuous spin representations**, where the spin is not discrete but takes continuous values. These representations describe particles with an infinite number of polarization states for each momentum — exotic objects that have never been observed in nature. They are discarded on physical grounds (they lead to pathological behavior: infinite degeneracy, problems with localizability, and conflicts with observed particle spectra).

**Unfaithful representations**: We set $\Pi_1 = \Pi_2 = 0$ and keep only the $J^z$ generator. The little group effectively reduces to $SO(2) \cong U(1)$, the group of rotations in the transverse plane.

Every physical massless particle corresponds to the second case.

### Helicity

The irreducible representations of $U(1)$ are one-dimensional, labeled by a single number — the **helicity**:

$$J^z \,|k, \lambda\rangle = \lambda\, |k, \lambda\rangle$$

where $\lambda$ is the component of angular momentum along the direction of motion. Since $J^z$ generates rotations by angle $\theta$ via $e^{-i\theta J^z}$, and a $2\pi$ rotation must give $\pm 1$ (for bosons/fermions respectively), $\lambda$ must be an integer or half-integer: $\lambda = 0, \pm\frac{1}{2}, \pm 1, \pm\frac{3}{2}, \pm 2, \ldots$

A massless particle with helicity $\lambda$ has **only one polarization state** for each $\lambda$. But CPT symmetry (required in any local relativistic quantum field theory) demands that if a state with helicity $+\lambda$ exists, so must a state with helicity $-\lambda$. So physical massless particles come in **pairs** of helicity states: $(+\lambda, -\lambda)$.

The contrast with massive particles is stark:

| | Massive spin-$j$ | Massless helicity $\lambda$ |
|---|---|---|
| Polarization states | $2j + 1$ | $2$ (for $\lambda \neq 0$) |
| Spin-$\frac{1}{2}$ | 2 states | 2 states |
| Spin-1 | 3 states | 2 states |
| Spin-2 | 5 states | 2 states |

For spin-$\frac{1}{2}$, the count happens to agree — both massive and massless have 2 states. But for higher spins, the massless case has *fewer* states. A massive spin-1 particle (like the $W$ boson) has 3 polarizations; a massless spin-1 particle (the photon) has only 2. The "missing" longitudinal polarization of the photon is a direct consequence of the little group being $ISO(2)$ rather than $SO(3)$.

This is why the Higgs mechanism is necessary: when a gauge boson acquires mass (via the Higgs field), it must pick up a third polarization — the longitudinal mode — which it "eats" from the Goldstone boson. The transition from 2 polarizations to 3 is the transition from $ISO(2)$ to $SO(3)$ as the little group.

---

## The Massive-Massless Discontinuity

We can now understand one of the deepest structural facts in particle physics: **the $m \to 0$ limit of a massive representation is not the same as the massless representation.**

For a massive spin-1 particle, there are $2(1) + 1 = 3$ polarization states. As $m \to 0$, all three states persist until $m$ reaches exactly zero, at which point the little group jumps from $SO(3)$ to $ISO(2)$, and only 2 helicity states survive. The longitudinal mode doesn't smoothly vanish — it decouples discontinuously.

This isn't just a mathematical curiosity. In the theory of massive gravity (where one tries to give the graviton a small mass), this discontinuity shows up physically: the predictions of massive gravity don't smoothly approach those of general relativity as $m \to 0$. This is the **van Dam-Veltman-Zakharov (vDVZ) discontinuity**, and it was a major puzzle in theoretical physics. (The resolution involves nonlinear effects — the Vainshtein mechanism — but the discontinuity at the linear level is real and is a direct consequence of the little group structure we've described.)

The same phenomenon explains why you can't simply "take the mass to zero" in the Proca equation (massive spin-1) to get Maxwell's equations. The massive theory has 3 degrees of freedom and no gauge invariance; the massless theory has 2 degrees of freedom and requires gauge invariance. The gauge symmetry *emerges* at $m = 0$ precisely to kill the extra longitudinal mode. It's not put in by hand — it's forced by the change in the little group.

---

## Summary: What Is a Particle?

Let's collect everything. Wigner's classification tells us:

> **An elementary particle is an irreducible unitary representation of the Poincaré group, labeled by mass $m$ and spin (or helicity).**

The full classification:

| $m^2$ | Little Group | Label | States | Examples |
|---|---|---|---|---|
| $m^2 > 0$ | $SO(3)$ | Spin $j$ | $2j+1$ | Electron ($j = 1/2$), $W^\pm$ ($j = 1$), Higgs ($j = 0$) |
| $m^2 = 0$ | $ISO(2) \to U(1)$ | Helicity $\lambda$ | $2$ | Photon ($\lambda = \pm 1$), graviton ($\lambda = \pm 2$) |
| $m^2 < 0$ | $SO(2,1)$ | — | — | Tachyons (unphysical) |

The $m^2 < 0$ case (tachyons) gives representations where the "mass shell" $p^2 = m^2$ is a spacelike hyperboloid. These particles would travel faster than light. They are not observed in nature, and their presence in a theory usually signals an instability (the field is sitting at a local maximum of its potential, not a minimum). In the Standard Model, the Higgs field *before* electroweak symmetry breaking has a tachyonic mode — but this just means the field rolls down to its true vacuum, where the physical Higgs particle has $m^2 > 0$.

---

## Looking Back

We started this series by asking: what is a Lie group? Four posts later, we can answer a much bigger question: what is a particle?

The logical chain:

1. **Lie groups and algebras** (Post I): Continuous symmetries are described by Lie groups. Their infinitesimal structure is encoded in Lie algebras — commutators of generators with structure constants.

2. **The Lorentz group** (Post II): The symmetry of spacetime under rotations and boosts is $SO^+(3,1)$. Its six generators satisfy a specific non-abelian algebra, with the crucial minus sign in $[K^i, K^j] = -i\epsilon^{ijk}J^k$.

3. **Representations** (Post III): The Lorentz algebra decomposes (after complexification) into $\mathfrak{su}(2) \oplus \mathfrak{su}(2)$, giving representations labeled by $(j_+, j_-)$. This produces scalars, Weyl spinors, vectors, and higher-spin objects — the building blocks of quantum fields.

4. **The Poincaré group and particles** (Post IV): Adding translations gives the Poincaré group. Wigner's theorem classifies all irreducible unitary representations by mass and spin. The little group — $SO(3)$ for massive particles, $ISO(2)$ for massless — determines the polarization content. The fact that the photon has 2 polarizations, the electron has 2 spin states, and the $W$ boson has 3 polarizations are not empirical accidents — they are mathematical consequences of the symmetry structure of spacetime.

The representation theory of the Poincaré group is the classification of everything that can exist as a free particle in flat spacetime. To describe how these particles *interact*, you need gauge theory, Lagrangians, and the full apparatus of quantum field theory. But the menu of what's on the table — the particle content — is determined entirely by symmetry.

---

*This concludes the series on Lie Groups, the Lorentz Group, and the Poincaré Group.*

---

This post is based on my own self-study notes that I created in 2022 in order to get a deeper understanding of all of this.
