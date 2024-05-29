import { GithubLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5]">
        <div className="container flex flex-col items-center justify-center py-8">
          <div className="text-[#717171] font-medium">Desenvolvido por Cauê Souza ©</div>
          <ul className="flex gap-4">
            <li><LinkedinLogo size={32} color="grey"/></li>
            <li><GithubLogo size={32} color="grey"/></li>
            <li><WhatsappLogo size={32} color="grey"/></li>          
          </ul>
        </div>
      </footer>
  )
}
