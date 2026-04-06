---
title: "Dark Energy Beyond Scalars: Why p-Forms?"
published: 2026-04-06
description: "An introduction to using higher-rank tensor fields like vectors and 2-forms as dark energy candidates, going beyond the scalar field quintessence."
tags:
  - cosmology
  - physics
category: Notes
draft: false
---

*This is the first post in a series on using higher-rank tensor fields — vectors and 2-forms — as dark energy candidates. The series is based on problems from a graduate cosmology course (Prof. L. Heisenberg, Winter Semester 2024/2025). We'll develop the physics carefully enough that someone entering the field can follow along.*

---

## The Problem: What's Pushing the Universe Apart?

Since 1998, we've known the expansion of the Universe is accelerating. Something is driving spacetime apart faster and faster. We call this something **dark energy**, and the simplest explanation is a cosmological constant $\Lambda$ — a constant energy density baked into the fabric of spacetime itself.

The cosmological constant works. It fits the data. But it comes with a discomfort: if you try to compute $\Lambda$ from quantum field theory — by summing up the vacuum energy of all known fields — you get a number roughly $10^{120}$ times larger than what we observe. This is the **cosmological constant problem**, and it remains one of the deepest unsolved puzzles in physics.

This mismatch motivates a natural question: what if dark energy isn't a constant at all, but a **dynamical field** that evolves over cosmic time? Maybe its value today is small not because of a miraculous cancellation, but because the field has been slowly rolling toward its current configuration.

## The Scalar Field Default: Quintessence

The simplest dynamical dark energy model is **quintessence** — a single scalar field $\phi(t, \vec{x})$ with a potential $V(\phi)$, governed by the action

$$S[\phi, g] = \int d^4x \sqrt{-g} \left[ \frac{1}{2} g^{\mu\nu} \partial_\mu \phi \, \partial_\nu \phi - V(\phi) \right].$$

Why is a scalar the default? Because of **isotropy**.

The cosmological principle says the Universe, on large scales, is homogeneous and isotropic — the same everywhere and in every direction. A scalar field $\phi(t)$ respects this trivially: it's just a number at each point in spacetime. It has no direction, no orientation, no internal structure that could pick out a preferred axis.

Its stress-energy tensor takes the perfect-fluid form automatically:

$$T^{\mu}{}_{\nu} = \text{diag}\left(-\rho(t),\; p(t),\; p(t),\; p(t)\right),$$

with

$$\rho = \frac{1}{2}\dot{\phi}^2 + V(\phi), \qquad p = \frac{1}{2}\dot{\phi}^2 - V(\phi).$$

When the field rolls slowly ($\dot{\phi}^2 \ll V(\phi)$), we get $p \approx -\rho$ — an equation of state close to $w = -1$, just like a cosmological constant, but now one that can evolve.

This is clean, minimal, and well-motivated. So why would anyone look further?

## Why Go Beyond Scalars?

Several reasons — some theoretical, some phenomenological:

**1. Scalars aren't the only fields in nature.** The Standard Model contains gauge fields (spin-1), fermions (spin-1/2), and the Higgs (spin-0). Gravity itself is a spin-2 field. If we're asking "what field could dark energy be?", restricting to scalars is restrictive. Nature uses the full toolkit of tensor fields, and there's no a priori reason dark energy shouldn't be a vector or something else.

**2. String theory produces higher-rank form fields naturally.** String theory doesn't just predict extra dimensions — it predicts an entire zoo of **$p$-form fields**: the Kalb-Ramond 2-form $B_{\mu\nu}$, various Ramond-Ramond form fields, and so on. These fields are as fundamental to the theory as the metric itself. If any of string theory's low-energy relics are cosmologically active, we need to understand their cosmological dynamics.

**3. Modified gravity and massive gravity lead to vector fields.** Theories of massive gravity naturally produce vector degrees of freedom (the Stückelberg fields). Generalized Proca theories — massive vector field theories with derivative self-interactions — have been developed as a systematic framework for vector dark energy. These are not exotic speculations; they are the most general healthy theories of a massive spin-1 field, paralleling what Horndeski theory does for scalars.

**4. Dark energy might have more structure than a scalar can capture.** If dark energy interacts with dark matter, or if it clusters differently than a cosmological constant, a richer field content could produce distinguishable observational signatures. More fields mean more perturbation degrees of freedom, which means potentially different predictions for the CMB, large-scale structure, or gravitational waves.

## What Is a $p$-Form, Physically?

Before jumping into specific theories, it helps to build intuition for what these objects are.

### 0-Forms: Scalars

A **0-form** is just a scalar field $\phi$. At every point in spacetime, it assigns a single number. Think of temperature: at every location, there's a value, and that value doesn't depend on which direction you're looking from.

### 1-Forms: Vectors

A **1-form** $A_\mu$ assigns, at each spacetime point, something that eats a direction and returns a number. Concretely, if you give it a small displacement $dx^\mu$, it returns $A_\mu dx^\mu$. The electromagnetic potential is the most familiar example. It has four components in 4D spacetime: one temporal ($A_0$) and three spatial ($A_i$).

Physically, a 1-form naturally describes a field that can point in a direction — and this is precisely what makes cosmology with vectors tricky. A vector pointing somewhere in space breaks isotropy.

### 2-Forms: Antisymmetric Tensors

A **2-form** $B_{\mu\nu}$ is an antisymmetric tensor: $B_{\mu\nu} = -B_{\nu\mu}$. At each point, it assigns a number to every *oriented plane* spanned by two directions. If you give it two small displacements $dx^\mu$ and $dy^\nu$, it returns $B_{\mu\nu} dx^\mu dy^\nu$.

Physically, think of it this way: a scalar measures intensity at a point, a vector measures flux through a line, and a 2-form measures flux through a surface. The electromagnetic field strength $F_{\mu\nu}$ is itself a 2-form (though it's the field strength of a 1-form, not an independent fundamental field). The Kalb-Ramond field $B_{\mu\nu}$ in string theory is a fundamental 2-form with its own dynamics.

In 4D spacetime, an antisymmetric $4 \times 4$ matrix has $\frac{4 \times 3}{2} = 6$ independent components — the same count as $F_{\mu\nu}$, which you may know splits into 3 electric and 3 magnetic components.

### The Pattern: Field Strengths

Each $p$-form comes with a **field strength** — a $(p+1)$-form built from its derivatives:

| Field | Type | Field Strength | Type |
|-------|------|----------------|------|
| $\phi$ | 0-form | $\partial_\mu \phi$ | 1-form |
| $A_\mu$ | 1-form | $F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$ | 2-form |
| $B_{\mu\nu}$ | 2-form | $H_{\mu\nu\rho} = \partial_\mu B_{\nu\rho} + \partial_\nu B_{\rho\mu} + \partial_\rho B_{\mu\nu}$ | 3-form |

The field strength is always constructed to be totally antisymmetric in all its indices. This antisymmetry is what makes the field strength **gauge-invariant** — symmetric combinations of derivatives ($\partial_\mu \partial_\nu = \partial_\nu \partial_\mu$) drop out automatically when contracted with something antisymmetric.

There is a beautiful mathematical structure hiding here. Each field strength is the **exterior derivative** of the corresponding $p$-form: $F = dA$, $H = dB$. And a central identity of differential geometry — $d^2 = 0$ — guarantees that the field strength of a field strength vanishes. For electromagnetism, this gives us the Bianchi identity $\partial_{[\mu} F_{\nu\rho]} = 0$, which encodes half of Maxwell's equations. For the 2-form, it gives us $\partial_{[\beta} H_{\alpha\mu\nu]} = 0$, which will play a crucial role later in the series.

## The Two Theories We'll Study

With this setup, we can now introduce the two specific dark energy models this series will analyze. Both come from a graduate cosmology course, and together they illustrate how different the cosmological behavior of a massive 1-form and a massless 2-form can be.

### Theory 1: The Massive Vector (Spin-1)

$$S[A, g] = \int d^4x \sqrt{-g} \left[ -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} - V(A_\mu A^\mu) \right],$$

where $F_{\mu\nu} = \nabla_\mu A_\nu - \nabla_\nu A_\mu$ is the usual field strength and $V(X)$ is a potential that depends on $X = A_\mu A^\mu$.

If you take $V(X) = \frac{1}{2} m^2 X$, this is the **Proca theory** — the standard theory of a massive spin-1 field. The general $V(X)$ allows for more interesting self-interactions while keeping the equations of motion second-order.

The crucial feature: the $V(A_\mu A^\mu)$ term **breaks gauge invariance**. In Maxwell's theory, you can shift $A_\mu \to A_\mu + \partial_\mu \theta$ without changing anything physical. But $A_\mu A^\mu$ is not invariant under this shift — it changes. Physically, this is what gives the field its mass, and it's directly analogous to how the Higgs mechanism gives mass to the W and Z bosons in the Standard Model. We will see in the next post that this broken gauge symmetry has a direct consequence: the field gains an extra degree of freedom — a longitudinal polarization — going from 2 (massless photon) to 3 (massive vector).

### Theory 2: The Massless 2-Form

$$S[B, g] = \int d^4x \sqrt{-g} \; f(X), \qquad X = -\frac{1}{12} H_{\mu\nu\rho} H^{\mu\nu\rho},$$

where $H_{\mu\nu\rho} = \partial_\mu B_{\nu\rho} + \partial_\nu B_{\rho\mu} + \partial_\rho B_{\mu\nu}$ is the field strength of the 2-form.

This theory **does** have a gauge symmetry:

$$B_{\mu\nu} \to B_{\mu\nu} + \partial_\mu \theta_\nu - \partial_\nu \theta_\mu,$$

for an arbitrary 1-form $\theta_\mu$. The antisymmetric combination ensures $B_{\mu\nu}$ remains antisymmetric after the transformation, and the field strength $H_{\mu\nu\rho}$ is invariant because the symmetric operators $\partial_\mu \partial_\nu$ vanish when contracted into the antisymmetric structure. There is even a **second layer** of gauge freedom: $\theta_\mu$ itself can be shifted by $\theta_\mu \to \theta_\mu + \partial_\mu \varphi$ without changing $B_{\mu\nu}$ at all. This "gauge symmetry of the gauge symmetry" is a hallmark of higher-form gauge theories and connects to a deep mathematical structure (the de Rham complex).

The function $f(X)$ is left arbitrary, giving a family of theories. When $f(X) = X$ (a linear function), the action reduces to the free massless 2-form theory, analogous to free Maxwell theory. General $f(X)$ introduces self-interactions, similar to how Born-Infeld electrodynamics generalizes Maxwell theory.

### What Makes These Interesting as Dark Energy?

Both theories face the same fundamental challenge: **the cosmological principle**.

For the massive vector, isotropy forces the spatial components to vanish — a nonzero $\vec{A}$ would pick out a direction in space. This is a severe constraint. It means the field strength vanishes identically on the background, and the theory reduces to an effective cosmological constant. We'll see that this constant is necessarily *negative*, ruling out accelerated expansion entirely. The massive vector, despite its richer structure, fails as dark energy.

The 2-form finds a more subtle escape. The field $B_{\mu\nu}$ itself vanishes under strict isotropy — just like the vector. But the cosmological principle only requires the **stress-energy tensor** to be isotropic, not the field itself. The 2-form can take a configuration where $B_{\mu\nu} \neq 0$ (and indeed depends on spatial coordinates), yet its stress-energy tensor is perfectly homogeneous and isotropic. Whether this leads to accelerated expansion depends on the choice of $f(X)$, and the conditions turn out to be nontrivial. The analysis will occupy Post 3.

## A Preview: Hodge Duality and the Punchline

There is a deep reason why the massless 2-form in 4D has only one propagating degree of freedom, and it's worth previewing here even though we won't prove it until Post 2.

In $D$-dimensional spacetime, a $p$-form and a $(D-2-p)$-form describe the same physics. This is **Hodge duality**: you can trade a $p$-form gauge field for a $(D-2-p)$-form gauge field by replacing the field strength with its Hodge dual, and the equations of motion of one become the Bianchi identity of the other.

In $D = 4$:

- A 0-form (scalar) is dual to a 2-form.
- A 1-form (vector) is dual to a 1-form (it's self-dual in this sense — the dual of the photon is another photon).

This means that **a massless 2-form in 4D is secretly a scalar field**. All the elaborate machinery of antisymmetric tensors, 3-form field strengths, and gauge symmetries ultimately describes a single scalar degree of freedom — the same kind of field we started with in quintessence.

This might sound like the whole exercise is circular. But it's not, for two reasons. First, while the free theories are equivalent, the *interactions* and *couplings to gravity* need not be the same in both descriptions. The function $f(X)$ for the 2-form maps to a different (and generally more complicated) scalar theory. Second, and more importantly for this series, the duality teaches us that the counting of degrees of freedom has to work out — and it provides a powerful consistency check on every calculation we'll do.

## Coming Up

In the next post, we'll dive into the guts of these two theories: gauge symmetry, degrees of freedom, equations of motion, and stress-energy tensors. We'll see exactly how gauge invariance removes unphysical degrees of freedom, what it means physically for a field equation to be a constraint rather than a dynamical equation, and why the massive vector has 3 propagating modes while the 2-form has only 1.

---

*Conventions used throughout this series: metric signature $(+,-,-,-)$, natural units $c = \hbar = 1$ unless otherwise stated. We use $\nabla_\mu$ for the covariant derivative and $\partial_\mu$ for the partial derivative, and we raise and lower indices with the metric $g_{\mu\nu}$.*
