import { AgentType } from '../../utils/type'

interface Props{
    agent: AgentType
}

const Agent:React.FC<Props> = ({agent}) => {
  return (
    <div className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white dark:bg-[#444] dark:text-[whitesmoke]  flex flex-col gap-2 dark:border-[#444]">
      <h2 className="font-semibold text-xl">
        {agent.name} {agent.lastName}
      </h2>
      <span className="text-xl font-normal ">{agent.phoneNumber}</span>
      <span className="text-xl font-normal ">{agent.agentIdentity}</span>
    </div>
  )
}

export default Agent