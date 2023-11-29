import Link from "next/link";

function SignIn() {
  return (
    <div className="h-full p-8 flex flex-col justify-evenly">
      <p className="text-xs font-medium text-slate-700">
        {`Don't`} have an account?{" "}
        <Link href="/auth/signup" className="text-blue-500">
          Sign up
        </Link>
      </p>
      <div className="py-3">
        <h2 className="font-bold text-3xl mb-6">Sign In</h2>
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
            className="bg-blue-500 w-full py-3 rounded-md mt-4 text-white font-medium text-sm cursor-pointer"
          />
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default SignIn;
