import Link from "next/link";
import Button from "./ui/Button";


export default function Footer() {
    return (
        <>
            <footer className="footer-container w-screen h-[4.7rem] p-10 flex flex-row justify-between items-center">
                <div className="footer-logo w-auto h-auto">
                    <h3 className="text-[#1c4a36] text-[2.125rem] font-semibold
                    font-sans">Plantify</h3>
                </div>
                <div className="footer-gitlink w-auto h-auto my-auto">
                    <p className="text-[#1c4a36] font-semibold">© 2024 Plantify. All rights reserved.</p>
                </div>
                <div className="social-links w-auto h-auto">
                    <Button 
                        label="Go to Github"
                        buttonColor="bg-[#1c4a36]"
                        textColor="text-white"
                        hoverColor="hover:bg-[#346b53]"
                        hoverTextColor="hover:text-white"
                    />
                </div>
            </footer>
        </>
    )
}