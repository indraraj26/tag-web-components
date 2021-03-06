/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TagComponent {
        "closeIcon"?: boolean;
        "name": string;
        "type"?: string;
    }
}
declare global {
    interface HTMLTagComponentElement extends Components.TagComponent, HTMLStencilElement {
    }
    var HTMLTagComponentElement: {
        prototype: HTMLTagComponentElement;
        new (): HTMLTagComponentElement;
    };
    interface HTMLElementTagNameMap {
        "tag-component": HTMLTagComponentElement;
    }
}
declare namespace LocalJSX {
    interface TagComponent {
        "closeIcon"?: boolean;
        "name": string;
        "onClose"?: (event: CustomEvent<any>) => void;
        "type"?: string;
    }
    interface IntrinsicElements {
        "tag-component": TagComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tag-component": LocalJSX.TagComponent & JSXBase.HTMLAttributes<HTMLTagComponentElement>;
        }
    }
}
