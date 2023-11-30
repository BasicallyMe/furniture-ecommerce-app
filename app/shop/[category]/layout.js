import Navigation from "@/app/(components)/Navigation";

function CategoryLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}

export default CategoryLayout;
