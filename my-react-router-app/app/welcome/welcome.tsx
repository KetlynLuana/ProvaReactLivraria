import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {}
    <div className="flex items-center justify-center pt-16 pb-4">

  Export default function App {}
  return 
    <div className="flex h-screen bg-gray-100">

      <div className="w-52 bg-blue-900 text-white p-5">
        <h1 className="text-xl font-bold mb-8">StudyHub</h1>

        <p className="bg-blue-600 p-2 rounded mb-2">Painel</p>
        <p className="mb-2">Matérias</p>
        <p className="mb-2">Tarefas</p>
        <p>Desempenho</p>
      </div>

      <div className="flex-1 p-6">

        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Painel do Aluno</h2>
            <p className="text-gray-500">Acompanhe suas tarefas, matérias e progresso da semana</p>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Nova tarefa
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-4 rounded shadow">
            <p>Tarefas</p>
            <h1 className="text-3xl font-bold">12</h1>
            <span className="text-blue-600">4 para hoje</span>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p>Concluídas</p>
            <h1 className="text-3xl font-bold">8</h1>
            <span className="text-green-600">Bom desempenho</span>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <p>Pendentes</p>
            <h1 className="text-3xl font-bold">4</h1>
            <span className="text-red-500">Atenção necessária</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">

          <div className="col-span-2 bg-white p-4 rounded shadow">
            <h3 className="font-bold mb-4">Atividades Recentes</h3>

            <p className="border-b py-2">Revisar conteúdo de React - Hoje</p>
            <p className="border-b py-2">Entregar exercício de Tailwind - Amanhã</p>
            <p className="border-b py-2">Estudar componentes - Concluído</p>
            <p className="py-2">Montar página responsiva - Pendente</p>
          </div>

          <div className="bg-blue-900 text-white p-4 rounded shadow">
            <h3 className="font-bold">Progresso</h3>
            <p className="text-sm mt-2">70% concluído</p>

            <div className="w-full bg-blue-300 h-3 rounded mt-4">
              <div className="bg-white h-3 rounded w-[70%]"></div>
            </div>

            <button className="bg-white text-blue-900 w-full mt-4 py-2 rounded">
              Ver relatório
            </button>
          </div>

        </div>

      </div>
    </div>

      
    </div>
