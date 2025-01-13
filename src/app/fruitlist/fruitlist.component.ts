import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {


  fruitlist = [
    {
      name: "Apfel",
      img:"apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 2.3,
      reviews:[{name: "Kevin W.", text: "ist lecker"},{name: "Arne P.", text: "nicht so meins"}],
    },
    {
      name: "Banane",
      img:"banana.png",
      description: "Bananen können bis zu 30 Zentimeter lang werden. Im reifen Zustand ist die Schale dick und gelb und lässt sich leicht abziehen. Das cremige bis gelbe Fruchtfleisch ist zunächst fest und stärkehaltig.",
      genus: "Bananengewächse (Musaceae) innerhalb der Einkeimblättrigen Pflanzen (Monokotyledonen)",
      stars: 3.8,
      reviews:[],
    },
    {
      name: "Sauerkirsche",
      img:"cherry.png",
      description: "Die Steinfrucht der Sauerkirsche hat einen Durchmesser von 15 bis 20 mm, ist etwa kugelförmig, etwas höher, breiter, unbehaart, frostfrei, hell- bis dunkelrot. Das Fruchtfleisch ist sauer und rot oder farblos.",
      genus: "Pflanzenart aus der Familie der Rosengewächse (Rosaceae)",
      stars: 3.7,
      reviews:[{name: "Horst", text: "definitiv nicht süß"}],
    },
    {
      name: "Erdbeere",
      img:"strawberry.png",
      description: "Aus Erdbeeren lässt sich beispielsweise Marmelade herstellen. Die Pflege von Pflanzen ist etwas mühsam, aber es lohnt sich. Erdbeeren aus dem eigenen Garten schmecken in vielen Fällen besser als Obst aus dem Supermarkt",
      genus: "Pflanzenart aus der Familie der Rosengewächse (Rosaceae)",
      stars: 4.3,
      reviews:[{name: "Mandy K.", text: "perfekt für Kuchen"},{name: "Olaf P.", text: "Kann man auch mal machen"}],
    },
    {
      name: "Zitrone",
      img:"lemon.png",
      description: "Der immergrüne Baum bringt längliche, ovale Früchte (Zitronen) mit gelber oder gelbgrüner Schale hervor. Das saftige, säuerliche Fruchtfleisch enthält etwa 3,5–8 % Zitronensäure und erhebliche Mengen an Vitamin C.",
      genus: "Pflanzenart aus der Familie der  Rautengewächse",
      stars: 1.3,
      reviews:[{name: "Horst", text: "auch definitiv nicht süß"},{name: "Paul K.", text: "nicht perfekt für Kuchen"}],
    },
    {
      name: "Orange",
      img:"orange.png",
      description: "Das Innere der Orangenschale ist weiß und kann nicht gegessen werden. Es muss vor dem Verzehr abgeschält werden. Orangen können zu verschiedenen Produkten verarbeitet werden. Ihre gepressten Säfte werden als Orangensaft verkauft. Den Duft der Orangenschale nutzt man zur Herstellung eines Parfüms. Der Tee wird aus getrockneten Orangenschalen hergestellt.",
      genus: "Pflanzenart aus der Familie der  Rautengewächse",
      stars: 4.7,
      reviews:[{name: "Kevin W.", text: "Ganz gut in der Regel!"},{name: "Oliver J.", text: "Absoluter Favorit beim Frühstück"}],
    },
  ]
}
