import type { IBoxProps, IIconProps } from '../../primitives';
import type { ICollapseProps } from '../../composites/Collapse';
import type { MutableRefObject } from 'react';

export type IAccordionProps = ICollapseProps & {
  allowMultiple?: boolean;
  allowToggle?: boolean;
  index?: number[];
  defaultIndex?: number[];
  onChange?: (index?: number[]) => void;
};
export type IAccordionItemProps = IBoxProps & {
  index?: number;
  defaultIsOpen?: boolean;
  isDisabled?: boolean;
  id?: number;
};
export type IAccordionSummaryProps = IBoxProps & {
  _expanded?: Omit<IAccordionSummaryProps, '_expanded'>;
  _disabled?: Omit<IAccordionSummaryProps, '_disabled'>;
  _hover?: Omit<IAccordionSummaryProps, '_hover'>;
};
export type IAccordionDetailsProps = ICollapseProps & {};
export type IAccordionContextProps = {
  index?: number[];
  changeHandler?: (isOpening: boolean, id: number) => void;
  AnimationProps?: any;
};
export type IAccordionItemContextProps = {
  index?: number;
  isOpen?: boolean;
  isDisabled?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};
export type IAccordionIconProps = IIconProps;

export type IAccordionComponentType = ((
  props: IAccordionProps & { ref?: MutableRefObject<any> }
) => JSX.Element) & {
  Item: React.MemoExoticComponent<
    (
      props: IAccordionItemProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Summary: React.MemoExoticComponent<
    (
      props: IAccordionSummaryProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Details: React.MemoExoticComponent<
    (
      props: IAccordionDetailsProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
  Icon: React.MemoExoticComponent<
    (
      props: IAccordionIconProps & { ref?: MutableRefObject<any> }
    ) => JSX.Element
  >;
};
