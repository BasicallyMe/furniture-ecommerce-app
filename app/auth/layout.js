import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <div className="flex flex-row h-full min-h-full max-h-screen">
      <div className="w-2/5 relative">
        <div className="h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1618220179428-22790b461013?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDY3MTM3NzJ8&ixlib=rb-4.0.3&q=85"
            alt="Furniture"
            objectFit="cover"
            objectPosition="center"
            className="h-full w-full"
            fill
          />
        </div>
      </div>
      <div className="w-3/5">{children}</div>
    </div>
  );
}

export default AuthLayout;
