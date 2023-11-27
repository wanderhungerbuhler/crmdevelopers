import {
  CheckCircle,
  Clock,
  Envelope,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react'

export function Pipeline() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-gray-300">Pipeline</h1>

      <div className="grid grid-cols-4 gap-2 mt-8">
        <div className="text-gray-300 overflow-y-scroll h-[500px] p-4 font-semibold bg-gray-200 rounded-lg">
          <span className="text-gray-300 text-sm">Novos</span>

          <div className="bg-white w-full p-2 rounded-lg mt-2 cursor-pointer">
            <header className="flex justify-between">
              <span className="text-[10px] font-semibold">
                Wander Hungerbühler
              </span>
              <p className="text-[10px] font-normal">R$ 2.700,00</p>
            </header>

            <footer className="flex items-center justify-between border-t-[1px] border-gray-100 mt-2 pt-2">
              <div className="flex gap-2">
                <img
                  src="https://github.com/wanderhungerbuhler.png"
                  className="rounded-full w-[25px] h-[25px]"
                  alt="Avatar"
                />

                <button type="button">
                  <Phone className="text-gray-200" />
                </button>

                <button type="button">
                  <WhatsappLogo className="text-gray-200" />
                </button>

                <button type="button">
                  <Envelope className="text-gray-200" />
                </button>
              </div>

              <div className="flex">
                <button className="flex gap-1">
                  <CheckCircle className="text-gray-200" />
                  <p className="text-[10px] text-gray-200">1/2</p>
                </button>

                <button className="flex gap-1">
                  <Clock className="text-gray-200" />
                  <p className="text-[10px] text-gray-200">1h</p>
                </button>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}
