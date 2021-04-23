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

const Pickup = ({ cont, index }: { cont: ItemEntry, index: number }) => {
    const pickup_names: Array<string> = [
        "Heart", "Soul Heart", "Black Heart", "Eternal Heart", "Gold Heart", "Bone Heart", "Rotten Heart",
        "Penny", "Nickel", "Dime", "Lucky Penny",
        "Key", "Golden Key", "Charged Key",
        "Bomb", "Golden Bomb", "Giga Bomb",
        "Micro Battery", "Lil Battery", "Mega Battery",
        "Card", "Pill", "Rune", "Dice Shard", "Cracked Key"
    ];

    return (
        <div className={styles.slot}>
            <div className={styles.threads}>
                {pickup_names.map((name, p) => {
                    let components = Array.from(cont.state.components);
                    components[index] = p + 1;
                    let item_id = cont.props.bag.calculate(components);
                    let item_name = cont.props.items[item_id].name;
                    return <div key={p} className={styles.thread}>
                        <div className={styles.pickup} style={{
                            backgroundPositionX: (p + 1) % 8 * -32,
                            backgroundPositionY: Math.floor((p + 1) / 8) * -32
                            }}></div>
                        <div className={`sprite i${item_id}`} title={item_name}></div>
                    </div>;
                })}
            </div>
            <select value={cont.state.components[index]} onChange={ev =>
                cont.setState((state: State, _props: Props) => {
                    let comps = Array.from(state.components);
                    comps[index] = parseInt(ev.target.value);
                    return { components: comps }
                })}>
                {pickup_names.map((name, p) => (<option key={p} value={p + 1}>{name}</option>))}
            </select>
        </div>
    )
};

const ItemBox = ({ item_id, name }: { item_id: number, name: string }) => (
    <>
        <div>{name}</div>
        <div className={`sprite big i${item_id}`}></div>
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
        const item_id = this.props.bag.calculate(this.state.components);
        return <div className={styles.item_entry}>
            <div className={styles.item}>
                <ItemBox item_id={item_id} name={this.props.items[item_id].name} />
            </div>
            <div className={styles.slots}>
                {this.state.components.map((_pickup, p_index) => <Pickup cont={this} index={p_index} key={p_index} />)}
            </div>
        </div>;
    }
}

export default ItemEntry;