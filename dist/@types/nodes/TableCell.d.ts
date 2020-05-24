import { Plugin } from "prosemirror-state";
import Node from "./Node";
export default class TableCell extends Node {
    get name(): string;
    get schema(): {
        content: string;
        tableRole: string;
        isolating: boolean;
        parseDOM: {
            tag: string;
        }[];
        toDOM(node: any): (string | number | {
            style: string;
        } | {
            style?: undefined;
        })[];
        attrs: {
            colspan: {
                default: number;
            };
            rowspan: {
                default: number;
            };
            alignment: {
                default: any;
            };
        };
    };
    toMarkdown(state: any, node: any): void;
    parseMarkdown(): {
        block: string;
        getAttrs: (tok: any) => {
            alignment: any;
        };
    };
    get plugins(): Plugin<any, any>[];
}
//# sourceMappingURL=TableCell.d.ts.map