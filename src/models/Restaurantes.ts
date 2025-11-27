class Restaurantes {
  id: number
  category: string
  description: string
  image: string
  title: string
  avaliation: string
  infos: string[]

  constructor(
    id: number,
    category: string,
    description: string,
    image: string,
    title: string,
    avaliation: string,
    infos: string[]
  ) {
    this.id = id
    this.category = category
    this.description = description
    this.image = image
    this.title = title
    this.avaliation = avaliation
    this.infos = infos
  }
}

export default Restaurantes
