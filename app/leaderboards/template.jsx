import Footer from "@/components/homepage/Footer"
export default function Template({ children }) {
  return <div className="z-0 ">{children}
  <div className="relative z-10">
  <Footer/>
  </div>
  </div>
}