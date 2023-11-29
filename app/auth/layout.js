import Image from "next/image";

function AuthLayout({ children }) {
  return (
    <div className="flex flex-row h-full min-h-full">
      <div className="w-1/2">
        <div className="h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1592078615290-033ee584e267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1Mjk5Njd8MHwxfGFsbHx8fHx8fHx8fDE3MDAzNjY4MDd8&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Furniture"
            objectFit="cover"
            objectPosition="center"
            className="h-full w-full"
            fill
          />
        </div>
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
}

export default AuthLayout;
