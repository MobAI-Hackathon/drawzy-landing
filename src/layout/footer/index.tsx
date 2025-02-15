// import DownloadWithApple from "../../../public/images/components/download-with-app.png";
// import DownloadWithGoogle from "../../../public/images/components/download-with-google.png";
// import DrawzyLogo from "../../../public/images/components/drawzy-logo.svg";

const Footer = () => {
    return (
        <footer className="bg-purple-900 text-white py-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between">
                <div className="flex flex-col items-start mb-6 md:mb-0">
                    <div className="text-3xl font-bold mb-2">DRAWZY</div>
                    <p className="text-sm">
                        A well-designed gaming footer often incorporates elements
                        such as game characters, iconic symbols, vibrant colors, and 
                        dynamic visuals.
                    </p>
                    <div className="mt-4">
                        <a href="#" className="mr-4">
                            <img src="/path/to/app-store-icon.png" alt="Download on the App Store" />
                        </a>
                        <a href="#">
                            <img src="/path/to/google-play-icon.png" alt="Get it on Google Play" />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row space-x-4 mb-6 md:mb-0">
                    <div>
                        <h5 className="font-semibold">COMPANY</h5>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-300">Products</a></li>
                            <li><a href="#" className="hover:text-gray-300">Apps & Games</a></li>
                            <li><a href="#" className="hover:text-gray-300">Features</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold">HELP</h5>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-300">Support</a></li>
                            <li><a href="#" className="hover:text-gray-300">About</a></li>
                            <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="font-semibold">RESOURCES</h5>
                        <ul className="mt-2">
                            <li><a href="#" className="hover:text-gray-300">Youtube Playlist</a></li>
                            <li><a href="#" className="hover:text-gray-300">How To - Blog</a></li>
                            <li><a href="#" className="hover:text-gray-300">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-6">
                <a href="#" className="mx-2">
                    <img src="/path/to/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/path/to/facebook-icon.png" alt="Facebook" />
                </a>
                <a href="#" className="mx-2">
                    <img src="/path/to/instagram-icon.png" alt="Instagram" />
                </a>
            </div>

            <div className="text-center mt-6">
                <p>© Copyright 2025, All Rights Reserved by board</p>
            </div>
        </footer>
    );
}

export default Footer;