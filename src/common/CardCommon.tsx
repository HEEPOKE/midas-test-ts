import { Card } from "react-bootstrap";

interface CardCommonPros {
  topic: string;
  title: string;
  content: JSX.Element;
}

export function CardCommon({ topic, title, content }: CardCommonPros) {
  return (
    <Card className="mt-5">
      <Card.Header>{topic}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        {content}
      </Card.Body>
    </Card>
  );
}
