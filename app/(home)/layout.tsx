import Topbar from "@/components/layout/Topbar"
// import FooterPage from "@/components/layout/Footer"

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Topbar />
      {children}
      {/* <FooterPage/> */}
    </>
  )
}

export default HomeLayout