import { Github } from "lucide-react"
import { Button } from "./components/ui/button"
import { Separator } from "./components/ui/separator"
import { Textarea } from "./components/ui/textarea"

export function App() {
  return (    
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Upload.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Desenvolvido com 💜 no NLW da Rocketseat
          </span>

          <Separator orientation="vertical" className="h-6"/>

          <Button variant="outline">
            <Github className="w-4 h-4 mr-2"/>
            Github
          </Button>
        </div>
      </div>
      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea></Textarea>
            <Textarea></Textarea>

          </div>

          <p className="text-sm text-muted-foreground">
            lembre-se: voce pode utilizar a variavel <code className="text-violet-400">{"{transciption}"}</code> no seu prompt para adicionar o seu conteudo da transcricao do video selcionado.
          </p>
        </div>
        <aside className="w-88"></aside>
      </main>
    </div>
  )
}
