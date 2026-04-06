---
title: "Discrete Symmetry Groups: Rotations, Mirrors, and Vanishing Matrix Elements"
published: 2022-10-17
description: "Working through a discrete rotation group, its subgroups, eigenvalues of symmetry operators, non-commutativity of rotations and reflections, and using symmetry to identify vanishing matrix elements."
tags:
  - mathematical-physics
  - physics
category: Notes
draft: false
---

Symmetry is one of the most powerful tools in physics — not just for aesthetics, but for hard computational results. If a Hamiltonian has a symmetry, you can often conclude that entire blocks of its matrix representation vanish *without doing any integrals*. This problem works through a concrete discrete symmetry group to illustrate how.

---

## Setup: the group $\mathcal{G}$

Consider the set of rotations about the $z$-axis by multiples of $\pi/2$:

$$\mathcal{G} = \{D_z(0),\, D_z(\pi/2),\, D_z(\pi),\, D_z(3\pi/2)\}$$

where $D_z(a)D_z(b) = D_z(a+b)$ (angles add under composition, modulo $2\pi$).

### Is $\mathcal{G}$ a group?

Writing $D_z(n) \equiv D_z(n\pi/2)$ for short, the multiplication table is:

| $*$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| **0** | $D_z(0)$ | $D_z(1)$ | $D_z(2)$ | $D_z(3)$ |
| **1** | $D_z(1)$ | $D_z(2)$ | $D_z(3)$ | $D_z(0)$ |
| **2** | $D_z(2)$ | $D_z(3)$ | $D_z(0)$ | $D_z(1)$ |
| **3** | $D_z(3)$ | $D_z(0)$ | $D_z(1)$ | $D_z(2)$ |

Checking the four group axioms:
- **Identity:** $D_z(0)$ — visible from the first row and column
- **Closure:** every entry in the table is in $\mathcal{G}$ ✓
- **Inverses:** $D_z(N)^{-1} = D_z(|N-4|)$, i.e. $D_z(1)^{-1} = D_z(3)$, $D_z(2)^{-1} = D_z(2)$
- **Associativity:** follows directly from angle addition: $D(F)D(G)D(H) = D(F+G+H)$, which is manifestly associative

So $\mathcal{G} \cong \mathbb{Z}_4$ (the cyclic group of order 4).

### Is it abelian?

Yes — the multiplication table is symmetric across the diagonal, meaning $D_z(a)D_z(b) = D_z(b)D_z(a)$ for all elements. This is obvious from angle addition: $a+b = b+a$.

### Subgroups

$\mathcal{G}$ has a subgroup $\mathbb{Z}_2 = \{D_z(0), D_z(2)\} = \{D_z(0), D_z(\pi)\}$:

| $*$ | 0 | 2 |
|---|---|---|
| **0** | $D_z(0)$ | $D_z(2)$ |
| **2** | $D_z(2)$ | $D_z(0)$ |

This is closed, and $D_z(2)$ is its own inverse since $D_z(\pi)$ applied twice gives $D_z(2\pi) = D_z(0)$.

---

## Eigenvalues of symmetry operators

### Mirror operator $M_x$

The mirror $M_x$ reflects $(x,y) \to (-x, y)$. Applying it twice returns the original state:

$$M_x^2 |x,y\rangle = M_x|-x,y\rangle = |x,y\rangle \implies M_x^2 = \mathbf{1}$$

So if $M_x|\psi\rangle = \lambda|\psi\rangle$, then $\lambda^2 = 1$, giving:

$$\lambda(M_x) = \pm 1$$

States with $\lambda = +1$ are *even* (symmetric) under reflection; $\lambda = -1$ are *odd* (antisymmetric).

### Rotation operators $D_z(n\pi/2)$

The eigenvalues depend on the order of the element — how many times it must be applied to return to the identity:

- $D_z(0)$: order 1, so $\lambda^1 = 1 \implies \lambda = +1$
- $D_z(\pi/2)$: order 4, so $\lambda^4 = 1 \implies \lambda = \pm 1, \pm i$
- $D_z(\pi)$: order 2, so $\lambda^2 = 1 \implies \lambda = \pm 1$
- $D_z(3\pi/2)$: order 4, so $\lambda^4 = 1 \implies \lambda = \pm 1, \pm i$

---

## Do rotations and mirrors commute?

In general, **no**. Consider four atoms sitting in the four quadrants, labelled by which quadrant they occupy: $|1\rangle, |2\rangle, |3\rangle, |4\rangle$.

$$M_x D_z(1)|1\rangle = M_x|2\rangle = |1\rangle$$

$$D_z(1) M_x|1\rangle = D_z(1)|2\rangle = |3\rangle$$

Since $|1\rangle \neq |3\rangle$, the operators do not commute: $[M_x, D_z(\pi/2)] \neq 0$.

### But $M_x$ and $D_z(\pi)$ *do* commute

We can verify this by tracking how each operator permutes the four quadrant states. Define the action on an ordered tuple $(a,b,c,d)$ representing which atom is in quadrants 1,2,3,4:

$$M_x\{a,b,c,d\} = \{b,a,d,c\} \qquad D_z(2)\{a,b,c,d\} = \{c,d,a,b\}$$

Then:

$$D_z(2)\,M_x\{1,2,3,4\} = D_z(2)\{2,1,4,3\} = \{4,3,2,1\}$$

$$M_x\,D_z(2)\{1,2,3,4\} = M_x\{3,4,1,2\} = \{4,3,2,1\}$$

Same result — so $[M_x, D_z(\pi)] = 0$, meaning they share simultaneous eigenstates.

---

## Using symmetry to kill matrix elements

Here is the payoff. Suppose a potential $V = aXY$ acts on the system. How does it transform?

$$M_x V = M_x(aXY) = a(-X)Y = -aXY = -V \quad \Rightarrow \quad \{M_x, V\} = 0 \text{ (anticommutes)}$$

$$D_z(2) V = D_z(2)(aXY) = a(-X)(-Y) = aXY = V \quad \Rightarrow \quad [D_z(2), V] = 0 \text{ (commutes)}$$

Now label eigenstates by their parities: $|\epsilon_{D}, \epsilon_{M}\rangle$ where $\epsilon_D = \pm 1$ is the $D_z(2)$ eigenvalue and $\epsilon_M = \pm 1$ is the $M_x$ eigenvalue. Consider the matrix element $\langle +,+|V|+,+\rangle$:

$$\langle +,+|V|+,+\rangle = \langle +,+|D_z(2)M_x\,V\,M_x D_z(2)|+,+\rangle$$

Since $M_x$ anticommutes with $V$ and commutes with $D_z(2)$:

$$= (-1)\langle +,+|D_z(2)\,V\,\underbrace{M_x M_x}_{1}\,D_z(2)|+,+\rangle = -\langle +,+|V|+,+\rangle$$

The only number equal to its own negative is zero:

$$\boxed{\langle +,+|V|+,+\rangle = 0}$$

By the same argument $\langle -,-|V|-,-\rangle = 0$. However, for a *mixed-parity* state $|+,-\rangle$ (even under $D_z(2)$, odd under $M_x$):

$$\langle +,-|V|+,-\rangle = \langle +,-|D_z(2)\,V\,D_z(2)\underbrace{M_xM_x}_{1}|+,-\rangle = \langle +,-|V|+,-\rangle$$

This is consistent — not forced to zero. The matrix element can be nonzero.

**The lesson:** knowing how a perturbation transforms under the symmetry group of the Hamiltonian immediately tells you which matrix elements vanish — no integration required. This is the essence of selection rules in atomic physics, and of Wigner's theorem in group theory.
