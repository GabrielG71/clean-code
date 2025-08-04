import { useState } from "react";

interface Product {
  title: string;
  price: string;
}

const productList: Product[] = [
  {
    title: "Pasta",
    price: "R$ 25,00",
  },
  {
    title: "Burger",
    price: "R$ 30,00",
  },
];

export function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  function handleSearch(searchTerm: string) {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search product..."
        onChange={(e) => handleSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div key={product.title}>
          <p>{product.title}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
