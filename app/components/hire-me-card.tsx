import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "./ui/card";
import { Button } from "./ui/button";
import config from '../config/site'

export default function HireMe() {
  return (
    <Card className="border-l-4	 border-green-600">
      <CardHeader>
        <CardTitle>🤝 Hire me!</CardTitle>
        <CardDescription>
          I build web apps for startups, businesses, and public institutions as a freelance web developer and designer. Let's discuss your needs and see how I can help.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="bg-green-600 hover:bg-green-400"><a href={`mailto:${config.contactEmail}`}>Hire Me</a></Button>
      </CardContent>
    </Card>
  );
}
