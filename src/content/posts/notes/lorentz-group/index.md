---
title: "Lie Groups and Lie Algebras, Part II: The Lorentz Group"
published: 2026-04-04
description: "Exploring the Lorentz group O(3,1), its disconnected components, its defining invariant metric, and its fundamental representations in relativistic physics."
tags:
  - mathematical-physics
  - special-relativity
  - physics
category: Notes
draft: false
---
**Prerequisites**: [Part I — Lie Groups and Lie Algebras](/posts/notes/lie-groups-lie-algebras/), familiarity with index notation for vectors and matrices, and special relativity at the level of knowing what a Lorentz boost is.

---

In the previous post, we built the general machinery of Lie groups: generators, structure constants, representations, and the exponential map. Now we put that machinery to work on the group that underpins all of relativistic physics — the Lorentz group.

The Lorentz group is, in a sense, the *answer* to the question: what are all the linear transformations that preserve the structure of spacetime? Everything that follows in quantum field theory — spinors, the Dirac equation, gauge theories — is built on the representation theory of this group. So it's worth understanding it carefully.

---

## Definition: The Orthogonal Group $O(n,m)$

Before jumping to spacetime, let's set up the general framework.

Consider a space with coordinates $(y_1, \ldots, y_m, x_1, \ldots, x_n)$. The group of transformations that leaves invariant the quadratic form

$$(y_1^2 + \ldots + y_m^2) - (x_1^2 + \ldots + x_n^2)$$

is called the **orthogonal group** $O(n,m)$.

When all signs are the same ($m = 0$), this is just the familiar rotation group $O(n)$ preserving $x_1^2 + \ldots + x_n^2$. The interesting physics happens when the signs are *mixed* — when some coordinates enter with a plus and others with a minus. This indefinite signature is exactly what spacetime has.

## Definition: The Lorentz Group

The **Lorentz group** is defined as the group of linear coordinate transformations

$$x^\mu \to x'^\mu = \Lambda^\mu{}_\nu \, x^\nu$$

that leave the following quantity **invariant**:

$$\eta_{\mu\nu}\,x^\mu x^\nu = t^2 - x^2 - y^2 - z^2$$

This is the spacetime interval. We're working in the *mostly-minus* convention $\eta = \text{diag}(+1, -1, -1, -1)$, and we'll stick with this throughout.

Hence:

$$\boxed{\text{Lorentz Group} \equiv O(3,1)}$$

The "$3$" counts the spatial dimensions (entering with a minus sign in the quadratic form), and the "$1$" counts the time dimension (entering with a plus). The ordering $O(3,1)$ vs. $O(1,3)$ is a convention — some authors write it the other way. What matters is the *signature*: one plus and three minuses.

---

## Lorentz Invariance of the Minkowski Metric

What condition must the matrix $\Lambda$ satisfy to be a valid Lorentz transformation? We require that the spacetime interval is invariant:

$$\eta_{\mu\nu}\,x'^\mu x'^\nu = \eta_{\mu\nu}\,x^\mu x^\nu$$

Substituting $x'^\mu = \Lambda^\mu{}_\rho\, x^\rho$:

$$\eta_{\mu\nu}\,x'^\mu x'^\nu = \eta_{\mu\nu}(\Lambda^\mu{}_\rho\, x^\rho)(\Lambda^\nu{}_\sigma\, x^\sigma) = \eta_{\rho\sigma}\,x^\rho x^\sigma$$

where in the last step we used the fact that $x^\rho x^\sigma$ are just dummy variables — the equality must hold for the coefficients. Since this must be true for *any* $x^\mu$, we can strip off the $x$'s:

$$\boxed{\eta_{\rho\sigma} = \eta_{\mu\nu}\,\Lambda^\mu{}_\rho\,\Lambda^\nu{}_\sigma}$$

In matrix notation, this is:

$$\eta = \Lambda^T \eta\, \Lambda$$

This is *the* defining equation of the Lorentz group. Compare this to the orthogonal group $O(n)$, whose defining equation is $\mathbf{1} = R^T R$ — same structure, but with the Minkowski metric $\eta$ replacing the Euclidean metric $\delta$.

> **A note on index gymnastics**: The metric $\eta_{\mu\nu}$ is the object that raises and lowers indices — it converts contravariant (upper) indices to covariant (lower) indices and vice versa. In the equation above, $\Lambda^\mu{}_\rho$ can also change the indices on $\eta_{\mu\nu}$ itself, as demonstrated by the contraction on the right-hand side.

---

## Segregation of the Lorentz Group

The defining equation $\eta = \Lambda^T \eta \Lambda$ places constraints on $\Lambda$ that split the Lorentz group into four disconnected components. Let's see how.

### By Determinant: Proper vs. Improper

Take the determinant of both sides of $\eta = \Lambda^T \eta \Lambda$:

$$\det(\eta) = \det(\Lambda^T)\,\det(\eta)\,\det(\Lambda)$$

Since $\det(\Lambda^T) = \det(\Lambda)$ and $\det(\eta) \neq 0$, we can divide through:

$$1 = (\det \Lambda)^2$$

$$\boxed{\det \Lambda = \pm 1}$$

This gives us two classes:

- $\det \Lambda = +1$: **Proper Lorentz transformations.** These form the subgroup $SO(3,1)$. The "$S$" stands for *special*, meaning unit determinant — the same convention as $SO(3)$ for rotations.

- $\det \Lambda = -1$: **Improper Lorentz transformations.** These include parity, time reversal, and combinations thereof. They cannot be continuously connected to the identity (you can't smoothly go from $\det = +1$ to $\det = -1$), so they don't have a Lie algebra description — they are discrete.

### By the 00-Component: Orthochronous vs. Non-Orthochronous

Now consider the $\rho = \sigma = 0$ component of $\eta_{\rho\sigma} = \eta_{\mu\nu}\Lambda^\mu{}_\rho\Lambda^\nu{}_\sigma$:

$$1 = (\Lambda^0{}_0)^2 - \sum_{i=1}^{3}(\Lambda^i{}_0)^2$$

This gives us:

$$(\Lambda^0{}_0)^2 = 1 + \sum_{i=1}^{3}(\Lambda^i{}_0)^2 \geq 1$$

Since $(\Lambda^0{}_0)^2 \geq 1$, we must have either $\Lambda^0{}_0 \geq 1$ or $\Lambda^0{}_0 \leq -1$. There is no middle ground — this is a *discrete* split:

- $\Lambda^0{}_0 \geq 1$: **Orthochronous** — the transformation preserves the direction of time.
- $\Lambda^0{}_0 \leq -1$: **Non-orthochronous** — the transformation reverses the direction of time.

### The Four Components

Combining these two binary choices, the Lorentz group $O(3,1)$ splits into four disconnected components:

| Component | $\det\Lambda$ | $\Lambda^0{}_0$ | Contains | Example |
|-----------|:---:|:---:|---|---|
| $\mathcal{L}^\uparrow_+$ | $+1$ | $\geq 1$ | Identity | Rotations, boosts |
| $\mathcal{L}^\downarrow_+$ | $+1$ | $\leq -1$ | $PT$ | Combined parity + time reversal |
| $\mathcal{L}^\uparrow_-$ | $-1$ | $\geq 1$ | $P$ | Parity (spatial inversion) |
| $\mathcal{L}^\downarrow_-$ | $-1$ | $\leq -1$ | $T$ | Time reversal |

Only $\mathcal{L}^\uparrow_+$ — the **proper orthochronous Lorentz group** — is connected to the identity. This is the component that has a Lie algebra, and when physicists say "the Lorentz group" without qualification, they almost always mean this component:

$$\boxed{\text{Orthochronous Proper Lorentz Transformations} \equiv SO^+(3,1)}$$

The other three components are obtained by applying the discrete transformations $P$, $T$, or $PT$ to elements of $SO^+(3,1)$.

### Non-Orthochronous Transformations

When $\Lambda^0{}_0 \leq -1$, the transformation reverses the direction of time. Any non-orthochronous transformation can be written as an orthochronous transformation composed with a discrete inversion. The relevant discrete operations are:

- Time reversal $T$: $(t, x, y, z) \to (-t, x, y, z)$, which has $\det\Lambda = -1$ and $\Lambda^0{}_0 = -1$
- Combined $PT$: $(t, x, y, z) \to (-t, -x, -y, -z)$, which has $\det\Lambda = +1$ and $\Lambda^0{}_0 = -1$

### Improper Lorentz Transformations

Transformations with $\det\Lambda = -1$ are called *improper*. Any improper transformation can be written as a proper transformation ($\det = +1$) composed with a discrete transformation. Examples include:

- **Parity**: $(t,x,y,z) \to (t, -x, -y, -z)$ — flips all spatial coordinates, $\det = -1$, orthochronous
- **Single-axis reflection**: $(t,x,y,z) \to (t, -x, y, z)$ — flips one spatial axis, $\det = -1$, orthochronous
- **Time reversal**: $(t,x,y,z) \to (-t, x, y, z)$ — flips time, $\det = -1$, non-orthochronous

Notice that parity is improper but orthochronous ($\Lambda^0{}_0 = +1$), while time reversal is both improper *and* non-orthochronous. These are genuinely different — they live in different disconnected components of the Lorentz group.

---

## Lorentz Group Representations

Now we apply the representation theory from Part I. Recall: a set of objects $\phi^i$ (where $i = 1, \ldots, n$) transforms in a representation $R$ of dimension $n$ of the Lorentz group if, under a Lorentz transformation:

$$\phi^i \to \Lambda^i{}_j\,\phi^j = \left[\exp\left(-\frac{i}{2}\,\omega^{\mu\nu}J_R^{\mu\nu}\right)\right]^i{}_j \phi^j$$

Here, $\Lambda = \exp(-\tfrac{i}{2}\,\omega_{\mu\nu}J^{\mu\nu})$ is a matrix representation of the abstract Lorentz group element. The $J_R^{\mu\nu}$ are the **Lorentz generators in the representation $R$**, and they are $n \times n$ matrices. The parameters $\omega_{\mu\nu}$ are antisymmetric ($\omega_{\mu\nu} = -\omega_{\nu\mu}$) — an antisymmetric $4\times4$ matrix has $\frac{4\times3}{2} = 6$ independent components, corresponding to three rotations and three boosts.

For infinitesimal transformations ($\omega_{\mu\nu}$ small), we expand the exponential to first order:

$$\delta\phi^i = -\frac{i}{2}\,\omega_{\mu\nu}\,(J_R^{\mu\nu})^i{}_j\,\phi^j$$

The pair $(\mu, \nu)$ labels *which* generator (which rotation or boost), while $(i, j)$ are the matrix indices of that generator in the representation $R$. The explicit form of $(J_R^{\mu\nu})^i{}_j$ as an $n\times n$ matrix depends on which representation we are considering.

Let's now work through the representations one by one.

---

### Scalar Representation

For a scalar $\phi$, the index $i$ takes only one value ($i = 1$), so this is a **1-dimensional representation**. The generator $(J^{\mu\nu})^i{}_j$ is a $1\times1$ matrix — a single number for each pair $(\mu,\nu)$.

A scalar field is **invariant** under Lorentz transformations — it does not change:

$$\phi \to \Lambda\phi = 1 \cdot \phi = \phi$$

(*Invariant* means the value doesn't change. Contrast with *covariant*, which means it transforms in a well-defined way under certain rules — all representations are covariant, but only the scalar is invariant.)

Since $\Lambda = e^0 = 1$ in this representation:

$$\delta\phi = 0, \qquad J^{\mu\nu} = 0$$

A representation in which all generators are zero is a valid solution of the Lie algebra $[T^a, T^b] = if^{ab}{}_c T^c$ (both sides are trivially zero), and is called the **trivial representation**.

A typical Lorentz scalar in particle physics is the **rest mass** of a particle — all observers agree on its value regardless of their reference frame.

---

### Vector Representation

A **contravariant 4-vector** $V^\mu$ transforms as:

$$V^\mu \to \Lambda^\mu{}_\nu\,V^\nu$$

and a **covariant 4-vector** $V_\mu$ transforms as:

$$V_\mu \to \Lambda_\mu{}^\nu\,V_\nu$$

with $\Lambda$ satisfying the Lorentz invariance condition $\eta = \Lambda^T\eta\Lambda$. The spacetime coordinates $x^\mu$ and the four-momentum $p^\mu = (E, \mathbf{p})$ are the most important examples of contravariant 4-vectors.

This is a **4-dimensional representation**: each generator $J^{\mu\nu}$ is a $4\times4$ matrix, denoted $(J^{\mu\nu})^\rho{}_\sigma$. The explicit form of the generator is:

$$\boxed{(J^{\mu\nu})^\rho{}_\sigma = i\left(\eta^{\mu\rho}\delta^\nu_\sigma - \eta^{\nu\rho}\delta^\mu_\sigma\right)}$$

This formula is antisymmetric in $\mu\nu$ (as it must be, since $J^{\mu\nu} = -J^{\nu\mu}$), and it's the unique generator consistent with the infinitesimal form of $V'^\mu = \Lambda^\mu{}_\nu V^\nu$.

To see this, consider an infinitesimal Lorentz transformation $\Lambda^\mu{}_\nu = \delta^\mu_\nu + \omega^\mu{}_\nu$:

$$\Lambda^\mu{}_\nu V^\nu = (\delta^\mu_\nu + \omega^\mu{}_\nu)V^\nu = V^\mu + \omega^\mu{}_\nu V^\nu \equiv V^\mu + \delta V^\mu$$

Comparing with the general formula $\delta V^\rho = -\frac{i}{2}\omega_{\mu\nu}(J^{\mu\nu})^\rho{}_\sigma V^\sigma$ and substituting the explicit generator, one can verify that the two expressions agree: $\delta V^\rho = \omega^\rho{}_\sigma V^\sigma$. The circle closes.

---

## Lorentz Transformations of 4-Vectors

Let's now write down the explicit Lorentz transformations. A general Lorentz transformation depends on six parameters:

$$x'^\mu = \Lambda(\boldsymbol{\eta}, \boldsymbol{\theta})^\mu{}_\nu\,x^\nu$$

where $\boldsymbol{\eta} = (\eta^x, \eta^y, \eta^z)$ are the three **rapidity** (boost) parameters and $\boldsymbol{\theta} = (\theta^x, \theta^y, \theta^z)$ are the three **rotation** angles.

### Boosts

A boost along the $x$-axis can be written in terms of velocity or rapidity. In terms of velocity, where $\beta^i = v^i$ (in natural units with $c = 1$) and $\gamma^i = (1 - (\beta^i)^2)^{-1/2}$:

$$t \to \gamma^x(t + \beta^x x), \qquad x \to \gamma^x(x + \beta^x t)$$

Since $-1 < \beta < 1$, we can write $\beta^i = \tanh\eta^i$ where $-\infty < \eta^i < \infty$ is the rapidity. The same transformation becomes:

$$t \to (\cosh\eta^x)\,t + (\sinh\eta^x)\,x, \qquad x \to (\sinh\eta^x)\,t + (\cosh\eta^x)\,x$$

The rapidity parameterization is nicer for several reasons: rapidities *add* under composition of collinear boosts (unlike velocities), and the hyperbolic functions make the analogy with rotations transparent — $\cos\theta, \sin\theta$ for rotations become $\cosh\eta, \sinh\eta$ for boosts.

Boosts in the $y$ and $z$ directions follow identically, with the $\cosh$ and $\sinh$ appearing in the appropriate row/column.

### Boost Matrices

The explicit $4\times4$ matrices for boosts along each axis are:

**Boost along $x$ ($\beta$-form and $\eta$-form):**

$$\Lambda(\beta^x) = \begin{pmatrix} \gamma^x & \beta^x\gamma^x & 0 & 0 \\ \beta^x\gamma^x & \gamma^x & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad \Lambda(\eta^x) = \begin{pmatrix} \cosh\eta^x & \sinh\eta^x & 0 & 0 \\ \sinh\eta^x & \cosh\eta^x & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

**Boost along $y$:**

$$\Lambda(\beta^y) = \begin{pmatrix} \gamma^y & 0 & \beta^y\gamma^y & 0 \\ 0 & 1 & 0 & 0 \\ \beta^y\gamma^y & 0 & \gamma^y & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}, \qquad \Lambda(\eta^y) = \begin{pmatrix} \cosh\eta^y & 0 & \sinh\eta^y & 0 \\ 0 & 1 & 0 & 0 \\ \sinh\eta^y & 0 & \cosh\eta^y & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

**Boost along $z$:**

$$\Lambda(\beta^z) = \begin{pmatrix} \gamma^z & 0 & 0 & \beta^z\gamma^z \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \beta^z\gamma^z & 0 & 0 & \gamma^z \end{pmatrix}, \qquad \Lambda(\eta^z) = \begin{pmatrix} \cosh\eta^z & 0 & 0 & \sinh\eta^z \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ \sinh\eta^z & 0 & 0 & \cosh\eta^z \end{pmatrix}$$

The pattern: the boost mixes the time component (row/column 0) with the spatial component in the boost direction, leaving the other two spatial components untouched. The $\cosh$ sits on the diagonal and the $\sinh$ on the off-diagonal — compare with rotations, where $\cos$ and $\sin$ play the same role.

### Rotation Matrices

Rotations don't touch the time component at all — they act purely in the spatial $3\times3$ block:

**Rotation about $x$-axis:**

$$\Lambda(\theta^x) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & \cos\theta^x & \sin\theta^x \\ 0 & 0 & -\sin\theta^x & \cos\theta^x \end{pmatrix}$$

**Rotation about $y$-axis:**

$$\Lambda(\theta^y) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos\theta^y & 0 & -\sin\theta^y \\ 0 & 0 & 1 & 0 \\ 0 & \sin\theta^y & 0 & \cos\theta^y \end{pmatrix}$$

**Rotation about $z$-axis:**

$$\Lambda(\theta^z) = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & \cos\theta^z & \sin\theta^z & 0 \\ 0 & -\sin\theta^z & \cos\theta^z & 0 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

These are just the familiar $3\times3$ rotation matrices embedded in the lower-right $3\times3$ block of a $4\times4$ matrix, with the time-time component equal to 1 and all time-space components equal to 0.

---

## Rotation and Boost Generators

Now we extract the generators by differentiating the finite transformations and evaluating at the identity (all parameters equal to zero).

### Boost Generators

$$K^i = -i\frac{\partial\Lambda(\eta^i)}{\partial\eta^i}\bigg|_{\eta^i=0}$$

Using $\cosh(0) = 1$ and $\sinh(0) = 0$:

$$K^x = -i\begin{pmatrix} 0 & 1 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad K^y = -i\begin{pmatrix} 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \quad K^z = -i\begin{pmatrix} 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 1 & 0 & 0 & 0 \end{pmatrix}$$

Notice that the $K^i$ are **symmetric** matrices (the inner $4\times4$ part, before the $-i$). This reflects the fact that boosts are *not* unitary transformations — the Lorentz group is non-compact, and boosts push you along a hyperbola rather than around a circle.

### Rotation Generators

$$J^i = -i\frac{\partial\Lambda(\theta^i)}{\partial\theta^i}\bigg|_{\theta^i=0}$$

Using $\cos(0) = 1$ and $\sin(0) = 0$:

$$J^x = i\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & -1 \\ 0 & 0 & 1 & 0 \end{pmatrix}, \quad J^y = i\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \\ 0 & -1 & 0 & 0 \end{pmatrix}, \quad J^z = i\begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 0 & -1 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

The $J^i$ are **antisymmetric** (the inner part, before the $i$). This reflects the fact that rotations *are* unitary — the rotation group $SO(3)$ is compact.

### The Lorentz Algebra

These six generators satisfy the following commutation relations:

$$[J^i, J^j] = i\epsilon^{ijk}J^k$$

$$[J^i, K^j] = i\epsilon^{ijk}K^k$$

$$[K^i, K^j] = -i\epsilon^{ijk}J^k$$

Each of these relations has a clear physical meaning:

- **$[J^i, J^j] = i\epsilon^{ijk}J^k$**: The rotation generators close among themselves and satisfy the $\mathfrak{su}(2)$ algebra. This is simply the statement that $J^i$ are angular momenta — rotations form a subgroup.

- **$[J^i, K^j] = i\epsilon^{ijk}K^k$**: The boosts transform as a **vector** under rotations. If you rotate your coordinate system, the boost generators rotate accordingly. This is expected on physical grounds — a boost "in the $x$-direction" should become a boost "in the $y$-direction" under a $90°$ rotation about $z$.

- **$[K^i, K^j] = -i\epsilon^{ijk}J^k$**: This is the crucial relation. The commutator of two boosts gives a **rotation**, not another boost. Boosts do not form a subgroup. The minus sign (compared to $[J^i, J^j]$) is physically significant: it's the reason the Lorentz group is non-compact, the reason finite-dimensional unitary representations don't exist, and ultimately the reason we need spinors and the Dirac equation.

If this third relation had a plus sign instead — $[K^i, K^j] = +i\epsilon^{ijk}J^k$ — then $(J^i, K^i)$ would generate $SO(4)$, a compact group with perfectly well-behaved finite-dimensional unitary representations. The minus sign makes all the difference.

### Connecting to the Tensor Notation

The six generators $J^i$ and $K^i$ can be packaged into the antisymmetric tensor $J^{\mu\nu}$ via:

$$J^i = \frac{1}{2}\epsilon^{ijk}J^{jk}, \qquad K^i = J^{0i}$$

This is useful because the Lorentz transformation takes the compact form $\Lambda = \exp(-\tfrac{i}{2}\omega_{\mu\nu}J^{\mu\nu})$, where the six independent components of $\omega_{\mu\nu}$ are the three rotation angles and three boost rapidities.

---

## Connection to What Comes Next

We now have the complete Lorentz algebra — six generators, their explicit $4\times4$ matrix forms, and their commutation relations. But the $4\times4$ (vector) representation is only one possibility. The Lie algebra admits infinitely many representations, and the physically most important ones are *not* the vector representation.

In the next post, we'll complexify the Lorentz algebra by defining $N_i^\pm = \frac{1}{2}(J_i \pm iK_i)$, which decomposes it into $\mathfrak{su}(2) \oplus \mathfrak{su}(2)$. This will reveal the spinorial representations — the $(1/2, 0)$ and $(0, 1/2)$ representations that describe left- and right-handed Weyl fermions. From there, we'll construct Dirac and Majorana spinors, and finally arrive at the Poincaré group and the Wigner classification of particles by mass and spin.

The minus sign in $[K^i, K^j] = -i\epsilon^{ijk}J^k$ will be the engine that drives everything.

---

*Next post: [Part III: Spinors, Fields, and the Representations That Matter](/posts/notes/lorentz-representations/)*

---

This post is based on my own self-study notes that I created in 2022 in order to get a deeper understanding of all of this.
