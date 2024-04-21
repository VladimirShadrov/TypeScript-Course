// Упражнение "Перегрузка методов"

class User {
  skills: string[];

  addSkill(skill: string): void;
  addSkill(skill: string[]): void;
  addSkill(skill: string | string[]): void {
    if (typeof skill === 'string') {
      this.skills.push(skill);
    } else if (Array.isArray(skill)) {
      this.skills = [...this.skills, ...skill];
    }
  }
}

// Упражнение "Делаем корзину товаров"
type TDelivery = ClientDelivery | PointDelivery;
class Product {
  public id: number;
  public price: number;
  public title: string;
}

class Delivery {
  constructor(public date: Date) {}
}

class ClientDelivery extends Delivery {
  constructor(date: Date, public address: string) {
    super(date);
  }
}

class PointDelivery extends Delivery {
  constructor(public pointId: number) {
    super(new Date());
  }
}

class Cart {
  private products: Product[] = [];
  private delivery: TDelivery;

  public addProduct(product: Product) {
    this.products.push(product);
  }

  public deleteProduct(productId: number) {
    const index = this.products.findIndex((product) => product.id === productId);

    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  getTotalCost(): number {
    return this.products.map((product: Product) => product.price).reduce((acc, price) => acc + price, 0);
  }

  setDelivery(delivery: TDelivery) {
    this.delivery = delivery;
  }

  checkout() {
    if (!this.products.length) {
      throw new Error('В корзину ничего не добавлено');
    }

    if (!this.delivery) {
      throw new Error('Не указан способ доставки');
    }

    return { success: true };
  }
}
