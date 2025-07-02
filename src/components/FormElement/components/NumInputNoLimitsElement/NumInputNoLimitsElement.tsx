import { Button, InlineField, Input, useStyles2 } from '@grafana/ui';
import React from 'react';

import { TEST_IDS } from '@/constants';
import { FormElementByType, FormElementType, LocalFormElement } from '@/types';
import { applyLabelStyles, applyWidth, formatNumberValue } from '@/utils';

import { getStyles } from './NumInputNoLimitsElement.styles';

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
  const styles = useStyles2(getStyles);

  const handleValueChange = (newValue: number) => {
    onChange<typeof element>({
      ...element,
      value: newValue,
    });
  };

  const decreaseValue = () => {
    const currentValue = parseFloat(String(element.value)) || 0;
    const stepValue = element.step || 0.1;
    const decimalPlaces = (stepValue.toString().split('.')[1] || '').length;
    const multiplier = Math.pow(10, decimalPlaces);
    handleValueChange(Math.round((currentValue - stepValue) * multiplier) / multiplier);
  };

  const increaseValue = () => {
    const currentValue = parseFloat(String(element.value)) || 0;
    const stepValue = element.step || 0.1;
    const decimalPlaces = (stepValue.toString().split('.')[1] || '').length;
    const multiplier = Math.pow(10, decimalPlaces);
    handleValueChange(Math.round((currentValue + stepValue) * multiplier) / multiplier);
  };

  // Check if value is out of range
  const currentValue = parseFloat(String(element.value)) || 0;
  const isOutOfRange = 
    (element.min !== undefined && currentValue < element.min) ||
    (element.max !== undefined && currentValue > element.max);

  const isVertical = element.verticalButtons || false;

  return (
    <InlineField
      label={element.title}
      grow={!element.width}
      labelWidth={applyWidth(element.labelWidth)}
      tooltip={element.tooltip}
      transparent={!element.title}
      disabled={element.disabled}
      className={`${applyLabelStyles(element.labelBackground, element.labelColor)} ${
        isVertical ? styles.inlineFieldVertical : ''
      }`}
    >
      <div className={isVertical ? styles.containerVertical : styles.container}>
        <Button
          variant="secondary"
          size="sm"
          onClick={isVertical ? increaseValue : decreaseValue}
          disabled={element.disabled}
          className={isVertical ? styles.decreaseButtonVertical : styles.decreaseButton}
        >
          {isVertical ? '▲' : '-'}
        </Button>
        <Input
          value={formatNumberValue(element.value)}
          onChange={(event) => {
            const value = parseFloat((event.target as HTMLInputElement).value) || 0;
            handleValueChange(value);
          }}
          type="number"
          className={`${highlightClass(element)} ${
            isVertical 
              ? (isOutOfRange ? `${styles.inputVertical} ${styles.inputOutOfRangeVertical}` : styles.inputVertical)
              : (isOutOfRange ? `${styles.input} ${styles.inputOutOfRange}` : styles.input)
          }`}
          width={applyWidth(element.width)}
          data-testid={TEST_IDS.formElements.fieldNumInputNoLimits}
        />
        <Button
          variant="secondary"
          size="sm"
          onClick={isVertical ? decreaseValue : increaseValue}
          disabled={element.disabled}
          className={isVertical ? styles.increaseButtonVertical : styles.increaseButton}
        >
          {isVertical ? '▼' : '+'}
        </Button>
      </div>
    </InlineField>
  );
};
