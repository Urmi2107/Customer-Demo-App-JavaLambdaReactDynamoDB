/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MedicineFormOverridesProps = {
    MedicineForm?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    "Add/Update Medicine"?: PrimitiveOverrideProps<TextProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    Divider29766917?: PrimitiveOverrideProps<DividerProps>;
    Profile?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField29766922?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766923?: PrimitiveOverrideProps<TextFieldProps>;
    TextField29766924?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782717?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782724?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782731?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782738?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782745?: PrimitiveOverrideProps<TextFieldProps>;
    TextField36782752?: PrimitiveOverrideProps<TextFieldProps>;
    Divider29766925?: PrimitiveOverrideProps<DividerProps>;
    "Frame 418"?: PrimitiveOverrideProps<FlexProps>;
    Button36782759?: PrimitiveOverrideProps<ButtonProps>;
    Button29766926?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type MedicineFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: MedicineFormOverridesProps | undefined | null;
}>;
export default function MedicineForm(props: MedicineFormProps): React.ReactElement;
