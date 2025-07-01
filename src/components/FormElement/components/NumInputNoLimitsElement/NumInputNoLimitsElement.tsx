import { Button, InlineField, Input } from '@grafana/ui';
import React from 'react';

import { TEST_IDS } from '@/constants';
import { FormElementByType, FormElementType, LocalFormElement } from '@/types';
import { applyLabelStyles, applyWidth, formatNumberValue } from '@/utils';

/**
 * Properties
 */
interface Props {
  /**
   * Element
   *
   * @type {FormElementByType<LocalFormElement, FormElementType.NUM_INPUT_NO_LIMITS>}
   */
  element: FormElementByType<LocalFormElement, FormElementType.NUM_INPUT_NO_LIMITS>;

  /**
   * On Change
   */
  onChange: <T extends LocalFormElement>(element: T) => void;

  /**
   * Highlight Class
   */
  highlightClass: (element: LocalFormElement) => string;
}

/**
 * Num Input No Limits Element
 */
export const NumInputNoLimitsElement: React.FC<Props> = ({ element, onChange, highlightClass }) => {
  const handleValueChange = (newValue: number) => {
    onChange<typeof element>({
      ...element,
      value: newValue,
    });
  };

  const decreaseValue = () => {
    const currentValue = parseFloat(String(element.value)) || 0;
    handleValueChange(Math.round((currentValue - 0.1) * 10) / 10);
  };

  const increaseValue = () => {
    const currentValue = parseFloat(String(element.value)) || 0;
    handleValueChange(Math.round((currentValue + 0.1) * 10) / 10);
  };

  return (
    <InlineField
      label={element.title}
      grow={!element.width}
      labelWidth={applyWidth(element.labelWidth)}
      tooltip={element.tooltip}
      transparent={!element.title}
      disabled={element.disabled}
      className={applyLabelStyles(element.labelBackground, element.labelColor)}
    >
      <div style={{ display: 'flex', alignItems: 'stretch' }}>
        <Button
          variant="secondary"
          size="sm"
          onClick={decreaseValue}
          disabled={element.disabled}
          style={{ 
            borderTopRightRadius: 0, 
            borderBottomRightRadius: 0,
            minHeight: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          -
        </Button>
        <Input
          value={formatNumberValue(element.value)}
          onChange={(event) => {
            const value = parseFloat((event.target as HTMLInputElement).value) || 0;
            handleValueChange(value);
          }}
          type="number"
          className={highlightClass(element)}
          width={applyWidth(element.width)}
          data-testid={TEST_IDS.formElements.fieldNumInputNoLimits}
          style={{ 
            backgroundColor: 'red',
            borderRadius: 0,
            borderLeft: 'none',
            borderRight: 'none'
          }}
        />
        <Button
          variant="secondary"
          size="sm"
          onClick={increaseValue}
          disabled={element.disabled}
          style={{ 
            borderTopLeftRadius: 0, 
            borderBottomLeftRadius: 0,
            minHeight: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          +
        </Button>
      </div>
    </InlineField>
  );
};
