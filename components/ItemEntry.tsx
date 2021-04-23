import { BagOfCrafting } from 'bagofcrafting';
import * as React from 'react';

import styles from "./ItemEntry.module.css";

type Props = {
    bag: BagOfCrafting,
    components: number[],
    items: any
}

type State = {
    components: number[]
}

const Pickup = ({ cont, index }: { cont: ItemEntry, index: number }) => (
    <input type="number" value={cont.state.components[index]} onChange={ev =>
        cont.setState((state: State, _props: Props) => {
            let comps = Array.from(state.components);
            comps[index] = parseInt(ev.target.value);
            return {
                components: comps
            }
        })} />
);

const ItemBox = ({ item_id, name }: { item_id: number, name: string }) => (
    <>
    <div>{name}</div>
    <div className={`sprite i${item_id}`}></div>
    </>
);

class ItemEntry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            components: props.components
        };
    }
    render() {
        let item_id = this.props.bag.calculate(this.state.components);
        return <div className={styles.item_entry}>
            <div className={styles.pickups}>
                {this.state.components.map((_comp, index) => <Pickup cont={this} index={index} key={index} />)}
            </div>
            <div>
                <ItemBox item_id={item_id} name={this.props.items[item_id].name} />
            </div>
        </div>;
    }
}

export default ItemEntry;