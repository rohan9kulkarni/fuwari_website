---
title: "Bose-Einstein Condensation (1): Can it occur in 1D and 2D?"
published: 2024-05-24
description: "Checking if Bose-Einstein Condensation (BEC) can occur in 1D and 2D for free particles using periodic boundary conditions."
tags: [Statistical Mechanics]
category: Notes
draft: false
---

> **Problem**
>
> Does BEC occur in 1d or 2d (for free particles using periodic boundary conditions)? Prove your answers with complete calculations.

## Solution

Our goal for this problem is to check if BEC occurs for 1D and 2D with periodic boundary conditions. I want to start with the 2D case.

One crucial point where we get BEC in the 3D case is from the density of states (DOS). Particularly, we realize that we approximated the sum for DOS to an integral without considering the zero energy modes of our system. The zero energy modes become more and more relevant when the temperature keeps dropping or rather when the fugacity $z \to 1$ (this is the low-temperature limit). So to take care of these missed states, we put a correction factor in the number density, and after working out some algebra for this new number density, we establish that BECs must exist in the 3D case.

So to start from the bottom in the case of 1D or 2D, we need to go back to the definition of DOS in those dimensions.

Starting with 2D:

The energy eigenstates for particles in a box of length $L$ and periodic boundary conditions is given by,

$$
\psi = \frac{1}{\sqrt{V}} e^{i \vec{k} \cdot \vec{x}},
$$

where $V = L^2$ and the wavevector $\vec{k} = (k_1, k_2)$ are quantized as

$$
k_i = \frac{2\pi n_i}{L}, \quad n_i \in \mathbb{Z},
$$

and the energy of the particle is given by,

$$
E_{\vec{n}} = \frac{\hbar^2 k^2}{2m} = \frac{4\pi^2\hbar^2}{2mL^2} (n_1^2 + n_2^2)
$$

where $k = |\vec{k}|$.

The quantum mechanical single particle partition function is given by the sum over all energy eigenstates,

$$
Z_1 = \sum_{\vec{n}} e^{-\beta E_{\vec{n}}}
$$

> **Comment**
> 
> Now the main question here is how to evaluate the sum. The usual way is to approximate this sum with an integral. The way we come to this approximation is first by recalling that
> 
> $$
> \lambda = \sqrt{\frac{2\pi\hbar^2}{m k_B T}}
> $$
> 
> is the thermal wavelength of a particle. Now looking at $Z_1$, we can see that we have exponentiated the energy, which in terms of this wavelength can be written as,
> 
> $$
> \beta E_{\vec{n}} = \beta \frac{4\pi^2\hbar^2}{2mL^2} n^2 = \frac{1}{k_B T} \frac{\lambda^2 k_B T}{L^2} n^2 = \frac{\lambda^2 n^2}{L^2}
> $$
> 
> For any macroscopic box (1 meter length) containing say a mole of particles at room temperature (293 K), $L \gg \lambda$ is true. This means that the exponent is an extremely small number. In other words, there are many states $E_{\vec{n}} < k_B T$, where all of them contribute to the sum.

This is the point where we say that we can approximate the sum to an integral (due to the comment above),

$$
\sum_{n} \approx \int d^3n = \frac{V}{(2\pi)^3} \int d^3k
$$

This is true for 3D, for 2D we will have an integral over $d^2k$ instead giving us,

$$
\begin{aligned}
\sum_{n} &\approx \int d^2n = \frac{V}{(2\pi)^2} \int d^2\vec{k} \\
&= \frac{V}{(2\pi)^2} \iint dk \, dk_\theta \\
&= \frac{V}{(2\pi)^2} 2\pi \int k \, dk \\
&= \frac{V}{2\pi} \int k \, dk
\end{aligned}
$$

where we changed to polar coordinates.

At this point we want to change the integration variables from $k \to E$,

$$
E = \frac{\hbar^2 k^2}{2m} \implies dE = \frac{\hbar^2 k}{m} dk \implies k \, dk = \frac{m}{\hbar^2} dE
$$

Now we are in a position to change the variables for the sum over $n$ from $k \to E$,

$$
\begin{aligned}
\sum_{n} &\approx \int d^2n = \frac{V}{2\pi} \int k \, dk \\
&= \frac{V}{2\pi} \int \frac{m}{\hbar^2} dE \\
&= \int g(E) dE
\end{aligned}
$$

Recall that by the definition of density of states, $g(E)dE$ corresponds to "number of states between $[E, E + dE]$." The integration over this quantity is exactly equivalent to the sum we have been talking about, explaining the last equality in the equation above.

This gives us the DOS in 2D to be,

$$
g(E) = \frac{Vm}{2\pi\hbar^2}
$$

> **Comment**
> 
> I have not included the spin in the computation. We would have a factor of $(2S + 1)$ in front of the expression for $g(E)$ for a particle of spin $S$. The expression that we have for DOS is valid for spin 0 bosons.

An extremely analogous computation gives us the DOS in 1D,

$$
\sum_{k} \to \int dn = \frac{L}{2\pi} \sqrt{\frac{2m}{\hbar^2}} \int \frac{1}{\sqrt{E}} dE
$$

Unlike in the case of 3D, where the DOS is proportional to $\sqrt{E}$, for 1D and 2D we have DOS proportional to $E^{-1/2}$, constant respectively. These give rise to a divergent series (unlike $g_{3/2}(z)$ in the case of 3D). Giving us fact that, as temperature goes to zero, the number of states not in the ground state is non-zero and finitely large. This means, **we cannot have BEC in 1D and 2D**.
