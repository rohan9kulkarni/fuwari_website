---
title: "When 'Hermitian' Isn't Enough: A Case Study of the Momentum Operator"
published: 2021-12-01
description: A deep dive into why "Hermitian" operators aren’t always self-adjoint, and why this matters for the momentum operator in quantum mechanics.
category: Notes
tags:
  - quantum-mechanics
  - mathematical-physics
  - physics
---

*Note: This blog post is inspired by my own term paper for MIT 8.06x (Applications of Quantum Mechanics). You can find the original PDF here: [Case Study of the Momentum Operator](/resources/case_study_momentum.pdf).*

## Why this post exists

Most quantum mechanics textbooks tell you that observables correspond to "Hermitian operators." This is, charitably, a half-truth — and the half that's missing is exactly the half that gets you into trouble the moment you try to define a momentum operator on anything more interesting than $\mathbb{R}^n$.

The issue is that "Hermitian" in the physics sense usually means **symmetric**, but what observables really need to be is **self-adjoint**, and these are not the same thing in infinite dimensions. The gap between them is invisible in finite-dimensional linear algebra (where every linear operator is bounded, so every densely defined symmetric operator is automatically self-adjoint). In quantum mechanics, where Hilbert spaces are typically $L^2(\mathbb{R}^n)$ and the operators we care about are unbounded, the distinction is unavoidable.

This post is a case study. We'll work through the definitions carefully — operator, adjoint, symmetric, self-adjoint, essentially self-adjoint — and then apply them to the momentum operator $\hat{P} = -i\hbar\,\partial_x$ in two settings:

1. **A compact interval** $[0, 2\pi]$ with hard-wall (Dirichlet) boundary conditions.
2. **A circle** (the same interval with periodic boundary conditions).

The punchline: on the circle, the momentum operator is essentially self-adjoint and there's a unique sensible "promotion" of it to a true observable. On the interval with Dirichlet boundary conditions, it is *not* essentially self-adjoint, and the question of which self-adjoint operator deserves to be called "the momentum on $[0,2\pi]$" doesn't have a unique answer — there's a one-parameter family of options, and you have to choose. That's the kind of subtlety that gets papered over when you treat $-i\hbar\,\partial_x$ as if it were a finite matrix.

I'll assume a working knowledge of Hilbert spaces and basic functional analysis (bounded operators, dense subspaces, $L^2$). Set $\hbar = 1$ throughout.

---

## 1. Operators, bounded and unbounded

An **operator** between two normed spaces $A$ and $B$ is just a linear map $T: A \to B$. Nothing special so far. The interesting part is the topology.

In finite dimensions, every linear operator is automatically continuous, because all norms on a finite-dimensional vector space are equivalent. This is *false* in infinite dimensions, and the failure is not a mathematical curiosity — it's the reason quantum mechanics needs a more careful framework than ordinary linear algebra.

### Bounded operators

Let $(V, \|\cdot\|_V)$ be a normed space and $(W, \|\cdot\|_W)$ a Banach space. A linear operator $A: V \to W$ is **bounded** if

$$
\sup_{f \in V \setminus \{0\}} \frac{\|Af\|_W}{\|f\|_V} < \infty,
$$

equivalently if there exists a constant $C \geq 0$ such that $\|Ax\|_W \leq C\|x\|_V$ for all $x \in V$.

For linear operators, "bounded" and "continuous" are synonymous (this is a standard lemma). We write $\mathcal{B}(\mathcal{H})$ for the space of bounded operators $\mathcal{H} \to \mathcal{H}$.

### Unbounded operators

A linear operator that fails the boundedness condition is called **unbounded**. The two most important operators in quantum mechanics — position and momentum — are both unbounded on $L^2(\mathbb{R}^n)$:

- **Position**: $\hat{x}\psi(x) = x\psi(x)$.
- **Momentum**: $\hat{p}\psi(x) = -i\,\partial_x\psi(x)$.

Why are they unbounded? Position because you can find $L^2$ functions concentrated arbitrarily far from the origin where $\|x\psi\|/\|\psi\|$ blows up. Momentum because differentiation amplifies high-frequency components without bound.

A more elementary way to see that the derivative operator is unbounded: define

$$
D: C^1[0,1] \to C^0[0,1], \qquad f \mapsto f'.
$$

Take $f_n(x) = \sin(n\pi x)$, so $\|f_n\|_\infty = 1$ but $\|f_n'\|_\infty = n\pi \to \infty$. The ratio is unbounded.

> **Important consequence.** An unbounded operator cannot be defined on the whole Hilbert space — at least not as a closed linear operator (this is the Hellinger–Toeplitz theorem). It always lives on a *proper subspace* called its **domain**. Specifying that domain is part of specifying the operator. Two operators with the same formal expression but different domains are *different operators*. This is the single most important thing to internalize.

---

## 2. Adjoints, symmetric, and self-adjoint

### Densely defined operators

Let $\mathcal{H}$ be a Hilbert space. A linear operator $T: \mathcal{D}_T \to \mathcal{H}$ is **densely defined** if its domain $\mathcal{D}_T$ is dense in $\mathcal{H}$, i.e. every vector in $\mathcal{H}$ can be approximated arbitrarily well by vectors in $\mathcal{D}_T$.

Density is what allows us to define the adjoint at all. Without it, the adjoint is not even well-defined as a single-valued operator.

### The adjoint

Let $T: \mathcal{D}_T \to \mathcal{H}$ be densely defined. The **adjoint** $T^*$ is the operator with domain

$$
\mathcal{D}_{T^*} := \big\{ \psi \in \mathcal{H} \,\big|\, \exists\,\eta \in \mathcal{H}\ \text{such that}\ \langle\psi | T\varphi\rangle = \langle\eta|\varphi\rangle \text{ for all } \varphi \in \mathcal{D}_T \big\},
$$

acting by $T^*\psi := \eta$.

**$T^*$ is well-defined.** If both $\eta$ and $\tilde\eta$ satisfy $\langle\psi|T\varphi\rangle = \langle\eta|\varphi\rangle = \langle\tilde\eta|\varphi\rangle$ for all $\varphi \in \mathcal{D}_T$, then $\langle\eta - \tilde\eta | \varphi\rangle = 0$ for all $\varphi$ in a dense set, which forces $\eta = \tilde\eta$. (This is exactly where density is used.)

A small but useful proposition: $\ker(T^*) = \operatorname{ran}(T)^\perp$. To see it, $\psi \in \ker(T^*) \iff T^*\psi = 0 \iff \langle\psi|T\varphi\rangle = \langle 0|\varphi\rangle = 0$ for all $\varphi \in \mathcal{D}_T \iff \psi \perp \operatorname{ran}(T)$.

### Extensions and a key inclusion lemma

We say $\tilde T$ is an **extension** of $T$, written $T \subseteq \tilde T$, if $\mathcal{D}_T \subseteq \mathcal{D}_{\tilde T}$ and $\tilde T\varphi = T\varphi$ for all $\varphi \in \mathcal{D}_T$.

**Lemma.** *If $T \subseteq \tilde T$ are both densely defined, then $\tilde T^* \subseteq T^*$.*

**Proof.** Let $\psi \in \mathcal{D}_{\tilde T^*}$, so there exists $\eta \in \mathcal{H}$ with $\langle\psi|\tilde T\beta\rangle = \langle\eta|\beta\rangle$ for all $\beta \in \mathcal{D}_{\tilde T}$. Since $\mathcal{D}_T \subseteq \mathcal{D}_{\tilde T}$ and $\tilde T = T$ on $\mathcal{D}_T$, this gives $\langle\psi|T\alpha\rangle = \langle\eta|\alpha\rangle$ for all $\alpha \in \mathcal{D}_T$. Hence $\psi \in \mathcal{D}_{T^*}$ and $T^*\psi = \eta = \tilde T^*\psi$. $\square$

Notice the direction-reversal: a *bigger* operator has a *smaller* adjoint. This is the crucial structural fact.

### Symmetric vs. self-adjoint

A densely defined operator $T$ is **symmetric** if

$$
\langle \alpha | T\beta\rangle = \langle T\alpha | \beta \rangle \qquad \text{for all } \alpha, \beta \in \mathcal{D}_T.
$$

It is **self-adjoint** if $T = T^*$ — meaning *both* the actions agree *and* the domains agree:

1. $\mathcal{D}_T = \mathcal{D}_{T^*}$,
2. $T\varphi = T^*\varphi$ for all $\varphi \in \mathcal{D}_T$.

> A linguistic warning. In physics, the word "Hermitian" is used inconsistently: sometimes as a synonym for symmetric, sometimes as a synonym for self-adjoint. Statements like "observables correspond to Hermitian operators" gloss over a real distinction that becomes invisible only in finite dimensions. I'll avoid the word entirely.

If $T$ is symmetric, then $T \subseteq T^*$. (For $\psi \in \mathcal{D}_T$, set $\eta := T\psi$; symmetry gives $\langle\psi|T\alpha\rangle = \langle\eta|\alpha\rangle$ for all $\alpha \in \mathcal{D}_T$, so $\psi \in \mathcal{D}_{T^*}$ with $T^*\psi = T\psi$.) The whole game is to ask whether the inclusion is equality.

### A maximality property

**Self-adjoint operators have no proper symmetric extensions.** Concretely: if $T$ is self-adjoint, $\tilde T$ is symmetric, and $T \subseteq \tilde T$, then $T = \tilde T$.

**Proof.** From $T \subseteq \tilde T$, the lemma gives $\tilde T^* \subseteq T^*$. Symmetric means $\tilde T \subseteq \tilde T^*$, so $\tilde T \subseteq \tilde T^* \subseteq T^* = T$. Combined with $T \subseteq \tilde T$, we get $T = \tilde T$. $\square$

This is why self-adjointness is the right condition for observables. Spectral theorem guarantees self-adjoint operators have real spectra and a sensible functional calculus; symmetric operators in general do not. And the maximality property tells us that a self-adjoint operator is "as big as it can be" — there's no room to extend it further while keeping the symmetric property.

---

## 3. Closability, closure, essentially self-adjoint

There's one more layer we need. Even if our operator $T$ isn't self-adjoint, it may have a unique self-adjoint *extension*, hidden inside $T^*$. This is captured by the notion of **essentially self-adjointness**.

### Closures

A densely defined operator $T$ is **closable** if its adjoint $T^*$ is itself densely defined. Equivalently (and more usefully), $T$ has a smallest closed extension, which we call the **closure** $\overline T$. It satisfies $\overline T = T^{**}$.

**Symmetric operators are always closable.** If $T$ is symmetric, then $T \subseteq T^*$ implies $\mathcal{D}_T \subseteq \mathcal{D}_{T^*}$. Since $\mathcal{D}_T$ is dense, so is $\mathcal{D}_{T^*}$, hence $T$ is closable. So we always have access to $\overline T = T^{**}$ for symmetric operators.

For symmetric $T$, the closure sits between $T$ and $T^*$:

$$
T \subseteq T^{**} \subseteq T^*.
$$

### Essentially self-adjoint operators

A symmetric operator $T$ is **essentially self-adjoint** (e.s.a.) if its closure $\overline T = T^{**}$ is self-adjoint.

This is *weaker* than self-adjointness. A self-adjoint operator is automatically e.s.a.: if $T = T^*$, then taking adjoints gives $T^* = T^{**}$, so $T = T^{**}$, so $\overline T = T$ is self-adjoint.

**Theorem.** *If $T$ is essentially self-adjoint, then $\overline T$ is the **unique** self-adjoint extension of $T$.*

**Proof.** $\overline T$ is a self-adjoint extension by hypothesis. For uniqueness, suppose $S$ is any other self-adjoint extension, $T \subseteq S$. Self-adjoint operators are closed (since $S = S^*$ and adjoints are always closed), so $\overline T \subseteq S$ (the closure is the smallest closed extension). But $\overline T$ is itself self-adjoint, and a self-adjoint operator has no proper symmetric extensions — so $\overline T = S$. $\square$

> **The strategic upshot.** When we want to elevate a symmetric operator to a genuine observable, we do *not* need it to already be self-adjoint. It suffices that it be essentially self-adjoint. Then the closure $\overline T$ is the canonical observable, picked out uniquely.

When essential self-adjointness fails, life gets harder: the symmetric operator may admit *many* self-adjoint extensions (or even none), and choosing one becomes a piece of physical input. The technology to count and parametrize these extensions is **deficiency index theory**, due to von Neumann — beyond our scope here, but coming up explicitly when we look at the interval case.

---

## 4. The momentum operator: setup

Now to the main event. Define the momentum operator on the $j$-th coordinate as

$$
\hat{P}_j: \mathcal{D}_P \to L^2,\qquad \psi \mapsto -i\,\partial_j\psi,
$$

where the domain $\mathcal{D}_P$ has yet to be specified. We work on $\mathcal{H} = L^2([0, 2\pi])$ in one dimension, and we'll consider two natural-looking domains:

- **Interval (Dirichlet):** $\mathcal{D}_P^{\text{int}} = \{\psi \in C^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi) = 0\}$.
- **Circle (periodic):** $\mathcal{D}_P^{\text{circ}} = \{\psi \in C^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi)\}$.

The Dirichlet condition is strictly stronger than the periodic one ($0 = 0$ implies $0 = 0$, but not conversely), so as operators we have $\hat{P}_j^{\text{int}} \subsetneq \hat{P}_j^{\text{circ}}$ — the circle operator is an extension of the interval operator.

We'll need a couple of function-space facts. The chain of inclusions

$$
C^1([a,b]) \subsetneq H^1([a,b]) \subseteq AC([a,b])
$$

relates classically differentiable functions ($C^1$) to **absolutely continuous** functions ($AC$) and the **Sobolev space** $H^1$. Recall:

- $\psi \in AC([a,b])$ if there exists a Lebesgue-integrable $\rho$ such that $\psi(x) = \psi(a) + \int_a^x \rho(y)\,dy$, in which case $\rho = \psi'$ almost everywhere.
- $H^1([a,b]) = \{\psi \in AC([a,b]) \mid \psi' \in L^2\}$.

The point of $H^1$ is that it's the natural domain for "$\psi$ has an $L^2$ derivative," allowing us to apply $-i\partial_x$ and stay in $L^2$ — *without* requiring classical differentiability everywhere.

---

## 5. Momentum on the interval $[0, 2\pi]$

Take $\hat{P}_j^{\text{int}}$ with domain $\mathcal{D}_P = \{\psi \in C^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi) = 0\}$.

### Step 1. $\hat{P}_j^{\text{int}}$ is symmetric

For $\psi, \varphi \in \mathcal{D}_P$, integrate by parts:

$$
\langle \psi | \hat{P}_j \varphi\rangle = \int_0^{2\pi} \overline{\psi(x)}\,\big(-i\varphi'(x)\big)\,dx = -i\big[\overline{\psi}\varphi\big]_0^{2\pi} + i \int_0^{2\pi} \overline{\psi'(x)}\,\varphi(x)\,dx.
$$

The boundary term vanishes because $\psi(0) = \psi(2\pi) = 0$. The remaining integral is

$$
i \int_0^{2\pi} \overline{\psi'}\,\varphi\,dx = \int_0^{2\pi} \overline{(-i\psi')}\,\varphi\,dx = \langle \hat{P}_j\psi | \varphi\rangle.
$$

So $\hat{P}_j^{\text{int}}$ is symmetric. ✓

### Step 2. The adjoint $(\hat{P}_j^{\text{int}})^*$ has a *bigger* domain

Now we ask: for which $\psi \in L^2$ does there exist $\eta \in L^2$ with

$$
\int_0^{2\pi} \overline{\psi}\,(-i\varphi')\,dx = \int_0^{2\pi} \overline\eta\,\varphi\,dx \qquad \text{for all } \varphi \in \mathcal{D}_P? \tag{$\star$}
$$

The strategy: pick any $N \in AC([0,2\pi])$ with $N' = \eta$ a.e. (such an $N$ exists because every $L^2$ function on a compact interval has an absolutely continuous antiderivative). Substituting $\eta = N'$ and integrating the right-hand side by parts,

$$
\int_0^{2\pi} \overline{N'}\,\varphi\,dx = \big[\overline{N}\varphi\big]_0^{2\pi} - \int_0^{2\pi} \overline N\,\varphi'\,dx,
$$

and the boundary term vanishes because $\varphi \in \mathcal{D}_P$ vanishes at the endpoints. So $(\star)$ becomes

$$
\int_0^{2\pi} \overline{(\psi - iN)}\,\varphi'\,dx = 0 \qquad \text{for all } \varphi \in \mathcal{D}_P.
$$

Equivalently, $\psi - iN \perp \{\varphi' \mid \varphi \in \mathcal{D}_P\}$ in $L^2$.

Now we identify this orthogonal complement. The set $\{\varphi' \mid \varphi \in \mathcal{D}_P\}$ consists exactly of those continuous functions $\xi$ on $[0, 2\pi]$ satisfying $\int_0^{2\pi} \xi(x)\,dx = 0$ — that is, $\xi \perp \mathbf{1}$, where $\mathbf{1}$ is the constant function. (One direction: if $\xi = \varphi'$ with $\varphi(0) = \varphi(2\pi) = 0$, then $\int_0^{2\pi}\xi\,dx = \varphi(2\pi) - \varphi(0) = 0$. Conversely, given such a $\xi$, the antiderivative $\varphi(x) = \int_0^x \xi(y)\,dy$ vanishes at both endpoints and lies in $C^1$.)

So the closure (in $L^2$) of $\{\varphi' \mid \varphi \in \mathcal{D}_P\}$ is $\{\mathbf{1}\}^\perp$, and its orthogonal complement is therefore $\{\mathbf{1}\}^{\perp\perp} = \overline{\operatorname{span}\{\mathbf{1}\}} = \mathbb{C}\cdot\mathbf{1}$, the space of constant functions. Hence

$$
\psi - iN = \text{constant} \quad\Longrightarrow\quad \psi = \text{constant} + iN.
$$

Since $N \in AC$, this gives $\psi \in AC([0, 2\pi])$ with no boundary conditions whatsoever. The requirement $\hat{P}_j^*\psi = \eta = -iN' \in L^2$ then forces $\psi' \in L^2$, i.e. $\psi \in H^1([0, 2\pi])$. Conversely, every $H^1$ function arises this way, and so

$$
\boxed{\ \mathcal{D}_{(\hat{P}_j^{\text{int}})^*} = H^1([0, 2\pi]),\qquad (\hat{P}_j^{\text{int}})^*\psi = -i\psi'.\ }
$$

The adjoint is the same differential expression, but acting on a much larger domain — $H^1$ functions with no boundary conditions, versus $C^1$ functions vanishing at both endpoints.

In particular, $\hat{P}_j^{\text{int}} \subsetneq (\hat{P}_j^{\text{int}})^*$, so **$\hat{P}_j^{\text{int}}$ is not self-adjoint.**

### Step 3. The closure $\hat{P}_j^{**}$ is also too small

Maybe the closure rescues us? Let's compute $\mathcal{D}_{P^{**}}$ directly.

$\psi \in \mathcal{D}_{P^{**}}$ means: there exists $\zeta \in L^2$ such that $\langle\psi | \hat P_j^* \varphi\rangle = \langle \zeta | \varphi\rangle$ for all $\varphi \in \mathcal{D}_{P^*} = H^1$. Since $\hat P_j^{**} \subseteq \hat P_j^*$ and both act as $-i\partial_x$, $\zeta = -i\psi'$, and the question reduces to whether the appropriate boundary terms vanish.

For $\psi \in H^1$ (which we already know is necessary, since $\mathcal{D}_{P^{**}} \subseteq \mathcal{D}_{P^*} = H^1$) and $\varphi \in H^1$, integration by parts gives

$$
\langle\psi | \hat P_j^*\varphi\rangle - \langle \hat P_j^*\psi | \varphi\rangle = -i\big[\overline\psi\,\varphi\big]_0^{2\pi}.
$$

Requiring this to vanish for *all* $\varphi \in H^1$ — and $H^1$ functions can take arbitrary independent values at $0$ and $2\pi$ — forces $\psi(0) = 0$ and $\psi(2\pi) = 0$.

So

$$
\mathcal{D}_{P^{**}} = \{\psi \in H^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi) = 0\},
$$

which is strictly smaller than $\mathcal{D}_{P^*} = H^1([0, 2\pi])$. Hence $\hat{P}_j^{**} \subsetneq \hat{P}_j^*$, and $\hat{P}_j^{\text{int}}$ is **not essentially self-adjoint**.

### What's really going on

This is not a defect of our choice of "starting domain" — it reflects a real physical ambiguity. There is in fact a one-parameter family of self-adjoint extensions of $\hat{P}_j^{\text{int}}$, parametrized by $\theta \in [0, 2\pi)$, with domains

$$
\mathcal{D}_\theta = \{\psi \in H^1([0, 2\pi]) \mid \psi(2\pi) = e^{i\theta}\psi(0)\}.
$$

Different choices of $\theta$ correspond to physically different theories (think: a particle on an interval threaded by a magnetic flux, or a "twisted" boundary condition). The deficiency-index analysis confirms that this is the full story: the deficiency indices of $\hat P_j^{\text{int}}$ are $(1, 1)$, giving exactly a $U(1)$-worth of self-adjoint extensions.

The lesson: when an operator is symmetric but not essentially self-adjoint, the *physics* of which observable to use is not determined by the formal expression alone. You have to add a choice of boundary condition, and that choice is part of defining the system.

---

## 6. Momentum on the circle

Now repeat the analysis with the milder boundary condition $\psi(0) = \psi(2\pi)$ (no requirement that the common value be zero).

### Step 1. Symmetric

For $\psi, \varphi$ with $\psi(0) = \psi(2\pi)$ and $\varphi(0) = \varphi(2\pi)$, the boundary term in integration by parts is

$$
-i\big[\overline\psi\varphi\big]_0^{2\pi} = -i\big(\overline{\psi(2\pi)}\varphi(2\pi) - \overline{\psi(0)}\varphi(0)\big) = -i\overline{\psi(0)}\big(\varphi(2\pi) - \varphi(0)\big) = 0,
$$

using *both* boundary conditions. So $\hat P_j^{\text{circ}}$ is symmetric. ✓

### Step 2. The adjoint

We can shortcut the computation by using the inclusion $\hat{P}_j^{\text{int}} \subsetneq \hat{P}_j^{\text{circ}}$. By the inclusion lemma, $(\hat{P}_j^{\text{circ}})^* \subseteq (\hat{P}_j^{\text{int}})^* = \hat{P}_j^*|_{H^1}$. So $\mathcal{D}_{(P^{\text{circ}})^*} \subseteq H^1([0, 2\pi])$ and the action is still $-i\partial_x$.

To pin down the boundary conditions: $\psi \in \mathcal{D}_{(P^{\text{circ}})^*}$ requires the boundary term to vanish for *all* $\varphi$ with $\varphi(0) = \varphi(2\pi)$:

$$
-i\big[\overline\psi\varphi\big]_0^{2\pi} = -i\overline{\big(\psi(2\pi) - \psi(0)\big)}\,\varphi(0) = 0 \qquad \text{for all such } \varphi.
$$

Since $\varphi(0)$ is arbitrary, this forces $\psi(2\pi) = \psi(0)$. So

$$
\boxed{\ \mathcal{D}_{(\hat{P}_j^{\text{circ}})^*} = \{\psi \in H^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi)\}.\ }
$$

The adjoint inherits the *same* periodic boundary condition, just on a bigger function space.

### Step 3. Not self-adjoint, but…

Comparing,

$$
\mathcal{D}_{P^{\text{circ}}} = \{\psi \in C^1 \mid \psi(0) = \psi(2\pi)\} \subsetneq \{\psi \in H^1 \mid \psi(0) = \psi(2\pi)\} = \mathcal{D}_{(P^{\text{circ}})^*}.
$$

So $\hat{P}_j^{\text{circ}}$ is not self-adjoint either — but only because of the regularity gap $C^1 \subsetneq H^1$, not because of any boundary-condition mismatch.

### Step 4. Essentially self-adjoint!

Let's compute the closure. For $\psi \in \mathcal{D}_{P^{**}}$ and $\varphi \in \mathcal{D}_{P^*} = \{H^1\text{ with periodic BC}\}$, the boundary term is

$$
-i\big[\overline\psi\varphi\big]_0^{2\pi} = -i\overline{\big(\psi(2\pi) - \psi(0)\big)}\,\varphi(0)
$$

(using $\varphi(2\pi) = \varphi(0)$). For this to vanish for all such $\varphi$, we need $\psi(0) = \psi(2\pi)$ — but no further constraint, because $\varphi(0)$ is the only free quantity. So

$$
\mathcal{D}_{P^{**}} = \{\psi \in H^1([0, 2\pi]) \mid \psi(0) = \psi(2\pi)\} = \mathcal{D}_{P^*}.
$$

Therefore $\hat{P}_j^{**} = \hat{P}_j^*$, and **$\hat{P}_j^{\text{circ}}$ is essentially self-adjoint.**

### Conclusion

The momentum operator on the circle has a unique self-adjoint realization: take the closure of the naive operator on $C^1$-with-periodic-BC, and you land on the operator $-i\partial_x$ with domain $\{\psi \in H^1 \mid \psi(0) = \psi(2\pi)\}$.

This is the operator whose eigenfunctions are $e^{inx}$ with eigenvalues $n \in \mathbb{Z}$, which is exactly the spectrum of momentum on $S^1$ that you'd compute formally in any QM textbook. The point of the whole apparatus is to *justify* that calculation by showing that the operator we're diagonalizing actually exists as a genuine observable.

---

## 7. The takeaway

| Setting | Symmetric? | Self-adjoint? | Essentially self-adjoint? | Self-adjoint extensions |
|--------|------------|---------------|---------------------------|-------------------------|
| Interval $[0,2\pi]$, $\psi(0) = \psi(2\pi) = 0$ | yes | no | **no** | one-parameter family $\theta \in U(1)$ |
| Circle, $\psi(0) = \psi(2\pi)$ | yes | no (regularity only) | **yes** | unique: the closure |

The interval case is a subtle example of a phenomenon that recurs throughout quantum mechanics: a perfectly innocent-looking differential operator may fail to define a unique observable, because the boundary conditions encode physical information that cannot be recovered from the formal expression alone. The circle case is the happier scenario where everything works out, and it works out *because* the topology of the configuration space already does the boundary-condition-fixing for us.

The general technology to handle the harder cases — counting the deficiency indices $(n_+, n_-)$ to find a $U(n_+)$-family of self-adjoint extensions when $n_+ = n_-$, or no extensions at all when $n_+ \neq n_-$ — is due to von Neumann. It's the right machinery for asking systematically "when is this symmetric operator a genuine observable, and if not, what data is missing?"

We also haven't said anything about *why* momentum is $-i\partial_x$ in the first place. That's the content of the **Stone–von Neumann theorem**, which from the canonical commutation relation $[\hat x, \hat p] = i$ (and an irreducibility hypothesis) recovers the Schrödinger representation up to unitary equivalence. The classical-mechanics analogue is the Poisson bracket $\{x, p\} = 1$; quantization replaces Poisson brackets by commutators, and Stone–von Neumann tells you that this prescription has, up to mathematical niceness conditions, essentially one realization. That's a separate story for another post.

---

## References

- B. C. Hall, *Quantum Theory for Mathematicians*, Springer (2013) — Chapters 7–10.
- M. Reed and B. Simon, *Methods of Modern Mathematical Physics, Volume I: Functional Analysis*, Academic Press (1980) — especially Chapters VI–VIII.
- F. Schuller, *Lectures on Quantum Theory*, University of Erlangen-Nürnberg, [YouTube playlist](https://www.youtube.com/playlist?list=PLPH7f_7ZlzxQVx5jRjbfRGEzWY_upS5K6) (Lectures 6–9 cover this material).
- P. Szekeres, *A Course in Modern Mathematical Physics: Groups, Hilbert Space and Differential Geometry*, Cambridge University Press (2004) — Chapters 13–14 for background reading.