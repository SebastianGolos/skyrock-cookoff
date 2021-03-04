// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`0a000800030303030303020101010303030303030201010105080607090a020101010303030303030201010103030303030302010101020202020204020101010101010101010101010101010101010101010101`, img`
. . . . . . 2 . . . 
. . . . . . 2 . . . 
. . . . . . 2 . . . 
. . . . . . 2 . . . 
. . . . . . 2 . . . 
2 2 2 2 2 . 2 . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.floorLight0,sprites.castle.tileGrass1,sprites.dungeon.stairSouth,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a000800030303030303030303020303030303030303030204030503060308030702030303030303030303020303030303030303030202020202020a020202020101010101010109010101010101010101010101`, img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.floorLight0,sprites.castle.tileGrass1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,sprites.dungeon.stairLarge,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
