/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicineCardOverridesProps = {
    MedicineCard?: PrimitiveOverrideProps<FlexProps>;
    Button36562693?: PrimitiveOverrideProps<ButtonProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Main Text"?: PrimitiveOverrideProps<FlexProps>;
    "Classic Long Sleeve T-Shirt"?: PrimitiveOverrideProps<TextProps>;
    "Information about this product"?: PrimitiveOverrideProps<TextProps>;
    "$99 USD"?: PrimitiveOverrideProps<TextProps>;
    Button29766759?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MedicineCardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MedicineCardOverridesProps | undefined | null;
}>;
export default function MedicineCard(props: MedicineCardProps): React.ReactElement;
