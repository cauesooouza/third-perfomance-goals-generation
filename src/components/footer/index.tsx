import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
        <div className="container flex flex-col items-center justify-center py-8">
          <div className="text-[#717171] font-medium">Desenvolvido por Cauê Souza ©</div>
          <ul className="flex gap-4">
            <a href="https://www.linkedin.com/in/cauesooouza/" target="_blank" rel="noopener noreferrer">
            <li><LinkedinLogo size={32} color="grey"/></li>
            </a>
            <a href="https://github.com/cauesooouza/" target="_blank" rel="noopener noreferrer">
            <li><GithubLogo size={32} color="grey"/></li>
            </a>
            <a href="https://api.whatsapp.com/send?phone=5513981509766" target="_blank" rel="noopener noreferrer">
            <li><WhatsappLogo size={32} color="grey"/></li>          
            </a>
          </ul>
        </div>
      </footer>
  )
}
