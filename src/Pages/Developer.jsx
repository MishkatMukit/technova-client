import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Developer = () => {
    return (
        <div className='max-w-[90%] mx-auto mt-16 mb-10 bg-[radial-gradient(circle_at_top_center,rgba(66,105,226,0.2),transparent_70%)]  bg-no-repeat'>
            {/* About Section */}
            <div className="text-center max-w-200 mx-auto space-y-2 p-4">
                <h2 className="text-4xl font-bold text-secondary">About Us</h2>
                <p className="text-black">
                    TechNova was developed by a dedicated team of Computer Science students
                    passionate about creating innovative e-commerce solutions. Our
                    development team combines modern web technologies with user-centric
                    design principles to build a seamless shopping platform.
                </p>
            </div>

            {/* Developers */}
            <h2 className="text-xl font-bold text-secondary mt-10 text-center">
                Meet The Devs
            </h2>

            <div className="flex flex-col items-center justify-center md:flex-row py-4 gap-5">
                {/* Developer 1 */}
                <div className="w-full max-w-sm rounded-xl shadow-xl mt-6 border border-blue-200">
                    <div className="h-100 bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center">

                        <img
                            className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
                            src="https://i.postimg.cc/wT1gY3Bg/mishkatmahabub.jpg"
                            alt="Mishkat Mahabub"
                        />

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">
                            Mishkat Mahabub
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-black dark:text-white font-semibold">
                                ID : C233039
                            </p>
                            <p className="text-black dark:text-white font-semibold">
                                Department : CSE
                            </p>
                        </div>
                        <p className='mt-2 text-sm p-2 rounded-xl bg-blue-300'>Full Stack Developer</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                            A dedicated web developer with a strong focus on building responsive,
                            user-friendly websites using modern UI principles and clean, maintainable code.
                        </p>


                        <div className="flex gap-4 mt-5">
                            <a
                                href="https://github.com/MishkatMukit"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=mahabubmishkat8@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition"
                            >
                                <MdEmail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Developer 2 */}
                <div className="w-full max-w-sm rounded-xl shadow-xl mt-6">
                    <div className="h-100 bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-blue-200">
                        <img
                            className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
                            src="https://i.postimg.cc/mrdPBwnp/sajid.jpg"
                            alt="Muhammad Shajedul Islam"
                        />

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">
                            Shajedul Islam
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-black dark:text-white font-semibold">
                                ID : C233036
                            </p>
                            <p className="text-black dark:text-white font-semibold">
                                Department : CSE
                            </p>
                        </div>
                        <p className='mt-2 text-sm p-2 rounded-xl bg-green-300'>Frontend Developer</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                            A dedicated web developer with a strong focus on building responsive,
                            user-friendly websites using modern UI principles and clean, maintainable code.
                        </p>

                        <div className="flex gap-4 mt-5">
                            <a
                                href="https://github.com/Sajid5659"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=muhammadshajedulislam@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition"
                            >
                                <MdEmail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Dev 3 */}
                <div className="w-full max-w-sm rounded-xl shadow-xl mt-6">
                    <div className="h-100 bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-blue-200">
                        <img
                            className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
                            src="https://avatars.githubusercontent.com/u/63724484?v=4"
                            alt="Shoriful Haque nobin"
                        />

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">
                            Tamizullah Kabbo
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-black dark:text-white font-semibold">
                                ID : C233263
                            </p>
                            <p className="text-black dark:text-white font-semibold">
                                Department : CSE
                            </p>
                        </div>
                        <p className='mt-2 text-sm p-2 rounded-xl bg-green-300'>Frontend Developer</p>
                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                            A dedicated web developer with a strong focus on building responsive,
                            user-friendly websites using modern UI principles and clean, maintainable code.
                        </p>

                        <div className="flex gap-4 mt-5">
                            <a
                                href="https://github.com/kabbotalukder"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=Nobin1322000@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition"
                            >
                                <MdEmail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Dev 4 */}
                {/* <div className="w-full max-w-sm rounded-xl shadow-xl mt-6">
                    <div className="h-100 bg-white dark:bg-gray-900 rounded-lg p-6 flex flex-col items-center text-center border border-blue-200">
                        <img
                            className="w-24 h-24 rounded-full border-2 border-blue-500 object-cover"
                            src="https://i.postimg.cc/KjhdY2WM/44979667-2024575017789107-3176308197212291072-n.jpg"
                            alt="Tawsiful Islam Sotaz"
                        />

                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white my-4">
                            Tawsiful Islam Sotaz
                        </h2>

                        <div className="flex gap-4">
                            <p className="text-black dark:text-white font-semibold">
                                ID : C233009
                            </p>
                            <p className="text-black dark:text-white font-semibold">
                                Department : CSE
                            </p>
                        </div>
                        <p className='mt-2 text-sm p-2 rounded-xl bg-green-300'>Frontend Developer</p>

                        <p className="text-gray-600 dark:text-gray-300 mt-2 text-sm line-clamp-3">
                            A dedicated web developer with a strong focus on building responsive,
                            user-friendly websites using modern UI principles and clean, maintainable code.
                        </p>


                        <div className="flex gap-4 mt-5">
                            <a
                                href="https://github.com/Tawsiful123"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white transition"
                            >
                                <FaGithub size={24} />
                            </a>

                            <a
                                href="https://mail.google.com/mail/?view=cm&to=tawsifulislam13502@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-red-500 dark:text-gray-300 dark:hover:text-red-400 transition"
                            >
                                <MdEmail size={24} />
                            </a>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Developer;
