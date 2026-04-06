---
title: "Spin Eigenstates in a General Direction"
published: 2022-09-26
description: "Deriving the explicit matrix form and normalization of the spin eigenstates |n; +⟩ for a general unit vector n̂ defined by spherical angles θ and φ."
image: ""
tags:
  - quantum-mechanics
category: Notes
draft: false
---

In quantum mechanics, the state of a spin-1/2 particle is often represented in the basis of the $z$-component of spin, $S_z$. However, we frequently need to find the eigenstates of the spin operator along an arbitrary direction $\hat{n}$.

### Problem Statement

Our goal is to derive an expression for the state $|n; +\rangle$ satisfying:
$$\vec{S} \cdot \vec{n} |n; +\rangle = +\frac{\hbar}{2} |n; +\rangle$$

where $\hat{n}$ is a unit vector defined by the spherical coordinates $(\theta, \phi)$:
$$\vec{n} = \begin{bmatrix} n_x \\ n_y \\ n_z \end{bmatrix} = \begin{bmatrix} \sin\theta \cos\phi \\ \sin\theta \sin\phi \\ \cos\theta \end{bmatrix}$$

We work in the basis of $S_z$, where the basis states are:
$$|z; +\rangle = \begin{bmatrix} 1 \\ 0 \end{bmatrix}, \quad |z; -\rangle = \begin{bmatrix} 0 \\ 1 \end{bmatrix}$$

### The Spin Operator in Direction $\hat{n}$

The spin operator vector is $\vec{S} = \frac{\hbar}{2} \vec{\sigma}$, where $\vec{\sigma}$ are the Pauli matrices:
$$\sigma_x = \begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}, \quad \sigma_y = \begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}, \quad \sigma_z = \begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$$

The projection of the spin along $\hat{n}$ is:
$$\vec{S} \cdot \vec{n} = \frac{\hbar}{2} (n_x \sigma_x + n_y \sigma_y + n_z \sigma_z)$$
$$\vec{S} \cdot \vec{n} = \frac{\hbar}{2} \begin{bmatrix} n_z & n_x - i n_y \\ n_x + i n_y & -n_z \end{bmatrix}$$

Plugging in the spherical coordinates:
$$\vec{S} \cdot \vec{n} = \frac{\hbar}{2} \begin{bmatrix} \cos\theta & \sin\theta (\cos\phi - i\sin\phi) \\ \sin\theta (\cos\phi + i\sin\phi) & -\cos\theta \end{bmatrix}$$
$$\vec{S} \cdot \vec{n} = \frac{\hbar}{2} \begin{bmatrix} \cos\theta & \sin\theta e^{-i\phi} \\ \sin\theta e^{i\phi} & -\cos\theta \end{bmatrix}$$

### Solving for the Eigenstate

We want to find $|n; +\rangle = \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$ such that:
$$\frac{\hbar}{2} \begin{bmatrix} \cos\theta & \sin\theta e^{-i\phi} \\ \sin\theta e^{i\phi} & -\cos\theta \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} = \frac{\hbar}{2} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix}$$

This leads to the eigenvalue equation:
$$\begin{bmatrix} \cos\theta - 1 & \sin\theta e^{-i\phi} \\ \sin\theta e^{i\phi} & -\cos\theta - 1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} = 0$$

From the first row:
$$c_1 (\cos\theta - 1) + c_2 \sin\theta e^{-i\phi} = 0$$
$$c_2 = \frac{1 - \cos\theta}{\sin\theta} e^{i\phi} c_1$$

Using trigonometric identities:
$$1 - \cos\theta = 2 \sin^2(\theta/2)$$
$$\sin\theta = 2 \sin(\theta/2) \cos(\theta/2)$$

Thus:
$$c_2 = \frac{2 \sin^2(\theta/2)}{2 \sin(\theta/2) \cos(\theta/2)} e^{i\phi} c_1 = \tan(\theta/2) e^{i\phi} c_1$$

The state is then:
$$|n; +\rangle = c_1 \begin{bmatrix} 1 \\ \tan(\theta/2) e^{i\phi} \end{bmatrix}$$

### Normalization

To normalize the state:
$$\langle n; + | n; + \rangle = |c_1|^2 (1 + \tan^2(\theta/2)) = |c_1|^2 \sec^2(\theta/2) = 1$$
$$|c_1|^2 = \cos^2(\theta/2)$$

Choosing $c_1$ to be real and positive:
$$c_1 = \cos(\theta/2)$$
$$c_2 = \cos(\theta/2) \tan(\theta/2) e^{i\phi} = \sin(\theta/2) e^{i\phi}$$

### Final Result

The normalized eigenstate $|n; +\rangle$ in the $S_z$ basis is:
$$|n; +\rangle = \begin{bmatrix} \cos(\theta/2) \\ \sin(\theta/2) e^{i\phi} \end{bmatrix}$$

This represents a general qubit state on the Bloch sphere.
