import type { Temperature } from "../loaders/temperature.ts";

export interface Props {
  location: string;
  temp: Temperature | null;
}

export default function Lugar(props: Props) {
  return (
    <p className="container my-3">
      Current temperature in {props.location}:{" "}
      <span className="font-semibold">
        {props.temp && props.temp.celsius}
      </span>
    </p>
  );
}
