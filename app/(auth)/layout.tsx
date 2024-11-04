const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-sm:h-[80vh] max-sm:my-16  md:bg-[#3797dc] sm:h-full flex items-center justify-center">{children}</div>
    // <div className="h-full flex bg-[#3797dc] items-center justify-center">{children}</div>
  )
}

export default AuthLayout