# Reglas de tipos

## Tipos

- int
- string
- bool

## int

$$
Γ ⊢ a : int \\
{Γ ⊢ b : int \over a + b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : int \over a - b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : int \over a * b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : int \over a / b : int}
$$


## int y bool

$$
Γ ⊢ a : int \\
{Γ ⊢ b : bool \over a + b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : bool \over a - b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : bool \over a / b : int}
$$

$$
Γ ⊢ a : int \\
{Γ ⊢ b : bool \over a * b : int}
$$

## bool
$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a + b : int}
$$

$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a - b : int}
$$

$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a / b : int}
$$

$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a * b : int}
$$



### Todas las otras operaciones que no esten retornan error