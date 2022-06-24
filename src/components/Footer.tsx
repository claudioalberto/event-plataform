import { LogoRockseat } from "./LogoRockeseat";

export function Footer() {
    return (
        <footer className="py-6 border-t border-gray-500 ">
            <div className="flex flex-col md:flex-row items-center justify-between px-8 max-w-[1100px] mx-auto">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                    <LogoRockseat />
                    <span className="text-gray-300">Rocketseat - Todos os direitos reservados</span>
                </div>
                <div className="mt-6 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-gray-200 transition-colors">Políticas de privacidade</a>
                </div>
            </div>
        </footer>
    )
}