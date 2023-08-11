# collatz-canvas

A React web application with a C++ backend which will visualize the Collatz Conjecture (or 3n + 1 problem).

You can run the project locally within Docker
```
docker-compose up --build
```

This will spin up two containers, one running the React frontend, and another running the C++ backend.

You can access the website by visiting ```http://localhost:3000/```. Then, you can enter a positive natural number and click enter. The page will load as the Collatz sequence is generated. Then, it will be displayed to you. You can click back on the top left to continue exploring other Collatz sequences.
