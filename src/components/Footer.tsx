"use client";


import Button from "./ui/Button";



export default function Footer() {
    const redirectToGithub = (): void => {
        window.open('https://github.com/hudhyfa/plantify.git', '_blank')
    }
    return (
        <>
            <footer className="footer-container w-screen h-[4.7rem] p-4 sm:p-6 md:p-10 flex flex-row justify-between items-center">
                <div className="footer-logo w-auto h-auto">
                    <h3 className="text-[#1c4a36] text-[1.4rem] sm:text-[1.8rem] md:text-[2.125rem] font-semibold
                    font-sans">Plantify</h3>
                </div>
                <div className="footer-gitlink w-auto my-auto">
                    <p className="text-[#1c4a36] font-semibold text-[0.65rem] sm:text-[1rem]">© 2024 Plantify. All rights reserved.</p>
                </div>
                <div className="social-links w-auto h-auto">
                    <Button 
                        label="Github"
                        buttonColor="bg-[#1c4a36]"
                        textColor="text-white"
                        hoverColor="hover:bg-[#346b53]"
                        hoverTextColor="hover:text-white"
                        onClick={redirectToGithub}
                    />
                </div>
            </footer>
        </>
    )
}