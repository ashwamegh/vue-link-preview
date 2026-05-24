export type TPreviewResponse = {
    title: string;
    description: string;
    domain: string;
    img?: string;
};
type VueLinkPreviewProps = {
    url: string;
    width?: string;
    maxWidth?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
    customDomain?: string;
    canOpenLink?: boolean;
};
declare var __VLS_1: {
    title: string;
    img: string | undefined;
    description: string;
    domain: string;
}, __VLS_3: {};
type __VLS_Slots = {} & {
    default?: (props: typeof __VLS_1) => any;
} & {
    loader?: (props: typeof __VLS_3) => any;
};
declare const __VLS_component: import("vue").DefineComponent<VueLinkPreviewProps, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClick: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<VueLinkPreviewProps> & Readonly<{
    onOnClick?: ((...args: any[]) => any) | undefined;
}>, {
    width: string;
    maxWidth: string;
    marginTop: string;
    marginBottom: string;
    marginRight: string;
    marginLeft: string;
    customDomain: string;
    canOpenLink: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithSlots<typeof __VLS_component, __VLS_Slots>;
export default _default;
type __VLS_WithSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
