export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  a: number;

  b: number;

  c: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides can`t be less or equal 0');
    }

    if (this.a > this.b && this.a > this.c) {
      if (this.a >= this.b + this.c) {
        throw new Error(
          `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
        );
      }
    } else if (this.b > this.a && this.b > this.c) {
      if (this.b >= this.a + this.c) {
        throw new Error(
          `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
        );
      }
    } else if (this.c > this.a && this.c > this.b) {
      if (this.c >= this.a + this.b) {
        throw new Error(
          `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
        );
      }
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius can`t be less or equal 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  heigth: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, heigth: number) {
    this.color = color;
    this.width = width;
    this.heigth = heigth;

    if (this.heigth <= 0 || this.width <= 0) {
      throw new Error('Heigth or width can`t be less or equal 0');
    }
  }

  getArea(): number {
    const area = this.width * this.heigth;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
