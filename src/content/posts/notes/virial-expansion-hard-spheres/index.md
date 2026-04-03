---
title: "Virial Expansion for Hard Spheres"
published: 2024-04-03
description: "Deriving the virial expansion for a classical gas of hard spheres — from the Mayer f-function to excluded volume and higher-order corrections."
tags: [Statistical Mechanics]
category: Notes
draft: false
---

> **Problem:** Derive the virial expansion for a classical gas of hard spheres, showing how the excluded volume correction emerges and computing higher-order virial coefficients.

---

## Why the virial expansion? What are we actually computing?

Before diving into the hard sphere model, it's worth being precise about what the virial expansion actually *does* and why we need it.

The ideal gas law $PV = Nk_BT$ works remarkably well, but it makes two simplifying assumptions that break down for real gases:
1. Particles are **point-like** (zero volume)
2. Particles **don't interact** (no forces between them)

Real atoms and molecules violate both: they have finite size and exert forces on each other. The virial expansion systematically corrects for these effects by expanding in powers of the density:

$$
\frac{PV}{Nk_BT} = 1 + B_2\rho + B_3\rho^2 + \cdots
$$

where $\rho = N/V$ is the number density. The **virial coefficients** $B_2, B_3, \ldots$ encode how interactions and finite size change the pressure. At low density ($\rho \to 0$), we recover the ideal gas. As density increases, higher-order terms become important.

The hard sphere model captures the simplest finite-size effect: particles are impenetrable balls of diameter $\sigma$. The potential is:

$$
U(r) = \begin{cases}
\infty & \text{if } r < \sigma \\
0 & \text{if } r > \sigma
\end{cases}
$$

This isn't just a toy model — it's the starting point for understanding real gases, liquids, and even the glass transition. The question is: how does this simple exclusion affect the equation of state?

---

## The partition function and why it's hard to compute

For $N$ particles with Hamiltonian:

$$
H = \sum_{i=1}^N \frac{p_i^2}{2m} + \sum_{i>j} U(r_{ij})
$$

the classical partition function separates into momentum and position integrals:

$$
Z(N, V, T) = \frac{1}{N!\lambda^{3N}} \int \prod_i d^3r_i\, e^{-\beta\sum_{j<k} U(r_{jk})}
$$

where $\lambda = \sqrt{2\pi\hbar^2/(mk_BT)}$ is the thermal wavelength. The momentum integral is easy (it gives the ideal gas result), but the **position integral is the challenge**:

$$
Q(N, V, T) = \int \prod_i d^3r_i\, e^{-\beta\sum_{j<k} U(r_{jk})}
$$

For interacting particles, the Boltzmann factor $e^{-\beta U}$ doesn't factorize, so we can't separate this integral into $N$ independent pieces. This is why we need the Mayer expansion.

---

## The Mayer f-function: turning a hard problem into a series

The key trick is to define:

$$
f(r) = e^{-\beta U(r)} - 1
$$

For hard spheres, this is remarkably simple:

$$
f(r) = \begin{cases}
-1 & \text{if } r < \sigma \\
0 & \text{if } r > \sigma
\end{cases}
$$

**Why this helps:** The partition function becomes:

$$
Q = \int \prod_i d^3r_i\, \prod_{j>k} (1 + f_{jk})
$$

where $f_{jk} = f(r_{jk})$. Now we can expand the product:

$$
\prod_{j>k} (1 + f_{jk}) = 1 + \sum_{j>k} f_{jk} + \sum_{j>k, l>m} f_{jk}f_{lm} + \cdots
$$

Each term represents a distinct **cluster** of interacting particles. The first term ($1$) gives the ideal gas. The linear terms ($\sum f_{jk}$) represent two-particle interactions. The quadratic terms represent three- and four-particle clusters, and so on.

**Physical interpretation:** The Mayer $f$-function measures how much the pair correlation deviates from no interaction. $f = 0$ means no interaction (particles independent). $f = -1$ means complete exclusion (particles can't overlap).

---

## Keeping only the first correction: why this is enough at low density

At low density, most particles are far apart and don't interact. We only need to keep terms where a small number of particles are close together. Keeping only the **linear term in $f$**:

$$
Q \approx \int \prod_i d^3r_i\, \left(1 + \sum_{j>k} f_{jk}\right)
$$

The first term gives $V^N$ (the ideal gas contribution). The second term requires evaluating:

$$
\int \prod_i d^3r_i\, f_{12} = V^{N-2} \int d^3r_1\,d^3r_2\, f(r_{12})
$$

All $N(N-1)/2$ pairs contribute equally, so we just need to compute one integral and multiply by the number of pairs.

**Variable transformation:** Change to center-of-mass and relative coordinates:

$$
\vec{R} = \frac{1}{2}(\vec{r}_1 + \vec{r}_2), \qquad \vec{r} = \vec{r}_1 - \vec{r}_2
$$

The Jacobian is $1$, and the integral separates:

$$
\int d^3r_1\,d^3r_2\, f(r_{12}) = \left(\int d^3R\right) \left(\int d^3r\, f(r)\right) = V \int d^3r\, f(r)
$$

The center-of-mass integral just gives the volume $V$. The relative coordinate integral is what contains the physics.

---

## The second virial coefficient: what it actually means

Carrying through the algebra, the equation of state becomes:

$$
\frac{PV}{Nk_BT} = 1 - \frac{N}{2V}\int d^3r\, f(r)
$$

For hard spheres:

$$
\int d^3r\, f(r) = -4\pi \int_0^\sigma r^2\, dr = -\frac{4\pi\sigma^3}{3}
$$

This integral is the **volume excluded** by one sphere (of radius $\sigma$) — but with a negative sign because $f = -1$ in the excluded region.

Plugging this in:

$$
\frac{PV}{Nk_BT} = 1 + \frac{2\pi\sigma^3}{3}\rho = 1 + B_2\rho
$$

where the **second virial coefficient** is:

$$
\boxed{B_2 = \frac{2\pi\sigma^3}{3} = 4 \times \frac{4\pi}{3}\left(\frac{\sigma}{2}\right)^3}
$$

**Geometric meaning:** $B_2$ is **four times the volume of one sphere**. The factor of 4 comes from: each particle excludes a sphere of radius $\sigma$ around itself (volume $\frac{4\pi}{3}\sigma^3$), and we have to divide by 2 to avoid double-counting pairs.

---

## Excluded volume: the physical picture

Rewriting the result as:

$$
\frac{P}{k_BT} = \frac{N}{V - V_{\text{ex}}}
$$

where $V_{\text{ex}} = N \times \frac{2\pi\sigma^3}{3}$ is the **excluded volume**, we see something beautiful:

**The hard sphere gas behaves like an ideal gas with reduced volume.**

Each particle excludes a sphere of radius $\sigma/2$ around itself (volume $\frac{\pi\sigma^3}{6}$). For $N$ particles, the total excluded volume is $N \times \frac{\pi\sigma^3}{6}$, but we must multiply by 2 because each pair shares the exclusion. This gives $V_{\text{ex}} = \frac{2}{3}\pi N\sigma^3$.

**Physical consequence:** The pressure is **higher** than the ideal gas at the same density and temperature:

$$
P_{\text{hard sphere}} > P_{\text{ideal}}
$$

This makes intuitive sense: collisions between finite-sized particles transfer momentum more effectively than non-interacting point particles. The particles "bounce off" each other, increasing the pressure on the container walls.

---

## Higher-order corrections: when do we need them?

The virial expansion doesn't stop at $B_2$. The next term involves three-particle clusters and gives $B_3$. For hard spheres:

$$
B_2 \propto \sigma^3, \quad B_3 \propto \sigma^6, \quad B_4 \propto \sigma^9, \quad \ldots
$$

Each higher coefficient involves more complicated cluster integrals. A clever approach uses the **reduced variable** $x = V_{\text{ex}}/V$ (the fraction of volume excluded):

$$
\frac{PV}{Nk_BT} = 1 + \sum_{n=1}^\infty a_n x^n
$$

where the coefficients $a_n$ are pure numbers determined by geometry. Computing them:

$$
a_1 = 1,\quad a_2 = 4,\quad a_3 = 10,\quad a_4 = 18,\quad a_5 = 28,\quad \ldots
$$

The generating function for this sequence is:

$$
\boxed{\frac{PV}{Nk_BT} = 1 + \frac{2(-2 + x)x}{(-1 + x)^3}}
$$

Expanding this confirms the coefficients above. This resummed expression is valid for $x < 1$ — physically, the excluded volume can't exceed the total volume.

**When does this matter?** The expansion parameter is $x \sim \rho\sigma^3$. For gases at STP, $\rho\sigma^3 \sim 10^{-3}$, so $B_2$ is a small correction. For liquids, $\rho\sigma^3 \sim 1$, and many terms are needed.

---

## Summary

| Quantity | Result | Physical meaning |
|---|---|---|
| Mayer $f$-function | $f(r) = -1$ for $r < \sigma$, $0$ otherwise | Measures deviation from non-interacting |
| Second virial coefficient | $B_2 = \frac{2\pi\sigma^3}{3} = 4 \times V_{\text{sphere}}$ | Four times the volume of one sphere |
| Excluded volume | $V_{\text{ex}} = \frac{2}{3}\pi N\sigma^3$ | Volume unavailable to other particles |
| Pressure correction | $P = P_{\text{ideal}}\left(\frac{V}{V - V_{\text{ex}}}\right)$ | Ideal gas with reduced volume |

**Key insight:** The virial expansion provides a systematic way to go from point particles to real gases with finite size. Even the first correction captures the essential physics of excluded volume — particles have less room to move than they would in an ideal gas, so they hit the walls more often and increase the pressure.

This framework generalizes to arbitrary intermolecular potentials: just replace the hard-sphere $f(r)$ with the appropriate function and recompute the cluster integrals. The hard sphere result is the foundation for understanding real gases, liquids, and the dense matter physics that connects them.
