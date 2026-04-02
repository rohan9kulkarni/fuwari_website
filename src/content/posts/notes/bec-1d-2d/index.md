---
title: "Bose-Einstein Condensation (1): Can it occur in 1D and 2D?"
published: 2024-05-24
description: "Checking if Bose-Einstein Condensation can occur in 1D and 2D for free particles using periodic boundary conditions — and why the density of states is the key."
tags: [Statistical Mechanics]
category: Notes
draft: false
---

> **Problem:** Does BEC occur in 1D or 2D for free particles with periodic boundary conditions? Prove your answers with complete calculations.

---

## Why the density of states decides everything

Before diving into 1D and 2D, it's worth being precise about what "BEC occurs" actually means mechanically.

In the grand canonical ensemble, the average number of particles in *excited* states (everything above the ground state) is:

$$N_\text{ex}(T, \mu) = \int_0^\infty \frac{g(E)}{z^{-1}e^{\beta E} - 1}\, dE$$

where $g(E)$ is the density of states, $\beta = 1/k_BT$, and $z = e^{\beta\mu}$ is the fugacity with $\mu \leq 0$ for bosons.

The fugacity is bounded: $z \in [0, 1)$, with $z \to 1$ corresponding to $\mu \to 0^-$ (the low-temperature limit). So the **maximum** number of particles that excited states can accommodate at temperature $T$ is:

$$N_\text{ex}^\text{max}(T) = \lim_{z\to 1} \int_0^\infty \frac{g(E)}{e^{\beta E} - 1}\, dE$$

**BEC occurs if and only if $N_\text{ex}^\text{max}(T)$ is finite.** If it's finite, then for $N > N_\text{ex}^\text{max}$ the excess particles *must* pile up in the ground state — that's the condensate. If the integral diverges, excited states can absorb any number of particles at any temperature, and there's never any need for macroscopic ground state occupation.

Everything comes down to whether this integral converges at $z = 1$.

---

## Density of states in $d$ dimensions

For free particles in a $d$-dimensional box of side $L$ with periodic boundary conditions, the allowed wavevectors are $k_i = 2\pi n_i / L$ and the energy is $E = \hbar^2 k^2 / 2m$. Converting the sum over states to an integral in the thermodynamic limit:

$$\sum_{\vec{n}} \longrightarrow \frac{L^d}{(2\pi)^d} \int d^d k = \frac{V}{(2\pi)^d} \cdot S_d \int_0^\infty k^{d-1}\, dk$$

where $S_d$ is the surface area of a unit sphere in $d$ dimensions ($S_1 = 2$, $S_2 = 2\pi$, $S_3 = 4\pi$). Changing variables $k \to E$ using $E = \hbar^2 k^2/2m$:

$$k = \sqrt{\frac{2mE}{\hbar^2}}, \qquad dk = \sqrt{\frac{m}{2\hbar^2 E}}\, dE$$

so $k^{d-1}\,dk \propto E^{d/2 - 1}\,dE$, giving:

$$\boxed{g(E) \propto E^{d/2 - 1}}$$

This single formula tells the whole story:
- **3D:** $g(E) \propto E^{1/2}$ — grows with energy
- **2D:** $g(E) \propto E^0$ — constant
- **1D:** $g(E) \propto E^{-1/2}$ — diverges as $E \to 0$

---

## 2D: the integral diverges logarithmically

The explicit 2D density of states (for spin-0 bosons, $V = L^2$):

$$g_{2D}(E) = \frac{Vm}{2\pi\hbar^2}$$

Now check whether $N_\text{ex}^\text{max}$ is finite:

$$N_\text{ex}^\text{max} = \frac{Vm}{2\pi\hbar^2} \int_0^\infty \frac{dE}{e^{\beta E} - 1}$$

Near $E = 0$, the Bose-Einstein factor behaves as $\frac{1}{e^{\beta E}-1} \approx \frac{1}{\beta E}$, so the integrand goes as $\sim 1/E$. This gives a **logarithmic divergence** at the lower limit:

$$\int_0^\infty \frac{dE}{e^{\beta E} - 1} \sim \int_0^\epsilon \frac{dE}{\beta E} = \frac{1}{\beta}\ln(\epsilon)\Big|_0 \to \infty$$

$N_\text{ex}^\text{max} = \infty$ — excited states can accommodate infinitely many particles at any finite temperature. **BEC does not occur in 2D.**

---

## 1D: the integral diverges even faster

In 1D:

$$g_{1D}(E) = \frac{L}{\pi\hbar}\sqrt{\frac{m}{2E}} \propto E^{-1/2}$$

The integral becomes:

$$N_\text{ex}^\text{max} \propto \int_0^\infty \frac{E^{-1/2}}{e^{\beta E} - 1}\, dE$$

Near $E = 0$, the integrand behaves as $\sim E^{-1/2} \cdot \frac{1}{\beta E} = \frac{1}{\beta} E^{-3/2}$, which diverges **faster** than in 2D:

$$\int_0^\epsilon E^{-3/2}\, dE = \left[-2E^{-1/2}\right]_0^\epsilon \to \infty$$

**BEC does not occur in 1D either** — and the failure is even more severe than in 2D.

---

## Summary

| Dimension | $g(E)$ | Integral at $z=1$ | BEC? |
|---|---|---|---|
| 1D | $\propto E^{-1/2}$ | Diverges as $E^{-3/2}$ | ✗ |
| 2D | constant | Diverges as $E^{-1}$ | ✗ |
| 3D | $\propto E^{1/2}$ | Converges | ✓ |

In 3D, $g(E) \propto \sqrt{E}$ suppresses the integrand enough near $E = 0$ that $N_\text{ex}^\text{max}$ is finite — which is precisely why BEC happens in 3D and not in lower dimensions.

This is a general result: for a $d$-dimensional ideal Bose gas, BEC requires $d > 2$. The borderline case $d = 2$ is marginal (logarithmically divergent), which is why 2D systems show a different but related phase transition — the **Berezinskii-Kosterlitz-Thouless (BKT) transition** — but that's a story for another post.
