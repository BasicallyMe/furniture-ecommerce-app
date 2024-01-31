import Link from "next/link";

function SignUp() {
  return (
    <div className="h-full p-8 flex flex-row items-center">
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-6 text-blue-600">Create your account</h2>
        <form>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col py-2">
              <label
                htmlFor="firstname"
                className="text-xs text-slate-500 font-medium mb-2"
              >
                First name
              </label>
              <input
                className="border px-2 py-2 rounded-md"
                name="firstname"
                id="firstname"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label
                htmlFor="lastname"
                className="text-xs text-slate-500 font-medium mb-2"
              >
                Last name
              </label>
              <input
                className="border px-2 py-2 rounded-md"
                name="lastname"
                id="lastname"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-col py-2">
            <label
              htmlFor="email"
              className="text-xs text-slate-500 font-medium mb-2"
            >
              Email
            </label>
            <input
              className="border px-2 py-2 rounded-md"
              name="email"
              id="email"
              type="email"
            />
          </div>
          <div className="flex flex-col py-2">
            <label
              htmlFor="password"
              className="text-xs text-slate-500 font-medium mb-2"
            >
              Password
            </label>
            <input
              className="border px-2 py-2 rounded-md"
              name="password"
              id="password"
              type="password"
            />
          </div>
          <input
            type="submit"
            value="Sign up"
            className="bg-blue-500 w-full py-2 rounded-md mt-4 text-white font-medium text-sm cursor-pointer"
          />
        </form>
      </div>
      <div className="h-48 w-px bg-slate-300 mx-7" />
      <div className="w-full ">
        <h2 className="font-bold text-2xl mb-2 text-blue-500">Already a customer?</h2>
        <p className="text-slate-500 text-xs font-medium">
          Your wishlist is just a few clicks away. Head to our{" "}
          <Link
            className="text-blue-600 hover:underline hover:underline-offset-2"
            href="/auth/signin"
          >
            Sign In
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
