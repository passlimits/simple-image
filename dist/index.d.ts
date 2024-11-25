import { API, PasteEvent, ToolConfig } from '@editorjs/editorjs';

export interface SimpleImageConfig extends ToolConfig {
}
/**
 * SimpleImage Tool for the Editor.js
 * Works only with pasted image URLs and requires no server-side uploader.
 */
/**
 * Tool's input and output data format
 */
export interface SimpleImageData {
    /**
     * image URL
     */
    url: string;
    /**
     * image caption
     */
    caption: string;
    /**
     * should image be rendered with border
     */
    withBorder?: boolean;
    /**
     * should image be rendered with background
     */
    withBackground?: boolean;
    /**
     * should image be stretched to full width of container
     */
    stretched?: boolean;
}
/**
 * Represents the parameters used on the constructor inside the SimpleImage class
 */
interface SimpleImageParams {
    /**
     * previously saved data
     */
    data: SimpleImageData;
    /**
     * user config for Tool
     */
    config?: SimpleImageConfig;
    /**
     * Editor.js API
     */
    api: API;
    /**
     * read-only mode flag
     */
    readOnly: boolean;
}
/**
 * Returns image tunes config
 */
interface TuneSetting {
    /**
     * Name of the tune setting
     */
    name: string;
    /**
     * Label of the tune setting
     */
    label: string;
    /**
     * Toogle tune
     */
    toggle: boolean;
    /**
     * Function that will run on activate
     */
    onActivate: () => void;
    /**
     * Property that will set if tune setting is active
     */
    isActive: boolean;
}
export default class SimpleImage {
    /**
     * Render plugin`s main Element and fill it with saved data
     */
    /**
     * Editor.js API instance
     */
    private api;
    /**
     * Flag indicating read-only mode
     */
    private readOnly;
    /**
     * The index of the current block in the editor
     */
    private blockIndex;
    /**
     * Stores current block data internally
     */
    private _data;
    /**
     * CSS classes used for styling the tool
     */
    private CSS;
    /**
     * Nodes cache
     */
    private nodes;
    /**
     * Represents an array of tunes
     */
    private tunes;
    constructor({ data, config, api, readOnly }: SimpleImageParams);
    /**
     * Creates a Block:
     *  1) Show preloader
     *  2) Start to load an image
     *  3) After loading, append image and caption input
     *
     * @public
     */
    render(): HTMLElement;
    /**
     * @public
     * @param {Element} blockContent - Tool's wrapper
     * @returns {SimpleImageData}
     */
    save(blockContent: Element): SimpleImageData;
    /**
     * Sanitizer rules
     */
    static get sanitize(): {
        url: {};
        withBorder: {};
        withBackground: {};
        stretched: {};
        caption: {
            br: boolean;
        };
    };
    /**
     * Notify core that read-only mode is suppoorted
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Read pasted image and convert it to base64
     *
     * @static
     * @param {File} file
     * @returns {Promise<SimpleImageData>}
     */
    onDropHandler(file: File): Promise<SimpleImageData>;
    /**
     * On paste callback that is fired from Editor.
     *
     * @param {PasteEvent} event - event with pasted config
     */
    onPaste(event: PasteEvent): void;
    /**
     * Returns image data
     *
     * @returns {SimpleImageData}
     */
    get data(): SimpleImageData;
    /**
     * Set image data and update the view
     *
     * @param {SimpleImageData} data
     */
    set data(data: SimpleImageData);
    /**
     * Specify paste substitutes
     *
     * @see {@link ../../../docs/tools.md#paste-handling}
     * @public
     */
    static get pasteConfig(): {
        patterns: {
            image: RegExp;
        };
        tags: {
            img: {
                src: boolean;
            };
        }[];
        files: {
            mimeTypes: string[];
        };
    };
    renderSettings(): Array<TuneSetting>;
    /**
     * Helper for making Elements with attributes
     *
     * @param  {string} tagName           - new Element tag name
     * @param  {Array|string} classNames  - list or name of CSS classname(s)
     * @param  {object} attributes        - any attributes
     * @returns {Element}
     */
    _make(tagName: string, classNames?: string[] | string, attributes?: object): HTMLElement | HTMLImageElement;
    /**
     * Click on the Settings Button
     *
     * @private
     * @param tune
     */
    _toggleTune(tune: string): void;
    /**
     * Add specified class corresponds with activated tunes
     *
     * @private
     */
    _acceptTuneView(): void;
}
export {};
