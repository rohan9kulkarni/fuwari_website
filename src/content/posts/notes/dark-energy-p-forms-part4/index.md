---
title: "Dark Energy Beyond Scalars, Part IV: Perturbations, Gauge Invariance, and What Propagates"
published: 2025-12-23
description: Decomposing the fluctuations of massive vectors and massless 2-forms to determine their physical degrees of freedom and observational signatures.
tags:
  - cosmology
  - physics
category: Notes
draft: false
---

*This is the fourth and final post in a series on vector and 2-form dark energy. In the [previous post](/posts/notes/dark-energy-p-forms-part3/), we derived the background cosmology and found that the massive vector reduces to a cosmological constant, while the massless 2-form supports genuinely dynamical dark energy. Now we move beyond the background: we perturb both theories, decompose the fluctuations into scalar, vector, and tensor sectors, and determine which perturbations carry physical, propagating degrees of freedom.*

---

## Why Perturbations Matter

The background cosmology tells us about the average expansion of the Universe — the Hubble rate, the equation of state, whether the expansion accelerates. But the Universe isn't perfectly smooth. Galaxies, the cosmic microwave background (CMB) anisotropies, large-scale structure — all of these arise from small fluctuations around the homogeneous background.

If two dark energy models produce the same background expansion history (the same $H(t)$ and $w(t)$), they might still be distinguishable through their **perturbations**. Different fields have different numbers of propagating degrees of freedom, different sound speeds, different coupling structures to gravity. These differences show up in the CMB power spectrum, the matter power spectrum, and the gravitational wave background.

So the question isn't just "does the theory accelerate?" — it's "what fluctuations does the theory predict, and can we see them?"

---

## The SVT Decomposition: A Brief Review

Before decomposing our fields, let's recall the standard scalar-vector-tensor (SVT) decomposition of metric perturbations. On an FLRW background, any symmetric tensor perturbation $\delta g_{\mu\nu}$ can be split into pieces that transform independently under spatial rotations:

**Scalar perturbations** ($\Phi$, $B$, $\Psi$, $E$): These are constructed from scalar functions and their derivatives. They describe density fluctuations, gravitational potentials, and the like. There are four scalar perturbation variables in the metric, but not all are physical — gauge freedom and constraints reduce the count.

**Vector perturbations** ($B_i^T$, $E_i^T$): These are transverse 3-vectors ($\partial^i B_i^T = 0$, etc.), describing rotational modes. Each transverse vector in 3D has 2 independent components. Vector perturbations typically decay in an expanding universe, which is why the observed Universe has negligible vorticity.

**Tensor perturbations** ($h_{ij}^{TT}$): These are transverse and traceless, with 2 independent components — the two polarizations of gravitational waves.

The power of the SVT decomposition is that, at linear order, these three sectors **decouple**. Scalar perturbations don't talk to tensor perturbations, and vice versa. This lets us analyze each sector independently.

The metric perturbations in detail:

$$\delta g_{00} = 2\Phi, \qquad \delta g_{0i} = a(\partial_i B + B_i^T),$$

$$\delta g_{ij} = a^2\!\left[-2\Psi\,\delta_{ij} + 2\!\left(\partial_i\partial_j - \tfrac{1}{3}\delta_{ij}\nabla^2\right)\!E + 2\partial_{(i}E_{j)}^T + 2h_{ij}^{TT}\right].$$

Of the 10 metric perturbation variables (4 scalar, 4 vector, 2 tensor), not all are physical. In pure GR with a perfect fluid, 2 scalars are removed by gauge freedom and 2 by constraints, leaving 0 propagating scalar DOFs in the metric. Both vector components are non-propagating. Only the 2 tensor DOFs (gravitational waves) propagate in the metric sector. The dark energy field contributes additional perturbation variables, some of which *do* propagate.

---

## The Massive Vector: Perturbation Decomposition

### Decomposing $\delta A_\mu$

The perturbation of the 1-form decomposes as:

$$\delta A_\mu = \left(\delta A_0,\; \partial_i \mathcal{A} + \delta A_i^T\right),$$

where $\delta A_0$ and $\mathcal{A}$ are scalar perturbations and $\delta A_i^T$ is a transverse vector perturbation ($\partial^i \delta A_i^T = 0$). The count: $1 + 1 + 2 = 4$ components, matching the 4 components of $A_\mu$.

Notice the structure: the spatial part $\delta A_i$ is split into a **longitudinal** piece $\partial_i \mathcal{A}$ (a gradient — it points along the direction of propagation for a plane wave) and a **transverse** piece $\delta A_i^T$ (perpendicular to the direction of propagation). This is the Helmholtz decomposition of a vector field into curl-free and divergence-free parts.

### Which Perturbations Propagate?

From the background analysis in Post 2, we know the $\beta = 0$ component of the equation of motion $\nabla_\alpha F^{\alpha\beta} = 2V_X A^\beta$ is a **constraint** — it contains no second-order time derivatives. At the perturbation level, this constraint determines $\delta A_0$ in terms of the other variables. It is not a propagating degree of freedom.

The remaining perturbations — the longitudinal scalar $\mathcal{A}$ and the transverse vector $\delta A_i^T$ — **do propagate**. They satisfy second-order wave equations and represent physical, dynamical fluctuations.

The count:

$$\underbrace{1}_{\delta A_0\text{ (constraint)}} + \underbrace{1}_{\mathcal{A}\text{ (propagates)}} + \underbrace{2}_{\delta A_i^T\text{ (propagates)}} = 4 \text{ components}, \quad 3 \text{ propagating DOFs}.$$

This matches the background DOF count of 3 from Post 2, as it must. The three propagating perturbations are precisely the three polarizations of the massive vector field: two transverse (from $\delta A_i^T$) and one longitudinal (from $\mathcal{A}$).

### The Metric Sector

The metric perturbations decompose as usual. On the isotropic background where $F_{\mu\nu} = 0$ and $V_X = 0$, the vector field's perturbations couple to the metric perturbations through the linearized Einstein equations. The key results:

- **Scalar sector**: The metric scalars $\Phi$, $B$, $\Psi$, $E$ are non-propagating (determined by constraints and gauge choices), as in standard GR. The new propagating scalar is $\mathcal{A}$ from the vector field.
- **Vector sector**: The metric vectors $B_i^T$, $E_i^T$ are non-propagating. The new propagating vectors are $\delta A_i^T$.
- **Tensor sector**: The gravitational wave modes $h_{ij}^{TT}$ propagate as usual — the vector field has no tensor perturbation to contribute.

The massive vector adds 3 propagating DOFs to the 2 gravitational wave DOFs, giving 5 total propagating degrees of freedom: $\mathcal{A}$, $\delta A_i^T$ (2 components), and $h_{ij}^{TT}$ (2 components).

---

## The Massless 2-Form: Perturbation Decomposition

### Decomposing $\delta B_{\mu\nu}$

The 2-form perturbation has six independent components, which split naturally into temporal-spatial and purely spatial parts:

$$\delta B_{0i} \equiv \delta\mathcal{B}_i, \qquad \delta B_{ij} = \epsilon_{ijk}\,\delta\mathcal{C}^k.$$

The second relation exploits the fact that an antisymmetric $3 \times 3$ matrix $\delta B_{ij}$ has 3 independent components — the same number as a 3-vector. The Levi-Civita symbol $\epsilon_{ijk}$ provides the map: just as the magnetic field $B^k = \frac{1}{2}\epsilon^{ijk}F_{ij}$ encodes the spatial part of the electromagnetic field strength, the vector $\delta\mathcal{C}^k$ encodes the spatial part of $\delta B_{ij}$.

Each of these 3-vectors gets its own SVT decomposition:

$$\delta\vec{\mathcal{B}} = \delta\vec{\mathcal{B}}^T + \nabla(\delta\mathcal{B}), \qquad \delta\vec{\mathcal{C}} = \delta\vec{\mathcal{C}}^T + \nabla(\delta\mathcal{C}),$$

where $\delta\mathcal{B}$ and $\delta\mathcal{C}$ are scalars, $\delta\vec{\mathcal{B}}^T$ and $\delta\vec{\mathcal{C}}^T$ are transverse vectors, and:

$$\nabla \cdot \delta\vec{\mathcal{B}}^T = 0, \qquad \nabla \cdot \delta\vec{\mathcal{C}}^T = 0.$$

The total count: $\delta\mathcal{B}$ (1) + $\delta\vec{\mathcal{B}}^T$ (2) + $\delta\mathcal{C}$ (1) + $\delta\vec{\mathcal{C}}^T$ (2) = 6 components. ✓

### No Tensor Perturbations

Notice something important: the 2-form perturbation has no tensor (transverse-traceless) sector. The SVT decomposition produces only scalars and vectors — no rank-2 transverse-traceless tensors. This is a direct consequence of the antisymmetry of $B_{\mu\nu}$: an antisymmetric tensor simply doesn't have enough structure to produce a TT piece.

This has a striking physical consequence: **the 2-form field cannot source gravitational waves at linear order**. In a universe where the only matter content is the 2-form, the tensor perturbations $h_{ij}^{TT}$ of the metric satisfy the vacuum wave equation — they propagate freely but are not generated by the dark energy field. This is in contrast to scalar-field dark energy models, where the scalar perturbations can indirectly source tensor modes through second-order effects.

---

## Gauge Transformations of the 2-Form Perturbations

### Decomposing the Gauge Parameter

The gauge transformation $B_{\mu\nu} \to B_{\mu\nu} + \partial_\mu\theta_\nu - \partial_\nu\theta_\mu$ acts on the perturbations through the gauge parameter $\theta_\mu$, which we decompose as:

$$\theta_\mu = \left(\theta_0,\; \vec{\theta}^T + \nabla\theta\right),$$

where $\theta_0$ and $\theta$ are scalar functions, and $\vec{\theta}^T$ is a transverse vector ($\nabla \cdot \vec{\theta}^T = 0$). This gives $1 + 1 + 2 = 4$ gauge parameters, but the residual symmetry $\theta_\mu \to \theta_\mu + \partial_\mu\varphi$ removes one scalar freedom, leaving 3 effective gauge parameters — matching the count from Post 2.

### How Each Perturbation Transforms

Working out the effect of the gauge transformation on each SVT component:

**Temporal-spatial scalars and vectors:**

$$\delta\vec{\mathcal{B}}^T \to \delta\vec{\mathcal{B}}^T + \dot{\vec{\theta}}^T, \qquad \delta\mathcal{B} \to \delta\mathcal{B} + \dot{\theta} - \theta_0.$$

The transverse vector shifts by the time derivative of the gauge parameter's transverse part. The scalar shifts by the combination $\dot{\theta} - \theta_0$.

**Purely spatial scalars and vectors:**

$$\delta\vec{\mathcal{C}}^T \to \delta\vec{\mathcal{C}}^T + \nabla \times \vec{\theta}^T, \qquad \delta\mathcal{C} \to \delta\mathcal{C}.$$

The transverse vector shifts by the curl of $\vec{\theta}^T$. And here is the key result: **$\delta\mathcal{C}$ is gauge-invariant**. It doesn't transform at all under gauge transformations.

The reason $\delta\mathcal{C}$ is gauge-invariant is structural. It sits inside $\delta B_{ij} = \epsilon_{ijk}\partial^k(\delta\mathcal{C})$ — the longitudinal part of the spatial perturbation. The gauge transformation adds $\partial_i\theta_j - \partial_j\theta_i$ to $B_{ij}$. Decomposing this into the Levi-Civita form, it contributes only a curl (transverse) piece, which goes into $\delta\vec{\mathcal{C}}^T$, not into $\delta\mathcal{C}$. The longitudinal spatial scalar is untouched.

### Gauge-Invariant Combinations

Beyond the manifestly gauge-invariant $\delta\mathcal{C}$, there is one more gauge-invariant combination:

$$\delta\dot{\vec{\mathcal{C}}}^T - \nabla \times \delta\vec{\mathcal{B}}^T.$$

This can be verified directly: under the gauge transformation, $\delta\dot{\vec{\mathcal{C}}}^T$ shifts by $\nabla \times \dot{\vec{\theta}}^T$, while $\nabla \times \delta\vec{\mathcal{B}}^T$ shifts by $\nabla \times \dot{\vec{\theta}}^T$ — the shifts cancel.

Since the field strength $H_{\mu\nu\rho}$ is gauge-invariant, the action can only depend on these gauge-invariant quantities. The physical content of the perturbation theory is entirely captured by $\delta\mathcal{C}$ and the combination $\delta\dot{\vec{\mathcal{C}}}^T - \nabla \times \delta\vec{\mathcal{B}}^T$.

### Identifying the Propagating Degree of Freedom

We can now use the gauge freedom to simplify the perturbation content:

1. **Use $\vec{\theta}^T$** (2 components) to set $\delta\dot{\vec{\mathcal{C}}}^T = 0$. This is a valid gauge choice. The gauge-invariant combination then reduces to $-\nabla \times \delta\vec{\mathcal{B}}^T$, which no longer carries an independent time derivative.

2. **Use $\theta_0$ and $\theta$** (effectively 1 scalar freedom, after accounting for the residual symmetry) to set $\delta\mathcal{B} = 0$.

After gauge fixing, the perturbation variables $\delta\vec{\mathcal{B}}^T$ and $\delta\mathcal{B}$ are fixed by gauge choices, while $\delta\vec{\mathcal{C}}^T$ is constrained (it appears without second-order time derivatives in the equations of motion).

What's left? The gauge-invariant scalar $\delta\mathcal{C}$. It appears in the action with a time derivative $\delta\dot{\mathcal{C}}$ — specifically, $X = -\frac{1}{12}H_{\mu\nu\rho}H^{\mu\nu\rho}$ expanded to second order in perturbations contains $(\delta\dot{\mathcal{C}})^2$ — making it a genuine dynamical variable with a second-order evolution equation.

**Only $\delta\mathcal{C}$ propagates.** One degree of freedom, as predicted by the background counting and by Hodge duality. Five of the six perturbation components are either gauge artifacts or constrained variables.

### The Physical Identity of $\delta\mathcal{C}$

What *is* $\delta\mathcal{C}$, physically?

Recall from Post 1 that a massless 2-form in 4D is Hodge-dual to a scalar field. The duality maps $H_{\mu\nu\rho}$ to $\partial_\mu\phi$ via $H_{\mu\nu\rho} = \epsilon_{\mu\nu\rho\sigma}\partial^\sigma\phi$. On the background, the constant $H_{xyz} = h_0$ corresponds to a scalar with a constant time derivative (homogeneous rolling).

At the perturbation level, $\delta\mathcal{C}$ is the **perturbation of this dual scalar**. It's the fluctuation in $\phi$ around its rolling background. All the machinery of antisymmetric tensors, 3-form field strengths, gauge symmetries, and SVT decompositions ultimately distills down to a single scalar fluctuation — precisely what you'd get if you'd worked with the dual scalar from the start.

This is Hodge duality earning its keep: it provides a consistency check on the entire perturbation analysis. If we'd gotten any number other than 1 for the propagating DOFs, or if the surviving perturbation had been a vector rather than a scalar, something would be wrong.

---

## The Perturbed Stress-Energy Tensor

### The 2-Form

To connect perturbations to observations, we need the perturbed stress-energy tensor $\delta T^\mu{}_\nu$. This enters the linearized Einstein equations and determines how the dark energy perturbations affect the gravitational potentials, and hence the CMB and large-scale structure.

Working in the scalar sector (which dominates at late times, since vector perturbations decay), the perturbation of $X$ is:

$$\delta X = -\frac{2}{3}X\left(9\Psi + a^{-2}\nabla^2\delta\mathcal{B}\right),$$

where $\Psi$ is the scalar metric perturbation and $\delta\mathcal{B}$ is the 2-form's temporal-spatial scalar perturbation.

The components of the perturbed stress-energy tensor are:

$$\delta T^0{}_0 = -f_X\,\delta X,$$

$$\delta T^i{}_i = -3(f_X + 2Xf_{XX})\,\delta X \qquad \text{(no sum over }i\text{)},$$

$$\delta T^0{}_i = -\frac{2}{3}Xf_X\,\partial_i\delta\dot{\mathcal{B}},$$

$$\delta T^i{}_0 = \frac{2}{3}Xf_X\,\partial^i\!\left(3B_{\text{metric}} - \delta\dot{\mathcal{B}}\right),$$

where $B_{\text{metric}}$ is the scalar metric perturbation from $\delta g_{0i}$ (not to be confused with the 2-form field $B_{\mu\nu}$), and $f_{XX} = d^2f/dX^2$.

Several features are worth noting:

**The energy density perturbation** $\delta T^0{}_0$ depends on $\delta X$, which involves both the metric perturbation $\Psi$ and the 2-form perturbation $\delta\mathcal{B}$. The dark energy density fluctuates in response to both gravitational potentials and the field's own dynamics.

**The anisotropic stress** vanishes at linear order — the diagonal spatial components $\delta T^i{}_i$ are all equal (proportional to $\delta X$). This means the 2-form dark energy, at linear order, does not produce a difference between the two Newtonian potentials $\Phi$ and $\Psi$. This is the same as a perfect fluid and distinguishes it from, say, a free scalar field at second order.

**The momentum flux** $\delta T^0{}_i$ involves $\delta\dot{\mathcal{B}}$, the time derivative of the temporal-spatial perturbation. Even though $\delta\mathcal{B}$ is not itself a propagating DOF (it can be gauged away), it contributes to the perturbed stress-energy tensor in a physical way through $\delta X$.

### The Massive Vector

The perturbed stress-energy tensor of the massive vector has a richer structure, reflecting its 3 propagating DOFs. On the background where $F_{\mu\nu} = 0$ and $V_X = 0$, the perturbation of $T_{\mu\nu}$ involves:

- **Scalar sector**: $\delta A_0$ (constrained) and $\mathcal{A}$ (propagating) contribute to $\delta\rho$, $\delta p$, and the momentum flux.
- **Vector sector**: $\delta A_i^T$ (propagating) contributes transverse momentum flux — a feature absent in scalar dark energy models.

The vector perturbations are particularly interesting: they represent rotational modes of the dark energy field. In standard $\Lambda$CDM, there are no propagating vector perturbations at all (cosmological vector modes decay). A massive vector dark energy model generically excites these modes, providing a potential observational signature — though detecting them would require extraordinary precision, as they are expected to be small.

---

## Observational Signatures: How Would We Tell?

### Gravitational Waves

The most dramatic distinction is in the **tensor sector**. The 2-form cannot source gravitational waves at linear order — its perturbations are purely scalar and vector. In contrast, scalar dark energy models can contribute to the gravitational wave background through second-order effects, and modifications to the gravitational wave propagation equation (e.g., a modified friction term) are generic in modified gravity theories.

If future gravitational wave observations (from LISA, pulsar timing arrays, or next-generation ground-based detectors) measured a modification to gravitational wave propagation that specifically affected the amplitude but not the tensor spectrum sourcing, this could be consistent with 2-form dark energy.

### Sound Speed and Clustering

The sound speed of dark energy perturbations determines whether the dark energy clusters (forms inhomogeneities) or remains smooth. For the 2-form, the single propagating perturbation $\delta\mathcal{C}$ has an effective sound speed determined by the function $f(X)$ and its derivatives. If $c_s^2 \neq 1$, the dark energy clusters differently from a cosmological constant (which has no perturbations at all) or from quintessence (which generically has $c_s^2 = 1$).

### Equation of State Evolution

Perhaps the most accessible signature is the **time dependence of $w$**. A cosmological constant has $w = -1$ exactly. Quintessence has $w > -1$ (but can be very close to $-1$). The 2-form can give either $w > -1$ or $w < -1$ (phantom), depending on the sign of $f_X$:

$$w = -1 + \frac{2Xf_X}{f}.$$

The phantom case ($w < -1$, when $f_X < 0$) is particularly interesting because it's difficult to achieve with a scalar field without introducing instabilities (ghost modes with negative kinetic energy). The 2-form achieves $w < -1$ while maintaining a healthy, ghost-free action — the single propagating DOF $\delta\mathcal{C}$ has a positive-definite kinetic term for appropriate choices of $f$.

### The Massive Vector's Distinct Signature

The massive vector, despite being a mere cosmological constant at the background level, has genuinely distinct perturbation physics. Its 3 propagating DOFs — compared to the 2-form's 1 — mean richer perturbation spectra. The longitudinal mode $\mathcal{A}$ can cluster and contribute to the integrated Sachs-Wolfe effect in the CMB, while the transverse modes $\delta A_i^T$ produce vector-type perturbations that, if detected, would be a smoking gun for spin-1 dark energy.

---

## Summary of the Series

We've traveled a long road. Let's collect the main results.

**Post 1** motivated the study of $p$-form dark energy: scalar fields are the simplest option but not the only one, and higher-rank fields arise naturally in string theory and modified gravity. We introduced the massive 1-form (action built from $F_{\mu\nu}F^{\mu\nu}$ and a potential $V(A_\mu A^\mu)$) and the massless 2-form (action $f(X)$ with $X \propto H_{\mu\nu\rho}H^{\mu\nu\rho}$).

**Post 2** analyzed the internal structure of these theories. The massive vector has no gauge symmetry, one constraint, and 3 propagating DOFs — physically, two transverse and one longitudinal polarization. The massless 2-form has a layered gauge symmetry (with a "gauge symmetry of the gauge symmetry"), two constraints, and just 1 propagating DOF — which Hodge duality reveals to be a scalar in disguise.

**Post 3** applied the cosmological principle. The massive vector is killed by isotropy: its spatial components vanish, the field strength vanishes, and it reduces to a cosmological constant. The 2-form finds a subtler solution: the field itself isn't isotropic, but its stress-energy tensor is, thanks to a constant spatial field-strength flux $H_{xyz} = h_0$. The Bianchi identity $dH = d^2B = 0$ forces this flux to be constant. The resulting equation of state $w = -1 + 2Xf_X/f$ evolves in time (since $X \propto a^{-6}$), giving genuine dynamical dark energy.

**Post 4** (this post) decomposed the perturbations. The massive vector contributes $\delta A_0$ (constrained), $\mathcal{A}$ (propagating scalar), and $\delta A_i^T$ (propagating transverse vector) — 3 DOFs total. The 2-form contributes 6 perturbation variables, of which 3 are gauged away, 2 are constrained, and only 1 — the gauge-invariant scalar $\delta\mathcal{C}$ — propagates. This surviving mode is the perturbation of the Hodge-dual scalar, confirming the duality at the level of fluctuations.

### The Bigger Picture

These two theories are representatives of a much larger landscape. The massive vector is the simplest case of **generalized Proca theory**, which allows derivative self-interactions while keeping the equations of motion second-order — the spin-1 analogue of Horndeski (scalar-tensor) theory. The massless 2-form with a general $f(X)$ is the analogue of $k$-essence for $p$-forms.

The systematic exploration of this landscape — what theories are healthy (ghost-free, stable), what background solutions they admit, what perturbation spectra they predict, and whether current or future observations can distinguish them from $\Lambda$CDM — is an active area of research. The tools we've developed in this series (gauge analysis, DOF counting, SVT decomposition, background and perturbation equations) are the basic toolkit for this program.

The cosmological constant problem remains unsolved. But the search for its resolution has led us through a beautiful corner of theoretical physics — where differential geometry, gauge theory, and cosmology intersect — and the journey is far from over.

---

*Conventions used throughout this series: metric signature $(+,-,-,-)$, natural units $c = \hbar = 1$. Friedmann equations: $H^2 = 8\pi G\rho/3$, $\ddot{a}/a = -4\pi G(\rho + 3p)/3$.*
