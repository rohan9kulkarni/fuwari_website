---
title: "Correlation Function and the Classical Limit"
published: 2023-07-20
description: "Exploring how the quantum mechanical correlation function C(t) relates to the classical limit of a Gaussian state with width σ_ω."
image: ""
tags:
  - quantum-mechanics
  - physics
category: Notes
draft: false
---

In quantum mechanics, the correlation function $C(t)$ provides deep insights into the evolution of a state and its departure from classical behavior. This problem examines a state prepared as a superposition of energy eigenstates with a Gaussian distribution of energies.

### Problem Statement

Suppose you have prepared a state $|\alpha\rangle$ as a superposition of $N$ energy eigenstates $|w_k\rangle$ with a mean energy $\omega_0$ and a width $\sigma_\omega$:
$$c_k \propto e^{-\frac{(\omega_k - \omega_0)^2}{2\sigma_\omega^2}}$$
$$|\alpha\rangle = \sum_k c_k |w_k\rangle$$

Our goal is to compute the normalized state and the correlation amplitude $C(t) = \langle \alpha | U(t) | \alpha \rangle$.

### Normalization

To normalize the state, we require $\langle \alpha | \alpha \rangle = 1$:
$$\langle \alpha | \alpha \rangle = \sum_{k,l} c_k^* c_l \langle w_k | w_l \rangle = \sum_k |c_k|^2 = 1$$

Given the proportionality $c_k = A e^{-\frac{(\omega_k - \omega_0)^2}{2\sigma_\omega^2}}$, we find the normalization constant $A$:
$$A = \frac{1}{\sqrt{\sum_k e^{-\frac{(\omega_k - \omega_0)^2}{\sigma_\omega^2}}}}$$

### The Correlation Function

The time evolution operator is $U(t) = e^{-iHt/\hbar}$. Acting on the state $|\alpha\rangle$:
$$U(t) |\alpha\rangle = \sum_k c_k e^{-i\omega_k t} |w_k\rangle$$

The correlation function $C(t)$ is defined as the overlap between the initial state and the state at time $t$:
$$C(t) = \langle \alpha | U(t) | \alpha \rangle = \sum_k |c_k|^2 e^{-i\omega_k t}$$

Using the normalization and the Gaussian coefficients:
$$C(t) = \frac{\sum_k e^{-\frac{(\omega_k - \omega_0)^2}{\sigma_\omega^2}} e^{-i\omega_k t}}{\sum_k e^{-\frac{(\omega_k - \omega_0)^2}{\sigma_\omega^2}}}$$

### Classical Limit

In the limit of a large number of states ($N \to \infty$) and small spacing, we can approximate the sum as an integral:
$$C(t) \approx \frac{\int e^{-\frac{(\omega - \omega_0)^2}{\sigma_\omega^2}} e^{-i\omega t} d\omega}{\int e^{-\frac{(\omega - \omega_0)^2}{\sigma_\omega^2}} d\omega}$$

The integral in the numerator is the Fourier transform of a Gaussian:
$$\int_{-\infty}^{\infty} e^{-a\omega^2 + b\omega} d\omega = \sqrt{\frac{\pi}{a}} e^{b^2/4a}$$

After completing the square and performing the integration, we find:
$$C(t) \approx e^{-i\omega_0 t} e^{-\sigma_\omega^2 t^2 / 4}$$

### Interpretation

The absolute value of the correlation function, $|C(t)| = e^{-\sigma_\omega^2 t^2 / 4}$, shows a Gaussian decay. The "correlation time" $\tau$ can be defined as the time it takes for $|C(t)|$ to drop by $1/e$:
$$\tau = \frac{2}{\sigma_\omega}$$

This relationship, $\tau \sigma_\omega = 2$, is a manifestation of the energy-time uncertainty principle. As the width of the energy distribution $\sigma_\omega$ increases (more "classical" or less well-defined energy), the state de-correlates much faster.
