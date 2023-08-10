import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext';
import { AuthContextType } from '../../context/AuthContextType';
import { useQuery } from '@tanstack/react-query';
import newRequest from '../../Request';
import ErrorComponent from '../errorComponent/ErrorComponent';
import Loader from '../loader/Loader';
import Warnings from '../warnings/Warnings';
import Agent from '../agent/Agent';
import { AgentType } from '../../utils/type';

const Agents = () => {
    const { token } = useContext(AuthContext) as AuthContextType;
    const { data, error, isLoading } = useQuery({
      queryKey: ["agent"],
      queryFn: () => {
        return newRequest(token)
          .get("Agent")
          .then((result) => result.data.data)
          .catch((error) => console.log(error));
      },
    });
  
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    {error ? (
      <div className="col-span-full">
        <ErrorComponent />
      </div>
    ) : isLoading ? (
      <Loader />
    ) : data.length ? (
      data.map((e: AgentType) => <Agent key={e.id} agent={e} />)
    ) : (
      <Warnings msg={"No hay multas aun registradas"} />
    )}
  </div>
  )
}

export default Agents