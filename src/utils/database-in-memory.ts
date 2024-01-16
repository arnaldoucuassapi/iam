
interface ITech {
  name: string,
  icon: string
}

export class Me {
  private fullName;
  private description;
  private areas;
  private techs: ITech[];

  constructor() {
    this.fullName = "Arnaldo Ucuassapi";
    this.description = "Construindo ótimas soluções para os problemas computacionais";
    this.areas = ["FullStack", "Mobile"];
    this.techs = [
      { name: "PHP", icon: "/php.svg" },
      { name: "JavaScript", icon: "/javascript.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "React.js", icon: "/react.svg" },
      { name: "Next.js", icon: "/next-js.svg" },
      { name: "Java", icon: "/java.svg" },
      { name: "Kotlin", icon: "/kotlin.svg" },
      { name: "React Native", icon: "/react-native.svg" },
    ];
  }

  get myFullName() { return this.fullName }
  get myAreas() { return this.areas }
  get myDescription() { return this.description }
  get myTechs() { return this.techs; }
}