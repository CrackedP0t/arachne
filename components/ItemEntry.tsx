import * as React from 'react';
import {BagOfCrafting} from 'bagofcrafting';

type Props = {
    bag: BagOfCrafting,
    components?: number[]
}

const ItemEntry = ({bag, components = [0, 0, 0, 0, 0, 0, 0, 0]}: Props) => (
    <div>{bag.calculate(components)}</div>
);

export default ItemEntry;