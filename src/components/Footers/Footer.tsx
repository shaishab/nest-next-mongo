export default function Footer() {

  return (
    <>
      <footer className="bg-teal-500 mt-auto">
        <div className="px-4 py-3 text-white mx-auto">
            <div className="flex">
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Product</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Services</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Team</a>
                    <a href="#" className="text-xs uppercase tracking-wider">More...</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Contact</a>
                    <a href="#" className="text-xs uppercase tracking-wider">About</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Careers</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Affiliates</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">Facebook</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Github</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Twitter</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Stack Overflow</a>
                </div>
                <div className="flex-grow flex flex-col">
                    <a href="#" className="text-xs uppercase tracking-wider">FAQ's</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Open</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Launch Up</a>
                    <a href="#" className="text-xs uppercase tracking-wider">Get Started</a>
                </div>
            </div>
            <div className="text-right text-xs py-2">
                <a href="">&copy;2022 nest-next-mongo</a>
            </div>
        </div>
    </footer>
    </>
  )
}