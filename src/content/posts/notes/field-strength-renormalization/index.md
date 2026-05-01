---
title: "Why Renormalization Is Needed: The Källén–Lehmann Spectral Representation"
published: 2026-05-01
description: "A non-perturbative derivation showing that the analytic structure of the interacting two-point function forces field strength renormalization Z and a physical mass m ≠ m₀ — long before any loops or infinities appear."
tags:
  - quantum-field-theory
  - particle-physics
  - physics
category: Notes
draft: false
---

In free scalar field theory the two-point function $\langle 0|T\phi(x)\phi(y)|0\rangle$ has a clean meaning: it is the *amplitude for a particle to propagate from $y$ to $x$*. In momentum space it is a single, simple pole

$$\int d^4x\, e^{ip\cdot x}\,\langle 0|T\phi(x)\phi(0)|0\rangle = \frac{i}{p^2 - m_0^2 + i\epsilon},$$

with residue exactly $1$ at $p^2 = m_0^2$, where $m_0$ is the parameter sitting in the Lagrangian.

**What survives in an interacting theory?** Is there still a pole? At what mass? With what residue? The answers will tell us, *non-perturbatively and before doing a single loop integral*, that the field $\phi$ in the Lagrangian and its parameter $m_0$ are simply not the right objects to compare with experiment. Renormalization is the price of admission.

> **Goal:** Derive the analytic structure of $\langle\Omega|T\phi(x)\phi(y)|\Omega\rangle$ in any Lorentz-invariant interacting theory of a real scalar field, using only general principles. Read off, from that structure, why we must rescale $\phi \to \phi/\sqrt{Z}$ and distinguish the physical mass $m$ from the bare mass $m_0$.

---

## Why this is non-trivial

We assume only:

- The theory has a Lorentz-invariant vacuum $|\Omega\rangle$ with $P^\mu|\Omega\rangle = 0$.
- A four-momentum operator $\hat{P}^\mu = (\hat{H}, \hat{\mathbf{P}})$ generates spacetime translations. Its components commute, so we can diagonalise them simultaneously.
- We have a real scalar field $\phi(x)$ that is Lorentz-invariant at a point: $U(\Lambda)\phi(0)U(\Lambda)^{-1} = \phi(0)$.

No interaction model. No perturbative expansion. No assumption about loops.

What makes the interacting case interesting is that, unlike in free theory, the spectrum of $\hat{P}^\mu$ contains *much more* than a single one-particle hyperboloid. The two-point function will see all of it.

---

## The Hilbert space: three flavours of zero-momentum states

Diagonalise $\hat{\mathbf{P}}$ first. Let $|\lambda_0\rangle$ denote zero-momentum eigenstates,

$$\hat{\mathbf{P}}|\lambda_0\rangle = 0, \qquad \hat{H}|\lambda_0\rangle = E_0(\lambda)|\lambda_0\rangle.$$

The label $\lambda$ runs over all such states. Three physically distinct categories show up:

1. **Single particle.** Sharp energy = sharp mass. Sits on its own hyperboloid in $(H, \mathbf{P})$ space.
2. **Bound state of several particles.** Also sharp mass, equal to the sum of constituent masses minus the binding energy. A *separate* hyperboloid below the threshold for free constituents.
3. **Unbound multi-particle states.** Here mass is *not* a single number: at zero total momentum, the rest energy depends continuously on how the constituents share their internal momenta. This produces a *continuum* of hyperboloids starting at the multi-particle threshold.

A boost $U(\Lambda_p)$ promotes any zero-momentum state to one of momentum $\mathbf{p}$,

$$|\lambda_\mathbf{p}\rangle = U(\Lambda_p)|\lambda_0\rangle, \qquad \hat{H}|\lambda_\mathbf{p}\rangle = E_\mathbf{p}(\lambda)\,|\lambda_\mathbf{p}\rangle, \qquad E_\mathbf{p}(\lambda) = \sqrt{|\mathbf{p}|^2 + m_\lambda^2}.$$

The number $m_\lambda$ defined this way is *the rest-frame energy of the state* — what the relativistic dispersion relation calls "mass." For categories (1) and (2) this is a clean, single mass. For (3) it is a continuous parameter; we treat it as such by integrating over $m_\lambda$ in addition to summing over $\lambda$.

Picture the full spectrum as a stack of hyperboloids in $(H, \mathbf{P})$ space: an isolated one at the physical particle mass, possibly other isolated ones for bound states below threshold, and a *continuum* of hyperboloids filling the region above the multi-particle threshold.

With relativistic normalisation $\langle\lambda_\mathbf{p}|\lambda_\mathbf{q}\rangle = 2E_\mathbf{p}(\lambda)(2\pi)^3 \delta^3(\mathbf{p}-\mathbf{q})$, the resolution of the identity is

$$\boxed{\;\mathbf{1} = |\Omega\rangle\langle\Omega| + \sum_\lambda \int \frac{d^3p}{(2\pi)^3}\,\frac{1}{2E_\mathbf{p}(\lambda)}\,|\lambda_\mathbf{p}\rangle\langle\lambda_\mathbf{p}|.\;}$$

The "sum" over $\lambda$ is, in the continuum sector, really an integral over the continuous mass label.

---

## Inserting completeness into the two-point function

Take $x^0 > y^0$ so the time-ordering is just $\phi(x)\phi(y)$, and slip the identity between the two fields:

$$\langle\Omega|\phi(x)\phi(y)|\Omega\rangle = \langle\Omega|\phi(x)|\Omega\rangle\langle\Omega|\phi(y)|\Omega\rangle + \sum_\lambda \int \frac{d^3p}{(2\pi)^3}\,\frac{1}{2E_\mathbf{p}(\lambda)}\,\langle\Omega|\phi(x)|\lambda_\mathbf{p}\rangle\langle\lambda_\mathbf{p}|\phi(y)|\Omega\rangle.$$

The first term is the vacuum expectation value squared. We assume it vanishes — equivalent to saying we are not in a spontaneously broken phase, or have already shifted $\phi$ around its true vacuum value.

To handle the second term, peel apart one matrix element using translation invariance, $\phi(x) = e^{i\hat{P}\cdot x}\phi(0)e^{-i\hat{P}\cdot x}$, together with $\hat{P}|\Omega\rangle = 0$:

$$\langle\Omega|\phi(x)|\lambda_\mathbf{p}\rangle = \langle\Omega|\phi(0)|\lambda_\mathbf{p}\rangle\, e^{-ip\cdot x}\Big|_{p^0 = E_\mathbf{p}(\lambda)}.$$

Now boost away the momentum. Using Lorentz invariance of the vacuum, $\langle\Omega|U(\Lambda) = \langle\Omega|$, and the scalar property $U(\Lambda)\phi(0)U(\Lambda)^{-1} = \phi(0)$,

$$\langle\Omega|\phi(0)|\lambda_\mathbf{p}\rangle = \langle\Omega|\,U^{-1}U\phi(0)U^{-1}U\,|\lambda_\mathbf{p}\rangle = \langle\Omega|\phi(0)|\lambda_0\rangle.$$

This is where being a *scalar* matters: for higher-spin fields a representation matrix appears here. The argument generalises (see Weinberg Vol. I, §10), but for $\phi$ it is trivial — the matrix element is a Lorentz scalar.

Putting both matrix elements together, the cross-term factor becomes $|\langle\Omega|\phi(0)|\lambda_0\rangle|^2$ (note the modulus-squared, since the second matrix element is the complex conjugate of the first), and

$$\langle\Omega|\phi(x)\phi(y)|\Omega\rangle = \sum_\lambda \int \frac{d^3p}{(2\pi)^3}\,\frac{1}{2E_\mathbf{p}(\lambda)}\,|\langle\Omega|\phi(0)|\lambda_0\rangle|^2\, e^{-ip\cdot(x-y)}\Big|_{p^0 = E_\mathbf{p}(\lambda)}.$$

---

## Recognising the Feynman propagator

The momentum integral on the right has a familiar form. The standard contour identity

$$\int \frac{d^3p}{(2\pi)^3}\frac{1}{2E_\mathbf{p}}\,e^{-ip\cdot(x-y)}\Big|_{p^0=E_\mathbf{p}} = \int \frac{d^4p}{(2\pi)^4}\,\frac{i}{p^2 - m_\lambda^2 + i\epsilon}\,e^{-ip\cdot(x-y)} \quad (x^0 > y^0)$$

upgrades the on-shell three-momentum integral to the Feynman propagator $D_F(x-y;\,m_\lambda)$. Repeating the construction for $y^0 > x^0$ gives the same expression with $x \leftrightarrow y$ — exactly what time ordering combines into. The end result is the central identity of this whole construction:

$$\boxed{\;\langle\Omega|T\{\phi(x)\phi(y)\}|\Omega\rangle = \sum_\lambda |\langle\Omega|\phi(0)|\lambda_0\rangle|^2\, D_F(x-y;\,m_\lambda).\;}$$

**Read this carefully.** The interacting two-point function is a *sum of free Feynman propagators*, one for every state $|\lambda_0\rangle$ the field $\phi(0)$ can produce out of the vacuum, weighted by $|\langle\Omega|\phi(0)|\lambda_0\rangle|^2$, and using the *physical* rest-frame mass $m_\lambda$ of that state.

A few things to notice immediately:

- The Lagrangian mass $m_0$ never appeared. The masses $m_\lambda$ entered through the dispersion relation $E_\mathbf{p}(\lambda) = \sqrt{\mathbf{p}^2 + m_\lambda^2}$ — they are observable rest-frame energies, not parameters in the action.
- Even with a single mass parameter in $\mathcal{L}$, the sum runs over *every* state the field excites, including bound states and the multi-particle continuum. Each contributes its own pole or cut.
- Diagrammatically, $|\langle\Omega|\phi(0)|\lambda_0\rangle|^2 D_F(x-y;m_\lambda)$ is a "blob–propagator–blob" structure between $x$ and $y$, the blobs encoding all the interactions that produce state $\lambda$ from a single insertion of $\phi$.

---

## The Källén–Lehmann spectral representation

We can repackage this sum as an integral over a continuous mass-squared variable $M^2$ by inserting a delta function:

$$\langle\Omega|T\phi(x)\phi(y)|\Omega\rangle = \int_0^\infty \frac{dM^2}{2\pi}\,\rho(M^2)\,D_F(x-y;\,M^2),$$

with the **spectral density**

$$\boxed{\;\rho(M^2) = \sum_\lambda (2\pi)\,\delta(M^2 - m_\lambda^2)\,|\langle\Omega|\phi(0)|\lambda_0\rangle|^2.\;}$$

This is the Källén–Lehmann representation. Its shape encodes the entire single-particle physics of the theory:

- An **isolated delta function at $M^2 = m^2$** from the one-particle state, where $m$ is the *physical* particle mass.
- **Additional isolated deltas** below the multi-particle threshold from any bound states.
- A **continuum starting at $M^2 = (2m)^2$** from genuine multi-particle states. (Three-particle bound states can sit on top of this continuum, making the structure intricate in general.)

Sketch:

```
ρ(M²)
 │      ┃                      ┃                 ╱╲╱╲╱╲
 │      ┃                      ┃                ╱        ╲
 │      ┃                      ┃            ╱╱             ╲╲
 │   1-particle           bound state    2-particle continuum
 └──────╂──────────────────────╂───────────────────────────────→ M²
        m²                    (mb²)                  (2m)²
```

In the complex-$p^2$ plane these features become an **isolated pole at $m^2$**, possibly a few **isolated poles** for bound states, and a **branch cut** running from $(2m)^2$ to infinity.

---

## Field strength renormalization $Z$ and the physical mass $m$

Isolate the one-particle contribution to $\rho$. Writing

$$\rho(M^2) = 2\pi\,\delta(M^2 - m^2)\,Z + \sigma(M^2),$$

where $\sigma$ is supported on $M^2 \geq (2m)^2$ (and on isolated bound-state masses), defines the **field strength renormalization**

$$Z \equiv |\langle\Omega|\phi(0)|\mathbf{1}_0\rangle|^2 \;\geq\; 0.$$

This is the weight with which the operator $\phi(0)$ creates the *one-particle state* out of the vacuum. In free theory $Z = 1$ trivially, since $\phi(0)$ is built precisely out of one-particle creation operators. With interactions, some of $\phi$'s "strength" is spent producing multi-particle states instead, so $Z < 1$.

Substitute back. Near the one-particle pole — i.e. at scales where the higher-mass continuum and bound states are far away — the two-point function reduces to a single Feynman propagator weighted by $Z$:

$$\int d^4x\, e^{ip\cdot x}\,\langle\Omega|T\phi(x)\phi(0)|\Omega\rangle \;\xrightarrow{\;p^2 \to m^2\;}\; \frac{iZ}{p^2 - m^2 + i\epsilon} + (\text{regular})$$

Compare this to the free-theory propagator:

$$\frac{i}{p^2 - m_0^2 + i\epsilon}.$$

Two mismatches stand out:

1. The residue is $Z$, not $1$.
2. The pole is at $p^2 = m^2$, not at $p^2 = m_0^2$.

Both differences are forced on us by the analytic structure we just derived. *Neither is a perturbative artifact.*

---

## Reconciliation: rescale the field

The mismatch in residue is the easy one. Define a rescaled field

$$\phi'(x) \equiv \frac{\phi(x)}{\sqrt{Z}}.$$

By construction $|\langle\Omega|\phi'(0)|\mathbf{1}_0\rangle|^2 = 1$. Repeating the derivation with $\phi'$ replaces the spectral density $\rho \to \rho/Z$, and near the one-particle pole

$$\int d^4x\, e^{ip\cdot x}\,\langle\Omega|T\phi'(x)\phi'(0)|\Omega\rangle \;\xrightarrow{\;p^2 \to m^2\;}\; \frac{i}{p^2 - m^2 + i\epsilon} + (\text{regular})$$

— *exactly* the analytic form of the free propagator, but at the physical mass $m$, not the bare mass $m_0$.

This rescaling is **field strength renormalization**. Combined with the recognition that the pole sits at $m \neq m_0$, which we absorb into a redefinition of the mass parameter (**mass renormalization**), it expresses the same simple idea: *the field and parameters of $\mathcal{L}$ are not the field and parameters that talk to experiment.* Renormalization is the dictionary.

---

## The deep insight

Step back. We assumed:

- A Lorentz-invariant vacuum.
- A four-momentum operator with the spectrum required by relativity.
- A scalar field operator.
- Completeness on the Hilbert space.

We did *not* assume:

- A perturbative expansion.
- Loops, Feynman diagrams, or any cutoff.
- Any specific Lagrangian.

And yet the result is unambiguous: the interacting two-point function near its one-particle pole differs from the free one by a factor of $Z$ and by a shifted mass. **Renormalization is forced by the analytic structure of any interacting QFT, not introduced as a hack to tame divergences.** The infinities of perturbation theory live downstream of this fact; they are the technical price of computing $Z$ and $m - m_0$ order by order, but the *need* for a $Z$ and the gap between $m$ and $m_0$ exists even in a theory where every loop integral converges trivially.

A sum rule sharpens the picture. From the canonical commutation relations one shows (Weinberg §10.7) that $\rho \geq 0$ and

$$Z + \int_{(2m)^2}^\infty \frac{dM^2}{2\pi}\,\sigma(M^2) = 1.$$

So $0 \leq Z \leq 1$, with $Z = 1$ if and only if the theory is free (no multi-particle states reached by $\phi(0)$). The opposite limit $Z \to 0$ is the most physical statement of "non-perturbative" one can imagine: the rescaling $\phi' = \phi/\sqrt{Z}$ blows up, the field $\phi$ in the Lagrangian fails to create a one-particle state at all, and the physical particle is a **composite** built entirely out of multi-particle structure. Confinement and bound-state-only spectra live in this corner.

---

## Summary

| Object | Definition | Free theory | Interacting theory |
|---|---|---|---|
| $m_0$ | Mass parameter in $\mathcal{L}$ | Equals $m$ | Generally $\neq m$ |
| $m$ | Rest-frame energy of one-particle state, from $E_\mathbf{p} = \sqrt{\mathbf{p}^2 + m^2}$ | Equals $m_0$ | Physical observable |
| $Z$ | $\lvert\langle\Omega\lvert\phi(0)\rvert\mathbf{1}_0\rangle\rvert^2$, residue at one-particle pole | $1$ | $0 \leq Z < 1$ |
| $\sigma(M^2)$ | Continuum spectral density | $0$ | Supported on $M^2 \geq (2m)^2$ + bound-state poles |

**The big-picture takeaway.** Free theory has *one* pole with residue $1$. Interacting theory has, generically, *one isolated pole with residue $Z < 1$*, possibly some bound-state poles, and a multi-particle branch cut. To put the isolated pole into the canonical free-propagator form you must rescale the field by $\sqrt{Z}$ and accept that its location is the physical mass $m$, not $m_0$. That rescaling and that mass redefinition *are* renormalization — and they were demanded by the spectrum of an interacting theory long before we wrote down a single Feynman diagram.
