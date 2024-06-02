export interface Props {
  code?: string;
  description?: string;
}

export default function Cupom(props: Props) {
  return (
    <div className="container">
      <p>
        Cupom code: <span className="text-semibold">{props.code}</span>
      </p>
      <p>{props.description}</p>
    </div>
  );
}
