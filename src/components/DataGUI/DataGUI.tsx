import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ScrollArea } from "../ui/scroll-area";

export default function DataGUI() {
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
          <h2 className="text-lg font-bold">Data</h2>
          <ScrollArea className="h-48 border shadow-inner rounded-sm">
            <ul>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
            </ul>
          </ScrollArea>
          <h2 className="col-start-2 row-start-1 text-lg font-bold">Edges</h2>
          <ScrollArea className="h-48 border shadow-inner rounded-sm">
            <ul>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
              <li>Data</li>
            </ul>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
