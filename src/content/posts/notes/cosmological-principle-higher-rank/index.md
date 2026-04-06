---
title: "Dark Energy Beyond Scalars, Part III: The Cosmological Principle Meets Higher-Rank Fields"
published: 2026-04-08
description: "Applying the cosmological principle to massive vectors and massless 2-forms to see if they can drive the expansion of the Universe."
tags:
  - cosmology
  - physics
category: Notes
draft: false
---

*This is the third post in a series on vector and 2-form dark energy. In the [previous post](/posts/notes/gauge-symmetry-mass-dof/), we established the gauge structure, degree-of-freedom count, equations of motion, and stress-energy tensors for both theories. Now we place these fields on a cosmological background and ask: can they drive the expansion of the Universe?*

---

## The Cosmological Principle as a Filter

The cosmological principle — the statement that the Universe is homogeneous and isotropic on large scales — is an enormously powerful constraint. It dictates the geometry of spacetime (the FLRW metric) and restricts the matter content to perfect fluids. Any candidate for dark energy must be compatible with this principle.

For a scalar field, compatibility is automatic. A scalar is just a number at each point — it has no direction, no orientation, nothing that could break the spatial symmetries. But for fields with indices, the cosmological principle becomes a demanding filter. A vector can point somewhere. An antisymmetric tensor can single out a preferred plane. The question is: how much of each field survives the symmetry requirements?

The FLRW metric in our conventions is:

$$ds^2 = dt^2 - a(t)^2 \left[ \frac{dr^2}{1 - kr^2} + r^2 d\Omega^2 \right],$$

with $k = 0, \pm 1$ the spatial curvature. The spatial sections are maximally symmetric — invariant under all rotations and translations.

---

## The Massive Vector: Isotropy Kills the Dynamics

### Why Spatial Components Must Vanish

Consider the 1-form $A_\mu = (A_0, A_1, A_2, A_3)$ on the FLRW background. The three spatial components $A_i$ form a 3-vector under spatial rotations. Isotropy demands that the physics looks the same from every direction — but a nonzero 3-vector $\vec{A}$ would single out a preferred direction in space, just as a magnetic field pointing north picks out a direction in a room.

The only 3-vector invariant under all rotations is the zero vector. Therefore:

$$A_\mu = (A_0(t),\, 0,\, 0,\, 0).$$

Homogeneity further requires that $A_0$ depends only on time, not on spatial position. This is an extremely restrictive result: of the four components of $A_\mu$, three are forced to vanish by symmetry alone.

### The Field Strength Vanishes

With $A_\mu = (A_0(t), \vec{0})$, the field strength is:

$$F_{\mu\nu} = \nabla_\mu A_\nu - \nabla_\nu A_\mu.$$

The only potentially nonzero components are $F_{0i} = \nabla_0 A_i - \nabla_i A_0$. But $A_i = 0$ and $A_0$ depends only on time, so $\nabla_i A_0 = \partial_i A_0 = 0$. Therefore $F_{\mu\nu} = 0$ everywhere.

This is a disaster for the theory as a dynamical dark energy candidate. The kinetic term $F_{\mu\nu}F^{\mu\nu}$ — the part that describes propagation and dynamics — vanishes identically on the background. The field isn't doing anything; it's just sitting there.

### The Equations Collapse

With $F_{\mu\nu} = 0$, the equation of motion $\nabla_\alpha F^{\alpha\beta} = 2V_X A^\beta$ reduces to:

$$0 = 2V_X A^\beta.$$

We exclude the trivial solution $A_0 = 0$ (which removes the field entirely). The nontrivial option is:

$$V_X = 0.$$

This is a condition on the potential $V$: it must have a critical point at the background value of $X = A_\mu A^\mu = A_0^2$. The potential sits at a local extremum, with no gradient to push the field anywhere. The field is frozen.

### An Effective Cosmological Constant

With $F_{\mu\nu} = 0$ and $V_X = 0$, the stress-energy tensor becomes:

$$T_{\mu\nu} = \underbrace{F_{\mu\alpha}F^\alpha{}_\nu - \frac{1}{4}g_{\mu\nu}F_{\alpha\beta}F^{\alpha\beta}}_{= \, 0} + \underbrace{2V_X A_\mu A_\nu}_{= \, 0} - g_{\mu\nu}V(X) = -g_{\mu\nu}\, V_0,$$

where $V_0 \equiv V(A_0^2)$ is the value of the potential at the critical point. With one index raised:

$$T^\mu{}_\nu = -\delta^\mu_\nu\, V_0.$$

This is precisely the stress-energy tensor of a cosmological constant. The energy density and pressure are:

$$\rho = V_0, \qquad p = -V_0, \qquad w = \frac{p}{\rho} = -1.$$

Einstein's field equations then give the Friedmann equations:

$$H^2 \equiv \left(\frac{\dot{a}}{a}\right)^2 = \frac{8\pi G}{3}\, V_0, \qquad \frac{\ddot{a}}{a} = \frac{8\pi G}{3}\, V_0.$$

For a physically sensible cosmology ($H^2 > 0$), we need $V_0 > 0$. And since $\ddot{a} > 0$ when $V_0 > 0$, we do get accelerated expansion — but it's indistinguishable from a cosmological constant. The equation of state is exactly $w = -1$, constant in time, with no dynamics whatsoever.

### The Verdict

The massive vector, on a homogeneous and isotropic background, reduces to *nothing more than a cosmological constant*. The field sits at a critical point of its potential, the field strength vanishes, and the stress-energy tensor is proportional to the metric. The three propagating degrees of freedom we carefully counted in Post 2 are all perturbations — fluctuations around this static background. At the background level, the vector brings nothing that $\Lambda$ doesn't already provide.

This is disappointing, but instructive. It shows that the cosmological principle is a brutal filter on spin-1 fields: isotropy strips away exactly the components that would make the theory dynamically interesting.

---

## The Massless 2-Form: A More Interesting Story

### The Strict Isotropy Argument

For the 2-form $B_{\mu\nu}$, the strict isotropy analysis proceeds similarly. The six independent components decompose under spatial rotations into:

- **Three $B_{0i}$ components** — these form a spatial 3-vector, just like $A_i$ did. Isotropy kills them: $B_{0i} = 0$.
- **Three $B_{ij}$ components** — these are trickier. The components $B_{xy}$, $B_{xz}$, $B_{yz}$ transform as a **pseudovector** under rotations (related to a vector by the Levi-Civita symbol: $\tilde{B}^k = \frac{1}{2}\epsilon^{ijk}B_{ij}$). A nonzero pseudovector again picks out a preferred direction, so isotropy kills these too.

The conclusion seems terminal: **the only strictly isotropic 2-form is $B_{\mu\nu} = 0$**. One can verify this rigorously by computing the Lie derivatives of $B_{\mu\nu}$ with respect to the rotation and translation generators and demanding they vanish — every component is forced to zero.

If this were the end of the story, the 2-form would be no more interesting than the vector. But it isn't.

### A Crucial Distinction: Field Isotropy vs. Stress-Energy Isotropy

The cosmological principle requires that the geometry and the matter content of the Universe respect homogeneity and isotropy. But the matter content enters Einstein's equations through the **stress-energy tensor** $T_{\mu\nu}$, not through the field itself. What the Friedmann equations actually demand is:

$$T^\mu{}_\nu = \text{diag}(\rho(t),\, -p(t),\, -p(t),\, -p(t)).$$

This is the stress-energy tensor of a perfect fluid. The field $B_{\mu\nu}$ can be as anisotropic as it likes, as long as its stress-energy tensor takes this form.

This distinction — between the symmetry of the field and the symmetry of the stress-energy tensor — is subtle but crucial. Here's a physical analogy: imagine a room filled with randomly oriented bar magnets. Each magnet has a direction, breaking isotropy locally. But if the magnets are oriented randomly enough, with no net alignment, the *average* magnetic energy density and pressure are isotropic. The individual field configurations break the symmetry, but the macroscopic quantities that gravity cares about don't.

For the 2-form, something similar happens — except it's exact, not statistical.

### Finding the Isotropic Configuration

The 3-form field strength $H_{\mu\nu\rho}$ is totally antisymmetric and has $\binom{4}{3} = 4$ independent components in 4D:

$$H_{txy},\quad H_{txz},\quad H_{tyz},\quad H_{xyz}.$$

Now, the stress-energy tensor with one index raised is:

$$T^\mu{}_\nu = \delta^\mu_\nu \, f(X) + \frac{1}{2}f_X\, H^{\mu}{}_{\beta\rho}\, H_\nu{}^{\beta\rho}.$$

For this to be diagonal (as required by isotropy), all off-diagonal components must vanish. Working these out explicitly, one finds that the off-diagonal conditions are:

$$T^t{}_x \propto H_{tyz}\,H_{xyz}\,f_X = 0, \qquad T^t{}_y \propto H_{txz}\,H_{xyz}\,f_X = 0, \qquad \text{etc.}$$

Excluding the trivial case $f_X = 0$ (which gives trivial equations of motion), the solution is:

$$H_{txy} = 0, \qquad H_{txz} = 0, \qquad H_{tyz} = 0.$$

All temporal-spatial components of the field strength vanish, while $H_{xyz}$ is left unconstrained. The stress-energy tensor then becomes:

$$T^\mu{}_\nu = \text{diag}\left(f,\; -(f - 2Xf_X),\; -(f - 2Xf_X),\; -(f - 2Xf_X)\right),$$

which is precisely the perfect-fluid form with:

$$\rho = f(X), \qquad p = -f(X) + 2X f_X(X).$$

### The Bianchi Identity: Why $H_{xyz}$ Is Constant

We haven't yet determined $H_{xyz}$ as a function of time and space. This is where the **Bianchi identity** comes in — the condition $\partial_{[\beta}H_{\alpha\mu\nu]} = 0$ that we previewed at the end of Post 2.

In 4D spacetime, a totally antisymmetric object with four indices has only one independent component. The Bianchi identity $\partial_{[\beta}H_{\alpha\mu\nu]} = 0$ therefore gives just one equation. With only $H_{xyz} \neq 0$, the only nontrivial choice of indices is $\beta = t$, $\alpha = x$, $\mu = y$, $\nu = z$:

$$\partial_t H_{xyz} = 0.$$

The field strength is **independent of time**. But it must also be spatially homogeneous — if $H_{xyz}$ varied from place to place, the stress-energy tensor would inherit this inhomogeneity through $X$, violating the cosmological principle. Therefore:

$$H_{xyz} = h_0 = \text{constant}.$$

This is a beautiful result, and it has a deep mathematical origin. The field strength $H = dB$ is a closed 3-form ($dH = d^2B = 0$), and on the cosmological background, the Bianchi identity forces the only surviving component to be a constant. Physically, $h_0$ represents a **uniform flux** of the 3-form field strength filling all of space — the higher-dimensional analogue of a constant, uniform magnetic field.

### The Background Field Configuration

What does the 2-form $B_{\mu\nu}$ itself look like? From $H_{xyz} = h_0$ and the definition $H_{\mu\nu\rho} = \partial_\mu B_{\nu\rho} + \partial_\nu B_{\rho\mu} + \partial_\rho B_{\mu\nu}$, one can verify that:

$$B_{yz} = \frac{h_0}{3}\, x, \qquad B_{zx} = \frac{h_0}{3}\, y, \qquad B_{xy} = \frac{h_0}{3}\, z,$$

is a solution. (One can check: $\partial_x B_{yz} + \partial_y B_{zx} + \partial_z B_{xy} = h_0/3 + h_0/3 + h_0/3 = h_0$. ✓)

This field configuration **depends on the spatial coordinates** — and yet the stress-energy tensor is perfectly homogeneous. This seems paradoxical, but it's exactly the point: the cosmological principle constrains $T_{\mu\nu}$, not $B_{\mu\nu}$. The field configuration is anisotropic and inhomogeneous, but it produces an energy-momentum distribution that is uniform and direction-independent.

There is an even deeper reason this works: the $B$-field configuration above is not unique. It is defined only up to gauge transformations $B_{\mu\nu} \to B_{\mu\nu} + \partial_\mu \theta_\nu - \partial_\nu \theta_\mu$. Different gauge choices give different-looking $B_{\mu\nu}$ configurations that all produce the same $H_{\mu\nu\rho}$ and hence the same physics. The physical content is entirely in the constant $h_0$ — the gauge-invariant field strength.

The temporal-spatial components $B_{0i}$ also turn out to be nonzero in the full solution. They take the form $B_{tx} = B_{ty} = B_{tz} = b(t)\cdot(\text{spatial coordinates})$, where $b(t)$ is an arbitrary function. But these contribute $H_{tij} = 0$, so they don't affect any physical quantity. They are pure gauge.

---

## Background Equations of Motion

### The Massive Vector

The Friedmann equations with the massive vector as the sole source are:

$$H^2 = \frac{8\pi G}{3}\, V_0, \qquad \frac{\ddot{a}}{a} = \frac{8\pi G}{3}\, V_0,$$

where $V_0 = V(A_0^2)$ at the critical point $V_X = 0$. These are the Friedmann equations with an effective cosmological constant $\Lambda_{\text{eff}} = 8\pi G\, V_0$.

The solution is de Sitter space (for $V_0 > 0$, $k = 0$):

$$a(t) \propto e^{Ht}, \qquad H = \sqrt{\frac{8\pi G}{3}\, V_0} = \text{const}.$$

Nothing evolves. The Hubble rate is constant, the equation of state is $w = -1$, and there is no way to observationally distinguish this from a bare cosmological constant.

### The Massless 2-Form

The 2-form is more interesting. With $H_{xyz} = h_0$ and the FLRW metric, the scalar $X$ is:

$$X = -\frac{1}{12}H_{\mu\nu\rho}H^{\mu\nu\rho} = \frac{h_0^2}{2\,a(t)^6}.$$

This is **time-dependent** — as the Universe expands, $X$ decreases like $a^{-6}$. The $a^{-6}$ scaling comes from the three inverse metrics needed to raise the three spatial indices of $H_{xyz}$, each contributing a factor of $a^{-2}$.

The energy density and pressure are:

$$\rho = f(X), \qquad p = -f(X) + 2Xf_X(X).$$

These are both time-dependent through $X(t)$. The equation of state parameter is:

$$w = \frac{p}{\rho} = -1 + \frac{2Xf_X}{f}.$$

For the free theory $f(X) = X$, this gives $w = -1 + 2 = 1$ — stiff matter! This makes sense: stiff matter has $\rho \propto a^{-6}$, and indeed $X \propto a^{-6}$. A free massless 2-form behaves like a fluid with the stiffest possible equation of state.

For more general $f(X)$, the equation of state can take a range of values and — crucially — it **evolves in time**, since $X$ changes as the Universe expands. This is genuine dynamical dark energy, unlike the massive vector.

The Friedmann equations are:

$$H^2 = \frac{8\pi G}{3}\, f(X), \qquad \frac{\ddot{a}}{a} = \frac{8\pi G}{3}\left[ f(X) - 3Xf_X(X) \right].$$

The first equation requires $f(X) > 0$ for a sensible cosmology ($H^2 > 0$). The second equation determines whether the expansion accelerates.

### Aside: The Trivial Solution

For completeness: $B_{\mu\nu} = 0$ (the strictly isotropic solution) gives $X = 0$ and:

$$\rho = f(0), \qquad p = -f(0), \qquad w = -1.$$

This is a cosmological constant, just as with the massive vector. The interesting cosmology requires $h_0 \neq 0$.

---

## Conditions for Accelerated Expansion

### The Massive Vector

The condition $\ddot{a} > 0$ requires $V_0 > 0$. That's it. If the potential has a critical point with a positive value, the Universe accelerates. But $w = -1$ exactly, with no time evolution — observationally indistinguishable from $\Lambda$.

### The Massless 2-Form

Accelerated expansion requires $\ddot{a} > 0$, which from the second Friedmann equation means:

$$f(X) - 3Xf_X(X) > 0, \qquad \text{i.e.,} \qquad f(X) > 3Xf_X(X).$$

Combined with the first Friedmann equation's requirement $f(X) > 0$, and noting that $X > 0$, we can analyze this by cases.

**Case 1: $f > 0$ and $f_X < 0$.**
Then $3Xf_X < 0 < f$, so $f > 3Xf_X$ is **automatically satisfied**. Acceleration is guaranteed whenever the Lagrangian density is positive and decreasing with $X$. The equation of state in this case is $w = -1 + 2Xf_X/f < -1$ — this is **phantom dark energy**, with $w$ more negative than a cosmological constant.

**Case 2: $f > 0$ and $f_X > 0$.**
Now $3Xf_X > 0$. The condition $f > 3Xf_X$ becomes:

$$f_X < \frac{f}{3X}.$$

The function must grow *slowly enough* with $X$. More precisely, this can be rewritten as:

$$\frac{d}{dX}\ln f(X) < \frac{1}{3X},$$

which means $f$ must grow slower than $X^{1/3}$. The free theory $f = X$ violates this bound badly — and indeed gives $w = +1$ (stiff matter), the opposite of acceleration.

**What determines whether we get acceleration?**

The key quantity is the equation of state:

$$w = -1 + \frac{2Xf_X}{f}.$$

Acceleration requires $w < -1/3$, i.e.:

$$\frac{2Xf_X}{f} < \frac{2}{3}, \qquad \text{i.e.,} \qquad \frac{Xf_X}{f} < \frac{1}{3}.$$

This has a clean interpretation: the **logarithmic slope** of $f$ with respect to $X$ must be less than $1/3$. If $f(X) \propto X^n$, then $Xf_X/f = n$, and the condition becomes $n < 1/3$.

This makes physical sense:
- $n < 0$: $f_X < 0$, giving $w < -1$ (phantom dark energy). Automatic acceleration, as Case 1 showed.
- $n = 0$: $f = \text{const}$, giving $w = -1$ (cosmological constant). Maximally accelerating.
- $n = 1/3$: marginal case, $w = -1/3$. The boundary of acceleration.
- $n = 1$: free theory, $w = +1$ (stiff matter). No acceleration.

So the 2-form gives accelerated expansion when the function $f(X)$ is **slowly varying** — close to a constant, but with a gentle dependence on $X$ that allows the equation of state to evolve. As the Universe expands and $X \to 0$, the behavior depends on $f$ near the origin. If $f(X) \to f(0) > 0$ as $X \to 0$ (i.e., $f$ approaches a constant), then $w \to -1$ at late times — the 2-form naturally relaxes toward a cosmological-constant-like state.

---

## The Physical Contrast

Let's step back and appreciate what we've found.

**The massive vector** is completely defeated by the cosmological principle at the background level. Isotropy forces $\vec{A} = 0$, which kills the field strength, which kills the dynamics. The field reduces to a frozen potential energy — a cosmological constant. All three of its propagating degrees of freedom are purely perturbative; they don't participate in the background evolution at all.

**The massless 2-form** finds a loophole. The field itself can't be isotropic, but its stress-energy tensor can. A constant field-strength flux $H_{xyz} = h_0$ fills space, producing a uniform energy density and isotropic pressure. Because $X \propto a^{-6}$ evolves as the Universe expands, the equation of state is time-dependent, making this a genuinely dynamical dark energy model. Acceleration occurs either automatically (when $f_X < 0$, giving phantom dark energy with $w < -1$) or conditionally (when $f_X > 0$, requiring the logarithmic slope of $f$ to be less than $1/3$).

The deep reason for this contrast is the **rank** of the field. A 1-form has a 3-vector as its spatial part, and no nonzero 3-vector can be isotropic. A 2-form's spatial part is a pseudovector — also not isotropic. But the 2-form has a 3-form field strength, and in 3 spatial dimensions, a totally antisymmetric 3-index object has just **one** independent component: $H_{xyz}$. A single number can't pick out a direction. It's isotropic precisely because it fills all of space uniformly, like a constant scalar.

This is Hodge duality in action. The spatial part of the 3-form field strength $H_{ijk}$ is dual to a scalar: $H_{ijk} = h_0\, \epsilon_{ijk}$. The 2-form's field strength is secretly a number — and numbers respect isotropy.

---

## Coming Up

We now know what happens at the background level: the massive vector is a cosmological constant in disguise, while the massless 2-form supports genuinely dynamical dark energy. But cosmology isn't just backgrounds — the Universe has structure. Galaxies, the CMB, gravitational waves — all of these arise from **perturbations** around the homogeneous background.

In the next and final post, we'll decompose the perturbations of both fields into scalar, vector, and tensor sectors, determine which perturbations propagate, analyze their gauge transformations, and ask whether these theories make distinguishable predictions for observations.

---

*Conventions: metric signature $(+,-,-,-)$, natural units $c = \hbar = 1$. Friedmann equations use the standard form $H^2 = 8\pi G\rho/3$. The constant $h_0$ denotes the value of the field strength $H_{xyz}$ on the background.*