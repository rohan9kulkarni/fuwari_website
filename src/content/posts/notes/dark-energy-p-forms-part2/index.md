---
title: "Dark Energy Beyond Scalars, Part II: Gauge Symmetry, Mass, and Degrees of Freedom"
published: 2025-12-20
description: A deep dive into gauge symmetry, equations of motion, constraints, and degrees of freedom for massive vectors and massless 2-forms.
tags:
  - cosmology
  - physics
category: Notes
draft: false
---

*This is the second post in a series on vector and 2-form dark energy. In the [previous post](/posts/notes/dark-energy-p-forms/), we motivated why cosmologists look beyond scalar fields and introduced the two theories we'll study: a massive 1-form and a massless 2-form. Now we get into the physics of these theories — what their symmetries are, how many degrees of freedom they propagate, and what their equations of motion and stress-energy tensors look like.*

---

## What Gauge Symmetry Really Means

Before computing anything, it's worth being precise about what gauge symmetry *is* and why it matters for counting degrees of freedom.

A **gauge symmetry** is a transformation you can apply to the fields that changes their mathematical description but leaves all physical observables unchanged. It means your description has **redundancy** — multiple field configurations correspond to the same physical state.

The most familiar example is electromagnetism. The 4-potential $A_\mu$ has four components, but the physics — electric and magnetic fields, forces on charges, radiation — is unchanged if you shift

$$A_\mu \to A_\mu + \partial_\mu \theta,$$

for any scalar function $\theta(x)$. This means that out of the four components of $A_\mu$, one is "pure gauge" — you can always set it to whatever you like by choosing $\theta$ appropriately. It carries no physical information.

But gauge symmetry alone doesn't determine the full count of physical degrees of freedom. You also have to check whether the equations of motion contain **constraints** — equations with no second-order time derivatives. A constraint doesn't tell you how a field *evolves*; it tells you what the field *must be*, given the current state of everything else. Gauss's law, $\nabla \cdot \vec{E} = \rho$, is the prototype: it's not an evolution equation for $\vec{E}$, it's an instantaneous relationship between the electric field and the charge distribution.

The general counting formula is:

$$\text{propagating DOFs} = \text{field components} - \text{gauge freedoms} - \text{constraints}.$$

Each gauge freedom removes one component (you can set it to zero by a gauge choice), and each independent constraint removes another (it's determined by the remaining fields). Let's now apply this to our two theories.

---

## Theory 1: The Massive Vector

### Gauge Symmetry (or Lack Thereof)

Recall the action:

$$S[A, g] = \int d^4x \sqrt{-g} \left[ -\frac{1}{4} F_{\mu\nu} F^{\mu\nu} - V(A_\mu A^\mu) \right].$$

Under the gauge transformation $A_\mu \to A_\mu + \nabla_\mu \theta$, the kinetic term $F_{\mu\nu}F^{\mu\nu}$ is invariant — the field strength $F_{\mu\nu} = \nabla_\mu A_\nu - \nabla_\nu A_\mu$ doesn't change, for the same reason as in electromagnetism. But the potential term $V(A_\mu A^\mu)$ is *not* invariant. The contraction $A_\mu A^\mu$ changes when you shift $A_\mu$, and since $V$ depends on this contraction, the action changes.

This is not a technicality — it's the **defining feature** of a massive vector theory. In electromagnetism, the gauge symmetry is what keeps the photon massless. Breaking it is what gives the field a mass. The simplest case, $V(X) = \frac{1}{2}m^2 X$, adds the mass term $\frac{1}{2}m^2 A_\mu A^\mu$ to the Lagrangian, which is exactly the Proca mass term.

There is a close analogy with the Higgs mechanism in particle physics. The W and Z bosons are massive vector fields. They start life as massless gauge fields (with 2 DOFs each, like the photon), but the Higgs field breaks the gauge symmetry spontaneously, giving them mass and a third — longitudinal — polarization. In our theory, the potential $V(A_\mu A^\mu)$ breaks the gauge symmetry explicitly rather than spontaneously, but the physical consequence is the same: an extra degree of freedom appears.

### Equations of Motion

To find the equations of motion, we vary the action with respect to $A_\mu$ while holding the metric fixed. Writing $X = A_\mu A^\mu$ and $V_X = dV/dX$, the variation gives:

$$\delta_A S = \int d^4x \sqrt{-g} \left[ \nabla_\alpha F^{\alpha\beta} - 2 V_X A^\beta \right] \delta A_\beta.$$

The key steps are: (i) varying the kinetic term produces $F^{\mu\nu} \nabla_{[\mu} \delta A_{\nu]}$, (ii) integration by parts moves the derivative onto $F^{\mu\nu}$, and (iii) the metric compatibility $\nabla_\alpha g_{\mu\nu} = 0$ lets us raise indices freely. Setting the variation to zero for arbitrary $\delta A_\beta$:

$$\boxed{\nabla_\alpha F^{\alpha\beta} = 2 V_X A^\beta.}$$

This is the **generalized Proca equation**. For $V(X) = \frac{1}{2}m^2 X$, it reduces to $\nabla_\alpha F^{\alpha\beta} = m^2 A^\beta$, the standard Proca equation.

Compare this with the Maxwell equation $\nabla_\alpha F^{\alpha\beta} = 0$ (in vacuum). The right-hand side is what's new — it acts as a source term generated by the field itself, proportional to $A^\beta$. This self-sourcing is the hallmark of a massive field.

### The Constraint: Where the Missing DOF Goes

Now we count degrees of freedom. Set $\beta = 0$ in the equation of motion and expand:

$$\nabla_\alpha F^{\alpha 0} = 2 V_X A^0.$$

The $\alpha = 0$ term vanishes by antisymmetry ($F^{00} = 0$), leaving only spatial contributions:

$$\nabla_i F^{i0} = 2 V_X A^0.$$

Now here is the critical point. Expand $F^{i0}$: it involves $\nabla^i A^0 - \nabla^0 A^i$. When you take $\nabla_i$ of this, you get terms involving spatial derivatives of $A^0$ and *first*-order time derivatives of $A^i$. There are no second-order time derivatives anywhere in this equation.

This means the $\beta = 0$ equation is **not a dynamical equation** — it's a **constraint**. It determines $A^0$ in terms of the spatial components $A^i$ and their first time derivatives, just like Gauss's law determines the longitudinal part of the electric field in terms of the charge distribution. $A^0$ is not an independent dynamical variable; it's enslaved to the spatial components.

The counting:

$$\underbrace{4}_{\text{components of } A_\mu} - \underbrace{0}_{\text{gauge freedoms}} - \underbrace{1}_{\text{constraint}} = 3 \text{ propagating DOFs.}$$

### Physical Meaning of the Three Modes

What *are* these three degrees of freedom? To build intuition, consider a massive vector field in flat spacetime with a plane wave solution $A_\mu \propto \epsilon_\mu \, e^{ik \cdot x}$, where $\epsilon_\mu$ is the polarization vector. For a massless photon, gauge symmetry and the constraint together restrict you to **two transverse polarizations** — the electric field oscillates perpendicular to the direction of propagation.

For a massive field, the gauge symmetry is gone. You still have the two transverse polarizations, but now there's a third: the **longitudinal polarization**, where the field oscillates *along* the direction of propagation. This mode exists because the field has a rest frame — you can Lorentz-boost to a frame where the massive particle is at rest, and there the three polarizations correspond to the three spatial directions. A massless particle has no rest frame (it travels at the speed of light), which is why it can't support a longitudinal mode.

In our cosmological context, we'll see that all three modes — two transverse vector perturbations $\delta A_i^T$ and one longitudinal scalar perturbation $A$ — propagate on top of the cosmological background.

### Stress-Energy Tensor

The stress-energy tensor comes from varying the action with respect to the metric:

$$T_{\mu\nu} = -\frac{2}{\sqrt{-g}} \frac{\delta S}{\delta g^{\mu\nu}}.$$

The computation has two pieces. The variation of $\sqrt{-g}$ produces the familiar $-\frac{1}{2}g_{\mu\nu} \mathcal{L}$ term. The variation of the kinetic term, after careful contraction of indices, gives terms involving $F_{\mu\alpha}F^{\alpha}{}_{\nu}$. The result is:

$$\boxed{T_{\mu\nu} = F_{\mu\alpha} F^{\alpha}{}_{\nu} - \frac{1}{4}g_{\mu\nu} F_{\alpha\beta}F^{\alpha\beta} + 2V_X A_\mu A_\nu - g_{\mu\nu} V(X).}$$

The first two terms are identical to the electromagnetic stress-energy tensor. The last two terms are the contribution from the potential — they vanish in Maxwell's theory, where $V = 0$.

A useful sanity check: for $V = 0$, the trace $T^\mu{}_\mu = 0$ — the electromagnetic stress-energy tensor is traceless, as it must be for a conformal (massless) theory. With $V \neq 0$, the trace is nonzero, reflecting the fact that a massive theory has an intrinsic scale and breaks conformal symmetry.

---

## Theory 2: The Massless 2-Form

### Gauge Symmetry

The action:

$$S[B, g] = \int d^4x \sqrt{-g} \; f(X), \qquad X = -\frac{1}{12} H_{\mu\nu\rho} H^{\mu\nu\rho}.$$

Under the transformation

$$B_{\mu\nu} \to B_{\mu\nu} + \partial_\mu \theta_\nu - \partial_\nu \theta_\mu,$$

the field strength $H_{\mu\nu\rho}$ is invariant. The mechanism is exactly the same as for electromagnetism, one level up. The added term $\partial_\mu \theta_\nu - \partial_\nu \theta_\mu$ contributes terms like $\partial_\rho(\partial_\mu \theta_\nu - \partial_\nu \theta_\mu)$ to $H_{\rho\mu\nu}$. Since $H$ is totally antisymmetric while $\partial_\rho \partial_\mu$ is symmetric, these contributions vanish identically.

But there's a subtlety: the gauge parameter $\theta_\mu$ has its own redundancy. Two different gauge parameters can produce the *same* transformation of $B_{\mu\nu}$. Specifically, shifting

$$\theta_\mu \to \theta_\mu + \partial_\mu \varphi$$

doesn't change $\partial_\mu \theta_\nu - \partial_\nu \theta_\mu$ at all (again because $\partial_\mu \partial_\nu \varphi$ is symmetric). This is a **gauge symmetry of the gauge symmetry** — sometimes called a **reducible gauge symmetry** in the literature.

Why does this matter? Because it affects the DOF counting. Naively, the gauge parameter $\theta_\mu$ has 4 components, so you might think you can gauge away 4 of the 6 components of $B_{\mu\nu}$. But the residual freedom $\varphi$ means that one of those 4 gauge transformations is redundant — it doesn't actually change anything. So the effective gauge freedom is $4 - 1 = 3$.

This structure generalizes. For $p$-form gauge fields in $D$ dimensions, there is a tower of gauge symmetries: the $(p-1)$-form gauge parameter has its own $(p-2)$-form gauge parameter, and so on, all the way down. This tower is the **de Rham complex** of differential forms, and its structure determines the physical content of the theory. For our 2-form, the tower has just two levels: $\varphi \to \theta_\mu \to B_{\mu\nu}$.

### Equations of Motion

The variation with respect to $B_{\mu\nu}$ proceeds similarly to the vector case. Writing $f_X = df/dX$:

$$\delta_B S = \int d^4x \sqrt{-g} \left[ -\frac{1}{6} H^{\alpha\beta\rho} f_X \left( \nabla_\alpha \delta B_{\beta\rho} + \nabla_\beta \delta B_{\rho\alpha} + \nabla_\rho \delta B_{\alpha\beta} \right) \right].$$

The total antisymmetry of $H^{\alpha\beta\rho}$ means the three terms in the bracket are all equal (they just relabel dummy indices), giving a factor of 3:

$$\delta_B S = -\frac{1}{2} \int d^4x \sqrt{-g} \; H^{\alpha\beta\rho} f_X \, \nabla_\alpha \delta B_{\beta\rho}.$$

Integration by parts moves the derivative off $\delta B_{\beta\rho}$, using the metric-compatibility identity $\nabla_\alpha \sqrt{-g} = 0$:

$$\delta_B S = \frac{1}{2} \int d^4x \sqrt{-g} \; \nabla_\alpha \left( H^{\alpha\beta\rho} f_X \right) \delta B_{\beta\rho}.$$

Setting this to zero:

$$\boxed{\nabla_\alpha \left( H^{\alpha\mu\nu} f_X \right) = 0.}$$

This is the generalized equation of motion for the massless 2-form. For the free theory $f(X) = X$, it reduces to $\nabla_\alpha H^{\alpha\mu\nu} = 0$, which is the direct analogue of the vacuum Maxwell equation $\nabla_\alpha F^{\alpha\mu} = 0$.

Notice the structural parallel: Maxwell's equation says the divergence of $F$ vanishes; the 2-form equation says the divergence of $Hf_X$ vanishes. The $f_X$ factor encodes the nonlinearity from the general $f(X)$ action — it's the analogue of the nonlinear dielectric function in Born-Infeld electrodynamics.

### Counting Degrees of Freedom

This is where the 2-form theory gets interesting. Let's go step by step.

**Step 1: Raw components.** The antisymmetric $B_{\mu\nu}$ has $\frac{4 \times 3}{2} = 6$ independent components.

**Step 2: Gauge freedom.** The gauge parameter $\theta_\mu$ has 4 components, but the residual symmetry $\theta_\mu \to \theta_\mu + \partial_\mu \varphi$ means one of those is redundant. Effective gauge freedom: $4 - 1 = 3$. So we can gauge-fix 3 of the 6 components, leaving 3 potentially physical components.

**Step 3: Constraints.** The equations of motion $\nabla_\alpha(H^{\alpha\mu\nu} f_X) = 0$ contain constraint equations — equations with at most first-order time derivatives. Due to the antisymmetry of $H^{\alpha\mu\nu}$, only the components $B_{xy}$, $B_{xz}$, $B_{yz}$ (the purely spatial ones) can appear with second-order time derivatives. The remaining equations are constraints.

How many independent constraints are there? There are three constraint equations, but only two are independent — the third is automatically satisfied if the first two hold. (This is analogous to how, in electromagnetism, the time derivative of Gauss's law is automatically satisfied by the other Maxwell equations — it's a consequence of the Bianchi identity.)

**Step 4: Final count.**

$$6 - 3 - 2 = 1 \text{ propagating degree of freedom.}$$

This is exactly what Hodge duality predicts: a massless 2-form in 4D is dual to a scalar, and a scalar has 1 DOF.

### The Constraint Structure in Physical Terms

It's worth pausing on what the constraints mean physically. In electromagnetism, the 4-potential $A_\mu$ has 4 components. Gauge symmetry removes 1, the constraint (Gauss's law) removes 1, leaving 2 propagating DOFs — the two photon polarizations. The constraint tells you that the longitudinal electric field isn't free to do what it wants; it's fixed by the charge distribution.

For the 2-form, the situation is more dramatic. Of the 6 components, gauge freedom eats 3 and constraints eat 2, leaving just 1. The constraints are telling you that almost all of the apparent richness of the 2-form field — six components, surfaces in every orientation — is either gauge redundancy or instantaneously determined. Only one degree of freedom actually propagates as a wave.

This is why Hodge duality is so powerful as a consistency check. If you go through the constraint analysis and get anything other than 1, you've made a mistake. The mathematics of differential forms guarantees the answer before you compute a single equation of motion.

### Stress-Energy Tensor

Varying the action with respect to $g^{\mu\nu}$ requires the identity $\delta_g \sqrt{-g} = -\frac{1}{2}\sqrt{-g}\, g_{\mu\nu}\, \delta g^{\mu\nu}$ and careful handling of the three inverse metrics needed to form $X = -\frac{1}{12}g^{\alpha\kappa}g^{\beta\sigma}g^{\rho\lambda}H_{\alpha\beta\rho}H_{\kappa\sigma\lambda}$. Each metric contributes a term under variation, but by relabeling dummy indices all three terms turn out to be identical (a factor of 3 that cancels the $1/12$ normalization, leaving $1/4$). The result:

$$\boxed{T_{\mu\nu} = g_{\mu\nu}\, f(X) + \frac{1}{2} f_X(X)\, g^{\beta\sigma} g^{\rho\lambda} H_{\mu\beta\rho}\, H_{\nu\sigma\lambda}.}$$

With one index raised:

$$T^{\mu}{}_{\nu} = \delta^{\mu}_{\nu}\, f(X) + \frac{1}{2} f_X(X)\, g^{\beta\sigma} g^{\rho\lambda} g^{\kappa\nu} H_{\mu\beta\rho}\, H_{\kappa\sigma\lambda}.$$

Compare this with the vector stress-energy tensor. Both have a "potential" piece proportional to $g_{\mu\nu}$ and a "kinetic" piece built from contractions of field strengths. But there's an important structural difference: the vector has the Maxwell stress-energy tensor (which is traceless) plus potential corrections, while the 2-form has a single $f(X)$ term that plays both roles — since $f$ is a general function, the split between kinetic and potential energy is not sharp.

---

## Side by Side

Let's summarize the two theories:

| | Massive 1-Form | Massless 2-Form |
|---|---|---|
| **Field** | $A_\mu$ (4 components) | $B_{\mu\nu}$ (6 components) |
| **Field strength** | $F_{\mu\nu} = \nabla_\mu A_\nu - \nabla_\nu A_\mu$ | $H_{\mu\nu\rho} = \partial_\mu B_{\nu\rho} + \text{cyclic}$ |
| **Gauge symmetry** | None (broken by $V$) | $B_{\mu\nu} \to B_{\mu\nu} + 2\partial_{[\mu}\theta_{\nu]}$ |
| **Residual gauge** | — | $\theta_\mu \to \theta_\mu + \partial_\mu \varphi$ |
| **Gauge freedoms** | 0 | 3 (= 4 − 1) |
| **Constraints** | 1 | 2 |
| **Propagating DOFs** | 3 | 1 |
| **EOM** | $\nabla_\alpha F^{\alpha\beta} = 2V_X A^\beta$ | $\nabla_\alpha(H^{\alpha\mu\nu} f_X) = 0$ |
| **Dual description** | No simple dual | Equivalent to a scalar |

The massive vector has *more* dynamical content than the massless 2-form, despite the 2-form having more raw components. This is entirely due to the gauge symmetry. The 2-form's gauge freedom, together with its constraints, strips away five of the six components, leaving behind a single propagating scalar hidden inside an antisymmetric tensor. The massive vector, with no gauge symmetry to protect it, keeps three of its four components as dynamical fields.

---

## A Note on the Bianchi Identity

Both theories have a Bianchi identity, and it's worth mentioning because it plays a crucial role in the next post.

For the 1-form, the identity is

$$\nabla_{[\mu} F_{\nu\rho]} = 0,$$

which follows from $F = dA$ and $d^2 = 0$. In 4D, this is equivalent to $\nabla_\mu \tilde{F}^{\mu} = 0$, where $\tilde{F}^\mu = \frac{1}{2}\epsilon^{\mu\nu\rho\sigma}F_{\rho\sigma}$ is the Hodge dual. In electromagnetism, this encodes the two homogeneous Maxwell equations: $\nabla \cdot \vec{B} = 0$ and $\nabla \times \vec{E} + \partial_t \vec{B} = 0$.

For the 2-form, the identity is

$$\partial_{[\beta} H_{\alpha\mu\nu]} = 0,$$

which follows from $H = dB$ and $d^2 = 0$. In 4D this is a single equation (since a totally antisymmetric 4-index object has only one independent component in 4 dimensions). When we specialize to the cosmological background, this identity will force the only surviving component of $H$ to be constant in time — a constraint that profoundly shapes the background dynamics.

---

## Coming Up

We now have the full machinery: gauge symmetry, DOF counting, equations of motion, and stress-energy tensors for both theories. In the next post, we put these theories to work in cosmology. We'll impose the cosmological principle — homogeneity and isotropy — and discover that the massive vector and massless 2-form respond to it in fundamentally different ways. The vector's spatial components are killed outright, leaving behind only a (negative) cosmological constant. The 2-form finds a more creative solution, threading a constant flux through space while keeping its stress-energy tensor perfectly isotropic. Whether either theory can actually drive accelerated expansion is the question Post 3 will answer.

---

*Conventions: metric signature $(+,-,-,-)$, natural units $c = \hbar = 1$. We write $V_X = dV/dX$ and $f_X = df/dX$ for derivatives of the potential and the function $f$, respectively.*
