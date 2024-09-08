import { useEffect, useRef } from "react";
import { DataSet, Edge, Network, Options } from "vis-network/standalone";

export default function Graph({
  ...props
}: {
  dataArray: string[];
  edgesArray: [number, number][];
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { dataArray, edgesArray } = props;

  useEffect(() => {
    const visNodes = new DataSet(
      dataArray.map((data, index) => ({ id: index, label: data }))
    );
    const visEdges = new DataSet<Edge>(
      edgesArray.map((edge) => ({ from: edge[0], to: edge[1] }))
    );
    const data = {
      nodes: visNodes,
      edges: visEdges,
    };
    const options: Options = {};
    let network: Network | undefined;
    if (containerRef.current) {
      network = new Network(containerRef.current, data, options);
    }

    return () => {
      if (network) {
        network.destroy();
      }
    };
  }, [dataArray, edgesArray]);

  return (
    <div
      className="w-full max-w-xl h-[400px] border shadow-inner rounded-md"
      ref={containerRef}
    ></div>
  );
}
