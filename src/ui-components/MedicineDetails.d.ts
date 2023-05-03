/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, ImageProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicineDetailsOverridesProps = {
    MedicineDetails?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<FlexProps>;
    Frame?: PrimitiveOverrideProps<FlexProps>;
    close?: MyIconProps;
    "Product Name"?: PrimitiveOverrideProps<TextProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    Features29766835?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<TextProps>;
    Use?: PrimitiveOverrideProps<TextProps>;
    SideEffect?: PrimitiveOverrideProps<TextProps>;
    Features36662685?: PrimitiveOverrideProps<FlexProps>;
    Description?: PrimitiveOverrideProps<TextProps>;
    "Bottom Row"?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    "In Stock"?: PrimitiveOverrideProps<TextProps>;
    Edit?: MyIconProps;
    Save?: MyIconProps;
    Price?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MedicineDetailsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MedicineDetailsOverridesProps | undefined | null;
}>;
export default function MedicineDetails(props: MedicineDetailsProps): React.ReactElement;
