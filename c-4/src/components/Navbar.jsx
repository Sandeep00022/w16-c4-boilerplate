import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20, display:"flex", gap:"20px",justifyContent:"center",fontSize:"30px", fontWeight:"bolder",  }}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
     <div>
     <Link to="/">Home</Link>
     </div>
     <div>
     <Link to="/products">Proudcts</Link>
     </div>
     <div>
     <Link to="/about">About</Link>
     </div>
     <div>
     <Link to="/products/men">Men</Link>
     </div>
     <div>
     <Link to="/products/women">Women</Link>
     </div>

     <div>
     <Link to="/products/kid">Kid</Link>
     </div>


    </nav>
  );
};
