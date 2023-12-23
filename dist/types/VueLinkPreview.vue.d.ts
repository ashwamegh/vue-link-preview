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
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueLinkPreviewProps>, {
    width: string;
    maxWidth: string;
    marginTop: string;
    marginBottom: string;
    marginRight: string;
    marginLeft: string;
    customDomain: string;
    canOpenLink: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    onClick: (...args: any[]) => void;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VueLinkPreviewProps>, {
    width: string;
    maxWidth: string;
    marginTop: string;
    marginBottom: string;
    marginRight: string;
    marginLeft: string;
    customDomain: string;
    canOpenLink: boolean;
}>>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    width: string;
    maxWidth: string;
    marginTop: string;
    marginBottom: string;
    marginRight: string;
    marginLeft: string;
    customDomain: string;
    canOpenLink: boolean;
}, {}>, {
    default?(_: {
        title: string;
        img: string | undefined;
        description: string;
        domain: string;
    }): any;
    loader?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
