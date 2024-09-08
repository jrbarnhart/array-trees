import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

export default function DataGUI({
  ...props
}: {
  data: string[];
  edges: [number, number][];
}) {
  const { data, edges } = props;
  return (
    <div className="max-w-xl w-full">
      <Card>
        <CardHeader>
          <CardTitle>Array Tree Data</CardTitle>
          <CardDescription>
            The raw data stored in the data and edges arrays.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-rows-[min-content_1fr] grid-cols-2 gap-x-2">
          <h2 className="text-lg font-bold">
            Data{" "}
            <span className="text-xs text-muted-foreground">Index - Data</span>
          </h2>
          <ScrollArea className="h-48 p-1 w-full border shadow-inner rounded-sm">
            <ul>
              {data.map((entry, index) => (
                <li
                  className="whitespace-nowrap"
                  key={index}
                >{`${index.toString()} - ${entry}`}</li>
              ))}
            </ul>
          </ScrollArea>
          <h2 className="col-start-2 row-start-1 text-lg font-bold">
            Edges{" "}
            <span className="text-xs text-muted-foreground">
              Parent - Child
            </span>
          </h2>
          <ScrollArea className="h-48 p-1 border shadow-inner rounded-sm">
            <ul>
              {edges.map((entry, index) => (
                <li
                  key={index}
                >{`${entry[0].toString()} - ${entry[1].toString()}`}</li>
              ))}
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
