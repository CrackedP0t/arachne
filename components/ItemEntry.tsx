import { BagOfCrafting } from 'bagofcrafting';
import * as React from 'react';

import styles from "./ItemEntry.module.css";

function arrRotateLeft<T>(a: Array<T>): Array<T> {
    let i = a.shift();
    if (i) a.push(i);
    return a;
}

function arrRotateRight<T>(a: Array<T>): Array<T> {
    let i = a.pop();
    if (i) a.unshift(i);
    return a;
}

type Props = {
    bag: BagOfCrafting,
    components: number[],
    items: any
}

type State = {
    components: number[],
    disabled: Map<number, boolean>
}

const pickup_names: Array<string> = [
    "Heart", "Soul Heart", "Black Heart", "Eternal Heart", "Gold Heart", "Bone Heart", "Rotten Heart",
    "Penny", "Nickel", "Dime", "Lucky Penny",
    "Key", "Golden Key", "Charged Key",
    "Bomb", "Golden Bomb", "Giga Bomb",
    "Micro Battery", "Lil Battery", "Mega Battery",
    "Card", "Pill", "Rune", "Dice Shard", "Cracked Key"
];

const Pickup = ({ name, p }: { name: string, p: number }) => (
    <div className={styles.pickup} title={name} style={{
        backgroundPositionX: (p) % 8 * -32,
        backgroundPositionY: Math.floor((p) / 8) * -32
    }}></div>);

const Slot = ({ cont, pickup_id, index }: { cont: ItemEntry, pickup_id: number, index: number }) => {
    return (
        <div className={styles.slot}>
            <div className={styles.threads}>
                {pickup_names.map((name, p) => {
                    p = p + 1;
                    let components = Array.from(cont.state.components);
                    components[index] = p;
                    let item_id = cont.props.bag.calculate(components);
                    let item_name = cont.props.items[item_id].name;
                    return cont.state.disabled.get(p) ? null :
                        <div key={p} className={`${styles.thread} ${p == pickup_id ? styles.selected : ""}`} onClick={_ev =>
                            cont.setState((state: State, _props: Props) => {
                                let comps = Array.from(state.components);
                                comps[index] = p;
                                return { components: comps }
                            })}>
                            <Pickup name={name} p={p} />
                            ⇒
                            <div className={`sprite i${item_id}`} title={item_name}></div>
                        </div>;
                })}
            </div>
        </div>
    );
};

const ItemBox = ({ item_id, name }: { item_id: number, name: string }) => (
    <div>
        <div>{name}</div>
        <div className={`sprite big i${item_id}`}></div>
    </div>
);

export default class ItemEntry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            components: props.components,
            disabled: new Map()
        };
    }
    render() {
        const item_id = this.props.bag.calculate(this.state.components);
        return <div className={styles.item_entry}>
            <div className={styles.item}>
                <ItemBox item_id={item_id} name={this.props.items[item_id].name} />
                <button onClick={_ev => {
                    this.setState((state, _props) => {
                        return { components: arrRotateLeft(Array.from(state.components)) };
                    })
                }}>↶</button>
                <button onClick={_ev => {
                    this.setState((state, _props) => {
                        return { components: arrRotateRight(Array.from(state.components)) };
                    })
                }}>↷</button>
            </div>
            <div className={styles.slots}>
                {this.state.components.map((pickup_id, p_index) => <Slot cont={this} pickup_id={pickup_id} index={p_index} key={p_index} />)}
            </div>
            <div className={styles.toggles}>
                {pickup_names.map((name, p) => <div className={styles.toggle}
                    style={{ backgroundColor: this.state.disabled.get(p + 1) ? "black" : "gray" }}
                    onClick={ev => this.setState((state, _props) => {
                        let disabled = new Map(state.disabled);
                        disabled.set(p + 1, !disabled.get(p + 1));
                        console.log(disabled);
                        return { disabled: disabled };
                    })}>
                    <Pickup p={p + 1} name={name} key={p} />
                </div>)}
            </div>
        </div>;
    }
}