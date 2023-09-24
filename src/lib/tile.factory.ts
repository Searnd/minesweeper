import { Tile } from "$lib/tile";

export class TileFactory {
  static create(width: number, height: number): Tile[][] {
    const tiles = new Array<Tile[]>(height).fill([]);
    
    return tiles.map(() => TileFactory.createRow(width));
  }

  private static createRow(width: number): Tile[] {
    return new Array<Tile>(width).fill(new Tile());
  }
}