import * as React from "react";
import { EditorState, Plugin } from "prosemirror-state";
import { MarkdownParser, MarkdownSerializer } from "prosemirror-markdown";
import { EditorView } from "prosemirror-view";
import { Schema, NodeSpec, MarkSpec } from "prosemirror-model";
import { InputRule } from "prosemirror-inputrules";
import { SearchResult } from "./components/LinkEditor";
import { EmbedDescriptor } from "./types";
import Tooltip from "./components/Tooltip";
import Extension from "./lib/Extension";
import ExtensionManager from "./lib/ExtensionManager";
import ComponentView from "./lib/ComponentView";
export { schema, parser, serializer } from "./server";
export declare const theme: {
    background: string;
    text: string;
    code: string;
    cursor: string;
    divider: string;
    toolbarBackground: string;
    toolbarInput: string;
    toolbarItem: string;
    tableDivider: string;
    tableSelected: string;
    tableSelectedBackground: string;
    quote: string;
    codeBackground: string;
    codeBorder: string;
    horizontalRule: string;
    imageErrorBackground: string;
    fontFamily: string;
    fontFamilyMono: string;
    fontWeight: number;
    zIndex: number;
    link: string;
    placeholder: string;
    textSecondary: string;
    textLight: string;
    textHighlight: string;
    selected: string;
    codeComment: string;
    codePunctuation: string;
    codeNumber: string;
    codeProperty: string;
    codeTag: string;
    codeString: string;
    codeSelector: string;
    codeAttr: string;
    codeEntity: string;
    codeKeyword: string;
    codeFunction: string;
    codeStatement: string;
    codePlaceholder: string;
    codeInserted: string;
    codeImportant: string;
    blockToolbarBackground: string;
    blockToolbarTrigger: string;
    blockToolbarTriggerIcon: string;
    blockToolbarItem: string;
    blockToolbarText: string;
    blockToolbarHoverBackground: string;
    blockToolbarDivider: string;
    almostBlack: string;
    lightBlack: string;
    almostWhite: string;
    white: string;
    white10: string;
    black: string;
    black10: string;
    primary: string;
    greyLight: string;
    grey: string;
    greyMid: string;
    greyDark: string;
};
export { Extension };
export declare type Props = {
    id?: string;
    value?: string;
    defaultValue: string;
    jsonStrValue: boolean;
    placeholder: string;
    extensions: Extension[];
    autoFocus?: boolean;
    readOnly?: boolean;
    dark?: boolean;
    theme?: typeof theme;
    headingsOffset?: number;
    uploadImage?: (file: File) => Promise<string>;
    onSave?: ({ done: boolean, doc: ProsemirrorNode }: {
        done: any;
        doc: any;
    }) => void;
    onCancel?: () => void;
    onChange: (value: (jsonStrVal: boolean) => string) => void;
    onImageUploadStart?: () => void;
    onImageUploadStop?: () => void;
    onSearchLink?: (term: string) => Promise<SearchResult[]>;
    onClickLink: (href: string) => void;
    onClickHashtag?: (tag: string) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLDivElement>) => void;
    embeds: EmbedDescriptor[];
    onShowToast?: (message: string) => void;
    tooltip: typeof React.Component;
    className?: string;
    style?: Record<string, string>;
};
declare type State = {
    blockMenuOpen: boolean;
    blockMenuSearch: string;
};
declare class RichMarkdownEditor extends React.PureComponent<Props, State> {
    static defaultProps: {
        defaultValue: string;
        jsonStrValue: boolean;
        placeholder: string;
        onImageUploadStart: () => void;
        onImageUploadStop: () => void;
        onClickLink: (href: any) => void;
        embeds: any[];
        extensions: any[];
        tooltip: typeof Tooltip;
    };
    state: {
        blockMenuOpen: boolean;
        blockMenuSearch: string;
    };
    extensions: ExtensionManager;
    element?: HTMLElement;
    view: EditorView;
    schema: Schema;
    serializer: MarkdownSerializer;
    parser: MarkdownParser;
    plugins: Plugin[];
    keymaps: Plugin[];
    inputRules: InputRule[];
    nodeViews: {
        [name: string]: (node: any, view: any, getPos: any, decorations: any) => ComponentView;
    };
    nodes: {
        [name: string]: NodeSpec;
    };
    marks: {
        [name: string]: MarkSpec;
    };
    commands: Record<string, any>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Props): void;
    init(): void;
    createExtensions(): ExtensionManager;
    createPlugins(): any[];
    createKeymaps(): Plugin<any, any>[];
    createInputRules(): any[];
    createNodeViews(): {};
    createCommands(): {};
    createNodes(): {};
    createMarks(): {};
    createSchema(): Schema<string, string>;
    createSerializer(): import("./lib/markdown/serializer").MarkdownSerializer;
    createParser(): MarkdownParser<any>;
    createState(value?: string): EditorState<any>;
    createView(): EditorView<any>;
    scrollToAnchor(): void;
    value: (jsonStrVal: boolean) => string;
    handleChange: () => void;
    handleSave: () => void;
    handleSaveAndExit: () => void;
    handleOpenBlockMenu: (search: string) => void;
    handleCloseBlockMenu: () => void;
    handleSelectRow: (index: number, state: EditorState<any>) => void;
    handleSelectColumn: (index: number, state: EditorState<any>) => void;
    handleSelectTable: (state: EditorState<any>) => void;
    focusAtStart: () => void;
    focusAtEnd: () => void;
    getHeadings: () => any[];
    render: () => JSX.Element;
}
export default RichMarkdownEditor;
//# sourceMappingURL=index.d.ts.map