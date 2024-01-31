import Link from "next/link";

function SignIn() {
  return (
    <div className="h-full p-8 flex flex-row justify-between items-center">
      <div className="w-full">
        <h2 className="font-bold text-3xl mb-6 text-blue-600">Sign In</h2>
        <form>
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
            value="Sign in"
            className="bg-blue-500 w-full py-2 rounded-md mt-4 text-white font-medium text-sm cursor-pointer"
          />
        </form>
      </div>
      <div className="h-48 w-px bg-slate-300 mx-7" />
      <div className="w-full ">
        <h2 className="font-bold text-2xl mb-2 text-blue-500">New here?</h2>
        <p className="text-slate-500 text-xs font-medium">
          Create your account in a few easy steps. Head to our{" "}
          <Link
            className="text-blue-600 hover:underline hover:underline-offset-2"
            href="/auth/signup"
          >
            Sign Up
          </Link>{" "}
          page.
        </p>
      </div>
    </div>
  );
}

export default SignIn;
