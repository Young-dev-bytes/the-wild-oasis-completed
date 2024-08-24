import { useState } from "react";
import { faker } from "@faker-js/faker";
import "./Test.css";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function ProductItem({ product }) {
  return (
    <li className="product">
      <p className="product-name">{product.productName}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-description">{product.description}</p>
    </li>
  );
}

function CompanyItem({ company, defaultVisibility }) {
  const [isVisible, setIsVisisble] = useState(defaultVisibility);

  return (
    <li
      className="company"
      onMouseEnter={() => setIsVisisble(true)}
      onMouseLeave={() => setIsVisisble(false)}
    >
      <p className="company-name">{company.companyName}</p>
      {isVisible && (
        <p className="company-phrase">
          <strong>About:</strong> {company.phrase}
        </p>
      )}
    </li>
  );
}

function List({ title, items, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);

  console.log("items.slice(0, 3)", items?.slice(0, 3));
  const displayItems = isCollapsed ? items?.slice(0, 3) : items;

  function toggleOpen() {
    setIsOpen((isOpen) => !isOpen);
    setIsCollapsed(false);
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>
          {isOpen ? <span>&or;</span> : <span>&and;</span>}
        </button>
      </div>
      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
        {isCollapsed ? `Show all ${items?.length}` : "Show less"}
      </button>
    </div>
  );
}

// LATER: Let's say we got this component from a 3rd-party library, and can't change it. But we still want to add the 2 toggle functionalities to it
function ProductList(props, items) {
  console.log("ProductListprops", props);
  console.log("items", items);

  return (
    <ul className="list">
      {props.items.map((product) => (
        <ProductItem key={product.productName} product={product} />
      ))}
    </ul>
  );
}

const ProductListWithToggles = withToggles(ProductList);

function withToggles(WrappedComponent) {
  return function List(props) {
    console.log("props", props);
    const [isOpen, setIsOpen] = useState(true);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const items = props.items;
    const displayItems = isCollapsed ? items?.slice(0, 3) : items;

    function toggleOpen() {
      setIsOpen((isOpen) => !isOpen);
      setIsCollapsed(false);
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>
            {isOpen ? <span>&or;</span> : <span>&and;</span>}
          </button>
        </div>
        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}>
          {isCollapsed ? `Show all ${items?.length}` : "Show less"}
        </button>
      </div>
    );
  };
}

export default function TestHOC() {
  return (
    <div>
      <h1>HOC Demo</h1>
      <div className="col-2">
        <ProductList title="Products HOC" items={products} />
        <ProductListWithToggles title="Products HOC" items={products} />
      </div>
      {/* <div className="col-2">
        <List
          title="Products"
          items={products}
          render={function (product) {
            return <ProductItem key={product.productName} product={product} />;
          }}
        />
        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={false}
            />
          )}
        />
      </div> */}
    </div>
  );
}
