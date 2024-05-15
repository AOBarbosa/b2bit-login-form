export function ProfileSkeleton() {
  return (
    <>
      <div className="flex size-20 flex-col items-center space-y-2">
        <h1 className="text-xs font-semibold">Profile picture</h1>
        <div className="size-16">
          <img
            className="rounded-lg"
            src="https://github.com/AOBarbosa.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex w-full flex-col space-y-4 px-7">
        <section className="flex w-full flex-col space-y-2">
          <h1>
            Your <span className="font-bold">Name</span>
          </h1>

          <p className="flex h-11 animate-pulse items-center rounded-lg bg-zinc-400 p-5"></p>
        </section>

        <section className="flex w-full flex-col space-y-2">
          <h1>
            Your <span className="font-bold">E-mail</span>
          </h1>

          <p className="flex h-11 animate-pulse items-center rounded-lg bg-zinc-400 p-5"></p>
        </section>
      </div>
    </>
  )
}
