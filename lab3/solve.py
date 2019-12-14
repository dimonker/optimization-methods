import numpy as np
import matplotlib.pylab as plt
%matplotlib inline

def f(X):
     return (X[0]**2 + X[1] - 11)**2 + (X[0] + X[1]**2 - 7)**2


# Аналитический способ вычисления производных

def theory_df(X):
    derivative_x1 = 2 * (-7 + X[0] + X[1] ** 2 + 2 * X[0] * (-11 + X[0]**2 + X[1]))
    derivative_x2 = 2 * (-11 + X[0]**2 + X[1] + 2 * X[1] * (-7 + X[0] + X[1] ** 2))
    
    return np.array([derivative_x1, derivative_x2])

def theory_ddf(X):
    derivative_x1_x1 = -42 + 12 * X[0]**2 + 4 * X[1]
    derivative_x2_x2 = -26 + 4 * X[0] + 12 * X[1]**2
    derivative_x1_x2 = 4 * (X[0] + X[1])
    
    return np.array([[derivative_x1_x1, derivative_x1_x2], [derivative_x1_x2, derivative_x2_x2]])

# Численный способ вычисления производных

# Метод конечных разностей

def numerical_df(X, dx = 1e-6):    
    derivative_x1 = (f([X[0] + dx, X[1]]) - f([X[0] - dx, X[1]])) / (2*dx)
    derivative_x2 = (f([X[0], X[1] + dx]) - f([X[0], X[1] - dx])) / (2*dx)
            
    return np.array([derivative_x1, derivative_x2])

def numerical_ddf(X, dx = 1e-3):
    derivative_x1_x1 = (f([X[0] + dx, X[1]]) - 2 * f([X[0], X[1]]) + f([X[0] - dx, X[1]])) / (dx**2)
    derivative_x2_x2 = (f([X[0], X[1] + dx]) - 2 * f([X[0], X[1]]) + f([X[0], X[1] - dx])) / (dx**2)
    derivative_x1_x2 = (f([X[0] + dx, X[1] + dx]) - f([X[0], X[1] - dx]) - f([X[0] - dx, X[1]]) + f([X[0] + dx, X[1] + dx])) / (4 * dx**2)
    
    return np.array([[derivative_x1_x1, derivative_x1_x2], [derivative_x1_x2, derivative_x2_x2]])


# Метод

from numpy import linalg

def newton(X0, df, ddf, e):
    X_k = X0
    while linalg.norm(df(X_k)) > e:
        X_k = X_k - np.dot(linalg.inv(ddf(X_k)), df(X_k))
    
    return X_k

# newton([4, 3], theory_df, theory_ddf, 0.0001)

newton([4, 3], numerical_df, numerical_ddf, 0.0001)
array([3.3851536 , 0.07385336])


[[None, None], [None, None]]