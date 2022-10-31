import { ImFacebook, ImYoutube, ImTwitter } from "react-icons/im"
import Link from "next/link"

import Newsletter from "./_child/newsletter"

export default function footer() {

const bg = {
  backgroundImage: "url('/images/footer.png')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom-left"
}

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="p-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a><ImFacebook color="#888888" /></a>
            </Link>
            <Link href={"/"}>
              <a><ImTwitter color="#888888" /></a>
            </Link>
            <Link href={"https://www.youtube.com/c/DailyTuition"}>
              <a><ImYoutube color="#888888" /></a>
            </Link>
          </div>
          <p className="py-5 text-gray-400">Copyright &copy;2022 All rights reserved | This template is made by watching Daily Tuition youtube</p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  )
}
