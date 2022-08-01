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

## int y str

$$
Γ ⊢ a : int \\
{Γ ⊢ b : str \over a * b : str}
$$

## str

$$
Γ ⊢ a : str \\
{Γ ⊢ b : str \over a + b : str}
$$

## bool

$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a | b : bool}
$$

$$
Γ ⊢ a : bool \\
{Γ ⊢ b : bool \over a \& b : bool}
$$

### Todas las otras operaciones que no esten retornan error